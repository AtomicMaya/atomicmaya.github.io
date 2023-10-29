import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-mental-health-v1',
  templateUrl: './mental-health.component.html',
  styleUrls: []
})
export class Jan2021MentalHealthComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_01_03%2BMental-Health', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['health', 'personal'], this.post.description, this.post.readingTime);
  }

}
