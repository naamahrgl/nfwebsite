import { useEffect } from "react"
import type { MediaItem } from "./GridWall"

type VideoModalProps = {
  item: MediaItem | null
  onClose: () => void
}

export function VideoModal({ item, onClose }: VideoModalProps) {

  useEffect(() => {

    if (!item || item.type !== "vimeo") return

    window.gtag?.("event", "video_open", {

      video_id: item.videoId,
      video_title: item.title ?? "unknown",
      video_platform: "vimeo"

    })

  }, [item])



  if (!item || item.type !== "vimeo") return null



  return (

    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">

      <div className="relative w-full max-w-5xl aspect-[16/9] bg-black">

        <button
          onClick={() => {

            window.gtag?.("event", "video_close", {

              video_id: item.videoId

            })

            onClose()

          }}

          className="absolute -top-10 right-0 text-white text-sm"
        >

          Close

        </button>



        <iframe

          src={`https://player.vimeo.com/video/${item.videoId}?autoplay=1`}

          className="w-full h-full"

          allow="autoplay; fullscreen; picture-in-picture"

          allowFullScreen

        />

      </div>

    </div>

  )

}