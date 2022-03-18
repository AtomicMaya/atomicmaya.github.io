import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Jan2022KnightCTFCryptographyComponent } from '../content/2022/220130-knightctf-cryptography/knightctf-cryptography.component';
import { Jan2022KnightCTFMiscComponent } from '../content/2022/220130-knightctf-misc/knightctf-misc.component';
import { Jan2022KnightCTFProgrammingComponent } from '../content/2022/220130-knightctf-programming/knightctf-programming.component';
import { Jan2022KnightCTFReverseComponent } from '../content/2022/220130-knightctf-reverse-engineering/knightctf-reverse.component';


@NgModule({
  declarations: [
    Jan2022KnightCTFCryptographyComponent,
    Jan2022KnightCTFMiscComponent,
    Jan2022KnightCTFProgrammingComponent,
    Jan2022KnightCTFReverseComponent
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
