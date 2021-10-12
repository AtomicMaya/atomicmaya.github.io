import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-digital-overdose-official-writeup-3-c4',
  templateUrl: './digital-overdose-official-writeup-3-c4.component.html',
  styles: [
    'img { max-height: 300px !important }'
  ]
})
export class Oct2021DigitalOverdoseWriteupC4Component implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_10_11+digital-overdose-official-writeup-3-c4', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['ctf', 'digital', 'overdose', 'ctftime', 'writeup'],
                      this.post.description);
  }
}
