import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['../../../assets/css/collapsible.scss']
})
export class CollapsibleComponent {
  @Input() buttonText: string;
  @Input() active = false;

  toggleCollapsible() {
    this.active = !this.active;
  }
}
