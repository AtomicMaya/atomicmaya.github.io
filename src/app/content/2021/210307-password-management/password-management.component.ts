import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-feb-password-management',
  templateUrl: './password-management.component.html',
  styleUrls: []
})
export class Feb2021PasswordManagementComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_03_07+Much-Ado-About-Passwords', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['article', 'password', 'management']);
  }
}
