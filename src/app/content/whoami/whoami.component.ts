
import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.scss']
})
export class WhoamiComponent implements OnInit {
  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags('/whoami', 'whoami',
                      '/assets/images/me.jpg', 400, 400,
                      ['atomicnicos', 'atomicmaya', 'introduction', 'skills', 'privacy']);
  }

}
