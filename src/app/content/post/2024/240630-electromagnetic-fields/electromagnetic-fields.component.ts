import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-electromagnetic-fields',
  templateUrl: './electromagnetic-fields.component.html'
})
export class Jun2024ElectromagneticFieldsComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => { this.post = (data as Post); });
    this.meta.setTags(`/post/${this.post.path.slice(0, 4)}/${this.post.path}`, this.post.title,
      this.post.imageUrl, 1280, 720,
      [''],
      this.post.description, this.post.readingTime);
  }
}
