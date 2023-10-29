import { MetaService } from 'src/app/services/meta.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-paradigm-shift',
  templateUrl: './gender-paradigm-shift.component.html'
})
export class Oct2022GenderParadigmShiftComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2023/2023_02_17+gender-paradigm-shift', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['gender', 'non-binary', 'trans', 'coming out'],
                      this.post.description, this.post.readingTime);
  }
}
