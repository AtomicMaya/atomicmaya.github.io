import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { generatePostRoutes, generateWalkthroughRoutes } from 'src/app/utils/route-generation-functions';
import { WalkthroughInventoryDisplayComponent } from '../walkthrough-inventory-display.component';

/**
 * Loads up posts and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  selector: 'app-walkthroughs-no-filter',
  templateUrl: './../walkthrough-inventory-display.component.html',
  styleUrls: ['./../walkthrough-inventory-display.component.scss']
})
export class WalkthroughNoFilterComponent extends WalkthroughInventoryDisplayComponent implements OnInit  {
  /**
   * Creates an instance of PostsNoFilterComponent.
   * @param route The router observer.
   */
  constructor(private route: ActivatedRoute) {
    super();
  }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.title = `All walkthroughs`;
    this.route.params.subscribe(() => this.loadPosts());
    super.ngOnInit();
  }

  /** Increases the maximum amount of posts to display. */
  loadPosts(): void {
    const postsToLoad: Post[] = generateWalkthroughRoutes();
    super.loadPosts(postsToLoad);
  }
}
