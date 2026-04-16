export interface SocialsLink {
	label: string;
	icon: string;
	url: string;
}

export const socials: SocialsLink[] = [
	{
		label: 'Blog',
		icon: 'fas fa-blog fa-2x',
		url: 'https://atomicmaya.me',
	},
	{
		label: 'Fediverse',
		icon: 'fab fa-mastodon fa-2x',
		url: 'https://catgirl.global/@maya',
	},
	{
		label: 'Photography',
		icon: 'fas fa-camera-retro fa-2x',
		url: 'https://pixels.catgirl.global/@maya',
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
	},
	/*{
		label: 'Keybase',
		icon: 'fas fa-fw fa-key',
		url: 'https://keybase.io/atomicmaya',
	},*/
	{
		label: 'Bluesky',
		icon: 'lolf lol-bluesky fab fa-2x',
		url: 'https://bsky.app/profile/atomicmaya.me'
	},
	{
		label: 'GitHub',
		icon: 'fab fa-github fa-2x',
		url: 'https://github.com/AtomicMaya',
	},
	{
		label: 'RSS',
		icon: 'fas fa-rss-square fa-2x',
		url: 'https://atomicmaya.me/rss.xml'
	}
]