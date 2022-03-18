// tslint:disable: no-string-literal
import { Routes } from '@angular/router';
import { Jan2022KnightCTFCryptographyComponent } from '../content/2022/220130-knightctf-cryptography/knightctf-cryptography.component';
import { Jan2022KnightCTFMiscComponent } from '../content/2022/220130-knightctf-misc/knightctf-misc.component';
import { Jan2022KnightCTFProgrammingComponent } from '../content/2022/220130-knightctf-programming/knightctf-programming.component';
import { Jan2022KnightCTFReverseComponent } from '../content/2022/220130-knightctf-reverse-engineering/knightctf-reverse.component';
import { authorList } from '../data/authors';
import { TAG_CRYPTOGRAPHY, TAG_CTF, TAG_PROGRAMMING, TAG_WRITEUP } from '../utils/tags';

export const subroutes2022: Routes = [
  {
    path: '2022_01_30+knight-ctf-2022-cryptography-writeups',
    component: Jan2022KnightCTFCryptographyComponent,
    data: {
      title: 'Tit 1.',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Desc.',
      tags: [ TAG_CTF, TAG_CRYPTOGRAPHY, TAG_WRITEUP ],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-misc-writeups',
    component: Jan2022KnightCTFMiscComponent,
    data: {
      title: 'Tit 2.',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Desc.',
      tags: [ TAG_CTF, TAG_WRITEUP ],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-programming-writeups',
    component: Jan2022KnightCTFProgrammingComponent,
    data: {
      title: 'Tit 3',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Desc.',
      tags: [ TAG_CTF, TAG_PROGRAMMING, TAG_WRITEUP ],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-reverse-writeups',
    component: Jan2022KnightCTFReverseComponent,
    data: {
      title: 'Tit4',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Desc.',
      tags: [ TAG_CTF, TAG_WRITEUP ],
      date: [2022, 1, 30]
    }
  },
];
