import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Oct2022GenderParadigmShiftComponent } from "src/app/content/post/2022/221021-gender-paradigm-shift/gender-paradigm-shift.component";
import { Feb2023MScFunComponent } from "src/app/content/post/2023/230215-msc-fun/msc-fun.component";
import { Feb2023BSidesCymruComponent } from "src/app/content/post/2023/230216-bsides-cymru/bsides-cymru.component";
import { Mar2023RevampingMyBscProjectComponent } from 'src/app/content/post/2023/230309-revamping-my-bsc-project/revamping-my-bsc-project.component';
import { Apr2023YetAnotherNewJob } from 'src/app/content/post/2023/230412-yet-another-new-job/yet-another-new-job.component';
import { May2023APhishingExpeditionComponent } from 'src/app/content/post/2023/230511-a-phishing-expedition/a-phishing-expedition.component';
import { Jul2023JavascriptWarCrimesAtSteelconComponent } from 'src/app/content/post/2023/230712-javascript-war-crimes-at-steelcon/javascript-war-crimes-at-steelcon.component';
import { Aug2023IWentToDefcon31Component } from 'src/app/content/post/2023/230820-i-went-to-defcon-31/i-went-to-defcon31.component';
import { Aug2023IWentToC3CampComponent } from 'src/app/content/post/2023/230821-i-went-to-c3camp/i-went-to-c3camp.component';
import { Sep2023AttendingBonclesidesComponent } from 'src/app/content/post/2023/230930-attending-bonclesides/attending-bonclesides.component';
import { Oct2023ItsBeen3YearsComponent } from 'src/app/content/post/2023/231015-its-been-3-years/its-been-3-years.component';
import { Oct2023MakingThisBlogEasierToDeployComponent } from 'src/app/content/post/2023/231020-making-this-blog-easier-to-deploy/making-this-blog-easier-to-deploy.component';
import { Dec2023SpeakingAtBsidesLondonComponent } from 'src/app/content/post/2023/231213-speaking-at-bsides-london/speaking-at-bsides-london.component';
import { Dec2023IWentToC3CongressComponent } from 'src/app/content/post/2023/231231-i-went-to-c3congress/i-went-to-c3congress.component';
import { authorList } from "src/app/data/authors";
import { TAG_ACADEMIA, TAG_CONFERENCE, TAG_CTF, TAG_CYBERSEC, TAG_DEVELOPMENT, TAG_DEVOPS, TAG_INFOSEC, TAG_PERSONAL, TAG_PROFESSIONAL, TAG_PROGRAMMING, TAG_REVERSE_ENGINEERING, TAG_TALKS, TAG_TECHNICAL, TAG_TRAVEL } from 'src/app/utils/tags';

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
      title: 'I went to Wales for BSides Cymru!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'BSides Cymru, or why I went to hang out with a bunch of trans and queer folk in Wales',
      imageUrl: '/assets/images/post/2023/230216-bsides-cymru/bsides-cymru-logo.png',
      tags: [ TAG_CONFERENCE, TAG_INFOSEC, TAG_TRAVEL, TAG_TALKS, TAG_CYBERSEC ],
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
      imageUrl: '/assets/images/post/2022/221021-gender/trans-flag.png',
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
    path: '2023_04_12+yet-another-new-job',
    component: Apr2023YetAnotherNewJob,
    data: {
      title: 'Yet another new job.',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I have a new job, and am leaving academia.',
      tags: [ TAG_PERSONAL, TAG_PROFESSIONAL ],
      date: [2023, 4, 12],
      readingTime: 10
    }
  },
  {
    path: '2023_05_11+a-phishing-expedition',
    component: May2023APhishingExpeditionComponent,
    data: {
      title: 'A Phishing Expedition!',
      authors : [ authorList['AtomicMaya'] ],
      description: 'I somehow got involved in analyzing a phishing kit that was making the rounds... So let\'s talk about its technical aspects.',
      tags: [ TAG_INFOSEC, TAG_CYBERSEC, TAG_DEVELOPMENT, TAG_REVERSE_ENGINEERING, TAG_CYBERSEC, TAG_TECHNICAL ],
      date: [2023, 5, 11],
      readingTime: 15
    }
  },
  {
    path: '2023_07_12+javascript-war-crimes-at-steelcon',
    component: Jul2023JavascriptWarCrimesAtSteelconComponent,
    data: {
      title: 'JavaScript war crimes! At SteelCon.',
      authors : [ authorList['AtomicMaya'] ],
      description: 'Maya is back - with a vengeance - to teach people about JSFuck.',
      tags: [ TAG_INFOSEC, TAG_PROGRAMMING, TAG_DEVELOPMENT, TAG_REVERSE_ENGINEERING, TAG_CONFERENCE, TAG_TALKS, TAG_TRAVEL, TAG_CYBERSEC, TAG_TECHNICAL ],
      date: [2023, 7, 12],
      readingTime: 5
    }
  },
  {
    path: '2023_08_20+i-went-to-defcon-31',
    component: Aug2023IWentToDefcon31Component,
    data: {
      title: 'I went to DEFCON31!',
      authors : [ authorList['AtomicMaya'] ],
      description: 'I have once more been graced with the opportunity to head to Vegas, for one of the worlds\' largest hacker conferences.',
      tags: [ TAG_INFOSEC, TAG_CONFERENCE, TAG_TRAVEL, TAG_CYBERSEC ],
      date: [2023, 8, 20],
      readingTime: 8
    }
  },
  {
    path: '2023_08_21+i-went-to-c3camp',
    component: Aug2023IWentToC3CampComponent,
    data: {
      title: 'I went to C3Camp!',
      authors : [ authorList['AtomicMaya'] ],
      description: 'Chaos Computer Camp, or how a bunch of hackers and makers in a field in Germany make for quite a cool event!',
      tags: [ TAG_INFOSEC, TAG_CONFERENCE, TAG_TRAVEL, TAG_CYBERSEC ],
      date: [2023, 8, 21],
      readingTime: 12
    }
  },
  {
    path: '2023_09_30+attending-bonclesides',
    component: Sep2023AttendingBonclesidesComponent,
    data: {
      title: 'Attending BoncleSides!',
      authors : [ authorList['AtomicMaya'] ],
      description: 'I went to Newcastle upon Tyne to attend and speak at a conference. I ended up also winning second place at the CTF.',
      tags: [ TAG_INFOSEC, TAG_CTF, TAG_CONFERENCE, TAG_TALKS, TAG_TRAVEL, TAG_CYBERSEC ],
      date: [2023, 9, 30],
      readingTime: 4
    }
  },
  {
    path: '2023_10_15+its-been-3-years',
    component: Oct2023ItsBeen3YearsComponent,
    data: {
      title: 'It\'s been 3 years.',
      authors : [ authorList['AtomicMaya'] ],
      description: '3 years, 54 blog posts, a bit of a brain dump.',
      tags: [ TAG_PERSONAL ],
      date: [2023, 10, 15],
      readingTime: 2
    }
  },
  {
    path: '2023_10_20+making-this-blog-easier-to-deploy',
    component: Oct2023MakingThisBlogEasierToDeployComponent,
    data: {
      title: 'Making this blog easier to deploy!',
      authors : [ authorList['AtomicMaya'] ],
      description: 'Blogging, on the move?',
      tags: [ TAG_PROGRAMMING, TAG_TECHNICAL, TAG_DEVELOPMENT ],
      date: [2023, 10, 20],
      readingTime: 3
    }
  },
  /*{
    path: '2023_11_20+ldaps-over-aadds-headache',
    component: Nov2023LDAPSoverAADDSHeadacheComponent,
    data: {
      title: 'LDAPS! over AADDS. (headache intensifies)',
      authors : [ authorList['AtomicMaya'] ],
      description: '',
      tags: [ TAG_PROFESSIONAL, TAG_TECHNICAL, TAG_DEVELOPMENT ],
      date: [2023, 11, 20],
      readingTime: -1
    }
  },*/
  {
    path: '2023_12_13+speaking-at-bsides-london',
    component: Dec2023SpeakingAtBsidesLondonComponent,
    data: {
      title: 'I somehow spoke at BSides London! (an unscheduled development)',
      authors : [ authorList['AtomicMaya'] ],
      description: 'BSides London! (I failed the "Maya don\'t speak at a BSides challenge" again)',
      tags: [ TAG_TALKS, TAG_TRAVEL, TAG_CONFERENCE, TAG_CYBERSEC ],
      date: [2023, 12, 13],
      readingTime: 5
    }
  },
  {
    path: '2023_12_31+i-went-to-c3-congress',
    component: Dec2023IWentToC3CongressComponent,
    data: {
      title: 'Attending Chaos Congress, a highlight to close off the year.',
      authors : [ authorList['AtomicMaya'] ],
      description: 'Chaos Congress, the perfect place for this chaos goose to end the year.',
      tags: [ TAG_TRAVEL, TAG_CONFERENCE ],
      date: [2023, 12, 31],
      readingTime: 10
    }
  }
]
subroutes2023.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2023)],
  exports: [RouterModule]
})
export class Posts2023RoutingModule { }
