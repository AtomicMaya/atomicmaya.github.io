// tslint:disable:object-literal-key-quotes
import { AuthorMap } from 'src/app/interfaces/author-map';

/** The list of authors. */
export const authorList: AuthorMap = {
  'AtomicMaya': {
    name: 'AtomicMaya',
    bio: 'Developer, Hackademic, OSINTeer, Infosec.',
    avatar: '/assets/images/authors/me.jpg',
    links: [
      {
        label: 'Blog',
        icon: 'fas fa-fw fa-blog',
        url: 'https://atomicmaya.me',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/AtomicMaya_',
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://linkedin.com/in/maya-boeckh',
      },
      {
        label: 'Keybase',
        icon: 'fas fa-fw fa-key',
        url: 'https://keybase.io/atomicmaya',
      },
      {
        label: 'GitHub',
        icon: 'fab fa-fw fa-github',
        url: 'https://github.com/AtomicMaya',
      },
      {
        label: 'Mastodon',
        icon: 'fab fa-fw fa-mastodon',
        url: 'https://tech.lgbt/@AtomicMaya',
      }
    ]
  },
};
