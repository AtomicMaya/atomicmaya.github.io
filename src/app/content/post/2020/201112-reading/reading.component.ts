import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-2020-reading',
  templateUrl: './reading.component.html',
  styleUrls: []
})
export class Nov2020ReadingComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2020/2020_11_12+Reading-Materials', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['books', 'studies', 'reading'], this.post.description, this.post.readingTime);
  }
}
