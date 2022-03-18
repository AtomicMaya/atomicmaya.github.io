import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-jan-leeds-ehs-talk',
  templateUrl: './leeds-ehs-talk.component.html',
  styleUrls: []
})
export class Jan2021LeedsEhsTalkComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_01_20+Talking-at-Leeds-EHS', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['talk', 'leeds', 'ehs', 'iot', 'enisa']);
  }
}
