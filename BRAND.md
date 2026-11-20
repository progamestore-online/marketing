# ProGameStore brand

The brand guide is [`brand/BRAND.md` in `progamestore-online/platform`](https://github.com/progamestore-online/platform/blob/main/brand/BRAND.md). Identity, asset list, usage rules and the update procedure live there.

## In this repo

- **Production:** this repo is the live coming-soon site at progamestore.online and owns production. The catalogue in `progamestore-online/storefront` is dormant.
- **Served files** at the repo root: `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `og-image.png`. They are on the public-asset allowlist in `scripts/prepare-public.mjs`.
- **Full export:** `brand/assets/` holds the 17-file kit export. It is not deployed.
- **Fonts:** Manrope and Fraunces are self-hosted in `fonts/`, with their licence files, and are deployed.
- **Cache parameter:** asset and manifest icon URLs carry `?v=2026-11-18`, the kit version. Bump it when replacing kit assets so returning browsers fetch the new files.
