import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-jun2021-the-stack-overflow-conundrum',
  templateUrl: './jun2021-the-stack-overflow-conundrum.component.html',
  styleUrls: []
})
export class Jun2021TheStackOverflowConundrumComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_06_03+The_StackOverflow_Conundrum', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['stackoverflow', 'development', 'prosus', 'intellectualproperty', 'ip', 'coding', 'foss']);
  }
}
