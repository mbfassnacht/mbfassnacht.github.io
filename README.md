# mbfassnacht.de

Personal website of Máximo Fassnacht, built with [Next.js](https://nextjs.org) and exported as static HTML for GitHub Pages.

## Development

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build

```bash
pnpm build        # static export to ./out
pnpm lint
pnpm format       # or: pnpm format:check
```

Pushing to `main` builds the site and deploys `./out` to GitHub Pages (`.github/workflows/deploy.yml`).

## Structure

- `src/app` – routes, metadata, sitemap, robots and the generated `og.png`
- `src/components` – UI components
- `src/content` – site copy and data (edit these to update text)
- `src/styles` – SCSS
- `public/assets` – static images
