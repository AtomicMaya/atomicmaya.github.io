import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { SharedModule } from "../shared.module";
import { WalkthroughTHMDec2022AdventOfCyberComponent } from "../content/walkthrough/tryhackme/2022/221201-advent-of-cyber/advent-of-cyber.component";


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
