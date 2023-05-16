import { Component } from '@angular/core';

/**
 * Loads up posts and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  selector: 'app-walkthrough-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  goToTop() {
    window.scrollTo({top: 20})
  }
}
