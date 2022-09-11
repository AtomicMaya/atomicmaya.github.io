import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starting-a-new-job',
  templateUrl: './starting-a-new-job.component.html'
})
export class Feb2022StartingANewJobComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_02_18+Starting-a-new-job', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['Work'],
                      this.post.description);
  }
}
