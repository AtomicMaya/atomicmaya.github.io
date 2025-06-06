import { Route, Routes } from '@angular/router';

import { Author } from 'src/app/interfaces/author';
import { Post, WalkthroughPost } from 'src/app/interfaces/post';
import { Tag } from 'src/app/interfaces/tag';
import { TagCount } from 'src/app/interfaces/tag-count';

import { subroutes2020 } from 'src/app/routing/app-2020-post-routing.module';
import { subroutes2021 } from 'src/app/routing/app-2021-post-routing.module';
import { subroutes2022 } from 'src/app/routing/app-2022-post-routing.module';
import { subroutesTHM2022 } from 'src/app/routing/app-tryhackme-2022-walkthrough-routing.module';
import { subroutes2023 } from 'src/app/routing/app-2023-post-routing.module';
import { subroutes2024 } from 'src/app/routing/app-2024-post-routing.module';
import { subroutes2025 } from 'src/app/routing/app-2025-post-routing.module';

/** The compiled post routes from all of the lazy-loaded modules. */
export const postRoutes: Routes = [...subroutes2020, ...subroutes2021, ...subroutes2022, ...subroutes2023, ...subroutes2024, ...subroutes2025];

/** The compiled routes from all of the lazy-loaded modules. */
export const walkthroughRoutes: Routes = [...subroutesTHM2022].filter((r) => !r.path.includes('-Day-'));

/**
 * Function that counts the number of {@link Post | Post} per {@link Tag | Tag}.
 *
 * @export
 */
export function countTags(): TagCount[] {
  const output: TagCount[] = [];
  for (const r of postRoutes) {
    if (r.data !== undefined && r.data.tags !== undefined) {
      for (const t of r.data.tags) {
        if (output.map(x => x.tag_name).includes(t.name)) {
          output.filter(x => x.tag_name === t.name)[0].count += 1;
        } else {
          output.push({ tag_name: t.name, tag_path: t.path, count: 1});
        }
      }
    }
  }

  return output;
}

/**
 * Function that returns the corresponding {@link Post | Post} to the given @param { Route } r.
 *
 * @param r The route for which the corresponding {@link Post | Post} should be determined.
 */
function routeToPost(r: Route): Post {
  return {
    path: r.path.slice(0),
    date: [Number.parseInt(r.path.slice(0, 4), 10), Number.parseInt(r.path.slice(5, 7), 10), Number.parseInt(r.path.slice(8, 10), 10)],
    description: r.data.description,
    title: r.data.title,
    imageUrl: r.data.imageUrl ?? '',
    tags: r.data.tags,
    authors: r.data.authors,
    readingTime: r.data.readingTime
  };
}

function routeToWalkthrough(r: Route): WalkthroughPost {
  const p: WalkthroughPost = routeToPost(r);
  p.platform = r.data.platform;
  return p;
}

/**
 * Function that returns all of the {@link Post | Posts} that possess the @param { string } filter {@link Tag | Tag}
 *
 * @param filter The {@link Tag} the posts should be filtered for.
 * @export
 */
export function filterPostRoutesByTag(filter: string): Post[] {
  return postRoutes.filter((x: Route) => x.data.tags.map((y: Tag) => y.path).includes(filter))
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => routeToPost(r));
}

/**
 * Function that returns all of the {@link Post | Posts} that possess the @param { string } filter {@link Tag | Tag}
 *
 * @param filter The {@link Tag} the posts should be filtered for.
 * @export
 */
export function filterWalkthroughPostRoutesByPlatform(filter: string): Post[] {
  return walkthroughRoutes.filter((x: Route) => x.data.platform == filter)
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => routeToWalkthrough(r));
}

/**
 * Function that returns all of the {@link Post | Posts} that possess the {@link Author | author} identified by @param { string } author.
 *
 * @param filter The {@link Author} the posts should be filtered for.
 * @export
 */
export function filterPostRoutesByAuthor(author: string): Post[] {
  return postRoutes
    .filter((x: Route) => x.data.authors.map((y: Author) => y.name).includes(author))
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => routeToPost(r));
}

/**
 * Function that returns all of the {@link Post | Posts}.
 *
 * @export
 */
export function generatePostRoutes(): Post[] {
  return postRoutes
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => routeToPost(r));
}

/**
 * Function that returns all of the {@link Post | Posts}.
 *
 * @export
 */
export function generateWalkthroughRoutes(): Post[] {
  return walkthroughRoutes
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => routeToWalkthrough(r));
}
