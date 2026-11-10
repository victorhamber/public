import { createAction, option } from "@typebot.io/forge";
import { isDefined } from "@typebot.io/lib/utils";
import { auth } from "../auth";

export const listChannels = createAction({
  auth,
  name: "List Channels",
  options: option.object({
    groupId: option.string.meta({
      layout: {
        label: "Group ID (optional)",
        helperText: "Filter integrations by Postiz customer/group id.",
      },
    }),
    responseMapping: option
      .array(
        option.object({
          item: option
            .enum(["JSON", "IDs", "Names", "Identifiers"])
            .meta({ layout: { label: "Map" } }),
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
