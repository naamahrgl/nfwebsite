// GridWall.tsx
import { Title } from "./ui"
type ImageItem = {
  type: "image"
  src: string
  title?: string
   subtitle?: string
   year?: string


}

type VimeoItem = {
  type: "vimeo"
  videoId: string
    cover: string
  title?: string
subtitle?: string
year?: string

}

export type MediaItem = ImageItem | VimeoItem

type GridWallProps = {
  items: readonly MediaItem[]
    onSelect?: (item: MediaItem) => void

}


export default function GridWall({ items, onSelect }: GridWallProps) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 ">
<div className="
  mx-auto grid max-w-[1800px]
  grid-cols-[repeat(auto-fit,minmax(300px,500px))]
  gap-6
  justify-center
">

{items.map((item, index) => (
  <div key={index} className="flex flex-col gap-2 ">
    
    {/* קוביית המדיה */}
<figure
  onClick={() => item.type === "vimeo" && onSelect?.(item)}
  className="
    relative
w-full
    overflow-hidden
    bg-neutral-900
    aspect-[16/9]
    group
    cursor-pointer
  "
>

{item.type === "image" && (
  <img
    src={item.src}
    alt={item.title ?? ""}
    className="w-full h-full object-cover "
  />
)}

{item.type === "vimeo" && (
  <img
    src={item.cover}
    alt={item.title ?? ""}
  className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
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
                {item.year && (
          <div className="text-xs text-neutral-500">
            {item.year}
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

