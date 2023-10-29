import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-knightctf2022-cryptography-all',
  templateUrl: './knightctf-all.component.html',
  styleUrls: ['./knightctf-all.component.scss']
})
export class Jan2022KnightCTFAllComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_01_29+knight-ctf-2022-all-writeups', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['KnightCTF', 'ctf', 'challenge', 'overview'],
                      this.post.description, this.post.readingTime);
  }
}
