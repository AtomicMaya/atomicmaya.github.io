
import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-osint4j',
  templateUrl: './osint4j.component.html',
  styleUrls: ['./osint4j.component.scss']
})
export class Dec2020Osint4jComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2020/2020_12_16%2BOSINT-Software-Development-Ideas', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['tool', 'ctf', 'software', 'development']);
  }
}
