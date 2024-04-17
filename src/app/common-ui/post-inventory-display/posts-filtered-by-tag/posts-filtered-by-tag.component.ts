import { PostInventoryDisplayComponent } from '../post-inventory-display.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { filterPostRoutesByTag, generatePostRoutes } from 'src/app/utils/route-generation-functions';
import { getTagNameFromPath } from 'src/app/utils/tags';

/**
 * Loads up posts possessing a certain tag and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  selector: 'app-posts-filtered-by-tag',
  templateUrl: './../post-inventory-display.component.html',
  styleUrls: ['./../post-inventory-display.component.scss']
})
export class PostsFilteredByTagComponent extends PostInventoryDisplayComponent implements OnInit  {
  /** The tag the posts should be filtered for. */
  tag_name: string = '';
  tag_filter: string = '';

  /**
   * Creates an instance of PostsFilteredByTagComponent.
   * @param route The router observer.
   */
  constructor(private route: ActivatedRoute) {
    super();
    this.titleService.setTitle(`Posts tagged '${this.tag_name}'`);
  }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.title = `Posts tagged:`;
    this.route.params.subscribe(params => {
      if (params.filter !== undefined) {
        this.tag_name = getTagNameFromPath(params.filter.toLowerCase());
        this.tag_filter = params.filter.toLowerCase()
        if (this.tag_name != null) {
          this.subtitle = `'${this.tag_name}'`;
        }
      }
      this.loadPosts();
    });
    this.titleService.setTitle(`Posts tagged '${this.tag_name}'`);
    super.ngOnInit();
  }

  /** Increases the maximum amount of posts to display. */
  loadPosts(): void {
    const postsToLoad: Post[] = (this.tag_filter !== '') ? filterPostRoutesByTag(this.tag_filter) : generatePostRoutes();
    super.loadPosts(postsToLoad);
  }
}
