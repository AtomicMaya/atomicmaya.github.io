import { Author } from 'src/app/interfaces/author';
import { Tag } from 'src/app/interfaces/tag';

/**
 * Represents a Post.
 *
 * @export
 */
export interface Post {
  date: number[];

  /** The year this Post was published on. */
  year?: string;

  /** The URL of the site, stripped of it's domain. */
  path: string;

  /** The title of the Post. */
  title: string;

  /** A description of the contents of the Post. */
  description?: string;

  /** A URL used for the Post header image. */
  imageUrl?: string;

  /** A list of {@link Tag | tags} the Post is flagged with. */
  tags?: Tag[];

  /** A list of {@link Author | authors} that collaborated on the Post. */
  authors?: Author[];

  /** The average time to read the post. */
  readingTime: number;
}

export interface WalkthroughPost extends Post {
  platform?: string;
}
