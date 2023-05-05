import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Oct2022GenderParadigmShiftComponent } from "../content/2022/221021-gender-paradigm-shift/gender-paradigm-shift.component";
import { Feb2023MScFunComponent } from "../content/2023/230215-msc-fun/msc-fun.component";
import { Feb2023BSidesCymruComponent } from "../content/2023/230216-bsides-cymru/bsides-cymru.component";
import { Mar2023RevampingMyBscProjectComponent } from '../content/2023/230309-revamping-my-bsc-project/revamping-my-bsc-project.component';
import { Mar2023APhishingExpeditionComponent as May2023APhishingExpeditionComponent } from '../content/2023/230318-a-phishing-expedition/a-phishing-expedition.component';
import { authorList } from "../data/authors";
import { TAG_ACADEMIA, TAG_PERSONAL, TAG_CONFERENCE, TAG_DEVELOPMENT, TAG_DEVOPS, TAG_INFOSEC, TAG_PROGRAMMING, TAG_TALKS, TAG_TRAVEL, TAG_CYBERSEC, TAG_REVERSE_ENGINEERING } from './../utils/tags';

export const subroutes2023: Routes = [
  {
    path: '2023_02_15+msc-fun',
    component: Feb2023MScFunComponent,
    data: {
      title: 'I finished my Master\'s degree!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Explaining the conspicuous disappearance of my Internet self. (ish)',
      tags: [ TAG_ACADEMIA ],
      date: [2023, 2, 15],
      readingTime: 4
    }
  },
  {
    path: '2023_02_16+going-to-bsides-cymru',
    component: Feb2023BSidesCymruComponent,
    data: {
      title: 'I went to Wales for BSides Cymru',
      authors: [ authorList['AtomicMaya'] ],
      description: 'BSides Cymru, or why I went to hang out with a bunch of trans and queer folk in Wales',
      imageUrl: '/assets/images/2023/230216-bsides-cymru/bsides-cymru-logo.png',
      tags: [ TAG_CONFERENCE, TAG_INFOSEC, TAG_TRAVEL, TAG_TALKS ],
      date: [2023, 2, 16],
      readingTime: 2
    }
  },
  {
    path: '2023_02_17+gender-paradigm-shift',
    component: Oct2022GenderParadigmShiftComponent,
    data: {
      title: 'My gender paradigm shift.',
      authors: [ authorList['AtomicMaya'] ],
      imageUrl: '/assets/images/2022/221021-gender/trans-flag.png',
      description: 'Gender identity! A fun topic, and my personal stake in it.',
      tags: [ TAG_PERSONAL ],
      date: [2023, 2, 17],
      readingTime: 10
    }
  },
  {
    path: '2023_03_09+revamping-my-bsc-project',
    component: Mar2023RevampingMyBscProjectComponent,
    data: {
      title: 'Revamping my Bachelor\'s project.',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I made a program to visualize Dominant Language Constellations in 3D, to digitize a process done until then with sticks and papier maché.',
      tags: [ TAG_ACADEMIA, TAG_PROGRAMMING, TAG_DEVOPS, TAG_DEVELOPMENT ],
      date: [2023, 3, 9],
      readingTime: 20
    }
  },
  {
    path: '2023_05_05+a-phishing-expedition',
    component: May2023APhishingExpeditionComponent,
    data: {
      title: 'A Phishing Expedition!',
      authors : [ authorList['AtomicMaya'] ],
      description: 'I somehow got involved in analyzing a phishing kit that was making the rounds... So let\'s talk about its technical aspects.',
      tags: [ TAG_INFOSEC, TAG_CYBERSEC, TAG_DEVELOPMENT, TAG_REVERSE_ENGINEERING ],
      date: [2023, 5, 5],
      readingTime: 15
    }
  }
]
subroutes2023.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2023)],
  exports: [RouterModule]
})
export class Posts2023RoutingModule { }
