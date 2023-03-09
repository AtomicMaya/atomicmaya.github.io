import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-overdose-conference2',
  templateUrl: './digital-overdose-conference2.component.html'
})
export class Apr2022DigitalOverdoseConference2Component implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_04_26+running-the-digital-overdose-conference-again', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['Digital', 'Overdose', 'D.O. CON 2', 'conference', 'rookies'],
                      this.post.description, this.post.readingTime);
  }
}
