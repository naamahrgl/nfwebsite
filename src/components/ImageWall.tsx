// src/components/ImageWall.tsx
import { motion } from "framer-motion";
import { useState } from "react";

type ImageItem = {
  src: string;
  alt: string;
  className: string; // grid placement
};

const images: ImageItem[] = [
  {
    src: "/blue.jpg",
    alt: "Gallery image 1",
    className: "img-a",
  },
  {
    src: "/blue.jpg",
    alt: "Gallery image 2",
    className: "img-b",
  },
  {
    src: "/blue.jpg",
    alt: "Gallery image 3",
    className: "img-c",
  },
  {
    src: "/blue.jpg",
    alt: "Gallery image 4",
    className: "img-d",
  },
  {
    src: "/blue.jpg",
    alt: "Gallery image 5",
    className: "img-e",
  },
];

export default function ImageWall() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="image-wall">
      {images.map((img, index) => (
        <motion.figure
          key={img.src}
          className={`image-item ${img.className}`}
          onHoverStart={() => setHovered(index)}
          onHoverEnd={() => setHovered(null)}
          animate={{
            scale: hovered === index ? 1.04 : 1,
            opacity: hovered === null || hovered === index ? 1 : 0.75,
            zIndex: hovered === index ? 10 : 1,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="image"
          />
        </motion.figure>
      ))}
    </div>
  );
}
