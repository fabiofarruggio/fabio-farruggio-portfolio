import { defineConfig } from '@playwright/test';
const run = process.env.QA_RUN_DIR ?? `evidence/local/browser-${new Date().toISOString().replaceAll(':','-')}`;
process.env.QA_RUN_DIR = run;
export default defineConfig({
  testDir: './tests/browser', fullyParallel: false, workers: 1, retries: 0, timeout: 30000,
  reporter: [['list'], ['json', { outputFile: `${run}/results.json` }]],
  use: { channel: 'chrome', baseURL: 'http://127.0.0.1:4321/fabio-farruggio-portfolio/', headless: true, trace: 'off' },
  webServer: { command: 'node scripts/serve-static.mjs', url: 'http://127.0.0.1:4321/fabio-farruggio-portfolio/', reuseExistingServer: false, timeout: 30000, env: { ASTRO_TELEMETRY_DISABLED: '1' } },
});
