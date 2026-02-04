// GridWall.tsx
import { Title } from "./ui"
type ImageItem = {
  type: "image"
  src: string
  title?: string
   subtitle?: string

}

type VimeoItem = {
  type: "vimeo"
  videoId: string
  title?: string
subtitle?: string

}

export type MediaItem = ImageItem | VimeoItem

type GridWallProps = {
  items: MediaItem[]
}


export default function GridWall({ items }: GridWallProps) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="
        mx-auto grid max-w-[1800px]
        grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
      ">
{items.map((item, index) => (
  <div key={index} className="flex flex-col gap-2">
    
    {/* קוביית המדיה */}
    <figure
      className="
        w-full
        overflow-hidden
        rounded-xl
        bg-neutral-900
        aspect-[16/9]
      "
    >
      {item.type === "image" && (
        <img
          src={item.src}
          alt={item.title ?? ""}
          className="w-full h-full object-cover"
        />
      )}

      {item.type === "vimeo" && (
        <iframe
          src={`https://player.vimeo.com/video/${item.videoId}`}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )}
    </figure>

    {/* כותרת + סאב */}
    {(item.title || item.subtitle) && (
      <div className="px-1">
        {item.title && (
          <div className="text-sm font-medium text-neutral-900">
            {item.title}
          </div>
        )}
        {item.subtitle && (
          <div className="text-xs text-neutral-500">
            {item.subtitle}
          </div>
        )}
      </div>
    )}

  </div>
))}


      </div>
    </section>
  )
}

