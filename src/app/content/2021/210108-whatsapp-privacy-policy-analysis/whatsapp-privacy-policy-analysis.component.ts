import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';


@Component({
  selector: 'app-whatsapp-privacy-policy-analysis',
  templateUrl: './whatsapp-privacy-policy-analysis.component.html',
  styleUrls: []
})
export class Jan2021WhatsappPrivacyPolicyAnalysisComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2021/2021_01_08%2BWhatsApp-Privacy-Policy-Changes-Analysis', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['privacy', 'whatsapp', 'facebook', 'signal', 'telegram', 'privacypolicy', '20210208']);
  }
}
