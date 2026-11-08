// Maps known English in-app notification templates to Portuguese.
// Older rows stay English in the DB; we only rewrite on display.

const RULES: Array<{ re: RegExp; to: (...m: string[]) => string }> = [
  {
    re: /^Your post has been published on (\S+) at (.+)$/i,
    to: (_a, provider, url) =>
      `Sua publicação foi publicada no ${provider} em ${url}`,
  },
  {
    re: /^Your post has been published on (\S+)$/i,
    to: (_a, provider) => `Sua publicação foi publicada no ${provider}`,
  },
  {
    re: /^We couldn't post to (\S+) for (.+) because you need to reconnect it\. Please enable it and try again\.$/i,
    to: (_a, provider, name) =>
      `Não foi possível publicar no ${provider} (${name}) porque é preciso reconectar o canal. Ative e tente de novo.`,
  },
  {
    re: /^We couldn't post to (\S+) for (.+) because it's disabled\. Please enable it and try again\.$/i,
    to: (_a, provider, name) =>
      `Não foi possível publicar no ${provider} (${name}) porque o canal está desativado. Ative e tente de novo.`,
  },
  {
    re: /^We couldn't post to (\S+) for (.+)$/i,
    to: (_a, provider, name) =>
      `Não foi possível publicar no ${provider} (${name})`,
  },
  {
    re: /^We couldn't confirm your post on (\S+)$/i,
    to: (_a, provider) =>
      `Não foi possível confirmar sua publicação no ${provider}`,
  },
  {
    re: /^Your post was sent to (\S+), but we couldn't confirm it was published\. Please check your (.+) account before posting again to avoid duplicates\.$/i,
    to: (_a, provider, name) =>
      `Sua publicação foi enviada ao ${provider}, mas não confirmamos se foi publicada. Confira a conta ${name} antes de publicar de novo para evitar duplicatas.`,
  },
  {
    re: /^Error posting comments on (\S+) for (.+)$/i,
    to: (_a, provider, name) =>
      `Erro ao publicar comentários no ${provider} (${name})`,
  },
  {
    re: /^Error posting on (\S+) for (.+)$/i,
    to: (_a, provider, name) =>
      `Erro ao publicar no ${provider} (${name})`,
  },
  {
    re: /^An error occurred while posting comments on (\S+)(?:: (.+))?$/i,
    to: (_a, provider, detail) =>
      detail
        ? `Ocorreu um erro ao publicar comentários no ${provider}: ${detail}`
        : `Ocorreu um erro ao publicar comentários no ${provider}`,
  },
  {
    re: /^An error occurred while posting on (\S+)(?:: (.+))?$/i,
    to: (_a, provider, detail) =>
      detail
        ? `Ocorreu um erro ao publicar no ${provider}: ${detail}`
        : `Ocorreu um erro ao publicar no ${provider}`,
  },
  {
    re: /^Could not refresh your (\S+) channel(?: (.+))?\. Please go back to the system and connect it again (.+)$/i,
    to: (_a, provider, err, url) =>
      `Não foi possível atualizar seu canal ${provider}${
        err ? ` ${err}` : ''
      }. Volte ao sistema e conecte de novo: ${url}`,
  },
  {
    re: /^Could not refresh your (\S+) channel$/i,
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
