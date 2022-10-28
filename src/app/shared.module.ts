import { CollapsibleComponent } from './common-ui/collapsible/collapsible.component';
import { TagViewerComponent } from './common-ui/tag-viewer/tag-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { WhenComponent } from './common-ui/when/when.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTweetModule } from 'ngx-tweet';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { PostBodyComponent } from './common-ui/post-body/post-body.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
  declarations: [
    WhenComponent,
    TagViewerComponent,
    PostBodyComponent,
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
    MarkdownModule,
    CollapsibleComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
