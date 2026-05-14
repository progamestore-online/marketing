# progamestore-online/marketing

Static "coming soon" placeholder for **progamestore.online**. Mirrors the [PWS marketing](https://prowebstore.online) pattern (`pws-marketing` CF Pages project) so the URL serves a real page instead of CF error 1014.

## Deploy (one-time, requires CF dashboard)

The wrangler OAuth that AI agents use can deploy a new Pages project, but **binding `progamestore.online` as a custom domain still needs the CF dashboard** (zone admin permission). One-time setup:

1. **Create the Pages project** (either via `npx wrangler pages deploy . --project-name=pgs-marketing` from this repo, or via the CF dashboard "Create application" → "Pages" → "Connect to Git" pointing at this repo on the `main` branch with build settings: Build command: *(none)*, Output: `.`).
2. **Add the custom domain** in the dashboard: Pages → `pgs-marketing` → Custom domains → "Set up a custom domain" → `progamestore.online`. CF will verify the existing A/AAAA records.
3. **Wait \~1 minute** for SSL to provision. Verify with `curl -I https://progamestore.online` (should return `HTTP/2 200`).

## Why this exists

Before this placeholder, `https://progamestore.online` returned **CF error 1014 ("CNAME Cross-User Banned")** — the DNS pointed at Cloudflare but no zone on this account claimed the hostname. Anyone clicking the "ProGameStore (coming)" CTA on `freegamestore.online/pricing` saw an opaque CF error page. The CTA in pricing was wrapped in a `<span>` instead of `<a>` as a stop-gap; this placeholder is the lasting fix.
