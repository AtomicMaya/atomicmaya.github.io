
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-design-choices',
  templateUrl: './website-design-choices.component.html',
  styleUrls: ['./website-design-choices.component.scss']
})
export class Jan2021DesignChoicesComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_01_23+Website-Design-Choices', this.post.title,
                      this.post.imageUrl, 960, 434,
                      ['development', 'personal', 'design', 'ui']);
  }
}
