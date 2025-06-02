import { Component } from '@angular/core';
import { friend88x31List, other88x31List } from 'src/app/data/eighty-eight-thirty-one';
import { EightyEightThirtyOne } from 'src/app/interfaces/eighty-eight-thirty-one';


@Component({
  selector: 'app-footer-88x31',
  templateUrl: './footer-88x31.component.html',
  styleUrls: ['./footer-88x31.component.scss']
})
export class Footer88x31Component {
  friend88x31List: EightyEightThirtyOne[] = friend88x31List;  
  other88x31List: EightyEightThirtyOne[] = other88x31List;  
}
