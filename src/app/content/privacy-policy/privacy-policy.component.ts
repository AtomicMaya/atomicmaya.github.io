import { MetaService } from 'src/app/services/meta.service';
import { Tag } from 'src/app/interfaces/tag';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: []
})
export class PrivacyPolicyComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.meta.setTags('/privacy-policy', 'Privacy Policy',
                      '/assets/images/cover.jpg', 1280, 720,
                      ['privacy', 'policy', 'bluehost', 'google']);
    this.route.data.subscribe(data => this.tags = data.tags);
  }

}
