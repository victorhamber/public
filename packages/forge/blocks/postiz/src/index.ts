import { createBlock } from "@typebot.io/forge";
import { listChannels } from "./actions/listChannels";
import { publishPost } from "./actions/publishPost";
import { auth } from "./auth";
import { PostizLogo } from "./logo";

export const postizBlock = createBlock({
  id: "postiz",
  name: "Postiz",
  tags: ["social", "scheduling", "whatsapp", "master"],
  LightLogo: PostizLogo,
  auth,
  actions: [listChannels, publishPost],
});
