import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  templateUrl: './the-halfway-mark.component.html'
})
export class July2021TheHalfwayMarkComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_07_20+The-2021-Halfway-Mark', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['2021', 'recap', 'halfway', 'achievements'],
                      this.post.description);
  }
}
