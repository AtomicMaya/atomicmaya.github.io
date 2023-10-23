// tslint:disable: no-string-literal
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorList } from '../data/authors';
import { WalkthroughTHMDec2022AdventOfCyberComponent } from '../content/walkthrough/tryhackme/2022/221201-advent-of-cyber/advent-of-cyber.component';

export const subroutesTHM2022: Routes = [
  {
    path: '2022_12_01+Advent-of-Cyber-2022',
    component: WalkthroughTHMDec2022AdventOfCyberComponent,
    data: {
      title: 'Advent of Cyber 2022',
      authors : [ authorList['AtomicMaya'] ],
      description: '',
      tags: [ ],
      date: [2022, 12, 1],
      readingTime: 2,
    }
  },
];
subroutesTHM2022.forEach((r) => { r.data.path = r.path; r.data.platform = 'tryhackme'; })

@NgModule({
  imports: [RouterModule.forChild(subroutesTHM2022)],
  exports: [RouterModule]
})
export class TryHackMeWalkthroughs2022RoutingModule { }
