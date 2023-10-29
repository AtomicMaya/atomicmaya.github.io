import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-going-to-defcon',
  templateUrl: './going-to-defcon.component.html'
})
export class Aug2022GoingToDefconComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_08_30+Heading-for-DEFCON', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['DEFCON', 'DEFCON30', 'LAS VEGAS', 'speaking', 'AppSec'],
                      this.post.description, this.post.readingTime);
  }
}
