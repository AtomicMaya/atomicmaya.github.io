import "prismjs";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-cpp.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-php.min.js";
import "prismjs/components/prism-python.min.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/prism.js";

import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './common-ui/footer/footer.component';
import { HeaderComponent } from './common-ui/header/header.component';
import { MainBodyComponent } from './common-ui/main-body/main-body.component';
import { NotFound404Component } from './common-ui/not-found404/not-found404.component';
import { PostInventoryDisplayComponent } from './common-ui/post-inventory-display/post-inventory-display.component';
import { PostsCardCompactComponent } from './common-ui/post-inventory-display/posts-card/posts-card-compact/posts-card-compact.component';
import { PostsCardCompactHeaderComponent } from './common-ui/post-inventory-display/posts-card/posts-card-header/posts-card-compact-header.component';
import { PostsCardNormalComponent } from './common-ui/post-inventory-display/posts-card/posts-card-normal/posts-card-normal.component';
import { PostsFilteredByAuthorComponent } from './common-ui/post-inventory-display/posts-filtered-by-author/posts-filtered-by-author.component';
import { PostsFilteredByTagComponent } from './common-ui/post-inventory-display/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsNoFilterComponent } from './common-ui/post-inventory-display/posts-no-filter/posts-no-filter.component';
import { LatestComponent } from './common-ui/sidebar/latest/latest.component';
import { ListTagCountComponent } from './common-ui/sidebar/list-tag-count/list-tag-count.component';
import { SidebarComponent } from './common-ui/sidebar/sidebar.component';
import { SocialsComponent } from './common-ui/sidebar/socials/socials.component';
import { CopyrightComponent } from './content/copyright/copyright.component';
import { PrivacyPolicyComponent } from './content/privacy-policy/privacy-policy.component';
import { WhoamiComponent } from './content/whoami/whoami.component';
import { SharedModule } from './shared.module';
import { App2020Module } from './submodules/app-2020.module';
import { App2021Module } from './submodules/app-2021.module';
import { App2022Module } from './submodules/app-2022.module';
import { App2023Module } from "./submodules/app-2023.module";
import { ServiceLocator } from './utils/service.locator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    WhoamiComponent,
    SidebarComponent,
    SocialsComponent,
    LatestComponent,
    NotFound404Component,
    ListTagCountComponent,
    CopyrightComponent,
    PrivacyPolicyComponent,
    PostInventoryDisplayComponent,
    PostsFilteredByTagComponent,
    PostsNoFilterComponent,
    PostsCardNormalComponent,
    PostsCardCompactComponent,
    PostsCardCompactHeaderComponent,
    PostsFilteredByAuthorComponent,
  ],
  imports: [
    SharedModule,
    App2020Module,
    App2021Module,
    App2022Module,
    App2023Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {    // Create global Service Injector.
    ServiceLocator.injector = this.injector;
  }
}
