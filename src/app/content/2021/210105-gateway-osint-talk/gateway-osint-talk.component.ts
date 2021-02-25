import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-gateway-osint-talk',
  templateUrl: './gateway-osint-talk.component.html',
  styleUrls: ['./gateway-osint-talk.component.scss']
})
export class Jan2021GatewayOsintTalkComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_01_06%2BOSINT-on-Gateway', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['community', 'gateway', 'talk']);
  }
}
