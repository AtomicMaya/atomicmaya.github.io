export interface SocialsLink {
	label: string;
	icon: string;
	url: string;
	aria?: string;
}

export const socials: SocialsLink[] = [
	{
		label: 'Blog',
		icon: 'fas fa-blog fa-2x',
		url: 'https://atomicmaya.me',
		aria: 'Blog',
	},
	{
		label: 'Fediverse',
		icon: 'lolf lol-fedi fa-2x fab fa-2x',
		url: 'https://catgirl.global/@maya',
		aria: 'Fediverse',
	},
	{
		label: 'Photography',
		icon: 'fas fa-camera-retro fa-2x',
		url: 'https://pixels.catgirl.global/@maya',
		aria: 'Camera',
	},
	/*{
		label: 'Twitter',
		icon: 'fab fa-fw fa-twitter-square',
		url: 'https://twitter.com/AtomicMaya_',
	},*/
	{
		label: 'LinkedIn',
		icon: 'fab fa-linkedin fa-2x',
		url: 'https://linkedin.com/in/maya-boeckh',
		aria: 'Linkedin',
	},
	/*{
		label: 'Keybase',
		icon: 'fas fa-fw fa-key',
		url: 'https://keybase.io/atomicmaya',
	},*/
	{
		label: 'Bluesky',
		icon: 'lolf lol-bluesky fab fa-2x',
		url: 'https://bsky.app/profile/atomicmaya.me',
		aria: 'Bluesky',
	},
	{
		label: 'GitHub',
		icon: 'fab fa-github fa-2x',
		url: 'https://github.com/AtomicMaya',
		aria: 'Github',
	},
	{
		label: 'RSS',
		icon: 'fas fa-rss-square fa-2x',
		url: 'https://atomicmaya.me/rss.xml',
		aria: 'RSS',
	}
]