import { MetaService } from '../../../services/meta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-2020-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: []
})
export class Oct2020HelloWorldComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2020/2020_10_15%2BHello-world', this.post.title,
                      this.post.imageUrl, 904, 200,
                      ['blog', 'personal'], this.post.description, this.post.readingTime);
  }

}
