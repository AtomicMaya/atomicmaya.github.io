import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss', '../../../assets/css/collapsible.scss']
})
export class CollapsibleComponent implements OnInit {
  @Input() buttonText: string;
  @Input() active = false;

  constructor() { }

  ngOnInit(): void { }

  toggleCollapsible() {
    this.active = !this.active;
  }
}
