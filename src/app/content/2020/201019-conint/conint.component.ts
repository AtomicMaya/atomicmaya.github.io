
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-2020-conint',
  templateUrl: './conint.component.html',
  styleUrls: []
})
export class Oct2020ConintComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2020/2020_10_19%2BI-participated-in-the-CONINT-CTF', this.post.title,
                      this.post.imageUrl, 1920, 1080,
                      ['conint', 'conference', 'ctf', 'tracelabs', 'ncptf', 'international', 'online']);
  }
}
