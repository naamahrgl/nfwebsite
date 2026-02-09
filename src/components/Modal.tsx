import type { MediaItem } from "./GridWall"






type VideoModalProps = {
  item: MediaItem | null
  onClose: () => void
}

export function VideoModal({ item, onClose }: VideoModalProps) {
  if (!item || item.type !== "vimeo") return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative w-full max-w-5xl aspect-[16/9] bg-black">
        <button
          onClick={onClose}
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
