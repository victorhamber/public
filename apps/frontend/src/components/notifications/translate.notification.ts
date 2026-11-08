// Maps known English in-app notification templates to Portuguese.
// Older rows stay English in the DB; we only rewrite on display.

const RULES: Array<{ re: RegExp; to: (...m: string[]) => string }> = [
  {
    // URL after "at" may be empty when releaseURL is blank (WhatsApp groups).
    re: /^Your post has been published on ([^\s]+)(?: at(?:\s+(.*))?)?$/i,
    to: (_a, provider, url) =>
      url?.trim()
        ? `Sua publicação foi publicada no ${provider} em ${url.trim()}`
        : `Sua publicação foi publicada no ${provider}`,
  },
  {
    re: /^We couldn't post to ([^\s]+) for (.+) because you need to reconnect it\. Please enable it and try again\.$/i,
    to: (_a, provider, name) =>
      `Não foi possível publicar no ${provider} (${name}) porque é preciso reconectar o canal. Ative e tente de novo.`,
  },
  {
    re: /^We couldn't post to ([^\s]+) for (.+) because it's disabled\. Please enable it and try again\.$/i,
    to: (_a, provider, name) =>
      `Não foi possível publicar no ${provider} (${name}) porque o canal está desativado. Ative e tente de novo.`,
  },
  {
    re: /^We couldn't post to ([^\s]+) for (.+)$/i,
    to: (_a, provider, name) =>
      `Não foi possível publicar no ${provider} (${name})`,
  },
  {
    re: /^We couldn't confirm your post on ([^\s]+)$/i,
    to: (_a, provider) =>
      `Não foi possível confirmar sua publicação no ${provider}`,
  },
  {
    re: /^Your post was sent to ([^\s]+), but we couldn't confirm it was published\. Please check your (.+) account before posting again to avoid duplicates\.$/i,
    to: (_a, provider, name) =>
      `Sua publicação foi enviada ao ${provider}, mas não confirmamos se foi publicada. Confira a conta ${name} antes de publicar de novo para evitar duplicatas.`,
  },
  {
    re: /^Error posting comments on ([^\s]+) for (.+)$/i,
    to: (_a, provider, name) =>
      `Erro ao publicar comentários no ${provider} (${name})`,
  },
  {
    re: /^Error posting on ([^\s]+) for (.+)$/i,
    to: (_a, provider, name) =>
      `Erro ao publicar no ${provider} (${name})`,
  },
  {
    // Provider must stop before the first colon so WAHA detail stays in group 2.
    re: /^An error occurred while posting comments on ([^\s:]+)(?::\s*(.+))?$/i,
    to: (_a, provider, detail) =>
      detail
        ? `Ocorreu um erro ao publicar comentários no ${provider}: ${detail}`
        : `Ocorreu um erro ao publicar comentários no ${provider}`,
  },
  {
    re: /^An error occurred while posting on ([^\s:]+)(?::\s*(.+))?$/is,
    to: (_a, provider, detail) =>
      detail
        ? `Ocorreu um erro ao publicar no ${provider}: ${detail}`
        : `Ocorreu um erro ao publicar no ${provider}`,
  },
  {
    re: /^Could not refresh your ([^\s]+) channel(?: (.+))?\. Please go back to the system and connect it again (.+)$/i,
    to: (_a, provider, err, url) =>
      `Não foi possível atualizar seu canal ${provider}${
        err ? ` ${err}` : ''
      }. Volte ao sistema e conecte de novo: ${url}`,
  },
  {
    re: /^Could not refresh your ([^\s]+) channel$/i,
    to: (_a, provider) =>
      `Não foi possível atualizar seu canal ${provider}`,
  },
];

export function translateNotificationContent(content: string): string {
  const text = String(content || '');
  for (const rule of RULES) {
    const match = text.match(rule.re);
    if (match) {
      return rule.to(...match);
    }
  }
  return text;
}
