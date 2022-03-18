import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-apr2021-digital-overdose-conference',
  templateUrl: './digital-overdose-conference.component.html',
  styleUrls: []
})
export class Apr2021DigitalOverdoseConferenceComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_04_29+Digital-Overdose-Conference', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['digital', 'overdose', 'conference', 'summary']);
  }
}
