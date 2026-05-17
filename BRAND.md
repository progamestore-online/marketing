# ProGameStore Brand Guidelines

## Identity

**Name**: ProGameStore (one word, PascalCase)
**Tagline**: Premium web games with superpowers.
**URL**: progamestore.online
**Free pair**: FreeGameStore (freegamestore.online)

## Logo

Text wordmark: "Pro[Game]Store" — "Game" in accent violet.

```
Pro[Game]Store    — accent violet (#9333ea)
```

- Always one word, PascalCase
- Never "Pro Game Store" (three words)

Favicon: Violet gradient "G" on rounded rect (512x512, rx=96, Manrope 800).

## Colors

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--accent` | `#9333ea` | `#c084fc` | Primary actions, links |
| `--accent-soft` | `#faf5ff` | `#1e1033` | Accent backgrounds |
| `--ink` | `#1a1a1a` | `#f0f0f0` | Body text |
| `--muted` | `#6b6b6b` | `#888888` | Secondary text |
| `--surface` | `#ffffff` | `#1a1a1a` | Card backgrounds |
| `--bg` | `#fafaf9` | `#0f0f0f` | Page background |
| `--border` | `#e5e5e5` | `#2a2a2a` | Borders |

## Typography

- **Body**: Manrope (400-700) — same as FreeGameStore
- **Display**: Fraunces (700-800) — same as FreeGameStore
- **Logo**: Manrope weight 800

## Dark Mode

`prefers-color-scheme: dark` — automatic, no toggle.

## Differentiation from Free

- Violet accent (vs emerald for FreeGameStore)
- "Pro" prefix signals premium features
- Same game shell, same brand fonts, same mobile-first approach
- Pro games can have: cloud sync, multiplayer lobbies, AI opponents, subscriptions
- Pro game code is private (not MIT like free tier)

## Design Principles

1. **Same quality bar** — Pro games must be as polished as free ones
2. **Same SDK** — `@freegamestore/games` for UI consistency (considering `@progamestore/games` in future)
3. **Same viewport rules** — zero scroll, mobile-first, 12-viewport auditor
4. **Premium differentiation in features, not visuals** — a Pro game looks identical to a Free game, it just does more

## Rules

- ZERO analytics or tracking in gameplay
- Subscription pricing is developer-set with 10% platform commission
- Same compliance checks as free tier (build, license, brand, viewport)
- All Pro games must still work on 320x568 viewport
