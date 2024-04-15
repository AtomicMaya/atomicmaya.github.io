import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jan2024NewYearNewStuffComponent } from '../content/post/2024/240102-new-year-new-stuff/new-year-new-stuff.component';
import { authorList } from "src/app/data/authors";
import { TAG_ACADEMIA, TAG_CONFERENCE, TAG_CTF, TAG_CYBERSEC, TAG_DEVELOPMENT, TAG_DEVOPS, TAG_INFOSEC, TAG_PERSONAL, TAG_PROFESSIONAL, TAG_PROGRAMMING, TAG_REVERSE_ENGINEERING, TAG_TALKS, TAG_TECHNICAL, TAG_TRAVEL } from 'src/app/utils/tags';
//import { Jan2024WhoopsThatsSomePIIComponent } from '../content/post/2024/240107-whoops-thats-some-pii/whoops-thats-some-pii.component';

export const subroutes2024: Routes = [
  {
    path: '2024_01_02+new-year-new-stuff',
    component: Jan2024NewYearNewStuffComponent,
    data: {
      title: 'New Year, New Stuff!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'A few changes to this blog.',
      tags: [TAG_PERSONAL],
      date: [2024, 1, 2],
      readingTime: 1
    }
  },
  /*
  {
    path: '2024_01_07+whoops-thats-some-pii',
    component: Jan2024WhoopsThatsSomePIIComponent,
    data: {
      title: 'Woops! That\'s some PII!',
      authors: [ authorList['AtomicMaya'] ],
      description: '',
      tags: [],
      date: [ 2024, 1, 7 ],
      readingTime: -1
    }
  },*/
]
subroutes2024.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2024)],
  exports: [RouterModule]
})
export class Posts2024RoutingModule { }
