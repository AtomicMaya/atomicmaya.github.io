import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';


@Component({
  selector: 'app-central-infosec-ctf-hack-the-static-hard',
  templateUrl: './central-infosec-ctf-hack-the-static-hard.component.html',
  styleUrls: []
})
export class Apr2021CentralInfosecCtfHackTheStaticHardComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_04_20+Central-Infosec-CTF-Hack-The-Static-Hard', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['central-infosec', 'ctf', 'challenge', 'write-up', 'static', 'code', 'exploitation']);
  }
}
