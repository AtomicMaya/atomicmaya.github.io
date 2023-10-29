/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalkthroughPost } from 'src/app/interfaces/post';
import { filterWalkthroughPostRoutesByPlatform, generateWalkthroughRoutes } from 'src/app/utils/route-generation-functions';
import { WalkthroughInventoryDisplayComponent } from '../walkthrough-inventory-display.component';

/**
 * Loads up posts possessing a certain tag and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  selector: 'app-walkthroughs-filtered-by-platform',
  templateUrl: './../walkthrough-inventory-display.component.html',
  styleUrls: ['./../walkthrough-inventory-display.component.scss']
})
export class WalkthroughFilteredByPlatformComponent extends WalkthroughInventoryDisplayComponent implements OnInit  {
  /** The tag the posts should be filtered for. */
  tag: string = '';

  /**
   * Creates an instance of PostsFilteredByTagComponent.
   * @param route The router observer.
   */
  constructor(private route: ActivatedRoute) {
    super();
    this.titleService.setTitle(`Walkthroughs on the platform '${this.tag}'`);
  }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.title = `Walkthroughs on the platform:`;
    this.route.params.subscribe(params => {
      if (params.filter !== undefined) {
        this.tag = params.filter;
        this.subtitle = `'${this.tag}'`;
      }
      this.loadPosts();
    });
    this.titleService.setTitle(`Walkthroughs on the platform '${this.tag}'`);
    super.ngOnInit();
  }

  /** Increases the maximum amount of posts to display. */
  loadPosts(): void {
    const postsToLoad: WalkthroughPost[] = (this.tag !== '') ? filterWalkthroughPostRoutesByPlatform(this.tag) : generateWalkthroughRoutes();
    super.loadPosts(postsToLoad);
  }
}
