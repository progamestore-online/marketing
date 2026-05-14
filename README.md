# progamestore-online/marketing

Static "coming soon" placeholder for **progamestore.online**.

## Status

- ✅ Pages project `pgs-marketing` deployed (`https://pgs-marketing.pages.dev` — live)
- ✅ Custom domain `progamestore.online` added to project (status: pending DNS verification)
- ⏳ **Needs one DNS record** — see below

## Last step (you, via CF dashboard or `wrangler dns`-equivalent)

The CF Pages custom-domain bind is initialized but stuck in `pending`
because `progamestore.online` (apex) has no DNS record pointing at
the Pages project. Add one:

| Type  | Name | Content                       | Proxy |
|-------|------|-------------------------------|-------|
| CNAME | `@`  | `pgs-marketing.pages.dev`     | ✅ on  |

via:

- **Dashboard**: https://dash.cloudflare.com → progamestore.online → DNS → Add record (CNAME `@` → `pgs-marketing.pages.dev`, proxy on)
- **API** (needs an API token with Zone:Edit scope on this zone):
  ```
  curl -X POST -H "Authorization: Bearer $CF_TOKEN_ZONE_EDIT" \
    -H "Content-Type: application/json" \
    https://api.cloudflare.com/client/v4/zones/04158221bba995befe00df02c6817b86/dns_records \
    -d '{"type":"CNAME","name":"@","content":"pgs-marketing.pages.dev","proxied":true}'
  ```

CF will then auto-verify the bind (~30 s) and progamestore.online will serve the placeholder.

The wrangler OAuth token used by AI agents has Pages scope only, so this last step needs you.

## Updates

To update the placeholder content, push to main; CF Pages will redeploy automatically.

## Background

Before this, https://progamestore.online returned **CF error 1014 ("CNAME Cross-User Banned")**: DNS on Cloudflare but no zone served the hostname. The "ProGameStore (coming)" CTA on freegamestore.online/pricing was wrapped in a `<span>` instead of `<a>` as a stop-gap; this placeholder + Pages project + the DNS record above is the lasting fix.
