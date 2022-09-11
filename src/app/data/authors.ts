// tslint:disable:object-literal-key-quotes
import { AuthorMap } from 'src/app/interfaces/author-map';

/** The list of authors. */
export const authorList: AuthorMap = {
  'AtomicNicos': {
    name: 'AtomicNicos',
    bio: 'Developer, Hackademic, OSINTeer, Wannabe Infosec Contributor.',
    avatar: '/assets/images/authors/atomicnicos.jpg',
    links: [
      {
        label: 'Blog',
        icon: 'fas fa-fw fa-blog',
        url: 'https://atomicnicos.me',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/AtomicNicos',
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://linkedin.com/in/nicolas-boeckh',
      },
      {
        label: 'Keybase',
        icon: 'fas fa-fw fa-key',
        url: 'https://keybase.io/atomicnicos',
      },
      {
        label: 'GitHub',
        icon: 'fab fa-fw fa-github',
        url: 'https://github.com/AtomicNicos',
      }
    ]
  },
};
