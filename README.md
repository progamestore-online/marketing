# ProGameStore marketing

Static coming-soon site for <https://progamestore.online/>. This is separate from the dormant game storefront. Do not repoint domains or launch a catalogue as part of maintenance here.

Push to `main` runs the existing Cloudflare Pages deployment to project `progamestore`. The build copies only the approved public homepage, policies, icons and documented text resources to `dist/`; repository notes, workflows and build/test code are not website assets.

```sh
node --test scripts/public-site.test.mjs
node scripts/prepare-public.mjs
```

The top-level `404.html` intentionally disables Cloudflare Pages' SPA fallback. Unknown paths, including the unadvertised `/sitemap.xml`, must return a real 404 instead of the homepage with status 200. The coming-soon site does not advertise a game sitemap. Keep root, privacy, terms, favicon, robots, llms and skills resources available.
