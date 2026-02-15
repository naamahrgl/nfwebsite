// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';


// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define your collection(s)
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

// 5. Export a single `collections` object to register your collection(s)
export const collections = { media };