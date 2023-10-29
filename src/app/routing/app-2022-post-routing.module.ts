// tslint:disable: no-string-literal
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jan2022CatchingCovidComponent } from 'src/app/content/post/2022/220115-catching-covid/catching-covid.component';
import { Jan2022KnightCTFAllComponent } from 'src/app/content/post/2022/220129-knightctf-all/knightctf-all.component';
import { Jan2022KnightCTFCryptographyComponent } from 'src/app/content/post/2022/220130-knightctf-cryptography/knightctf-cryptography.component';
import { Jan2022KnightCTFMiscComponent } from 'src/app/content/post/2022/220130-knightctf-misc/knightctf-misc.component';
import { Jan2022KnightCTFProgrammingComponent } from 'src/app/content/post/2022/220130-knightctf-programming/knightctf-programming.component';
import { Jan2022KnightCTFReverseComponent } from 'src/app/content/post/2022/220130-knightctf-reverse-engineering/knightctf-reverse.component';
import { Feb2022StartingANewJobComponent } from 'src/app/content/post/2022/220218-starting-a-new-job/starting-a-new-job.component';
import { Apr2022DigitalOverdoseConference2Component } from 'src/app/content/post/2022/220426-digital-overdose-conference2/digital-overdose-conference2.component';
import { May2022RaspiToolingComponent } from 'src/app/content/post/2022/220504-raspi-tooling/raspi-tooling.component';
import { May2022WavegameComponent } from 'src/app/content/post/2022/220515-wavegame/wavegame.component';
import { Jul2022AmsterdamMchComponent } from 'src/app/content/post/2022/220729-amsterdam-mch/amsterdam-mch.component';
import { Aug2022GoingToDefconComponent } from 'src/app/content/post/2022/220830-going-to-defcon/going-to-defcon.component';
import { Sep2022GoingToScotlandComponent } from 'src/app/content/post/2022/220930-going-to-scotland/going-to-scotland.component';
import { Oct2022Beercon4Component } from 'src/app/content/post/2022/221015-beercon4/beercon4.component';
import { Nov2022KoreaComponent } from 'src/app/content/post/2022/221117-korea/korea.component';
import { Dec2022BSidesLondonComponent } from 'src/app/content/post/2022/221220-bsides-london/bsides-london.component';
import { authorList } from 'src/app/data/authors';
import { TAG_ACADEMIA, TAG_CLOUD, TAG_COMMUNITY, TAG_CONFERENCE, TAG_CRYPTOGRAPHY, TAG_CTF, TAG_CYBERSEC, TAG_DEVELOPMENT, TAG_DEVOPS, TAG_INFOSEC, TAG_PERSONAL, TAG_PROFESSIONAL, TAG_PROGRAMMING, TAG_TALKS, TAG_TRAVEL, TAG_VOLUNTEERING, TAG_WRITEUP } from 'src/app/utils/tags';

export const subroutes2022: Routes = [
  {
    path: '2022_01_15+catching-covid',
    component: Jan2022CatchingCovidComponent,
    data: {
      title: 'Catching COVID, detailing my experience.',
      authors: [authorList['AtomicMaya']],
      description: 'I managed to catch COVID, here\'s my story about it.',
      tags: [TAG_PERSONAL],
      date: [2022, 1, 15],
      readingTime: 4
    }
  },
  {
    path: '2022_01_29+knight-ctf-2022-all-writeups',
    component: Jan2022KnightCTFAllComponent,
    data: {
      title: 'Participating in KnightCTF!',
      authors: [authorList['AtomicMaya']],
      description: 'I participated in KnightCTF alongside the team from Digital Overdose, wherein I successfully beat a few challenges.',
      imageUrl: '/assets/images/post/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_WRITEUP],
      date: [2022, 1, 29],
      readingTime: 3

    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-cryptography-writeups',
    component: Jan2022KnightCTFCryptographyComponent,
    data: {
      title: 'Dissecting the KnightCTF Cryptography challenges!',
      authors: [authorList['AtomicMaya']],
      description: 'KnightCTF! A write-up on solving challenges from the "Cryptography" category.',
      imageUrl: '/assets/images/post/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_CRYPTOGRAPHY, TAG_WRITEUP],
      date: [2022, 1, 30],
      readingTime: 10
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-misc-writeups',
    component: Jan2022KnightCTFMiscComponent,
    data: {
      title: 'Dissecting the KnightCTF Misc challenges!',
      authors: [authorList['AtomicMaya']],
      description: 'KnightCTF! A write-up on solving challenges from the "Misc" category.',
      imageUrl: '/assets/images/post/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_WRITEUP],
      date: [2022, 1, 30],
      readingTime: 5
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-programming-writeups',
    component: Jan2022KnightCTFProgrammingComponent,
    data: {
      title: 'Dissecting the KnightCTF Programming challenges!',
      authors: [authorList['AtomicMaya']],
      description: 'KnightCTF! A write-up on solving challenges from the "Programming" category.',
      imageUrl: '/assets/images/post/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_PROGRAMMING, TAG_WRITEUP],
      date: [2022, 1, 30],
      readingTime: 5
    }
  },
  {
    path: '2022_01_30+knight-ctf-2022-reverse-writeups',
    component: Jan2022KnightCTFReverseComponent,
    data: {
      title: 'Dissecting the KnightCTF Reverse Engineering challenges!',
      authors: [authorList['AtomicMaya']],
      description: 'KnightCTF! A write-up on solving challenges from the "Reverse Engineering" category.',
      imageUrl: '/assets/images/post/2022/220130-knightctf-assets/logo.png',
      tags: [TAG_CTF, TAG_WRITEUP],
      date: [2022, 1, 30],
      readingTime: 5
    }
  },
  {
    path: '2022_02_18+starting-a-new-job',
    component: Feb2022StartingANewJobComponent,
    data: {
      title: 'I started a new job!',
      authors: [authorList['AtomicMaya']],
      description: 'Going into a bit more detail about what I\'m currently working on!',
      tags: [TAG_PROFESSIONAL, TAG_PROGRAMMING, TAG_INFOSEC],
      date: [2022, 2, 18],
      readingTime: 2
    }
  },
  {
    path: '2022_04_26+running-the-digital-overdose-conference-again',
    component: Apr2022DigitalOverdoseConference2Component,
    data: {
      title: 'Digital Overdose Conference 2: We\'re doing this again!',
      authors: [authorList['AtomicMaya']],
      description: 'Going behind the scenes of the second iteration of the Digital Overdose Conference.',
      imageUrl: '/assets/images/post/2022/220426-digital-overdose-conference2/conference_cover_2022.png',
      tags: [TAG_CONFERENCE, TAG_COMMUNITY, TAG_INFOSEC, TAG_CYBERSEC, TAG_VOLUNTEERING],
      date: [2022, 4, 26],
      readingTime: 10
    }
  },
  {
    path: '2022_05_04+building-a-raspi-private-web-server',
    component: May2022RaspiToolingComponent,
    data: {
      title: 'Building a Raspberry Pi private web server!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Going behind the scenes on developping a private web service deployed on a Raspberry Pi.',
      tags: [ TAG_DEVELOPMENT, TAG_CYBERSEC, TAG_DEVOPS ],
      date: [2022, 5, 4],
      readingTime: 5
    }
  },
  {
    path: '2022_05_15+winning-the-wavegame',
    component: May2022WavegameComponent,
    data: {
      title: 'Going to Paris for the Wavegame cloud competition!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I went to Paris for the WaveGame competition, and we ended up winning!',
      tags: [ TAG_INFOSEC, TAG_CLOUD, TAG_DEVOPS, TAG_TRAVEL ],
      date: [2022, 5, 15],
      readingTime: 8
    }
  },
  {
    path: '2022_07_29+heading-to-Amsterdam-and-going-to-MCH',
    component: Jul2022AmsterdamMchComponent,
    data: {
      title: 'Going back to Amsterdam and attending MCH!',
      authors: [ authorList['AtomicMaya'] ],
      imageUrl: '/assets/images/post/2022/220729-amsterdam-mch/front-lights.jpg',
      description: 'I attended MayContainHackers 2022, and got into some shenanigans!',
      tags: [ TAG_CONFERENCE, TAG_VOLUNTEERING, TAG_TRAVEL ],
      date: [2022, 7, 29],
      readingTime: 5
    }
  },
  {
    path: '2022_08_30+heading-for-DEFCON',
    component: Aug2022GoingToDefconComponent,
    data: {
      title: 'I spoke at DEFCON30! (I also attended it!)',
      authors: [ authorList['AtomicMaya'] ],
      imageUrl: '/assets/images/post/2022/220830-going-to-defcon/defcon-logo.jpg',
      description: 'DEFCON30! All the shenanigans, all the hackers, all the bad luck?',
      tags: [ TAG_CONFERENCE, TAG_VOLUNTEERING, TAG_TALKS, TAG_TRAVEL ],
      date: [2022, 8, 30],
      readingTime: 6
    }
  },
  {
    path: '2022_09_30+travelling-to-scotland',
    component: Sep2022GoingToScotlandComponent,
    data: {
      title: 'I went to Scotland!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I attended a wedding in Scotland, and met up with some of my friends!',
      tags: [ TAG_PERSONAL, TAG_TRAVEL ],
      date: [2022, 9, 30],
      readingTime: 5
    }
  },
  {
    path: '2022_10_15+beercon4',
    component: Oct2022Beercon4Component,
    data: {
      title: 'Heading out to DTX360 and BeerCon4!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'BeerCon4, a cybersecurity event! (but at a trade show???)',
      tags: [ TAG_CONFERENCE, TAG_COMMUNITY, TAG_INFOSEC, TAG_TALKS, TAG_TRAVEL ],
      date: [2022, 10, 15],
      readingTime: 5
    }
  },
  {
    path: '2022_11_17+going-to-korea',
    component: Nov2022KoreaComponent,
    data: {
      title: 'I went to South Korea!',
      authors: [ authorList['AtomicMaya'] ],
      imageUrl: '/assets/images/post/2022/221117-korea/17.jpeg',
      description: 'A big university trip halfway around the world.',
      tags: [ TAG_TRAVEL, TAG_ACADEMIA ],
      date: [2022, 11, 17],
      readingTime: 10
    }
  },
  {
    path: '2022_12_20+going-to-bsides-london',
    component: Dec2022BSidesLondonComponent,
    data: {
      title: 'Heading out to BSides London!',
      authors: [ authorList['AtomicMaya'] ],
      imageUrl: '/assets/images/post/2022/221220-bsides-london/bsides-logo.jpg',
      description: 'BSides London, one of the UK\'s biggest BSides events, and the friends that were made along the way.',
      tags: [ TAG_CONFERENCE, TAG_COMMUNITY, TAG_INFOSEC, TAG_TRAVEL ],
      date: [2022, 12, 20],
      readingTime: 4
    }
  },
];
subroutes2022.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2022)],
  exports: [RouterModule]
})
export class Posts2022RoutingModule { }
