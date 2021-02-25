import { authorList } from '../../data/authors';
import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { getDay, getMonth } from 'src/app/utils/listing-utils';

@Component({
  selector: 'app-when',
  templateUrl: './when.component.html',
  styleUrls: ['./when.component.scss']
})
export class WhenComponent implements OnInit {
  // tslint:disable-next-line: no-string-literal
  @Input() authors: Author[] = [ authorList['AtomicNicos'] ];
  @Input() date: number[];
  @Input() edited: number[];

  getDay = getDay;
  getMonth = getMonth;

  constructor() { }

  ngOnInit(): void { }
}
