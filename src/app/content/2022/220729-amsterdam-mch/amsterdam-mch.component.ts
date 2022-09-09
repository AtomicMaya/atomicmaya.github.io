import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amsterdam-mch',
  templateUrl: './amsterdam-mch.component.html',
  styleUrls: ['./amsterdam-mch.component.scss']
})
export class Jul2022AmsterdamMchComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2022/2022_07_29+Heading-to-Amsterdam-and-going-to-MCH', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['conference', 'mch', 'mch2022', 'volunteering', 'netherlands', 'may contain hackers'],
                      this.post.description);
  }
}
