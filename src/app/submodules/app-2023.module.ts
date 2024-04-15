import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { Oct2022GenderParadigmShiftComponent } from "src/app/content/post/2022/221021-gender-paradigm-shift/gender-paradigm-shift.component";
import { Feb2023MScFunComponent } from 'src/app/content/post/2023/230215-msc-fun/msc-fun.component';
import { Feb2023BSidesCymruComponent } from 'src/app/content/post/2023/230216-bsides-cymru/bsides-cymru.component';
import { Mar2023RevampingMyBscProjectComponent } from 'src/app/content/post/2023/230309-revamping-my-bsc-project/revamping-my-bsc-project.component';
import { Apr2023YetAnotherNewJob } from "src/app/content/post/2023/230412-yet-another-new-job/yet-another-new-job.component";
import { May2023APhishingExpeditionComponent } from "src/app/content/post/2023/230511-a-phishing-expedition/a-phishing-expedition.component";
import { Jul2023JavascriptWarCrimesAtSteelconComponent } from "src/app/content/post/2023/230712-javascript-war-crimes-at-steelcon/javascript-war-crimes-at-steelcon.component";
import { Aug2023IWentToDefcon31Component } from "src/app/content/post/2023/230820-i-went-to-defcon-31/i-went-to-defcon31.component";
import { Aug2023IWentToC3CampComponent } from "src/app/content/post/2023/230821-i-went-to-c3camp/i-went-to-c3camp.component";
import { Sep2023AttendingBonclesidesComponent } from "src/app/content/post/2023/230930-attending-bonclesides/attending-bonclesides.component";
import { Oct2023ItsBeen3YearsComponent } from "src/app/content/post/2023/231015-its-been-3-years/its-been-3-years.component";
import { Oct2023MakingThisBlogEasierToDeployComponent } from "src/app/content/post/2023/231020-making-this-blog-easier-to-deploy/making-this-blog-easier-to-deploy.component";
import { Nov2023LDAPSoverAADDSHeadacheComponent } from "src/app/content/post/2023/231120-ldaps-over-aadds-headache/ldaps-over-aadds-headache.component";
import { Dec2023SpeakingAtBsidesLondonComponent } from "src/app/content/post/2023/231213-speaking-at-bsides-london/speaking-at-bsides-london.component";
import { Dec2023IWentToC3CongressComponent } from "src/app/content/post/2023/231231-i-went-to-c3congress/i-went-to-c3congress.component";
import { SharedModule } from "src/app/shared.module";


@NgModule({
  declarations: [
    Oct2022GenderParadigmShiftComponent,
    Feb2023BSidesCymruComponent,
    Feb2023MScFunComponent,
    Mar2023RevampingMyBscProjectComponent,
    Apr2023YetAnotherNewJob,
    May2023APhishingExpeditionComponent,
    Jul2023JavascriptWarCrimesAtSteelconComponent,
    Aug2023IWentToDefcon31Component,
    Aug2023IWentToC3CampComponent,
    Sep2023AttendingBonclesidesComponent,
    Oct2023ItsBeen3YearsComponent,
    Oct2023MakingThisBlogEasierToDeployComponent,
    Nov2023LDAPSoverAADDSHeadacheComponent,
    Dec2023SpeakingAtBsidesLondonComponent,
    Dec2023IWentToC3CongressComponent
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
