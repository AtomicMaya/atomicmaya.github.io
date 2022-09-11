import { authorList } from './../../data/authors';
import { Component, Input } from '@angular/core';
import { Author } from 'src/app/interfaces/author';

@Component({
  selector: 'app-by-when',
  templateUrl: './by-when.component.html',
  styleUrls: ['./by-when.component.scss']
})
export class ByWhenComponent {
  // tslint:disable-next-line: no-string-literal
  @Input() authors: Author[] = [ authorList['AtomicNicos'] ];
  @Input() date: number[];
  @Input() edited: number[];

  getMonth(index: number): string {
    return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'][index - 1];
  }

  getDay(day: number): string {
    if ([1, 21, 31].includes(day)) {
      return `${day}st`;
    } else if ([2, 22].includes(day)) {
      return `${day}nd`;
    } else if ([3, 23].includes(day)) {
      return `${day}rd`;
    } else {
      return `${day}th`;
    }
  }
}
