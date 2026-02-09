import type { MediaItem } from "../components/GridWall"

export const homeMedia: {
  title: string
  subtitle: string
  items: MediaItem[]
} = {
  title: "3D ANIMATION",
  subtitle: "Selected works",
  items: [
    {
      type: "vimeo",
      videoId: "1142507570",
      cover: "/Video editing reel 2026.webp",
            title: "Video editing reel",
                  subtitle: "2025"
    },
    {
      type: "vimeo",
      videoId: "830933663",
      cover: "/Animation showreel.webp",
           title: "3D animation reel",
      subtitle: "2025"
    },
  ],
}
