import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { SharedModule } from "src/app/shared.module";
import { Jan2025Goingto38c3Component } from "src/app/content/post/2025/250109-going-to-38c3/going-to-38c3.component";
import { Feb2025MayaDoesAnInfrastrukturComponent } from "src/app/content/post/2025/250212-maya-does-an-infrastruktur/maya-does-an-infrastruktur.component";
import { Apr2025HackGlasgowComponent } from 'src/app/content/post/2025/250429-hack-glasgow/hack-glasgow.component';
import { May2025_TripToMontreal_Component } from "src/app/content/post/2025/250518-a-trip-to-montreal/a-trip-to-montreal.component";
import { Jul2025_SemesterInReview_Component } from "src/app/content/post/2025/250712-a-semester-in-review/a-semester-in-review.component";
import { Aug2025_WHY2025_Component } from "src/app/content/post/2025/250831-why2025-a-dutch-hacker-camp-experience/why2025-a-dutch-hacker-camp-experience.component";
import {Sep2025_SmallInternet_Component} from "../content/post/2025/250913-small-internet/small-internet.component";
import { Nov2025_GenericUpdate_Component } from "../content/post/2025/251115-things-ive-been-up-to/things-ive-been-up-to.component";
import { Dec2025_OnceMoreToBSidesLondon_Component } from "../content/post/2025/251217-once-more-to-bsides-london/once-more-to-bsides-london.component";

@NgModule({
  declarations: [
    Jan2025Goingto38c3Component,
    Feb2025MayaDoesAnInfrastrukturComponent,
    Apr2025HackGlasgowComponent,
    May2025_TripToMontreal_Component,
    Jul2025_SemesterInReview_Component,
    Aug2025_WHY2025_Component,
    Sep2025_SmallInternet_Component,
    Nov2025_GenericUpdate_Component,
    Dec2025_OnceMoreToBSidesLondon_Component
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
export class App2025Module { }
