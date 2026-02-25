# Bizarre Bounce — Play.fun Edition

Bizarre Bounce ported from the Remix (Farcade) platform to [play.fun](https://play.fun), a play-to-earn Solana gaming platform.

## Setup

```bash
npm install
npm run build
```

The built game is output to `dist/index.html`.

## Deployment

Deployed automatically to GitHub Pages via the `.github/workflows/deploy.yml` workflow on push to `main`.

## How It Works

- The game is a single self-contained `index.html` file
- All game assets are hosted on Vercel Blob Storage (public URLs)
- The Play.fun SDK handles points tracking and leaderboard integration
- `scripts/build.js` bundles TypeScript source into the final HTML file

## Play.fun Integration

The game uses the [Open Game SDK](https://sdk.play.fun/latest) to:
- Report scores as points on game over
- Display the points widget in the play.fun iframe
