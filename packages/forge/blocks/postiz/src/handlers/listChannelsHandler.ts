import { createActionHandler } from "@typebot.io/forge";
import { safeKy } from "@typebot.io/lib/ky";
import { parseUnknownError } from "@typebot.io/lib/parseUnknownError";
import { listChannels } from "../actions/listChannels";
import { buildPublicUrl } from "../helpers/buildPublicUrl";
import { normalizeApiKey } from "../helpers/normalizeApiKey";

type Integration = {
  id: string;
  name: string;
  identifier: string;
  disabled?: boolean;
};

export const listChannelsHandler = createActionHandler(listChannels, {
  server: async ({
    credentials: { baseUrl, apiKey },
    options: { groupId, responseMapping },
    variables,
    logs,
  }) => {
    const key = normalizeApiKey(apiKey);
    if (!key) return logs.add("Postiz API key is required");

    try {
      const searchParams = groupId ? { group: groupId } : undefined;
      const data = await safeKy
        .get(buildPublicUrl(baseUrl, "/integrations"), {
          headers: {
            Authorization: key,
            "Content-Type": "application/json",
          },
          searchParams,
        })
        .json<Integration[]>();

      const channels = Array.isArray(data) ? data : [];

      responseMapping?.forEach((mapping) => {
        if (!mapping.variableId || !mapping.item) return;
        const value =
          mapping.item === "JSON"
            ? JSON.stringify(channels)
            : mapping.item === "IDs"
              ? channels.map((c) => c.id)
              : mapping.item === "Names"
                ? channels.map((c) => c.name)
                : channels.map((c) => c.identifier);

        variables.set([{ id: mapping.variableId, value }]);
      });
    } catch (error) {
      logs.add(
        await parseUnknownError({
          err: error,
          context: "While listing Postiz channels",
        }),
      );
    }
  },
});
