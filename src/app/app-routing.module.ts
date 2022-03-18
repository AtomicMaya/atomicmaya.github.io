import { PrivacyPolicyComponent } from './content/privacy-policy/privacy-policy.component';
import { CopyrightComponent } from './content/copyright/copyright.component';
import { TAG_PERSONAL } from './utils/tags';
import { NotFound404Component } from './common-ui/not-found404/not-found404.component';
import { WhoamiComponent } from './content/whoami/whoami.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PostsFilteredByTagComponent } from './common-ui/post-inventory-display/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsNoFilterComponent } from './common-ui/post-inventory-display/posts-no-filter/posts-no-filter.component';
import { PostsFilteredByAuthorComponent } from './common-ui/post-inventory-display/posts-filtered-by-author/posts-filtered-by-author.component';

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
    loadChildren: () => import('./routing/app-2020-post-routing.module').then(m => m.Posts2020RoutingModule)
  },
  {
    path: 'post/2021',
    loadChildren: () => import('./routing/app-2021-post-routing.module').then(m => m.Posts2021RoutingModule)
  },
  {
    path: 'post/2022',
    loadChildren: () => import('./routing/app-2022-post-routing.module').then(m => m.Posts2022RoutingModule)
  },
  {
    path: 'posts',
    component: PostsNoFilterComponent
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
      initialNavigation: 'enabled',
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
