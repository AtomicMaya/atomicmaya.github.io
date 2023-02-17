import { MetaService } from 'src/app/services/meta.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-going-to-scotland',
  templateUrl: './going-to-scotland.component.html'
})
export class Sep2022GoingToScotlandComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_09_30+travelling-to-scotland', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['travel', 'scotland', 'glasgow'],
                      this.post.description);
  }
}
