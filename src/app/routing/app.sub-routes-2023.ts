import { Routes } from "@angular/router";
import { Oct2022GenderParadigmShiftComponent } from "../content/2022/221021-gender-paradigm-shift/gender-paradigm-shift.component";
import { Feb2023BSidesCymruComponent } from "../content/2023/230216-bsides-cymru/bsides-cymru.component";
import { Feb2023MScFunComponent } from "../content/2023/230216-msc-fun/msc-fun.component";
import { authorList } from "../data/authors";
import { TAG_ACADEMIA, TAG_PERSONAL } from "../utils/tags";

export const subroutes2023: Routes = [
  // JANUARY -> MSC Fun!
  // FEBRUARY -> BSIDES CYMRU
  {
    path: '2023_02_16+going-to-bsides-cymru',
    component: Feb2023BSidesCymruComponent,
    data: {
      title: 'I went to Wales for BSides Cymru',
      authors: [ authorList['AtomicMaya'] ],
      description: 'BSides Cymru, or why I went to hang out with a bunch of trans and queer folk in Wales',
      tags: [ TAG_PERSONAL ],
      date: [2023, 2, 16]
    }
  },
  {
    path: '2023_02_16+msc-fun',
    component: Feb2023MScFunComponent,
    data: {
      title: 'I finished my Master\'s degree!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Explaining the conspicuous disappearance of my Internet self. (ish)',
      tags: [ TAG_ACADEMIA ],
      date: [2023, 2, 16]
    }
  },
  {
    path: '2023_02_17+gender-paradigm-shift',
    component: Oct2022GenderParadigmShiftComponent,
    data: {
      title: 'My gender paradigm shift.',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Gender identity! A fun topic, and my personal stake in it.',
      tags: [ TAG_PERSONAL ],
      date: [2023, 2, 17]
    }
  },
]
