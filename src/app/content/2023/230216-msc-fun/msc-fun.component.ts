import { MetaService } from 'src/app/services/meta.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msc-fun',
  templateUrl: './msc-fun.component.html'
})
export class Feb2023MScFunComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2023/2023_02_17+msc-fun', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['university', 'Masters', 'msc', 'thesis'],
                      this.post.description);
  }
}
