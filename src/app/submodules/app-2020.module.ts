import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { Oct2020HelloWorldComponent } from '../content/2020/201015-hello-world/hello-world.component';
import { Oct2020ConintComponent } from '../content/2020/201019-conint/conint.component';
import { Nov2020Beercon2Component } from '../content/2020/201102-beercon2/beercon2.component';
import { Nov2020BsidesIslamabadComponent } from '../content/2020/201109-bsides-islamabad/bsides-islamabad.component';
import { Nov2020MentoringComponent } from '../content/2020/201112-mentoring/mentoring.component';
import { Nov2020ReadingComponent } from '../content/2020/201112-reading/reading.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Dec2020CoffeehouseComponent } from '../content/2020/201212-coffeehouse/coffeehouse.component';
import { Dec2020Osint4jComponent } from '../content/2020/201216-osint4j/osint4j.component';
import { Dec2020HeapOverrideCTFComponent } from '../content/2020/201227-heap-override-ctf/heap-override-ctf.component';

@NgModule({
  declarations: [
    Oct2020HelloWorldComponent,
    Oct2020ConintComponent,
    Nov2020Beercon2Component,
    Nov2020BsidesIslamabadComponent,
    Nov2020MentoringComponent,
    Nov2020ReadingComponent,
    Dec2020CoffeehouseComponent,
    Dec2020Osint4jComponent,
    Dec2020HeapOverrideCTFComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2020Module { }
