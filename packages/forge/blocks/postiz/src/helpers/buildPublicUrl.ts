import { defaultBaseUrl } from "../constants";

/** Join Postiz API base with a `/public/v1/...` path. */
export const buildPublicUrl = (
  baseUrl: string | undefined,
  path: `/${string}`,
) => `${baseUrl?.replace(/\/$/, "") ?? defaultBaseUrl}/public/v1${path}`;
