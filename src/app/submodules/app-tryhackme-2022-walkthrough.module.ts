import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { WalkthroughTHMDec2022AdventOfCyberComponent } from "src/app/content/walkthrough/tryhackme/2022/221201-advent-of-cyber/advent-of-cyber.component";
import { SharedModule } from "src/app/shared.module";


@NgModule({
  declarations: [
    WalkthroughTHMDec2022AdventOfCyberComponent
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
export class AppTryHackMe2022WalkthroughModule { }
