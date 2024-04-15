import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { SharedModule } from "src/app/shared.module";
import { Jan2024NewYearNewStuffComponent } from "src/app/content/post/2024/240102-new-year-new-stuff/new-year-new-stuff.component";
import { Jan2024WhoopsThatsSomePIIComponent } from "../content/post/2024/240107-whoops-thats-some-pii/whoops-thats-some-pii.component";


@NgModule({
  declarations: [
    Jan2024NewYearNewStuffComponent,
    Jan2024WhoopsThatsSomePIIComponent
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
