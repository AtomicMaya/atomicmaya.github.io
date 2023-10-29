import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wavegame',
  templateUrl: './wavegame.component.html',
  styleUrls: ['./wavegame.component.scss']
})
export class May2022WavegameComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_05_15+winning-the-wavegame', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['wavegame', 'competition', 'aws', 'cloud', 'winning'],
                      this.post.description, this.post.readingTime);
  }
}
