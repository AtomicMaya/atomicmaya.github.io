import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { SharedModule } from "src/app/shared.module";
import { Jan2024NewYearNewStuffComponent } from "src/app/content/post/2024/240102-new-year-new-stuff/new-year-new-stuff.component";
import { Apr2024WhoopsThatsSomePIIComponent } from "src/app/content/post/2024/240418-whoops-thats-some-pii/whoops-thats-some-pii.component";
import { Jun2024ElectromagneticFieldsComponent } from "src/app/content/post/2024/240630-electromagnetic-fields/electromagnetic-fields.component";
import { Jul2024StartupWhiplashAtSteelconComponent } from "src/app/content/post/2024/240727-startup-whiplash-at-steelcon/startup-whiplash-at-steelcon.component";
import { Aug2024PNWAdventuresComponent } from "src/app/content/post/2024/240815-pnw-adventures/pnw-adventures.component";
import { Aug2024Defcon32NewExperiencesComponent } from "src/app/content/post/2024/240824-defcon32-new-experiences/defcon32-new-experiences.component";
import { Oct2024BSidesNewcastleComponent } from "src/app/content/post/2024/241015-bsides-newcastle/bsides-newcastle.component";


@NgModule({
  declarations: [
    Jan2024NewYearNewStuffComponent,
    Apr2024WhoopsThatsSomePIIComponent,
    Jun2024ElectromagneticFieldsComponent,
    Jul2024StartupWhiplashAtSteelconComponent,
    Aug2024PNWAdventuresComponent,
    Aug2024Defcon32NewExperiencesComponent,
    Oct2024BSidesNewcastleComponent
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
export class App2024Module { }
