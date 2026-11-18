# ProGameStore brand

Canonical family kit: [stores-workspace/brand](https://github.com/serge-ivo/stores-workspace/tree/main/brand). Vendored files in `brand/assets/` are exact copies of `assets/pgs/`; update from that source. Root favicon, touch/PWA icons and social image are served copies.

Use the shared games controller symbol and **ProGameStore**, with Game accented violet: light `#9333ea`, dark `#c084fc`. The wordmark uses Manrope 800; interface text uses Manrope and editorial headings use Fraunces. Fonts are self-hosted in `fonts/` with their licenses. Preserve existing automatic light/dark behavior and storefront's explicit theme choice.

Use `mark.svg` for a standalone symbol, outlined `wordmark-light.svg` / `wordmark-dark.svg` on matching surfaces, and `og-image.png` for platform shares. SVG favicon and 192/512 maskable PWA icons share this identity. Do not replace individual games' icons, art or brands with the platform symbol.

## Production ownership

`progamestore-online/marketing` is the active coming-soon site at progamestore.online. Its public-asset allowlist includes the served brand files and fonts; repository docs and kit sources are not deployed. The catalogue in `progamestore-online/storefront` remains dormant. Pushes there validate/build only. An explicit manual workflow dispatch with `launch_catalogue=true` is required to replace the marketing site, and is outside branding maintenance.

## Browser cache updates

Platform asset URLs and manifest icon URLs include `?v=2026-11-18`, matching
the kit revision. Bump this value when replacing kit assets so returning browsers
fetch the new identity even when an older stable URL remains cached.
