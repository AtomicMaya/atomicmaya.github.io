import { Component, OnInit } from '@angular/core';
import { generatePostRoutes } from 'src/app/utils/route-generation-functions';
import { reToSlash, reToSpace, reToDashSep } from 'src/app/utils/listing-utils';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: [],
  styles: ['.text-decoration-underline { text-decoration: underline; }']
})
export class LatestComponent implements OnInit {
  latest: Post[];

  ngOnInit(): void {
    this.latest = generatePostRoutes().slice(0, 7);
  }

  stringify(path: string) {
    return path.replace(reToSlash, '/').replace(reToSpace, ' ').replace(reToDashSep, ' - ');
  }
}
