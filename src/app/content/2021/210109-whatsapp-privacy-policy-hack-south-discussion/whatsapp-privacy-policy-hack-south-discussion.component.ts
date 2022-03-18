
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-whatsapp-privacy-policy-hack-south-discussion',
  templateUrl: './whatsapp-privacy-policy-hack-south-discussion.component.html',
  styleUrls: ['./whatsapp-privacy-policy-hack-south-discussion.component.scss']
})
export class Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_01_09%2BWhatsApp-Privacy-Policy-Changes-Discussion-at-Hack-South', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['privacy', 'whatsapp', 'facebook', 'signal', 'telegram', 'privacypolicy', '20210208', 'talk', 'community', 'hacksouth', 'southafrica']);
  }

}
