import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-beercon3',
  templateUrl: './beercon3.component.html'
})
export class Oct2021Beercon3Component implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_10_30+beercon3', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['beercon', 'thebeerfarmers', 'appsec'],
                      this.post.description);
  }
}
