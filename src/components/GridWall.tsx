type MediaItem = {
  src: string
  alt?: string
}

type GridWallProps = {
  items: MediaItem[]
}

export default function GridWall({ items }: GridWallProps) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto
          grid
          max-w-[1800px]
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {items.map((item, index) => (
          <figure
            key={index}
            className="w-full overflow-hidden rounded-xl bg-neutral-900"
          >
            <img
              src={item.src}
              alt={item.alt ?? ""}
              className="
                w-full
                h-full
                object-cover
                aspect-[4/3]
              "
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
