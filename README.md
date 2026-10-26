# CPU College of Computer Studies Website

A responsive Vue 3 website for the Central Philippine University College of Computer Studies, built with Vue Router and Vite.

## Run locally

Requirements: Node.js 22.18 or newer.

```sh
npm ci
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

The `Deploy to GitHub Pages` workflow builds and publishes the site whenever changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The build uses `/project3011website/` as its base path on GitHub Pages and generates a `404.html` fallback so Vue Router routes continue to work when opened directly.

## Pages

- Home, About the College, Faculty & Staff, News & Updates, and Contact Us
- BSIT, BSCS, BSDMIA, and BLIS program pages

The contact form is a non-submitting demo; no backend is connected.
