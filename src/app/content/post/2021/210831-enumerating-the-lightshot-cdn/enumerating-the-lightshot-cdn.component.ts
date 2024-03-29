import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-enumerating-the-lightshot-cdn',
  templateUrl: './enumerating-the-lightshot-cdn.component.html',
  styles: [
    'img { max-height: 300px !important }'
  ]
})
export class Aug2021EnumeratingTheLightshotCdnComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_08_31+Enumerating-the-lightshot-CDN', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['enumerating', 'lightshot', 'prnt.sc', 'prntscr.com', 'CDN'],
                      this.post.description, this.post.readingTime);
  }
}
