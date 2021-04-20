import { TagCount } from './../../../interfaces/tag-count';
import { Component, OnInit } from '@angular/core';
import { countTags } from 'src/app/utils/route-generation-functions';

@Component({
  selector: 'app-list-tag-count',
  templateUrl: './list-tag-count.component.html',
  styleUrls: ['./list-tag-count.component.scss']
})
export class ListTagCountComponent implements OnInit {
  tagCount: TagCount[];

  ngOnInit(): void {
    this.tagCount = countTags();
  }
}
