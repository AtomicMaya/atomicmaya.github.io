
import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags('/calendar', 'The Maya Calendar',
                      '', 400, 400,
                      ['calendar']);
  }

}
