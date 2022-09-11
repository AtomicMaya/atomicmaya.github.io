
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-2020-mentoring',
  templateUrl: './mentoring.component.html',
  styleUrls: []
})
export class Nov2020MentoringComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2020/2020_11_12+Mentoring', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['cybersec', 'cybersecurity', 'infosec', 'community', 'mentoring']);
  }

}
