import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catching-covid',
  templateUrl: './catching-covid.component.html'
})
export class Jan2022CatchingCovidComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_01_15+catching-covid', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['COVID'],
                      this.post.description);
  }
}
