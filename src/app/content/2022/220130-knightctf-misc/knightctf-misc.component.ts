import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-knightctf2022-misc',
  templateUrl: './knightctf-misc.component.html',
  styleUrls: ['./knightctf-misc.component.scss']
})
export class Jan2022KnightCTFMiscComponent implements OnInit {


  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_11_25+speaking-at-conint', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['conint', 'osint'],
                      this.post.description);
  }
}
