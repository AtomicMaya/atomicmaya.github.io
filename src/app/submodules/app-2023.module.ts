import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { Oct2022GenderParadigmShiftComponent } from "../content/2022/221021-gender-paradigm-shift/gender-paradigm-shift.component";
import { Feb2023BSidesCymruComponent } from '../content/2023/230216-bsides-cymru/bsides-cymru.component';
import { Feb2023MScFunComponent } from '../content/2023/230215-msc-fun/msc-fun.component';
import { SharedModule } from "../shared.module";
import { Mar2023RevampingMyBscProjectComponent } from '../content/2023/230309-revamping-my-bsc-project/revamping-my-bsc-project.component';

@NgModule({
  declarations: [
    Oct2022GenderParadigmShiftComponent,
    Feb2023BSidesCymruComponent,
    Feb2023MScFunComponent,
    Mar2023RevampingMyBscProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule.forChild()
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2023Module { }
