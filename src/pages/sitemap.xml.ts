import type { APIRoute } from 'astro';
import { getPublishedPosts, getPublishedWalkthroughs } from '../utils/collections';

const STATIC_PATHS = ['/', '/calendar/', '/copyright/', '/posts/', '/walkthroughs/'];

const toIso = (d: Date) => d.toISOString().split('T')[0];

const xmlEscape = (s: string) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site }) => {
	const base = (site ?? new URL('https://atomicmaya.me')).toString().replace(/\/$/, '');
	const [posts, walkthroughs] = await Promise.all([getPublishedPosts(), getPublishedWalkthroughs()]);

	const buildDate = toIso(new Date());

	type Entry = { loc: string; lastmod?: string };
	const entries: Entry[] = [];

	for (const path of STATIC_PATHS) {
		entries.push({ loc: `${base}${path}`, lastmod: buildDate });
	}

	for (const post of posts) {
		entries.push({
			loc: `${base}/post/${post.id}/`,
			lastmod: toIso(post.data.updatedDate ?? post.data.pubDate),
		});
	}

	for (const walkthrough of walkthroughs) {
		entries.push({
			loc: `${base}/walkthrough/${walkthrough.id}/`,
			lastmod: toIso(walkthrough.data.updatedDate ?? walkthrough.data.pubDate),
		});
	}

	const tagLastmod: Record<string, Date> = {};
	const collect = (date: Date, keywords: string[] | undefined) => {
		for (const tag of keywords ?? []) {
			if (!tagLastmod[tag] || date > tagLastmod[tag]) tagLastmod[tag] = date;
		}
	};
	for (const post of posts) collect(post.data.updatedDate ?? post.data.pubDate, post.data.keywords);
	for (const w of walkthroughs) collect(w.data.updatedDate ?? w.data.pubDate, w.data.keywords);
	for (const [tag, date] of Object.entries(tagLastmod)) {
		entries.push({ loc: `${base}/tags/${encodeURI(tag)}/`, lastmod: toIso(date) });
	}

	const body =
		`<?xml version="1.0" encoding="UTF-8"?>` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
		entries
			.map(
				(e) =>
					`<url><loc>${xmlEscape(e.loc)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`,
			)
			.join('') +
		`</urlset>`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
