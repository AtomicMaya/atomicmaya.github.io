import { Tag } from './../../interfaces/tag';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-viewer',
  templateUrl: './tag-viewer.component.html',
  styleUrls: ['./tag-viewer.component.scss']
})
export class TagViewerComponent {
  @Input() tags: Tag[] = [];

  constructor() {  }

}
