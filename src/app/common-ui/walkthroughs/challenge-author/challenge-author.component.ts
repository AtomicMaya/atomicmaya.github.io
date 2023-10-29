import { Component, Input } from '@angular/core';

/**
 * Loads up posts and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  selector: 'app-walkthrough-challenge-author',
  templateUrl: './challenge-author.component.html',
  styleUrls: ['./challenge-author.component.scss']
})
export class ChallengeAuthorComponent {
  @Input() author: string;
  @Input() category: string;
  @Input() link: string;
  @Input() icon: string
}
