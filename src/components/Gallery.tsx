import { useState } from "react"
import GridWall from "./GridWall"
import { VideoModal } from "./Modal"
import type { MediaItem } from "./GridWall"

type Props = {
  items: readonly MediaItem[]
}

export default function MediaGallery({ items }: Props) {
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null)

  return (
    <>
      <GridWall items={items} onSelect={setActiveItem} />
      <VideoModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </>
  )
}
