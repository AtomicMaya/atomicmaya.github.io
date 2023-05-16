import { MetaService } from 'src/app/services/meta.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advent-of-cyber-2022-day-07',
  templateUrl: './advent-of-cyber-day-07.component.html'
})
export class WalkthroughTHMDec2022AdventOfCyberComponentDay07 implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags(`/walkthrough/tryhackme/${this.post.path.slice(0, 4)}/${this.post.path}`, this.post.title,
    this.post.imageUrl, 1280, 720,
    [],
    this.post.description, this.post.readingTime);
  }

}