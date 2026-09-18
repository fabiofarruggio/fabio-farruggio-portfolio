# Fabio Farruggio — portfolio

**Language / Idioma:** [Español](README.md) (primary) · English

Personal portfolio for Fabio Farruggio, focused on **QA Automation** and **Quality Engineering**. It presents my professional focus, open-source projects, and the featured [Self-Service Agentic Quality Platform](https://github.com/fabiofarruggio/qa-agent-platform), referred to here as **QA Agent Platform**.

## What you will find

- **About me:** I lead teams in adopting automation practices, building maintainable test frameworks, and owning product quality.
- **Public projects:** QA Agent Platform, Find Work Agent, and the laboratory's public repositories.
- **Repositories:** the public map of the seven repositories in the QA Agent laboratory.
- **Evidence:** three selected local records with revision, execution mode, and limitations shown clearly.

## View the portfolio

The public site is available at [fabiofarruggio.github.io/fabio-farruggio-portfolio](https://fabiofarruggio.github.io/fabio-farruggio-portfolio/).

Recommended path: **Home → Projects → QA Agent → Career → Repositories**. The QA Agent page explains the technical case without presenting it as a connected platform or an impact metric.

## Run and verify locally

Requires Node **24.21.0**, npm **11.19.0**, and an installed Chrome browser for browser QA. It does not install a browser or reuse existing profiles.

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
$env:npm_config_cache = Join-Path $PWD '.npm-cache'
npm ci --ignore-scripts --no-fund
npm run verify:local
npm run preview
```

Open `http://127.0.0.1:4321/fabio-farruggio-portfolio/`. The preview serves `dist` on loopback and does not use external services, models, or a backend.

Main checks:

- `npm run check`: Astro diagnostics and adversarial content tests.
- `npm run build`: validates the three evidence records and generates 11 static pages.
- `npm run test:browser`: Chrome desktop/mobile, keyboard navigation, links, 320 px viewport, and selected axe WCAG rules.
- `npm run verify:local`: combines build, browser QA, and source/generated hashes.

## QA Agent Platform

QA Agent Platform is an original Quality Engineering laboratory. Its central idea is to separate proposal, authorization, execution, and publication so that a decision can be reviewed.

Design scope:

- 7 public repositories.
- 10 defined agent roles.
- 2 simulated squads: Catalog and Orders.

The selected evidence uses `offline_replay`: it does not demonstrate a model-provider call, SaaS integration, or remote approval. The portfolio is publicly published; QA Agent's connected capabilities remain pending.

## Selected evidence

| Record | Shows | Does not show |
| --- | --- | --- |
| Catalog | 25 HTTP/Chrome tests tied to a specific run | PostgreSQL, SaaS, or a full release |
| PostgreSQL | 8 UI checks against the laboratory | The full suite, sandbox, or inference |
| Policy | 121 local boundary tests | GitHub publication or real authentication |

Public JSON records live under [`public/evidence`](public/evidence). Each record keeps its source, revision, and limitations; no secrets or private paths are included.

## License

Original code is distributed under [MIT](LICENSE). Dependencies retain their own licenses. Portfolio editorial text, diagrams, and assets are not implicitly relicensed as code.

## Documentation

This `README.en.md` is the English companion to the Spanish-first [`README.md`](README.md). Internal implementation documentation and operational coordination records are kept outside this public repository.
