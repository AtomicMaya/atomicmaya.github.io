// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import { defineConfig, fontProviders } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
	site: 'https://atomicmaya.me',
	integrations: [mdx(), sitemap()],
	build: {
		assets: 'assets'
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			rehypeAstroRelativeMarkdownLinks,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'prepend',
					content: {
						type: 'text',
						value: '',
					},
					headingProperties: {
						className: ['anchor'],
					},
					properties: {
						className: ['anchor-link'],
					},
				},
			],
		],
	},
});
