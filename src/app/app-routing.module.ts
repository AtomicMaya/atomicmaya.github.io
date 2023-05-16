import { PrivacyPolicyComponent } from 'src/app/content/privacy-policy/privacy-policy.component';
import { CopyrightComponent } from 'src/app/content/copyright/copyright.component';
import { TAG_PERSONAL } from 'src/app/utils/tags';
import { NotFound404Component } from 'src/app/common-ui/not-found404/not-found404.component';
import { WhoamiComponent } from 'src/app/content/whoami/whoami.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PostsFilteredByTagComponent } from 'src/app/common-ui/post-inventory-display/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsNoFilterComponent } from 'src/app/common-ui/post-inventory-display/posts-no-filter/posts-no-filter.component';
import { PostsFilteredByAuthorComponent } from 'src/app/common-ui/post-inventory-display/posts-filtered-by-author/posts-filtered-by-author.component';
import { WalkthroughNoFilterComponent } from 'src/app/common-ui/walkthrough-inventory-display/walkthroughs-no-filter/walkthroughs-no-filter.component';
import { WalkthroughFilteredByPlatformComponent } from 'src/app/common-ui/walkthrough-inventory-display/walkthroughs-filtered-by-platform/walkthroughs-filtered-by-platform.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'whoami'
  },
  {
    path: 'whoami',
    component: WhoamiComponent,
    data: { tags: [TAG_PERSONAL] }
  },
  {
    path: 'post/2020',
    loadChildren: () => import('src/app/routing/app-2020-post-routing.module').then(m => m.Posts2020RoutingModule)
  },
  {
    path: 'post/2021',
    loadChildren: () => import('src/app/routing/app-2021-post-routing.module').then(m => m.Posts2021RoutingModule)
  },
  {
    path: 'post/2022',
    loadChildren: () => import('src/app/routing/app-2022-post-routing.module').then(m => m.Posts2022RoutingModule)
  },
  {
    path: 'post/2023',
    loadChildren: () => import('src/app/routing/app-2023-post-routing.module').then(m => m.Posts2023RoutingModule)
  },
  {
    path: 'posts',
    component: PostsNoFilterComponent
  },
  {
    path: 'walkthrough/tryhackme/2022',
    loadChildren: () => import('src/app/routing/app-tryhackme-2022-walkthrough-routing.module').then(m => m.TryHackMeWalkthroughs2022RoutingModule)
  },
  {
    path: 'walkthrough/platforms/:filter',
    component: WalkthroughFilteredByPlatformComponent,
  },
  {
    path: 'walkthroughs',
    component: WalkthroughNoFilterComponent
  },
  {
    path: 'tags',
    component: PostsFilteredByTagComponent,
  },
  {
    path: 'tags/:filter',
    component: PostsFilteredByTagComponent,
  },
  {
    path: 'authors',
    component: PostsFilteredByAuthorComponent,
  },
  {
    path: 'authors/:author',
    component: PostsFilteredByAuthorComponent,
  },
  {
    path: 'copyright',
    component: CopyrightComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: '**',
    component: NotFound404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
