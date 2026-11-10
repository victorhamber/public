import { createAction, option } from "@typebot.io/forge";
import { isDefined } from "@typebot.io/lib/utils";
import { auth } from "../auth";

export const publishPost = createAction({
  auth,
  name: "Publish / Schedule",
  parseBlockNodeLabel: (options) =>
    options.type === "schedule"
      ? "Schedule Postiz post"
      : options.type === "draft"
        ? "Draft Postiz post"
        : "Publish Postiz post",
  options: option.object({
    type: option.enum(["now", "schedule", "draft"]).meta({
      layout: {
        label: "When",
        defaultValue: "now",
      },
    }),
    date: option.string.meta({
      layout: {
        label: "Date (ISO)",
        helperText:
          "Required for schedule. For `now`, defaults to current UTC time if empty.",
        isHidden: (current: { type?: string }) => current.type === "draft",
      },
    }),
    content: option.string.meta({
      layout: {
        label: "Content",
        inputType: "textarea",
        isRequired: true,
      },
    }),
    channelIds: option.string.meta({
      layout: {
        label: "Channel IDs",
        helperText:
          "Comma-separated Postiz integration IDs (from List Channels).",
        isRequired: true,
      },
    }),
    mediaId: option.string.meta({
      layout: {
        label: "Media ID (optional)",
        helperText: "Postiz media library id (from upload API).",
        accordion: "Media",
      },
    }),
    mediaPath: option.string.meta({
      layout: {
        label: "Media path/URL (optional)",
        helperText: "Required together with Media ID when attaching media.",
        accordion: "Media",
      },
    }),
    invisibleMention: option.boolean.meta({
      layout: {
        label: "WhatsApp invisible mention",
        helperText:
          "Sets `settings.__type=whatsapp` + `invisibleMention` on each channel post.",
        accordion: "WhatsApp",
        defaultValue: false,
      },
    }),
    shortLink: option.boolean.meta({
      layout: {
        label: "Short links",
        defaultValue: false,
        accordion: "Advanced",
      },
    }),
    tags: option.string.meta({
      layout: {
        label: "Tags (comma-separated)",
        accordion: "Advanced",
      },
    }),
    statusWebhookUrl: option.string.meta({
      layout: {
        label: "Status webhook URL (Typebot)",
        helperText:
          "Optional. Stored in response mapping docs — configure the same URL as a Postiz org webhook so publish success/fail resumes the Typebot flow.",
        accordion: "Status webhook",
      },
    }),
    responseMapping: option
      .array(
        option.object({
          item: option.enum(["JSON", "Post IDs", "Status webhook"]).meta({
            layout: { label: "Map" },
          }),
          variableId: option.string.meta({
            layout: { inputType: "variableDropdown" },
          }),
        }),
      )
      .meta({
        layout: {
          accordion: "Save answer",
          itemLabel: "a mapping",
        },
      }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping?.map((r) => r.variableId).filter(isDefined) ?? [],
});
