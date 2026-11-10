import {
  AuthTokenDetails,
  PostDetails,
  PostResponse,
  SocialProvider,
} from '@gitroom/nestjs-libraries/integrations/social/social.integrations.interface';
import { makeSecureId } from '@gitroom/nestjs-libraries/services/make.secure.id';
import {
  BadBody,
  SocialAbstract,
} from '@gitroom/nestjs-libraries/integrations/social.abstract';
import dayjs from 'dayjs';
import { Integration } from '@prisma/client';
import striptags from 'striptags';
import { WhatsappDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/whatsapp.dto';

const SESSION = 'postiz';

type WahaSession = {
  name?: string;
  status?: string;
  me?: { id?: string; pushName?: string };
};

type WahaGroup = {
  id: string;
  subject?: string;
  name?: string;
  participants?: { id: string; isAdmin?: boolean }[];
};

export class WhatsappProvider extends SocialAbstract implements SocialProvider {
  // One WhatsApp send at a time across the worker pool, plus a delay in post()
  // so scheduled posts to many groups do not fire in the same second.
  override maxConcurrentJob = 1;
  identifier = 'whatsapp';
  name = 'WhatsApp';
  isBetweenSteps = false;
  isWeb3 = true;
  scopes = [] as string[];
  editor = 'normal' as const;
  dto = WhatsappDto;

  maxLength() {
    return 4096;
  }

  private baseUrl() {
    const url = (process.env.WAHA_API_BASE_URL || '').replace(/\/+$/, '');
    if (!url) {
      throw new Error('WAHA_API_BASE_URL is not set');
    }
    return url;
  }

  private apiKey() {
    const key = process.env.WAHA_API_KEY || '';
    if (!key) {
      throw new Error('WAHA_API_KEY is not set');
    }
    return key;
  }

  private mentionCap() {
    const raw = Number(process.env.WHATSAPP_MENTION_CAP || 50);
    return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 50;
  }

  // Internal WAHA only. Do not use SocialAbstract.fetch: SSRF guard blocks it.
  private async waha(
    path: string,
    init: RequestInit = {}
  ): Promise<Response> {
    const headers = new Headers(init.headers || {});
    headers.set('X-Api-Key', this.apiKey());
    if (init.body && !headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }
    return fetch(`${this.baseUrl()}${path}`, { ...init, headers });
  }

  private async wahaJson<T>(path: string, init: RequestInit = {}): Promise<T> {
    const res = await this.waha(path, init);
    const text = await res.text();
    if (!res.ok) {
      throw new Error(`WAHA ${res.status}: ${text.slice(0, 400)}`);
    }
    if (!text) {
      return {} as T;
    }
    return JSON.parse(text) as T;
  }

  async refreshToken(): Promise<AuthTokenDetails> {
    return {
      refreshToken: '',
      expiresIn: 0,
      accessToken: '',
      id: '',
      name: '',
      picture: '',
      username: '',
    };
  }

  async generateAuthUrl() {
    const state = makeSecureId(17);
    return {
      url: state,
      codeVerifier: makeSecureId(10),
      state,
    };
  }

  private sessionConfig() {
    // NOWEB returns empty groups/chats unless the local store is on.
    return {
      webhooks: [] as any[],
      noweb: {
        store: {
          enabled: true,
          fullSync: false,
        },
      },
    };
  }

  async ensureSession() {
    let session: WahaSession | null = null;
    try {
      session = await this.wahaJson<WahaSession>(`/api/sessions/${SESSION}`);
    } catch {
      session = null;
    }

    if (!session?.name) {
      await this.wahaJson('/api/sessions', {
        method: 'POST',
        body: JSON.stringify({
          name: SESSION,
          start: true,
          config: this.sessionConfig(),
        }),
      });
      return this.wahaJson<WahaSession>(`/api/sessions/${SESSION}`);
    }

    // Never PUT on every poll: that restarts the session and leaves STARTING.
    if (
      session.status &&
      !['WORKING', 'SCAN_QR_CODE', 'STARTING'].includes(session.status)
    ) {
      await this.waha(`/api/sessions/${SESSION}/start`, { method: 'POST' });
      session = await this.wahaJson<WahaSession>(`/api/sessions/${SESSION}`);
    }

    return session;
  }

  async getQr(): Promise<{ status: string; qr?: string }> {
    const session = await this.ensureSession();
    const status = session.status || 'UNKNOWN';
    if (status === 'WORKING') {
      return { status };
    }

    // QR exists only after SCAN_QR_CODE. STARTING has no image yet.
    if (status !== 'SCAN_QR_CODE') {
      return { status };
    }

    const res = await this.waha(`/api/${SESSION}/auth/qr?format=image`, {
      headers: { Accept: 'image/png' },
    });
    if (!res.ok) {
      return { status };
    }
    const buf = Buffer.from(await res.arrayBuffer());
    return {
      status,
      qr: `data:image/png;base64,${buf.toString('base64')}`,
    };
  }

  async getStatus() {
    const session = await this.ensureSession();
    return {
      status: session.status || 'UNKNOWN',
      me: session.me || null,
    };
  }

  async resetSession() {
    await this.waha(`/api/sessions/${SESSION}`, {
      method: 'DELETE',
    }).catch(() => undefined);
    return this.ensureSession();
  }

  private asGroupList(raw: any): WahaGroup[] {
    const list = Array.isArray(raw)
      ? raw
      : Array.isArray(raw?.data)
      ? raw.data
      : Array.isArray(raw?.groups)
      ? raw.groups
      : [];
    return list
      .map((g: any) => ({
        id: String(g?.id || g?.jid || g?.chatId || ''),
        subject: g?.subject || g?.name || g?.notify || '',
        name: g?.name || g?.subject || g?.notify || '',
      }))
      .filter((g: WahaGroup) => !!g.id);
  }

  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async fetchGroupsOnce(): Promise<WahaGroup[]> {
    // Do not call /groups/refresh on every list: it races the store sync and
    // can empty the UI right after WhatsApp finishes syncing.
    try {
      const raw = await this.wahaJson<any>(
        `/api/${SESSION}/groups?exclude=participants`
      );
      const groups = this.asGroupList(raw);
      if (groups.length) {
        return groups;
      }
    } catch {
      // fall through
    }

    try {
      const chats = await this.wahaJson<any>(`/api/${SESSION}/chats?limit=500`);
      return this.asGroupList(chats).filter((g) => g.id.endsWith('@g.us'));
    } catch {
      return [];
    }
  }

  async listGroups(): Promise<{ id: string; name: string }[]> {
    const session = await this.ensureSession();
    if (session.status !== 'WORKING') {
      return [];
    }

    // Right after QR, NOWEB store still syncs. A couple of short retries
    // only — the UI keeps polling Refresh. Never delete the session here.
    let groups = await this.fetchGroupsOnce();
    if (!groups.length) {
      await this.sleep(1500);
      groups = await this.fetchGroupsOnce();
    }

    return groups.map((g) => ({
      id: g.id,
      name: g.subject || g.name || g.id,
    }));
  }

  private normalizeJid(raw: unknown): string {
    if (typeof raw === 'string') {
      return raw.trim();
    }
    if (raw && typeof raw === 'object') {
      const obj = raw as Record<string, unknown>;
      for (const key of ['_serialized', 'id', 'jid', 'user']) {
        const value = obj[key];
        if (typeof value === 'string' && value.trim()) {
          return value.trim();
        }
      }
    }
    return '';
  }

  private async groupParticipants(chatId: string): Promise<string[]> {
    try {
      const group = await this.wahaJson<WahaGroup>(
        `/api/${SESSION}/groups/${encodeURIComponent(chatId)}`
      );
      // WAHA sometimes returns participant id as object; toJID needs a string.
      return (group.participants || [])
        .map((p) => this.normalizeJid(p?.id ?? p))
        .filter((id) => id.includes('@'))
        .slice(0, this.mentionCap());
    } catch {
      return [];
    }
  }

  // WAHA returns a CDN/proxy URL; Postiz uploadSimple cannot reach the
  // internal WAHA host, so we download here and hand back a data URL.
  async groupPictureDataUrl(chatId: string): Promise<string> {
    const encoded = encodeURIComponent(chatId);
    const paths = [
      `/api/${SESSION}/groups/${encoded}/picture?refresh=false`,
      `/api/${SESSION}/chats/${encoded}/picture?refresh=false`,
    ];

    for (const path of paths) {
      try {
        const pic = await this.wahaJson<{ url?: string | null }>(path);
        if (!pic?.url) {
          continue;
        }
        const dataUrl = await this.downloadAsDataUrl(pic.url);
        if (dataUrl) {
          return dataUrl;
        }
      } catch {
        // try next endpoint
      }
    }
    return '';
  }

  private async downloadAsDataUrl(url: string): Promise<string> {
    try {
      const base = this.baseUrl();
      let res: Response;
      if (url.startsWith(base) || url.startsWith('/')) {
        const path = url.startsWith(base) ? url.slice(base.length) : url;
        res = await this.waha(path);
      } else {
        res = await fetch(url);
      }
      if (!res.ok) {
        return '';
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (!buf.length) {
        return '';
      }
      const header = (res.headers.get('content-type') || '')
        .split(';')[0]
        .trim()
        .toLowerCase();
      const mime =
        header.startsWith('image/') && header !== 'image/*'
          ? header
          : 'image/jpeg';
      return `data:${mime};base64,${buf.toString('base64')}`;
    } catch {
      return '';
    }
  }

  async authenticate(params: {
    code: string;
    codeVerifier: string;
    refresh?: string;
  }) {
    const chatId = decodeURIComponent(params.code || '').trim();
    if (!chatId) {
      return 'No group selected';
    }

    const session = await this.ensureSession();
    if (session.status !== 'WORKING') {
      return 'WhatsApp is not connected. Scan the QR code first.';
    }

    const groups = await this.listGroups();
    const group = groups.find((g) => g.id === chatId);
    if (!group && !chatId.endsWith('@g.us')) {
      return 'Group not found. Refresh the list and try again.';
    }

    const picture = await this.groupPictureDataUrl(chatId);

    return {
      id: chatId,
      name: group?.name || chatId,
      accessToken: chatId,
      refreshToken: '',
      expiresIn: dayjs().add(200, 'year').unix() - dayjs().unix(),
      picture,
      username: session.me?.pushName || session.me?.id || 'whatsapp',
    };
  }

  private plainText(message: string) {
    return striptags(message || '')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+\n/g, '\n')
      .trim();
  }

  private extractHttpUrl(text: string): string | null {
    const match = text.match(/https?:\/\/[^\s<>"']+/i);
    return match ? match[0].replace(/[),.\]]+$/, '') : null;
  }

  private isYoutubeUrl(url: string): boolean {
    try {
      const host = new URL(url).hostname.toLowerCase();
      return (
        host === 'youtu.be' ||
        host.endsWith('.youtu.be') ||
        host === 'youtube.com' ||
        host.endsWith('.youtube.com')
      );
    } catch {
      return false;
    }
  }

  // YouTube often blocks WAHA's automatic scrape; oEmbed is the public metadata API.
  private async youtubeOEmbed(url: string): Promise<{
    title: string;
    description: string;
    imageUrl: string;
  } | null> {
    try {
      const res = await fetch(
        `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(
          url
        )}`,
        { signal: AbortSignal.timeout(8000) }
      );
      if (!res.ok) {
        return null;
      }
      const data = (await res.json()) as {
        title?: string;
        author_name?: string;
        thumbnail_url?: string;
      };
      if (!data.title || !data.thumbnail_url) {
        return null;
      }
      return {
        title: data.title,
        description: data.author_name || 'YouTube',
        imageUrl: data.thumbnail_url,
      };
    } catch {
      return null;
    }
  }

  private async sendTextMessage(
    chatId: string,
    text: string,
    mentions: string[]
  ) {
    const mentionPayload = mentions.length ? { mentions } : {};
    const url = this.extractHttpUrl(text);

    if (url && this.isYoutubeUrl(url)) {
      const preview = await this.youtubeOEmbed(url);
      if (preview) {
        try {
          return await this.wahaJson<any>('/api/send/link-custom-preview', {
            method: 'POST',
            body: JSON.stringify({
              session: SESSION,
              chatId,
              text,
              linkPreviewHighQuality: true,
              preview: {
                url,
                title: preview.title,
                description: preview.description,
                image: { url: preview.imageUrl },
              },
              ...mentionPayload,
            }),
          });
        } catch {
          // Fall back to auto preview below.
        }
      }
    }

    return this.wahaJson<any>('/api/sendText', {
      method: 'POST',
      body: JSON.stringify({
        session: SESSION,
        chatId,
        text,
        linkPreview: true,
        linkPreviewHighQuality: true,
        ...mentionPayload,
      }),
    });
  }

  private publicMediaUrl(path: string) {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    const base = (process.env.FRONTEND_URL || '').replace(/\/+$/, '');
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
  }

  // updateMedia() hardcodes type:'image' for every attachment, so Telegram
  // sniffs mime and we must sniff the path/url here before calling WAHA.
  private isVideoMedia(item: {
    type?: string;
    path?: string;
    url?: string;
  }) {
    if (item.type === 'video') {
      return true;
    }
    const src = String(item.url || item.path || '')
      .toLowerCase()
      .split('?')[0];
    return /\.(mp4|mov|webm|m4v|mkv)$/.test(src);
  }

  private mediaPublicUrl(item: { path?: string; url?: string }) {
    const candidate = String(item.url || item.path || '');
    if (/^https?:\/\//i.test(candidate)) {
      return candidate;
    }
    return this.publicMediaUrl(candidate);
  }

  private mediaFileMeta(
    item: { path?: string; url?: string },
    video: boolean
  ) {
    const src = String(item.url || item.path || '');
    const filename =
      src.split(/[/\\]/).pop()?.split('?')[0] ||
      (video ? 'video.mp4' : 'image.jpg');
    const lower = filename.toLowerCase();
    let mimetype = video ? 'video/mp4' : 'image/jpeg';
    if (lower.endsWith('.png')) mimetype = 'image/png';
    else if (lower.endsWith('.webp')) mimetype = 'image/webp';
    else if (lower.endsWith('.gif')) mimetype = 'image/gif';
    else if (lower.endsWith('.webm')) mimetype = 'video/webm';
    else if (lower.endsWith('.mov')) mimetype = 'video/quicktime';
    return { filename, mimetype };
  }

  private sendDelayMs() {
    const raw = Number(process.env.WHATSAPP_SEND_DELAY_MS || 12000);
    const base = Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : 12000;
    // Small jitter so parallel schedules do not align on the same second.
    const jitter = Math.floor(Math.random() * 4000);
    return base + jitter;
  }

  async post(
    id: string,
    accessToken: string,
    postDetails: PostDetails<WhatsappDto>[],
    _integration: Integration
  ): Promise<PostResponse[]> {
    // Cadence between groups / scheduled sends.
    await this.sleep(this.sendDelayMs());

    const [first] = postDetails;
    const chatId = accessToken || id;
    const text = this.plainText(first.message || '');
    const media = first.media || [];
    // WAHA: mentions:["all"] notifies the group without @name in the text.
    // Listing JIDs without @digits in the body does not force the ping.
    const wantMention = first.settings?.invisibleMention !== false;
    const mentions = wantMention ? (['all'] as string[]) : [];

    try {
      if (media.length === 0) {
        if (!text) {
          throw new BadBody(
            'whatsapp-error',
            '{}',
            Buffer.from('{}'),
            'WhatsApp post needs text or media'
          );
        }
        const sent = await this.sendTextMessage(chatId, text, mentions);
        return [
          {
            id: first.id,
            postId: String(sent?.id || sent?.key?.id || Date.now()),
            releaseURL: '',
            status: 'completed',
          },
        ];
      }

      const responses: PostResponse[] = [];
      for (let i = 0; i < media.length; i++) {
        const item = media[i] as {
          type?: string;
          path: string;
          url?: string;
        };
        const caption = i === 0 ? text : '';
        const url = this.mediaPublicUrl(item);
        const video = this.isVideoMedia(item);
        const { filename, mimetype } = this.mediaFileMeta(item, video);
        const endpoint = video ? '/api/sendVideo' : '/api/sendImage';
        const sent = await this.wahaJson<any>(endpoint, {
          method: 'POST',
          body: JSON.stringify({
            session: SESSION,
            chatId,
            caption,
            file: { url, filename, mimetype },
            ...(video ? { convert: true } : {}),
            ...(mentions.length && i === 0 ? { mentions } : {}),
          }),
        });
        responses.push({
          id: first.id,
          postId: String(sent?.id || sent?.key?.id || `${Date.now()}-${i}`),
          releaseURL: '',
          status: 'completed',
        });
      }
      return responses;
    } catch (err: any) {
      const message = err?.message || 'WhatsApp send failed';
      throw new BadBody(
        'whatsapp-error',
        message,
        Buffer.from(message),
        message
      );
    }
  }
}
