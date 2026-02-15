import { defineCollection, z } from 'astro:content'

const media = defineCollection({
  type: 'content',
  schema: z.object({
title: z.string().optional(),
    subtitle: z.string().optional(),
    year: z.number().optional(),
    vimeoId: z.string().optional(),
    cover: z.string(),
    homepage: z.boolean().default(false),
    type: z.enum(['video_and_motion', 'photography', 'animation'])
  })
})

export const collections = {
  media
}
