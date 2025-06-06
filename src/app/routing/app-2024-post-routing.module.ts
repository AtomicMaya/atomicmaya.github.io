import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorList } from "src/app/data/authors";
import { TAG_CONFERENCE, TAG_HACKING, TAG_INFOSEC, TAG_PERSONAL, TAG_RESPONSIBLE_DISCLOSURE, TAG_REVERSE_ENGINEERING, TAG_TALKS, TAG_TRAVEL, TAG_VOLUNTEERING } from 'src/app/utils/tags';
import { Jan2024NewYearNewStuffComponent } from 'src/app/content/post/2024/240102-new-year-new-stuff/new-year-new-stuff.component';
import { Apr2024WhoopsThatsSomePIIComponent } from 'src/app/content/post/2024/240418-whoops-thats-some-pii/whoops-thats-some-pii.component';
import { Jun2024ElectromagneticFieldsComponent } from 'src/app/content/post/2024/240630-electromagnetic-fields/electromagnetic-fields.component';
import { Jul2024StartupWhiplashAtSteelconComponent } from 'src/app/content/post/2024/240727-startup-whiplash-at-steelcon/startup-whiplash-at-steelcon.component';
import { Aug2024Defcon32NewExperiencesComponent } from 'src/app/content/post/2024/240824-defcon32-new-experiences/defcon32-new-experiences.component';
import { Oct2024BSidesNewcastleComponent } from 'src/app/content/post/2024/241015-bsides-newcastle/bsides-newcastle.component';
import { Aug2024PNWAdventuresComponent } from 'src/app/content/post/2024/240815-pnw-adventures/pnw-adventures.component';
import { Dec2024BSidesLondonComponent } from 'src/app/content/post/2024/241223-bsides-london/bsides-london.component';

export const subroutes2024: Routes = [
  {
    path: '2024_01_02+new-year-new-stuff',
    component: Jan2024NewYearNewStuffComponent,
    data: {
      title: 'New Year, New Stuff!',
      authors: [authorList['AtomicMaya']],
      description: 'A few changes to this blog.',
      tags: [TAG_PERSONAL],
      date: [2024, 1, 2],
      readingTime: 1
    }
  },
  {
    path: '2024_04_18+whoops-thats-some-pii',
    component: Apr2024WhoopsThatsSomePIIComponent,
    data: {
      title: 'Whoops! That\'s some PII!',
      authors: [authorList['AtomicMaya']],
      description: 'I stumbled onto the database of a lumber/building materials buying group in Canada. A tale of responsible disclosure.',
      tags: [TAG_INFOSEC, TAG_RESPONSIBLE_DISCLOSURE, TAG_HACKING, TAG_REVERSE_ENGINEERING],
      date: [2024, 4, 18],
      readingTime: 21
    }
  },
  {
    path: '2024_06_30+electromagnetic-fields',
    component: Jun2024ElectromagneticFieldsComponent,
    data: {
      title: 'Electromagnetic Fields!',
      authors: [authorList['AtomicMaya']],
      description: 'I went to a field near Ledbury. Oh, and so did 3000 or so other hackers!',
      tags: [TAG_CONFERENCE, TAG_TRAVEL, TAG_VOLUNTEERING],
      date: [2024, 6, 30],
      imageUrl: '/assets/images/post/2024/240630-electromagnetic-fields/emf2024-logo.png',
      readingTime: 13
    }
  },
  {
    path: '2024_07_27+startup-whiplash-at-steelcon',
    component: Jul2024StartupWhiplashAtSteelconComponent,
    data: {
      title: 'Startup Whiplash! At Steelcon!',
      authors: [authorList['AtomicMaya']],
      description: 'One of my rants, this time with extra punch, sure to give whiplash.',
      tags: [TAG_CONFERENCE, TAG_TRAVEL, TAG_TALKS],
      date: [2024, 7, 27],
      imageUrl: '/assets/images/post/2024/240727-startup-whiplash-at-steelcon/steelcon-logo.png',
      readingTime: 3
    }
  },
  {
    path: '2024_08_15+pnw-adventures',
    component: Aug2024PNWAdventuresComponent,
    data: {
      title: 'Maya goes on holidays in the Pacific Northwest',
      authors: [authorList['AtomicMaya']],
      description: 'Maya decided to go on a pre-DEFCON visit to the US West Coast.',
      tags: [TAG_TRAVEL],
      date: [2024, 8, 15],
      readingTime: 5
    }
  },
  {
    path: '2024_08_24+defcon32-new-experiences',
    component: Aug2024Defcon32NewExperiencesComponent,
    data: {
      title: 'New experiences at DEFCON 32',
      authors: [authorList['AtomicMaya']],
      description: 'I went to DEFCON32 and volunteered.',
      tags: [TAG_CONFERENCE, TAG_TRAVEL, TAG_VOLUNTEERING],
      date: [2024, 8, 24],
      imageUrl: '/assets/images/post/2024/240820-defcon32-new-experiences/defcon-logo.jpg',
      readingTime: 6
    }
  },
  {
    path: '2024_10_15+bsides-newcastle',
    component: Oct2024BSidesNewcastleComponent,
    data: {
      title: 'Doing conference A/V shenanigans at BSides NCL.',
      authors: [authorList['AtomicMaya']],
      description: 'I went to a conference and got given things to do! (this surprises no one)',
      tags: [TAG_CONFERENCE, TAG_TRAVEL, TAG_VOLUNTEERING],
      date: [2024, 10, 15],
      imageUrl: '/assets/images/post/2024/241015-bsides-newcastle/boncl-logo.png',
      readingTime: 3
    }
  },
  {
    path: '2024_12_23+bsides-london',
    component: Dec2024BSidesLondonComponent,
    data: {
      title: 'bsides london, 0% attendance run (sorry)',
      authors: [authorList['AtomicMaya']],
      description: 'I went to a conference and did some volunteering! (this surprises no one)',
      tags: [TAG_CONFERENCE, TAG_TRAVEL, TAG_VOLUNTEERING],
      date: [2024, 12, 23],
      imageUrl: '/assets/images/post/2024/241223-bsides-london/bsides-london-logo.jpeg',
      readingTime: 2
    }
  }
]
subroutes2024.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2024)],
  exports: [RouterModule]
})
export class Posts2024RoutingModule { }
