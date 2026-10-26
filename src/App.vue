<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <SiteHeader />
  <main id="main-content">
    <RouterView />
  </main>
  <SiteFooter />
  <BackToTop />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'DM Sans', sans-serif;
  color: #172d37;
  background: #fff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-optical-sizing: auto;
  font-weight: 400;
  --navy: #102d40;
  --blue: #145b77;
  --teal: #247e82;
  --gold: #e0a53b;
  --muted: #687a81;
  --pale: #f2f7f6;
  --line: #dfe9e7;
  --serif: 'Manrope', sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  min-width: 320px;
  scroll-behavior: smooth;
  scroll-padding-top: 120px;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
}

button,
input,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.skip-link {
  position: absolute;
  z-index: 100;
  top: 10px;
  left: 10px;
  padding: 10px 14px;
  transform: translateY(-150%);
  border-radius: 5px;
  background: #fff;
  color: var(--navy);
  font-weight: 700;
}

.skip-link:focus {
  transform: translateY(0);
}

.container {
  width: min(1160px, calc(100% - 48px));
  margin-inline: auto;
}

.section {
  padding: 84px 0;
}

.section--soft {
  background: var(--pale);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
  color: var(--teal);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.eyebrow::before {
  width: 23px;
  height: 2px;
  background: var(--gold);
  content: '';
}

.section-heading {
  max-width: 680px;
  margin: 0;
  color: var(--navy);
  font-family: var(--serif);
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.15;
}

.section-intro {
  max-width: 640px;
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: var(--teal);
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  transition: background 160ms ease, transform 160ms ease;
}

.button:hover {
  transform: translateY(-2px);
  background: #17686c;
}

.button:focus-visible,
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid #e0a53b;
  outline-offset: 3px;
}

.button--outline {
  border-color: rgb(255 255 255 / 65%);
  background: transparent;
}

.button--outline:hover {
  background: rgb(255 255 255 / 12%);
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--teal);
  font-size: 13px;
  font-weight: 800;
}

.text-link:hover {
  color: var(--navy);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 34px;
}

.program-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.program-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 38px rgb(16 45 64 / 10%);
}

.program-card__image {
  position: relative;
  height: 142px;
  overflow: hidden;
  background: #dce9e7;
}

.program-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 350ms ease;
}

.program-card:hover .program-card__image img {
  transform: scale(1.04);
}

.program-card__code {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 6px 9px;
  border-radius: 3px;
  background: #fff;
  color: var(--navy);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.program-card__body {
  padding: 20px;
}

.program-card h3 {
  min-height: 49px;
  margin: 0;
  color: var(--navy);
  font-family: var(--serif);
  font-size: 17px;
  line-height: 1.45;
}

.program-card p {
  min-height: 76px;
  margin: 11px 0 17px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.program-card .text-link {
  font-size: 12px;
}

.content-list {
  display: grid;
  gap: 12px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.content-list li {
  position: relative;
  padding-left: 25px;
  color: #4d626a;
  font-size: 14px;
  line-height: 1.7;
}

.content-list li::before {
  position: absolute;
  top: 9px;
  left: 0;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--gold);
  content: '';
}

@media (max-width: 960px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .container {
    width: min(100% - 36px, 520px);
  }

  .section {
    padding: 62px 0;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .program-card__image {
    height: 190px;
  }

  .program-card h3,
  .program-card p {
    min-height: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
