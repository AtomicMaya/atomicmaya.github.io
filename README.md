# maya's blog 

rewrite of my blog in Astro, formerly in Angular 14 or something.

also statically generated, except without having to throw it through a server-side pre-render flow.

what else? oh yeah, now writing to it is adding one .mdx file to `src/content/post/$year/post-title.mdx` instead of whatever thing i used to have going

## environment

`nix develop` for a development environment

Commands:

- `start`: starts the live server, go to [localhost:4321](http://localhost:4321)
- `render`: builds the dist files
- `render-test`: test the dist files, go to [localhost:4321](http://localhost:4321)
- `deploy-pages`: write to the `gh-pages` branch