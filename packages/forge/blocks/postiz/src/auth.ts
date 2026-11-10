import { createAuth, option } from "@typebot.io/forge";
import { defaultBaseUrl } from "./constants";

export const auth = createAuth({
  type: "encryptedCredentials",
  name: "Postiz account",
  schema: option.object({
    baseUrl: option.string
      .meta({
        layout: {
          label: "API base URL",
          isRequired: true,
          helperText:
            "Publishing API root without `/public/v1`. Internal MASTER: `http://publishing:5000/api`. Exige `SSRF_ALLOWED_HOSTS` com `publishing`.",
          withVariableButton: false,
          defaultValue: defaultBaseUrl,
        },
      })
      .transform((value) => value?.replace(/\/$/, "")),
    apiKey: option.string.meta({
      layout: {
        label: "API Key",
        isRequired: true,
        helperText:
          "Organization API key from Postiz → Public API. Sent as the raw `Authorization` header (SDK style).",
        inputType: "password",
        withVariableButton: false,
      },
    }),
  }),
});
