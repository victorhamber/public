/** Strip accidental `Bearer ` prefix so Authorization matches Postiz public API. */
export const normalizeApiKey = (apiKey: string | undefined) => {
  if (!apiKey) return undefined;
  const trimmed = apiKey.trim();
  return trimmed.toLowerCase().startsWith("bearer ")
    ? trimmed.slice(7).trim()
    : trimmed;
};
