import { CollapsibleComponent } from 'src/app/common-ui/collapsible/collapsible.component';
import { TagViewerComponent } from 'src/app/common-ui/tag-viewer/tag-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { WhenComponent } from 'src/app/common-ui/when/when.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTweetModule } from 'ngx-tweet';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { PostBodyComponent } from 'src/app/common-ui/post-body/post-body.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { ChallengeAuthorComponent } from "src/app/common-ui/walkthroughs/challenge-author/challenge-author.component";
import { ScrollToTopComponent } from "src/app/common-ui/walkthroughs/scroll-to-top/scroll-to-top.component";

@NgModule({
  declarations: [
    WhenComponent,
    TagViewerComponent,
    PostBodyComponent,
    ChallengeAuthorComponent,
    ScrollToTopComponent,
    CollapsibleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'atomicmaya-me' }),
    AppRoutingModule,
    CommonModule,
    NgxTweetModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          breaks: true,
        }
      }
    })
  ],
  exports: [
    CommonModule,
    NgxTweetModule,
    WhenComponent,
    TagViewerComponent,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxCaptchaModule,
    PostBodyComponent,
    CollapsibleComponent,
    MarkdownModule,
    ChallengeAuthorComponent,
    ScrollToTopComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
