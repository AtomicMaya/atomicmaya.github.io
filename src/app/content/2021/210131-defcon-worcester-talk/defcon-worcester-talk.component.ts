import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-jan-defcon-worcester-talk',
  templateUrl: './defcon-worcester-talk.component.html',
  styleUrls: []
})
export class Jan2021DefconWorcesterTalkComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_01_31+Talking-at-DEFCON-Worcester', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['talk', 'defcon', 'worcester', '441905', 'iot', 'enisa']);
  }
}
