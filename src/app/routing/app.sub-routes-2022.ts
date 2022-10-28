import { Aug2022GoingToDefconComponent } from './../content/2022/220830-going-to-defcon/going-to-defcon.component';
import { Jul2022AmsterdamMchComponent } from './../content/2022/220729-amsterdam-mch/amsterdam-mch.component';
import { TAG_CYBERSEC, TAG_DEVELOPMENT, TAG_TALKS } from './../utils/tags';
import { Jan2022CatchingCovidComponent } from '../content/2022/220115-catching-covid/catching-covid.component';
// tslint:disable: no-string-literal
import { Routes } from '@angular/router';
import { Jan2022KnightCTFAllComponent } from '../content/2022/220129-knightctf-all/knightctf-all.component';
import { Jan2022KnightCTFCryptographyComponent } from '../content/2022/220130-knightctf-cryptography/knightctf-cryptography.component';
import { Jan2022KnightCTFMiscComponent } from '../content/2022/220130-knightctf-misc/knightctf-misc.component';
import { Jan2022KnightCTFProgrammingComponent } from '../content/2022/220130-knightctf-programming/knightctf-programming.component';
import { Jan2022KnightCTFReverseComponent } from '../content/2022/220130-knightctf-reverse-engineering/knightctf-reverse.component';
import { Feb2022StartingANewJobComponent } from '../content/2022/220218-starting-a-new-job/starting-a-new-job.component';
import { authorList } from '../data/authors';
import { TAG_COMMUNITY, TAG_CONFERENCE, TAG_CRYPTOGRAPHY, TAG_CTF, TAG_INFOSEC, TAG_PERSONAL, TAG_PROFESSIONAL, TAG_PROGRAMMING, TAG_VOLUNTEERING, TAG_WRITEUP } from '../utils/tags';
import { Apr2022DigitalOverdoseConference2Component } from '../content/2022/220426-digital-overdose-conference2/digital-overdose-conference2.component';
import { May2022RaspiToolingComponent } from '../content/2022/220504-raspi-tooling/raspi-tooling.component';
import { May2022WavegameComponent } from '../content/2022/220515-wavegame/wavegame.component';
import { Jun2022SummerExamSessionComponent } from '../content/2022/220615-summer-exam-session/summer-exam-session.component';
import { Jul2022GenderParadigmShiftComponent } from '../content/2022/220731-gender-paradigm-shift/gender-paradigm-shift.component';

export const subroutes2022: Routes = [
  {
    path: '2022_01_15+catching-covid',
    component: Jan2022CatchingCovidComponent,
    data: {
      title: 'Catching COVID, detailing my experience.',
      authors: [authorList['AtomicMaya']],
      description: 'I managed to catch COVID, here\'s my story about it.',
      tags: [TAG_PERSONAL],
      date: [2022, 1, 15]
    }
  },
  {
    path: '2022_01_29+knight-ctf-2022-all-writeups',
    component: Jan2022KnightCTFAllComponent,
    data: {
      title: 'Participating in KnightCTF!',
      authors: [authorList['AtomicMaya']],
      description: 'I participated in KnightCTF alongside the team from Digital Overdose, wherein I successfully beat a few challenges.',
      imageUrl: '/assets/images/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_WRITEUP],
      date: [2022, 1, 29],

    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-cryptography-writeups',
    component: Jan2022KnightCTFCryptographyComponent,
    data: {
      title: 'Dissecting the KnightCTF Cryptography challenges!',
      authors: [authorList['AtomicMaya']],
      description: 'KnightCTF! A write-up on solving challenges from the "Cryptography" category.',
      imageUrl: '/assets/images/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_CRYPTOGRAPHY, TAG_WRITEUP],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-misc-writeups',
    component: Jan2022KnightCTFMiscComponent,
    data: {
      title: 'Dissecting the KnightCTF Misc challenges!',
      authors: [authorList['AtomicMaya']],
      description: 'KnightCTF! A write-up on solving challenges from the "Misc" category.',
      imageUrl: '/assets/images/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_WRITEUP],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-programming-writeups',
    component: Jan2022KnightCTFProgrammingComponent,
    data: {
      title: 'Dissecting the KnightCTF Programming challenges!',
      authors: [authorList['AtomicMaya']],
      description: 'KnightCTF! A write-up on solving challenges from the "Programming" category.',
      imageUrl: '/assets/images/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_PROGRAMMING, TAG_WRITEUP],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-reverse-writeups',
    component: Jan2022KnightCTFReverseComponent,
    data: {
      title: 'Dissecting the KnightCTF Reverse Engineering challenges!',
      authors: [authorList['AtomicMaya']],
      description: 'KnightCTF! A write-up on solving challenges from the "Reverse Engineering" category.',
      imageUrl: '/assets/images/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_WRITEUP],
      date: [2022, 1, 30]
    }
  },
  {
    path: '2022_02_18+Starting-a-new-job',
    component: Feb2022StartingANewJobComponent,
    data: {
      title: 'I started a new job!',
      authors: [authorList['AtomicMaya']],
      description: 'Going into a bit more detail about what I\'m currently working on!',
      tags: [TAG_PROFESSIONAL, TAG_PROGRAMMING, TAG_INFOSEC],
      date: [2022, 2, 18]
    }
  },
  {
    path: '2022_04_26+running-the-digital-overdose-conference-again',
    component: Apr2022DigitalOverdoseConference2Component,
    data: {
      title: 'Digital Overdose Conference 2: We\'re doing this again!',
      authors: [authorList['AtomicMaya']],
      description: 'Going behind the scenes of the second iteration of the Digital Overdose Conference.',
      imageUrl: '/assets/images/2022/220426-digital-overdose-conference2/conference_cover_2022.png',
      tags: [TAG_CONFERENCE, TAG_COMMUNITY, TAG_INFOSEC, TAG_CYBERSEC, TAG_VOLUNTEERING],
      date: [2022, 4, 26]
    }
  },
  /*
  {
    path: '2022_05_04+Building-a-raspi-private-web-server',
    component: May2022RaspiToolingComponent,
    data: {
      title: 'Building a Raspberry Pi private web server!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Going behind the scenes on developping a private web service deployed on a Raspberry Pi.',
      tags: [ TAG_DEVELOPMENT, TAG_CYBERSEC ],
      date: [2022, 5, 4]
    }
  },
  {
    path: '2022_05_15+winning-the-wavegame',
    component: May2022WavegameComponent,
    data: {
      title: 'Going to Paris for the Wavegame cloud competition!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I went to Paris for the WaveGame competition, and we ended up winning!',
      tags: [ TAG_INFOSEC ],
      date: [2022, 5, 15]
    }
  },
  {
    path: '2022_06_15+Return-of-the-summer-exams',
    component: Jun2022SummerExamSessionComponent,
    data: {
      title: 'Refocusing for my summer exams.',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I had to refocus my efforst for the summer exams at university.',
      tags: [ TAG_PERSONAL ],
      date: [2022, 6, 15]
    }
  },
  {
    path: '2022_07_29+Heading-to-Amsterdam-and-going-to-MCH',
    component: Jul2022AmsterdamMchComponent,
    data: {
      title: 'Going back to Amsterdam and attending MCH!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I attended MayContainHackers 2022, and got into some shenanigans!',
      tags: [ TAG_CONFERENCE, TAG_VOLUNTEERING ],
      date: [2022, 7, 29]
    }
  },
  {
    path: '2022_07_31+my-gender-paradigm-shift',
    component: Jul2022GenderParadigmShiftComponent,
    data: {
      title: 'My gender paradigm shift.',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Gender identity! A fun topic, and my personal stake in it.',
      tags: [ TAG_PERSONAL ],
      date: [2022, 7, 31]
    }
  },
  {
    path: '2022_08_30+Heading-for-DEFCON',
    component: Aug2022GoingToDefconComponent,
    data: {
      title: 'I spoke at DEFCON30! (I also attended it!)',
      authors: [ authorList['AtomicMaya'] ],
      description: 'DEFCON30! All the shenanigans, all the hackers, all the bad luck?',
      tags: [ TAG_CONFERENCE, TAG_VOLUNTEERING, TAG_TALKS ],
      date: [2022, 8, 30]
    }
  },
  */
  // JAN DEALING WITH COVID
  // FEB New JOB
  // MARCH
  // APRIL DO CON 2
  // MAY RASPI | PARIS + WAVESTONE
  // JUNE EXAMN
  // JULY TRIP TO AMSTERDAM AND MCH
  // AUGUST -> DEFCON (RE: COVID)
];
