import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
const pages = ['', 'proyectos/', 'qa-agent/', 'trayectoria/', 'arquitectura/', 'agentes/', 'demos/', 'resultados/', 'decisiones/', 'repositorios/', 'sobre/'];
const origin = 'http://127.0.0.1:4321';
const base = '/fabio-farruggio-portfolio/';
test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
});
for (const viewport of [{ name: 'desktop', width: 1440, height: 1000 }, { name: 'mobile', width: 390, height: 844 }]) {
  for (const path of pages) test(`${viewport.name}: ${path || 'inicio'} accessible static page`, async ({ page }) => {
    await page.setViewportSize(viewport);
    const errors: string[] = []; const external: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => { if (new URL(request.url()).origin !== origin) external.push(request.url()); });
    const response = await page.goto(path || './');
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang','es');
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('script[src$="theme.js"]')).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const result = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(result.violations).toEqual([]);
    expect(errors).toEqual([]); expect(external).toEqual([]);
    if (!path || path === 'resultados/' || path === 'arquitectura/') {
      const directory = resolve(process.env.QA_RUN_DIR!, 'screenshots'); mkdirSync(directory, { recursive: true });
      await page.screenshot({ path: resolve(directory, `${path.replace('/','') || 'inicio'}-${viewport.name}.png`), fullPage: true });
    }
  });
}
test('keyboard skip link and native navigation disclosure work without JavaScript', async ({ page }) => {
  await page.goto('./'); await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
  await page.keyboard.press('Enter'); await expect(page.locator('main')).toBeFocused();
  await page.locator('summary').focus(); await page.keyboard.press('Enter');
  await expect(page.locator('details')).toHaveAttribute('open','');
  await page.keyboard.press('Tab'); await expect(page.locator('.menu-panel a').first()).toBeFocused();
  await page.keyboard.press('Enter'); await expect(page).toHaveURL(`${origin}${base}repositorios/`);
});
test('every rendered link stays in the project base and resolves, including evidence', async ({ page, request }) => {
  const links = new Set<string>();
  for (const path of pages) {
    await page.goto(path || './');
    for (const link of await page.locator('a[href]').evaluateAll(nodes => nodes.map(node => (node as HTMLAnchorElement).href))) links.add(link);
  }
  for (const link of links) {
    const url = new URL(link);
    if (url.origin !== origin) { expect(['github.com','ar.linkedin.com']).toContain(url.hostname); continue; }
    expect(url.pathname.startsWith(base)).toBe(true);
    const response = await request.get(link); expect(response.status(), link).toBe(200);
    if (url.hash) { await page.goto(link); await expect(page.locator(url.hash)).toHaveCount(1); }
  }
  for (const id of ['catalog','postgres','policy']) {
    const response = await request.get(`${base}evidence/${id}.json`); const data = await response.json();
    expect(data.mode).toBe('offline_replay'); expect(data.source.archiveCommit).toMatch(/^[a-f0-9]{40}$/);
  }
});
test('seven repositories and ten roles remain explicit with approved public links', async ({ page }) => {
  await page.goto('repositorios/'); await expect(page.locator('.repo-grid article')).toHaveCount(7);
  await expect(page.locator('a[href^="https://github.com/fabiofarruggio/"]')).toHaveCount(7);
  await page.goto('agentes/'); await expect(page.locator('.role-list article')).toHaveCount(10);
  await page.goto('sobre/'); await expect(page.locator('main')).toContainText('No hay una consola');
});
test('home presents two projects and a clear platform explanation', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('.project-card')).toHaveCount(2);
  await expect(page.locator('main')).toContainText('La calidad se puede compartir');
  await expect(page.locator('main')).toContainText('Self-Service Agentic Quality Platform');
  await expect(page.locator('main')).toContainText('QA Framework Template');
  await expect(page.locator('main')).toContainText('Qué hace la plataforma y cómo se conectan sus piezas');
  await expect(page.locator('main')).not.toContainText('Señales claras, sin ruido');
  await expect(page.locator('main')).not.toContainText('La parte que se puede comprobar');
});
test('theme switch defaults to dark and persists the selected mode', async ({ page }) => {
  await page.goto('./');
  const root = page.locator('html');
  const toggle = page.getByRole('switch', { name: 'Cambiar a modo claro' });
  await expect(root).toHaveAttribute('data-theme', 'dark');
  await expect(toggle).toHaveAttribute('aria-checked', 'true');
  await toggle.click();
  await expect(root).toHaveAttribute('data-theme', 'light');
  await expect(page.getByRole('switch', { name: 'Cambiar a modo oscuro' })).toHaveAttribute('aria-checked', 'false');
  const lightModeResult = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  expect(lightModeResult.violations).toEqual([]);
  await page.reload();
  await expect(root).toHaveAttribute('data-theme', 'light');
  await page.getByRole('switch', { name: 'Cambiar a modo oscuro' }).click();
  await expect(root).toHaveAttribute('data-theme', 'dark');
});
test('all pages fit a narrow320px viewport', async ({ page }) => {
  await page.setViewportSize({ width:320,height:740 });
  for (const path of pages) { await page.goto(path || './'); expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), path).toBe(true); }
});
test('content and native navigation work with JavaScript disabled', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled:false });
  await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
  try {
    const page = await context.newPage(); await page.goto(`${origin}${base}`);
    await expect(page.getByRole('heading', { level:1 })).toContainText('Calidad');
    await page.locator('summary').click(); await page.locator('.menu-panel').getByRole('link', { name:'Repositorios' }).click();
    await expect(page.locator('main h1')).toContainText('Siete repositorios');
  } finally { await context.close(); }
});
