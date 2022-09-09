import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summer-exam-session',
  templateUrl: './summer-exam-session.component.html',
  styleUrls: ['./summer-exam-session.component.scss']
})
export class Jun2022SummerExamSessionComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_06_15+Return-of-the-summer-exams', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['Uni', 'exams'],
                      this.post.description);
  }
}
