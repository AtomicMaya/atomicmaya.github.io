import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jan2024NewYearNewStuffComponent } from 'src/app/content/post/2024/240102-new-year-new-stuff/new-year-new-stuff.component';
import { Apr2024WhoopsThatsSomePIIComponent } from 'src/app/content/post/2024/240418-whoops-thats-some-pii/whoops-thats-some-pii.component';
import { authorList } from "src/app/data/authors";
import { TAG_HACKING, TAG_INFOSEC, TAG_PERSONAL, TAG_RESPONSIBLE_DISCLOSURE, TAG_REVERSE_ENGINEERING } from 'src/app/utils/tags';

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
  {
    path: '2024_04_18+whoops-thats-some-pii',
    component: Apr2024WhoopsThatsSomePIIComponent,
    data: {
      title: 'Whoops! That\'s some PII!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I stumbled onto the database of a lumber/building materials buying group in Canada. A tale of responsible disclosure.',
      tags: [TAG_INFOSEC, TAG_RESPONSIBLE_DISCLOSURE, TAG_HACKING],
      date: [ 2024, 4, 18 ],
      readingTime: 21
    }
  },
]
subroutes2024.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2024)],
  exports: [RouterModule]
})
export class Posts2024RoutingModule { }
