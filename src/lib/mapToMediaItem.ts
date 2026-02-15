// src/lib/mapToMediaItem.ts

import type { CollectionEntry } from "astro:content"
import type { MediaItem } from "../components/GridWall"

/**
 * Maps a single content collection entry
 * to the MediaItem type used by GridWall / Gallery
 */
export function mapToMediaItem(
  entry: CollectionEntry<"media">
): MediaItem {
  const { title, subtitle, year, cover, vimeoId } = entry.data

  // If there's a Vimeo ID → it's a video
  if (vimeoId) {
    return {
      type: "vimeo",
      videoId: vimeoId,
      cover,
      title,
      subtitle,
      year: String(year),
    }
  }

  // Otherwise → it's an image
  return {
    type: "image",
    src: cover,
    title,
    subtitle,
    year: String(year),
  }
}

