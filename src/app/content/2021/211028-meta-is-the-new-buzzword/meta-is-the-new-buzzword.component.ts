import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-meta-is-the-new-buzzword',
  templateUrl: './meta-is-the-new-buzzword.component.html',
})
export class Oct2021MetaIsTheNewBuzzwordComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_10_28+who-can-be-more-meta-in-a-world-of-buzzwords', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['oped', 'opinion', 'facebook', 'meta', 'metaverse', 'nft', 'social media'],
                      this.post.description);
  }
}
