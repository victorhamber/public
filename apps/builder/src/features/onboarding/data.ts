import type { Block } from "@typebot.io/blocks-core/schemas/schema";
import type { TEventWithOptions } from "@typebot.io/events/schemas";

type Feature =
  | "editor"
  | "groupTitlesAutoGeneration"
  | Block["type"]
  | TEventWithOptions["type"];

export const onboardingVideos: Partial<
  Record<
    Feature,
    | {
        key: string;
        youtubeId: string;
        deployedAt?: Date;
      }
    | undefined
  >
> = {};
