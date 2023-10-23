import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { Component, Input } from '@angular/core';
import { WalkthroughPost } from 'src/app/interfaces/post';
import { stringify } from 'src/app/utils/listing-utils';

/**
 * A Post Card.
 *
 * @export
 */
@Component({
  selector: 'app-walkthroughs-card-compact',
  templateUrl: './walkthroughs-card-compact.component.html',
  styleUrls: ['./walkthroughs-card-compact.component.scss']
})
export class WalkthroughsCardCompactComponent {
  /** The post to display. */
  @Input() post: WalkthroughPost;

  /** Local copy */
  stringify = stringify;

  /**
   * Creates an instance of PostsCardCompactHeaderComponent.
   *
   * @param browserRec The browser recognition service.
   */
  constructor(private browserRec: BrowserRecognitionService) { }


  /**
   * URL moves to post.
   *
   * @param path The path of the Post.
   */
  goToPost(path: string) {
    if (this.browserRec.isBrowser) {
      window.location.href = path;
    }
  }
}
