import { MetaService } from 'src/app/services/meta.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-korea',
  templateUrl: './korea.component.html'
})
export class Nov2022KoreaComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_11_17+going-to-korea', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['korea', 'travel'],
                      this.post.description);
  }
}
