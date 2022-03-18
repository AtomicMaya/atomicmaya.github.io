
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-goodbye2020-new-year-party',
  templateUrl: './goodbye2020-new-year-party.component.html',
  styleUrls: []
})
export class Jan2021Goodbye2020NewYearPartyComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_01_02%2BGoodbye-2020-New-Year-Party', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['personal', 'online', 'international', 'party']);
  }

}
