// tslint:disable: no-string-literal
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorList } from 'src/app/data/authors';
import { WalkthroughTHMDec2022AdventOfCyberComponent } from 'src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/advent-of-cyber.component';
import { WalkthroughTHMDec2022AdventOfCyberComponentDay01 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-01/advent-of-cyber-day-01.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay02 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-02/advent-of-cyber-day-02.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay03 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-03/advent-of-cyber-day-03.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay04 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-04/advent-of-cyber-day-04.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay05 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-05/advent-of-cyber-day-05.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay06 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-06/advent-of-cyber-day-06.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay07 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-07/advent-of-cyber-day-07.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay08 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-08/advent-of-cyber-day-08.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay09 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-09/advent-of-cyber-day-09.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay10 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-10/advent-of-cyber-day-10.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay11 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-11/advent-of-cyber-day-11.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay12 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-12/advent-of-cyber-day-12.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay13 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-13/advent-of-cyber-day-13.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay14 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-14/advent-of-cyber-day-14.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay15 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-15/advent-of-cyber-day-15.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay16 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-16/advent-of-cyber-day-16.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay17 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-17/advent-of-cyber-day-17.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay18 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-18/advent-of-cyber-day-18.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay19 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-19/advent-of-cyber-day-19.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay20 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-20/advent-of-cyber-day-20.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay21 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-21/advent-of-cyber-day-21.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay22 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-22/advent-of-cyber-day-22.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay23 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-23/advent-of-cyber-day-23.component";
import { WalkthroughTHMDec2022AdventOfCyberComponentDay24 } from "src/app/content/walkthrough/tryhackme/2022/advent-of-cyber/day-24/advent-of-cyber-day-24.component";

export const subroutesTHM2022: Routes = [
  {
    path: '2022_12_01+advent-of-cyber-2022',
    component: WalkthroughTHMDec2022AdventOfCyberComponent,
    data: {
      title: 'Advent of Cyber 2022',
      authors: [authorList['AtomicMaya']],
      description: 'Advent of Cyber 2022 - Index',
      tags: [],
      date: [2022, 12, 1],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_01+advent-of-cyber-2022-day-01',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay01,
    data: {
      title: 'Advent of Cyber 2022 - Day 1',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 1 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 1],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_02+advent-of-cyber-2022-day-02',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay02,
    data: {
      title: 'Advent of Cyber 2022 - Day 2',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 2 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 2],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_03+advent-of-cyber-2022-day-03',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay03,
    data: {
      title: 'Advent of Cyber 2022 - Day 3',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 3 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 3],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_04+advent-of-cyber-2022-day-04',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay04,
    data: {
      title: 'Advent of Cyber 2022 - Day 4',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 4 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 4],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_05+advent-of-cyber-2022-day-05',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay05,
    data: {
      title: 'Advent of Cyber 2022 - Day 5',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 5 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 5],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_06+advent-of-cyber-2022-day-06',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay06,
    data: {
      title: 'Advent of Cyber 2022 - Day 6',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 6 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 6],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_07+advent-of-cyber-2022-day-07',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay07,
    data: {
      title: 'Advent of Cyber 2022 - Day 7',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 7 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 7],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_08+advent-of-cyber-2022-day-08',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay08,
    data: {
      title: 'Advent of Cyber 2022 - Day 8',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 8 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 8],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_09+advent-of-cyber-2022-day-09',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay09,
    data: {
      title: 'Advent of Cyber 2022 - Day 9',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 9 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 9],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_10+advent-of-cyber-2022-day-10',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay10,
    data: {
      title: 'Advent of Cyber 2022 - Day 10',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 10 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 10],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_11+advent-of-cyber-2022-day-11',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay11,
    data: {
      title: 'Advent of Cyber 2022 - Day 11',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 11 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 11],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_12+advent-of-cyber-2022-day-12',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay12,
    data: {
      title: 'Advent of Cyber 2022 - Day 12',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 12 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 12],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_13+advent-of-cyber-2022-day-13',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay13,
    data: {
      title: 'Advent of Cyber 2022 - Day 13',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 13 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 13],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_14+advent-of-cyber-2022-day-14',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay14,
    data: {
      title: 'Advent of Cyber 2022 - Day 14',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 14 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 14],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_15+advent-of-cyber-2022-day-15',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay15,
    data: {
      title: 'Advent of Cyber 2022 - Day 15',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 15 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 15],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_16+advent-of-cyber-2022-day-16',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay16,
    data: {
      title: 'Advent of Cyber 2022 - Day 16',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 16 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 16],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_17+advent-of-cyber-2022-day-17',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay17,
    data: {
      title: 'Advent of Cyber 2022 - Day 17',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 17 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 17],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_18+advent-of-cyber-2022-day-18',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay18,
    data: {
      title: 'Advent of Cyber 2022 - Day 18',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 18 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 18],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_19+advent-of-cyber-2022-day-19',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay19,
    data: {
      title: 'Advent of Cyber 2022 - Day 19',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 19 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 19],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_20+advent-of-cyber-2022-day-20',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay20,
    data: {
      title: 'Advent of Cyber 2022 - Day 20',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 20 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 20],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_21+advent-of-cyber-2022-day-21',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay21,
    data: {
      title: 'Advent of Cyber 2022 - Day 21',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 21 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 21],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_22+advent-of-cyber-2022-day-22',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay22,
    data: {
      title: 'Advent of Cyber 2022 - Day 22',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 22 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 22],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_23+advent-of-cyber-2022-day-23',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay23,
    data: {
      title: 'Advent of Cyber 2022 - Day 23',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 23 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 23],
      readingTime: 2,
    }
  },
  {
    path: '2022_12_24+advent-of-cyber-2022-day-24',
    component: WalkthroughTHMDec2022AdventOfCyberComponentDay24,
    data: {
      title: 'Advent of Cyber 2022 - Day 24',
      authors: [authorList['AtomicMaya']],
      description: 'Walkthrough - AoC 2022 - Day 24 - "Someone\'s coming to Town"',
      tags: [],
      date: [2022, 12, 24],
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
