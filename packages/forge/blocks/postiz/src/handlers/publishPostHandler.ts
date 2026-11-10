import { createActionHandler } from "@typebot.io/forge";
import { safeKy } from "@typebot.io/lib/ky";
import { parseUnknownError } from "@typebot.io/lib/parseUnknownError";
import { publishPost } from "../actions/publishPost";
import { buildPublicUrl } from "../helpers/buildPublicUrl";
import { normalizeApiKey } from "../helpers/normalizeApiKey";

const splitCsv = (value: string | undefined) =>
  (value ?? "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

export const publishPostHandler = createActionHandler(publishPost, {
  server: async ({
    credentials: { baseUrl, apiKey },
    options: {
      type,
      date,
      content,
      channelIds,
      mediaId,
      mediaPath,
      invisibleMention,
      shortLink,
      tags,
      statusWebhookUrl,
      responseMapping,
    },
    variables,
    logs,
  }) => {
    const key = normalizeApiKey(apiKey);
    if (!key) return logs.add("Postiz API key is required");
    if (!content?.trim()) return logs.add("Post content is required");

    const channels = splitCsv(channelIds);
    if (channels.length === 0)
      return logs.add("At least one channel ID is required");

    const postType = type ?? "now";
    const scheduleDate =
      date?.trim() ||
      (postType === "now" ? new Date().toISOString() : undefined);

    if (postType === "schedule" && !scheduleDate)
      return logs.add("ISO date is required when type is schedule");

    const image =
      mediaId && mediaPath
        ? [{ id: mediaId, path: mediaPath }]
        : ([] as { id: string; path: string }[]);

    if ((mediaId && !mediaPath) || (!mediaId && mediaPath))
      return logs.add("Media ID and Media path must be provided together");

    // Postiz `mapTypeToPost` sets `__type` from each integration identifier.
    const settings = invisibleMention ? { invisibleMention: true } : {};

    const body = {
      type: postType,
      shortLink: Boolean(shortLink),
      date: scheduleDate ?? new Date().toISOString(),
      tags: splitCsv(tags).map((tag) => ({ value: tag, label: tag })),
      posts: channels.map((id) => ({
        integration: { id },
        value: [{ content, image }],
        settings,
      })),
      creationMethod: "API",
    };

    try {
      const data = await safeKy
        .post(buildPublicUrl(baseUrl, "/posts"), {
          headers: {
            Authorization: key,
            "Content-Type": "application/json",
          },
          json: body,
        })
        .json<unknown>();

      const postIds = Array.isArray(data)
        ? data
            .map((item) =>
              item && typeof item === "object" && "postId" in item
                ? String((item as { postId: string }).postId)
                : item && typeof item === "object" && "id" in item
                  ? String((item as { id: string }).id)
                  : undefined,
            )
            .filter((id): id is string => Boolean(id))
        : [];

      responseMapping?.forEach((mapping) => {
        if (!mapping.variableId || !mapping.item) return;
        const value =
          mapping.item === "JSON"
            ? JSON.stringify(data)
            : mapping.item === "Post IDs"
              ? postIds.length === 1
                ? postIds[0]
                : postIds
              : (statusWebhookUrl ?? "");

        variables.set([{ id: mapping.variableId, value }]);
      });

      if (statusWebhookUrl) {
        logs.add({
          status: "info",
          description:
            "Configure this URL as a Postiz organization webhook so publish status can resume the Typebot flow",
          details: statusWebhookUrl,
        });
      }
    } catch (error) {
      logs.add(
        await parseUnknownError({
          err: error,
          context: "While publishing to Postiz",
        }),
      );
    }
  },
});
