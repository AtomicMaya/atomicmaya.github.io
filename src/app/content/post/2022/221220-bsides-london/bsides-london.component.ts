import { MetaService } from 'src/app/services/meta.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsides-london',
  templateUrl: './bsides-london.component.html'
})
export class Dec2022BSidesLondonComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_12_20+going-to-bsides-london', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['bsides', 'london', 'conference'],
                      this.post.description, this.post.readingTime);
  }
}
