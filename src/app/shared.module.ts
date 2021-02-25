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

@NgModule({
  declarations: [
    WhenComponent,
    TagViewerComponent,
    PostBodyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'atomicnicos-me' }),
    AppRoutingModule,
    CommonModule,
    NgxTweetModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
