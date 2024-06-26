// tslint:disable: no-string-literal
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Oct2020HelloWorldComponent } from 'src/app/content/post/2020/201015-hello-world/hello-world.component';
import { Oct2020ConintComponent } from 'src/app/content/post/2020/201019-conint/conint.component';
import { Nov2020Beercon2Component } from 'src/app/content/post/2020/201102-beercon2/beercon2.component';
import { Nov2020BsidesIslamabadComponent } from 'src/app/content/post/2020/201109-bsides-islamabad/bsides-islamabad.component';
import { Nov2020MentoringComponent } from 'src/app/content/post/2020/201112-mentoring/mentoring.component';
import { Nov2020ReadingComponent } from 'src/app/content/post/2020/201112-reading/reading.component';
import { Dec2020CoffeehouseComponent } from 'src/app/content/post/2020/201212-coffeehouse/coffeehouse.component';
import { authorList } from 'src/app/data/authors';
import { TAG_COMMUNITY, TAG_CONFERENCE, TAG_CTF, TAG_INFOSEC, TAG_IOT, TAG_OSINT, TAG_PERSONAL, TAG_TALKS } from 'src/app/utils/tags';

export const subroutes2020: Routes = [
  {
    path: '2020_10_15+hello-world',
    component: Oct2020HelloWorldComponent,
    data: {
      title: 'Hello World!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'The first post on AtomicMaya\'s Blog. Wow!',
      imageUrl: '/assets/images/post/2020/201015-hello-world/hw.png',
      tags: [ TAG_PERSONAL ],
      date: [2021, 10, 15],
      readingTime: 1
    }
  },
  {
    path: '2020_10_19+i-participated-in-the-conint-ctf',
    component: Oct2020ConintComponent,
    data: {
      title: 'I participated in the conINT CTF!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Discussing my participation in the conINT TraceLabs OSINT capture the flag event.',
      imageUrl: '/assets/images/post/2020/201019-conint/conint_logo.png',
      tags: [ TAG_CONFERENCE, TAG_CTF, TAG_OSINT ],
      date: [2021, 10, 19],
      readingTime: 5
    }
  },
  {
    path: '2020_11_02+i-gave-a-talk-at-beercon2',
    component: Nov2020Beercon2Component,
    data: {
      title: 'I gave a talk at BeerCon2!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I gave a talk at BeerCon2, a rookie infosec conference.',
      imageUrl: '/assets/images/post/2020/201102-beercon2/bc2_zoombg.png',
      tags: [ TAG_INFOSEC, TAG_IOT, TAG_TALKS, TAG_CONFERENCE ],
      date: [2021, 11, 2],
      readingTime: 10
    }
  },
  {
    path: '2020_11_09+i-talked-at-bsides-islamabad',
    component: Nov2020BsidesIslamabadComponent,
    data: {
      title: 'I talked at BSides Islamabad!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I gave a talk at BSides Islamabad, Pakistan\'s first cybersecurity conference.',
      imageUrl: '/assets/images/post/2020/201109-bsides-islamabad/card.png',
      tags: [ TAG_INFOSEC, TAG_IOT, TAG_TALKS, TAG_CONFERENCE ],
      date: [2021, 11, 9],
      readingTime: 3
    }
  },
  {
    path: '2020_11_12+mentoring',
    component: Nov2020MentoringComponent,
    data: {
      title: 'Mentoring!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I want to help you with your endeavors.',
      tags: [ TAG_PERSONAL, TAG_COMMUNITY ],
      date: [2021, 11, 12],
      readingTime: 2
    }
  },
  {
    path: '2020_11_12+reading-materials',
    component: Nov2020ReadingComponent,
    data: {
      title: 'Reading Materials!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Some books I plan on reading.',
      tags: [ TAG_INFOSEC, TAG_PERSONAL ],
      date: [2021, 11, 12],
      readingTime: 1
    }
  },
  {
    path: '2020_12_12+security-coffeehouse-bc2-speaker-interviews',
    component: Dec2020CoffeehouseComponent,
    data: {
      title: 'Security CoffeeHouse: BC2 Speaker Interviews',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I participated in James Bore\'s Security CoffeeHouse!',
      imageUrl: '/assets/images/post/2020/201212-coffeehouse/coffeehouse_backdrop.png',
      tags: [ TAG_COMMUNITY, TAG_CONFERENCE ],
      date: [2021, 12, 12],
      readingTime: 2
    }
  },
  /*{
    path: '2020_12_16+osint-software-development-ideas',
    component: Dec2020Osint4jComponent,
    data: {
      title: 'OSINT: Software Development Ideas',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Some software ideas for OSINT.',
      tags: [ TAG_OSINT, TAG_PROGRAMMING ],
      date: [2021, 12, 16]
    }
  },*/
  /*
  {
    path: '2020_12_27+heap-override-ctf-challenge-js-reversal-adventures',
    component: HeapOverrideCTFComponent,
    data: {
      title: 'HeapOverride CTF Challenge: JS Reversal Adventures',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Doing some JS Reversal.',
      tags: [ TAG_CTF, TAG_PROGRAMMING ] }
  },*/
];
subroutes2020.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2020)],
  exports: [RouterModule]
})
export class Posts2020RoutingModule { }
