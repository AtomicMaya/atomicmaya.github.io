import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { reToDashSep, reToSlash, reToSpace } from 'src/app/utils/listing-utils';
import { generatePostRoutes } from 'src/app/utils/route-generation-functions';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: [],
  styles: ['.text-decoration-underline { text-decoration: underline; }']
})
export class LatestComponent implements OnInit {
  latest: Post[];

  ngOnInit(): void {
    this.latest = generatePostRoutes().slice(0, 9);
  }

  stringify(path: string) {
    return path.replace(reToSlash, '/').replace(reToSpace, ' ').replace(reToDashSep, ' - ');
  }

  modify(path: string) {
    return path.replace("+", "%2B");
  }
}
