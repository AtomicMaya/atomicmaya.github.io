// @ts-check

import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import { defineConfig, fontProviders, sharpImageService } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://atomicmaya.me',
    integrations: [expressiveCode(), mdx(), pluginLineNumbers()],
    build: {
        assets: 'assets'
    },
    image: {
        service: sharpImageService({ limitInputPixels: false }),
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
        processor: unified({
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
        }),
    },
});