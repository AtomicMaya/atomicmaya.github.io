import { MetaService } from 'src/app/services/meta.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beercon4',
  templateUrl: './beercon4.component.html'
})
export class Oct2022Beercon4Component implements OnInit {

  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022__30+travelling-to-scotland', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['beercon4', 'london'],
                      this.post.description);
  }

}
