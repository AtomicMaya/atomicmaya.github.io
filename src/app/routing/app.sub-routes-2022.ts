// tslint:disable: no-string-literal
import { Routes } from '@angular/router';
import { Jan2022KnightCTFAllComponent } from '../content/2022/220129-knightctf-all/knightctf-all.component';
import { Jan2022KnightCTFCryptographyComponent } from '../content/2022/220130-knightctf-cryptography/knightctf-cryptography.component';
import { Jan2022KnightCTFMiscComponent } from '../content/2022/220130-knightctf-misc/knightctf-misc.component';
import { Jan2022KnightCTFProgrammingComponent } from '../content/2022/220130-knightctf-programming/knightctf-programming.component';
import { Jan2022KnightCTFReverseComponent } from '../content/2022/220130-knightctf-reverse-engineering/knightctf-reverse.component';
import { authorList } from '../data/authors';
import { TAG_CRYPTOGRAPHY, TAG_CTF, TAG_PROGRAMMING, TAG_WRITEUP } from '../utils/tags';

export const subroutes2022: Routes = [
  {
    path: '2022_01_29+knight-ctf-2022-all-writeups',
    component: Jan2022KnightCTFAllComponent,
    data: {
      title: 'Participating in the Knight CTF!',
      authors: [ authorList['AtomicNicos'] ],
      description: 'I participated in the Knight CTF alongside the team from Digital Overdose, wherein I successfully beat a few challenges.',
      tags: [ TAG_CTF, TAG_WRITEUP ],
      date: [2022, 1, 29]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-cryptography-writeups',
    component: Jan2022KnightCTFCryptographyComponent,
    data: {
      title: 'Dissecting the KnightCTF Cryptography challenges!',
      authors: [ authorList['AtomicNicos'] ],
      description: 'KnightCTF! A write-up on solving challenges from the "Cryptography" category.',
      tags: [ TAG_CTF, TAG_CRYPTOGRAPHY, TAG_WRITEUP ],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-misc-writeups',
    component: Jan2022KnightCTFMiscComponent,
    data: {
      title: 'Dissecting the KnightCTF Misc challenges!',
      authors: [ authorList['AtomicNicos'] ],
      description: 'KnightCTF! A write-up on solving challenges from the "Misc" category.',
      tags: [ TAG_CTF, TAG_WRITEUP ],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-programming-writeups',
    component: Jan2022KnightCTFProgrammingComponent,
    data: {
      title: 'Dissecting the KnightCTF Programming challenges!',
      authors: [ authorList['AtomicNicos'] ],
      description: 'KnightCTF! A write-up on solving challenges from the "Programming" category.',
      tags: [ TAG_CTF, TAG_PROGRAMMING, TAG_WRITEUP ],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-reverse-writeups',
    component: Jan2022KnightCTFReverseComponent,
    data: {
      title: 'Dissecting the KnightCTF Reverse Engineering challenges!',
      authors: [ authorList['AtomicNicos'] ],
      description: 'KnightCTF! A write-up on solving challenges from the "Reverse Engineering" category.',
      tags: [ TAG_CTF, TAG_WRITEUP ],
      date: [2022, 1, 30]
    }
  },
];
