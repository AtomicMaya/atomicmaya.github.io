import "prismjs";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-cpp.min.js";
import "prismjs/components/prism-docker.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-php.min.js";
import "prismjs/components/prism-python.min.js";
import "prismjs/components/prism-shell-session.min.js";
import "prismjs/components/prism-yaml.min.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/prism.js";

import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from 'src/app/common-ui/footer/footer.component';
import { HeaderComponent } from 'src/app/common-ui/header/header.component';
import { MainBodyComponent } from 'src/app/common-ui/main-body/main-body.component';
import { NotFound404Component } from 'src/app/common-ui/not-found404/not-found404.component';
import { PostInventoryDisplayComponent } from 'src/app/common-ui/post-inventory-display/post-inventory-display.component';
import { PostsCardCompactComponent } from 'src/app/common-ui/post-inventory-display/posts-card/posts-card-compact/posts-card-compact.component';
import { PostsCardCompactHeaderComponent } from 'src/app/common-ui/post-inventory-display/posts-card/posts-card-header/posts-card-compact-header.component';
import { PostsCardNormalComponent } from 'src/app/common-ui/post-inventory-display/posts-card/posts-card-normal/posts-card-normal.component';
import { PostsFilteredByAuthorComponent } from 'src/app/common-ui/post-inventory-display/posts-filtered-by-author/posts-filtered-by-author.component';
import { PostsFilteredByTagComponent } from 'src/app/common-ui/post-inventory-display/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsNoFilterComponent } from 'src/app/common-ui/post-inventory-display/posts-no-filter/posts-no-filter.component';
import { LatestComponent } from 'src/app/common-ui/sidebar/latest/latest.component';
import { ListTagCountComponent } from 'src/app/common-ui/sidebar/list-tag-count/list-tag-count.component';
import { SidebarComponent } from 'src/app/common-ui/sidebar/sidebar.component';
import { SocialsComponent } from 'src/app/common-ui/sidebar/socials/socials.component';
import { WalkthroughInventoryDisplayComponent } from "src/app/common-ui/walkthrough-inventory-display/walkthrough-inventory-display.component";
import { WalkthroughsCardCompactHeaderComponent } from "src/app/common-ui/walkthrough-inventory-display/walkthroughs-card/walkthroughs-card-compact-header/walkthroughs-card-compact-header.component";
import { WalkthroughsCardCompactComponent } from "src/app/common-ui/walkthrough-inventory-display/walkthroughs-card/walkthroughs-card-compact/walkthroughs-card-compact.component";
import { WalkthroughFilteredByPlatformComponent } from "src/app/common-ui/walkthrough-inventory-display/walkthroughs-filtered-by-platform/walkthroughs-filtered-by-platform.component";
import { WalkthroughNoFilterComponent } from "src/app/common-ui/walkthrough-inventory-display/walkthroughs-no-filter/walkthroughs-no-filter.component";
import { CopyrightComponent } from 'src/app/content/copyright/copyright.component';
import { PrivacyPolicyComponent } from 'src/app/content/privacy-policy/privacy-policy.component';
import { WhoamiComponent } from 'src/app/content/whoami/whoami.component';
import { SharedModule } from 'src/app/shared.module';
import { App2020Module } from 'src/app/submodules/app-2020.module';
import { App2021Module } from 'src/app/submodules/app-2021.module';
import { App2022Module } from 'src/app/submodules/app-2022.module';
import { App2023Module } from "src/app/submodules/app-2023.module";
import { App2024Module } from "src/app/submodules/app-2024.module";
import { AppTryHackMe2022WalkthroughModule } from "src/app/submodules/app-tryhackme-2022-walkthrough.module";
import { ServiceLocator } from 'src/app/utils/service.locator';
import { WIPComponent } from "src/app/content/wip/wip.component";
import { CalendarComponent } from "./content/calendar/calendar.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    WhoamiComponent,
    WIPComponent,
    CalendarComponent,
    SidebarComponent,
    SocialsComponent,
    LatestComponent,
    NotFound404Component,
    ListTagCountComponent,
    CopyrightComponent,
    PrivacyPolicyComponent,
    PostInventoryDisplayComponent,
    PostsFilteredByTagComponent,
    PostsFilteredByAuthorComponent,
    PostsNoFilterComponent,
    PostsCardNormalComponent,
    PostsCardCompactComponent,
    PostsCardCompactHeaderComponent,
    WalkthroughInventoryDisplayComponent,
    WalkthroughNoFilterComponent,
    WalkthroughFilteredByPlatformComponent,
    WalkthroughsCardCompactComponent,
    WalkthroughsCardCompactHeaderComponent
  ],
  imports: [
    SharedModule,
    App2020Module,
    App2021Module,
    App2022Module,
    App2023Module,
    App2024Module,
    AppTryHackMe2022WalkthroughModule,
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
