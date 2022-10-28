// tslint:disable: no-string-literal
import { Dec2020Osint4jComponent } from '../content/2020/201216-osint4j/osint4j.component';
import { Dec2020CoffeehouseComponent } from '../content/2020/201212-coffeehouse/coffeehouse.component';
import { Nov2020ReadingComponent } from '../content/2020/201112-reading/reading.component';
import { Nov2020MentoringComponent } from '../content/2020/201112-mentoring/mentoring.component';
import { Nov2020BsidesIslamabadComponent } from '../content/2020/201109-bsides-islamabad/bsides-islamabad.component';
import { Nov2020Beercon2Component } from '../content/2020/201102-beercon2/beercon2.component';
import { Oct2020ConintComponent } from '../content/2020/201019-conint/conint.component';
import { TAG_PERSONAL, TAG_CONFERENCE, TAG_CTF, TAG_OSINT, TAG_INFOSEC, TAG_IOT, TAG_TALKS, TAG_COMMUNITY, TAG_PROGRAMMING } from '../utils/tags';
import { Oct2020HelloWorldComponent } from '../content/2020/201015-hello-world/hello-world.component';
import { Routes } from '@angular/router';
import { authorList } from '../data/authors';

export const subroutes2020: Routes = [
  {
    path: '2020_10_15+Hello-world',
    component: Oct2020HelloWorldComponent,
    data: {
      title: 'Hello World!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'The first post on AtomicMaya\' Blog. Wow!',
      imageUrl: '/assets/images/2020/hello-world/hw.png',
      tags: [ TAG_PERSONAL ],
      date: [2021, 10, 15]
    }
  },
  {
    path: '2020_10_19+I-participated-in-the-CONINT-CTF',
    component: Oct2020ConintComponent,
    data: {
      title: 'I participated in the conINT CTF!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Discussing my participation in the conINT TraceLabs OSINT capture the flag event.',
      imageUrl: '/assets/images/2020/conint/conint_logo.png',
      tags: [ TAG_CONFERENCE, TAG_CTF, TAG_OSINT ],
      date: [2021, 10, 19]
    }
  },
  {
    path: '2020_11_02+I-gave-a-talk-at-BeerCon2',
    component: Nov2020Beercon2Component,
    data: {
      title: 'I gave a talk at BeerCon2!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I gave a talk at BeerCon2, a rookie infosec conference.',
      imageUrl: '/assets/images/2020/beercon2/bc2_zoombg.png',
      tags: [ TAG_INFOSEC, TAG_IOT, TAG_TALKS, TAG_CONFERENCE ],
      date: [2021, 11, 2]
    }
  },
  {
    path: '2020_11_09+I-talked-at-BSides-Islamabad',
    component: Nov2020BsidesIslamabadComponent,
    data: {
      title: 'I talked at BSides Islamabad!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I gave a talk at BSides Islamabad, Pakistan\'s first cybersecurity conference.',
      imageUrl: '/assets/images/2020/bsides-islamabad/card.png',
      tags: [ TAG_INFOSEC, TAG_IOT, TAG_TALKS, TAG_CONFERENCE ],
      date: [2021, 11, 9]
    }
  },
  {
    path: '2020_11_12+Mentoring',
    component: Nov2020MentoringComponent,
    data: {
      title: 'Mentoring!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I want to help you with your endeavors.',
      tags: [ TAG_PERSONAL, TAG_COMMUNITY ],
      date: [2021, 11, 12]
    }
  },
  {
    path: '2020_11_12+Reading-Materials',
    component: Nov2020ReadingComponent,
    data: {
      title: 'Reading Materials!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Some books I plan on reading.',
      tags: [ TAG_INFOSEC, TAG_PERSONAL ],
      date: [2021, 11, 12]
    }
  },
  {
    path: '2020_12_12+Security-Coffeehouse-BC2-Speaker-Interviews',
    component: Dec2020CoffeehouseComponent,
    data: {
      title: 'Security CoffeeHouse: BC2 Speaker Interviews',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I participated in James Bore\'s Security CoffeeHouse!',
      imageUrl: '/assets/images/2020/coffeehouse/coffeehouse_backdrop.png',
      tags: [ TAG_COMMUNITY, TAG_CONFERENCE ],
      date: [2021, 12, 12]
    }
  },
  {
    path: '2020_12_16+OSINT-Software-Development-Ideas',
    component: Dec2020Osint4jComponent,
    data: {
      title: 'OSINT: Software Development Ideas',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Some software ideas for OSINT.',
      tags: [ TAG_OSINT, TAG_PROGRAMMING ],
      date: [2021, 12, 16]
    }
  },
  /*
  {
    path: '2020_12_27+Heap-Override-CTF-Challenge-JS-Reversal-Adventures',
    component: HeapOverrideCTFComponent,
    data: {
      title: 'HeapOverride CTF Challenge: JS Reversal Adventures',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Doing some JS Reversal.',
      tags: [ TAG_CTF, TAG_PROGRAMMING ] }
  },*/
];
