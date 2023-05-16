import { Component, Input, OnInit } from '@angular/core';

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
export class ChallengeAuthorComponent implements OnInit {
  @Input() author: string;
  @Input() category: string;
  @Input() link: string;
  @Input() icon: string
  @Input() platformLink: string;
  platformIcon: string;
  platformName: string;

  ngOnInit(): void {
    if (this.platformLink.includes('tryhackme.com')) {
      this.platformName = "TryHackMe"
      this.platformIcon = "lolf lol-tryhackme"
    } else {
      this.platformName = "Link"
      this.platformIcon = "fas fa-external-link-square-alt"
    }
  }
}
