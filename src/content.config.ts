import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/post/` directory.
	loader: glob({ base: './src/content/post', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.optional(z.string()),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			readingTime: z.optional(z.number()),
			image: z.optional(image()),
			keywords: z.optional(z.array(z.string()))
		}),
});

export const collections = { posts };
