import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Jan2022KnightCTFCryptographyComponent } from '../content/2022/220130-knightctf-cryptography/knightctf-cryptography.component';
import { Jan2022KnightCTFMiscComponent } from '../content/2022/220130-knightctf-misc/knightctf-misc.component';
import { Jan2022KnightCTFProgrammingComponent } from '../content/2022/220130-knightctf-programming/knightctf-programming.component';
import { Jan2022KnightCTFReverseComponent } from '../content/2022/220130-knightctf-reverse-engineering/knightctf-reverse.component';
import { Jan2022KnightCTFAllComponent } from '../content/2022/220129-knightctf-all/knightctf-all.component';
import { Jan2022CatchingCovidComponent } from '../content/2022/220115-catching-covid/catching-covid.component';
import { Feb2022StartingANewJobComponent } from '../content/2022/220218-starting-a-new-job/starting-a-new-job.component';
import { Apr2022DigitalOverdoseConference2Component } from '../content/2022/220426-digital-overdose-conference2/digital-overdose-conference2.component';
import { May2022WavegameComponent } from '../content/2022/220515-wavegame/wavegame.component';
import { Jun2022SummerExamSessionComponent } from '../content/2022/220615-summer-exam-session/summer-exam-session.component';
import { Jul2022AmsterdamMchComponent } from '../content/2022/220729-amsterdam-mch/amsterdam-mch.component';
import { Aug2022GoingToDefconComponent } from '../content/2022/220830-going-to-defcon/going-to-defcon.component';
import { May2022RaspiToolingComponent } from '../content/2022/220504-raspi-tooling/raspi-tooling.component';
import { Oct2022GenderParadigmShiftComponent } from '../content/2022/221015-gender-paradigm-shift/gender-paradigm-shift.component';


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
    Jun2022SummerExamSessionComponent,
    Jul2022AmsterdamMchComponent,
    Oct2022GenderParadigmShiftComponent,
    Aug2022GoingToDefconComponent,
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
