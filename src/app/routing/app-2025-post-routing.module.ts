import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorList } from "src/app/data/authors";
import { TAG_CHAOS, TAG_CONFERENCE, TAG_DEVELOPMENT, TAG_HACKING, TAG_INFOSEC, TAG_PERSONAL, TAG_RESPONSIBLE_DISCLOSURE, TAG_REVERSE_ENGINEERING, TAG_TALKS, TAG_TECHNICAL, TAG_TRAVEL, TAG_VOLUNTEERING } from 'src/app/utils/tags';
import { Jan2025Goingto38c3Component } from 'src/app/content/post/2025/250109-going-to-38c3/going-to-38c3.component';
import { Feb2025MayaDoesAnInfrastrukturComponent } from '../content/post/2025/250212-maya-does-an-infrastruktur/maya-does-an-infrastruktur.component';

export const subroutes2025: Routes = [
  {
    path: '2025_01_09+maya-went-to-38c3',
    component: Jan2025Goingto38c3Component,
    data: {
      title: 'maya went to 38c3!',
      authors: [authorList['AtomicMaya']],
      description: 'maya goes to congress again, volunteers a bit (this surp... this joke is getting old), and has a fun time.',
      tags: [TAG_CONFERENCE, TAG_CHAOS, TAG_TRAVEL, TAG_VOLUNTEERING],
      date: [2025, 1, 9],
      imageUrl: '/assets/images/post/2025/250109-38c3/38c3.svg',
      readingTime: 5
    }
  },/*
  {
    path: '2025_02_12+maya-does-an-infrastruktur',
    component: Feb2025MayaDoesAnInfrastrukturComponent,
    data: {
      title: 'maya does an infrastruktur!',
      authors: [authorList['AtomicMaya']],
      description: 'meow',
      tags: [TAG_DEVELOPMENT, TAG_TECHNICAL],
      date: [2025, 2, 12],
      //imageUrl: '/assets/images/post/2025/250109-38c3/38c3.svg',
      readingTime: 2
    }
  }*/
]
subroutes2025.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2025)],
  exports: [RouterModule]
})
export class Posts2025RoutingModule { }
