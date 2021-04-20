import { ActivatedRoute } from '@angular/router';
import { MetaService } from './../../services/meta.service';
import { Tag } from './../../interfaces/tag';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: []
})
export class CopyrightComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.meta.setTags('/copyright', 'Copyright',
                      '/assets/images/copyright.svg', 1280, 720,
                      ['copyright', 'cc-by-sa']);
    this.route.data.subscribe(data => this.tags = data.tags);
  }
}
