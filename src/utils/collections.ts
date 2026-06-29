import { getCollection } from 'astro:content';

export const getPublishedPosts = () =>
    getCollection('posts', ({ data }) => !data.wip);

export const getPublishedWalkthroughs = () =>
    getCollection('walkthroughs', ({ data }) => !data.wip);
