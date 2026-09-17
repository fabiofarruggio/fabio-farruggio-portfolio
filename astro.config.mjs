import { defineConfig } from 'astro/config';

// No public identity is inferred. A future approved Pages deployment supplies it.
const site = process.env.PORTFOLIO_SITE;
if (site && !/^https:\/\/[A-Za-z0-9-]+\.github\.io\/$/.test(site)) {
  throw new Error('PORTFOLIO_SITE must be the explicitly approved HTTPS GitHub Pages origin');
}
export default defineConfig({
  output: 'static',
  base: '/fabio-farruggio-portfolio',
  trailingSlash: 'always',
  ...(site ? { site } : {}),
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'never' },
});
