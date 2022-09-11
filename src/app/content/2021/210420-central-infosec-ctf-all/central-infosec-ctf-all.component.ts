import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-central-infosec-ctf-all',
  templateUrl: './central-infosec-ctf-all.component.html',
  styleUrls: ['./central-infosec-ctf-all.component.scss']
})
export class Apr2021CentralInfosecCtfAllComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_04_20+Central-Infosec-CTF-All', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['central-infosec', 'ctf', 'challenge', 'overview']);
  }
}
