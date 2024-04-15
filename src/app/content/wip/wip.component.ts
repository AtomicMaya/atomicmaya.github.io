
import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
})
export class WIPComponent implements OnInit {
  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags('/wip', 'WIP',
                      '', 400, 400,
                      ['wip']);
  }

}
