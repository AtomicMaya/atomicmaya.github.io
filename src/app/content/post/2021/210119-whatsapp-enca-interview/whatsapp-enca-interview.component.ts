import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-whatsapp-enca-interview',
  templateUrl: './whatsapp-enca-interview.component.html',
  styleUrls: []
})
export class Jan2021WhatsappEncaInterviewComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_01_19%2BeNCA-Interview-on-the-WhatsApp-Privacy-Policy-Changes', this.post.title,
                      this.post.imageUrl, 640, 360,
                      ['whatsapp', 'facebook', 'signal', 'telegram', 'privacypolicy', '20210208', 'enca', 'interview', 'south', 'africa'], this.post.description, this.post.readingTime);
  }
}
