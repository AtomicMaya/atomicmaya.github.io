import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { SharedModule } from "src/app/shared.module";
import { Jan2025Goingto38c3Component } from "src/app/content/post/2025/250109-going-to-38c3/going-to-38c3.component";
import { Feb2025MayaDoesAnInfrastrukturComponent } from "src/app/content/post/2025/250212-maya-does-an-infrastruktur/maya-does-an-infrastruktur.component";
import { Mar2025WorldOnFireComponent } from 'src/app/content/post/2025/250322-world-on-fire/world-on-fire.component';
import { Apr2025HackGlasgowComponent } from 'src/app/content/post/2025/250429-hack-glasgow/hack-glasgow.component';

@NgModule({
  declarations: [
    Jan2025Goingto38c3Component,
    Feb2025MayaDoesAnInfrastrukturComponent,
    Mar2025WorldOnFireComponent,
    Apr2025HackGlasgowComponent
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
