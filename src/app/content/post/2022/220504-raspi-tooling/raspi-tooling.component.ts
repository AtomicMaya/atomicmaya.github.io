import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raspi-tooling',
  templateUrl: './raspi-tooling.component.html',
  styleUrls: ['./raspi-tooling.component.scss']
})
export class May2022RaspiToolingComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_05_04+Building-a-raspi-private-web-server', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['raspberry PI', 'web server', 'Docker', 'Ubuntu'],
                      this.post.description, this.post.readingTime);
  }
}
