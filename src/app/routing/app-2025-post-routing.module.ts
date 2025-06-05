import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorList } from "src/app/data/authors";
import { TAG_CHAOS, TAG_CONFERENCE, TAG_DEVELOPMENT, TAG_HACKING, TAG_INFOSEC, TAG_PERSONAL, TAG_RESPONSIBLE_DISCLOSURE, TAG_REVERSE_ENGINEERING, TAG_TALKS, TAG_TECHNICAL, TAG_TRAVEL, TAG_VOLUNTEERING } from 'src/app/utils/tags';
import { Jan2025Goingto38c3Component } from 'src/app/content/post/2025/250109-going-to-38c3/going-to-38c3.component';
import { Feb2025MayaDoesAnInfrastrukturComponent } from 'src/app/content/post/2025/250212-maya-does-an-infrastruktur/maya-does-an-infrastruktur.component';
import { Mar2025WorldOnFireComponent } from 'src/app/content/post/2025/250322-world-on-fire/world-on-fire.component';
import { Apr2025HackGlasgowComponent } from 'src/app/content/post/2025/250429-hack-glasgow/hack-glasgow.component';

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
  },
  {
    path: '2025_02_21+maya-does-an-infrastruktur',
    component: Feb2025MayaDoesAnInfrastrukturComponent,
    data: {
      title: 'maya does an infrastruktur!',
      authors: [authorList['AtomicMaya']],
      description: 'maya has decided that it should make its internet closer to home, maybe in a closet',
      tags: [TAG_DEVELOPMENT, TAG_TECHNICAL],
      date: [2025, 2, 21],
      //imageUrl: '/assets/images/post/2025/250109-38c3/38c3.svg',
      readingTime: 2
    }
  },
  {
    path: '2025_03_22+a-world-on-fire',
    component: Mar2025WorldOnFireComponent,
    data: {
      title: 'a world on fire, the attack on my community, and how i will not be made to yield in life',
      authors: [authorList['AtomicMaya']],
      description: 'i rant about the state of the world, and how it affects my community',
      tags: [TAG_PERSONAL],
      date: [2025, 3, 22],
      imageUrl: '/assets/images/post/2025/250322-world/flag.jpg',
      readingTime: 10
    }
  },
  {
    path: '2025_04_29+hack-glasgow',
    component: Apr2025HackGlasgowComponent,
    data: {
      title: 'going to Hack Glasgow, a new conference up in the west of Scotland.',
      authors: [authorList['AtomicMaya']],
      description: 'i went to glasgow to help out some friends with their new conference :)',
      tags: [TAG_CONFERENCE, TAG_TRAVEL, TAG_VOLUNTEERING],
      date: [2025, 4, 29],
      //imageUrl: '/assets/images/post/2025/250322-world/flag.jpg',
      readingTime: 4
    }
  },
]
subroutes2025.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2025)],
  exports: [RouterModule]
})
export class Posts2025RoutingModule { }
