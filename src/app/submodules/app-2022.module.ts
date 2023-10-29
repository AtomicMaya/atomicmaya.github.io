import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Jan2022CatchingCovidComponent } from 'src/app/content/post/2022/220115-catching-covid/catching-covid.component';
import { Jan2022KnightCTFAllComponent } from 'src/app/content/post/2022/220129-knightctf-all/knightctf-all.component';
import { Jan2022KnightCTFCryptographyComponent } from 'src/app/content/post/2022/220130-knightctf-cryptography/knightctf-cryptography.component';
import { Jan2022KnightCTFMiscComponent } from 'src/app/content/post/2022/220130-knightctf-misc/knightctf-misc.component';
import { Jan2022KnightCTFProgrammingComponent } from 'src/app/content/post/2022/220130-knightctf-programming/knightctf-programming.component';
import { Jan2022KnightCTFReverseComponent } from 'src/app/content/post/2022/220130-knightctf-reverse-engineering/knightctf-reverse.component';
import { Feb2022StartingANewJobComponent } from 'src/app/content/post/2022/220218-starting-a-new-job/starting-a-new-job.component';
import { Apr2022DigitalOverdoseConference2Component } from 'src/app/content/post/2022/220426-digital-overdose-conference2/digital-overdose-conference2.component';
import { May2022RaspiToolingComponent } from 'src/app/content/post/2022/220504-raspi-tooling/raspi-tooling.component';
import { May2022WavegameComponent } from 'src/app/content/post/2022/220515-wavegame/wavegame.component';
import { Jul2022AmsterdamMchComponent } from 'src/app/content/post/2022/220729-amsterdam-mch/amsterdam-mch.component';
import { Aug2022GoingToDefconComponent } from 'src/app/content/post/2022/220830-going-to-defcon/going-to-defcon.component';
import { Sep2022GoingToScotlandComponent } from 'src/app/content/post/2022/220930-going-to-scotland/going-to-scotland.component';
import { Oct2022Beercon4Component } from 'src/app/content/post/2022/221015-beercon4/beercon4.component';
import { Nov2022KoreaComponent } from 'src/app/content/post/2022/221117-korea/korea.component';
import { Dec2022BSidesLondonComponent } from 'src/app/content/post/2022/221220-bsides-london/bsides-london.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    Jan2022CatchingCovidComponent,
    Jan2022KnightCTFAllComponent,
    Jan2022KnightCTFCryptographyComponent,
    Jan2022KnightCTFMiscComponent,
    Jan2022KnightCTFProgrammingComponent,
    Jan2022KnightCTFReverseComponent,
    Feb2022StartingANewJobComponent,
    Apr2022DigitalOverdoseConference2Component,
    May2022RaspiToolingComponent,
    May2022WavegameComponent,
    Jul2022AmsterdamMchComponent,
    Aug2022GoingToDefconComponent,
    Sep2022GoingToScotlandComponent,
    Oct2022Beercon4Component,
    Nov2022KoreaComponent,
    Dec2022BSidesLondonComponent
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
export class App2022Module { }
