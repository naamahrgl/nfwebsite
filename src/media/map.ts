import { videoMedia } from "./video";
import { photoMedia } from "./photo";
import { aniMedia } from "./animation";


export const mediaMap = {
  video_and_motion: videoMedia,
  photography: photoMedia,
  animation_3d: aniMedia
} as const;

export type MediaKey = keyof typeof mediaMap;
