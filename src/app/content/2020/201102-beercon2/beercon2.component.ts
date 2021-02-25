import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-2020-beercon2',
  templateUrl: './beercon2.component.html',
  styleUrls: ['./beercon2.component.scss']
})
export class Nov2020Beercon2Component implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2020/2020_11_02%2BI-gave-a-talk-at-BeerCon2', this.post.title,
                      this.post.imageUrl, 1920, 1080,
                      ['beercon2', 'conference', 'rookie', 'iot', 'international', 'online', 'talk']);
  }
}
