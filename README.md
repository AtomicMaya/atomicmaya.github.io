# atomicmaya.me

## 2025-09 onwards

We have a shell.nix.

Run `nix-shell`.

Available commands are:
- start
- render
- render-test

## because maya will need this at some point

### new post checklist

- create in `src/app/content/post/YYYY/YYMMDD-post-name/post-name.component.{ts,html,scss?}`
- add to `src/app/routing/app-YYYY-post-routing.module.ts`
- add to `src/submodules/app-YYYY.module.ts`
- add to `src/rss.xml`
- add to `src/sitemap.xml`
- update `static.paths.txt`
- update `static.paths.ts`

### new year checklist

- create `src/app/routing/app-YYYY-post-routing.module.ts`
- create `src/submodules/app-YYYY.module.ts`
- add to `src/app/utils/route-generation-functions.ts`