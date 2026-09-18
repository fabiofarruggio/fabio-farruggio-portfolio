# Fabio Farruggio — verifiable local portfolio

**Language / Idioma:** [Español (principal)](README.md) · English

Static Astro site with nine pages, professional content in Spanish and sanitized laboratory excerpts. **Local preparation for TASK-063–066 / REQ-PORT-001–004; publication was authorized by the owner, but has not yet been executed and does not constitute M6 acceptance.**

## Run and verify

Requires Node **24.21.0**, npm **11.19.0** and Chrome installed for browser QA. It does not install a browser or use existing profiles.

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
$env:npm_config_cache = Join-Path $PWD '.npm-cache'
npm ci --ignore-scripts --no-fund
npm run verify:local
npm run preview
```

Open `http://127.0.0.1:4321/fabio-farruggio-portfolio/`. The preview serves `dist` on loopback only. It does not use the laboratory application, SaaS, models, external sources or a backend. Stop it with Ctrl+C. The QA server does not reuse existing services and shuts down at the end.

`verify:local` records in a dated directory: Astro checks, adversarial content tests, build, real Chrome QA and before/after hashes for sources and generated HTML/CSS/JSON. The record indicates whether the working tree was modified; it does not present the initial HEAD as clean executed code.

## Tour

- **Executive:** Home and Main case explain the problem, decision, scope and limits.
- **Technical:** Architecture, Agents and limits, Decisions and Repositories.
- **Verifiable:** Results offers three local JSON extracts with commits, mode, limits and SHA-256 of the original source. Demo flows distinguish preparation from connected execution. About Fabio declares individual authorship without inventing career history, contacts or clients.

Catalog and Orders are **simulated squads**. The seven repositories and ten agent roles are design scope, not an impact metric. There is no inference or connected console for visitors.

## Selected evidence

`scripts/import-evidence.mjs` reads only complete Git-commit blobs and fixed paths from sibling repositories. It selects explicit fields; it does not copy logs, variables, internal URLs or entire folders. Its three outputs are included, so the build does not need sibling repositories.

| Extract | What it demonstrates | What it does not demonstrate |
| --- | --- | --- |
| Catalog | 25 HTTP/Chrome tests in a run linked to `a2f7ea68…`; isolated memory Store. | PostgreSQL, HEAD, SaaS or release. |
| PostgreSQL | 8 UI checks on app `1584d300…`, with real PostgreSQL. | Complete suite, sandbox or inference. |
| Policy | 121 boundary-specific tests; working tree and hashes declared. | GitHub publication, real authentication or job isolation. |

`source.archiveCommit` identifies where the record is preserved, **not** the executed revision. The local extract lock fails the build if bytes change; it does not replace authentication or an environment attestation. To update an extract, review its source, deliberately regenerate it and repeat QA.

## Dependencies and technical sources

Astro **7.3.3**, `@astrojs/check` **0.9.10**, TypeScript **6.0.3**, Playwright **1.63.0**, axe-core Playwright **4.13.0** and Node types **24.13.5** are pinned in the lockfile. Node24 satisfies the official requirements. See the [official Astro installation guide](https://docs.astro.build/en/install-and-setup/).

The locked-package license inventory is in `evidence/local/dependency-license-inventory.json`. It includes optional dependencies from other platforms; it does not claim that all are installed. **Original code** in this and the other six in-scope repositories is distributed under the [MIT License](LICENSE); dependencies retain their own licenses. Portfolio editorial text, diagrams and assets are not implicitly relicensed as code.

## GitHub Pages: prepared, not executed

The configuration keeps the project base path `/fabio-farruggio-portfolio/`, following the [official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/). No account or public origin is invented; the site keeps `noindex` during this preparation.

The workflow accepts `workflow_dispatch` only; it has no push or schedule triggers. The four official actions are pinned to SHAs verified through `git ls-remote`. By default no job runs: it requires `PORTFOLIO_PUBLICATION_APPROVED=true` and an explicit HTTPS GitHub Pages `PORTFOLIO_SITE`. That flag and a written reference **do not by themselves authenticate human approval**.

Before enabling it: review account, repository, visibility, MIT license, costs/quotas and content; configure Pages and environment protection with human review; verify scopes; review the approved reference and the SHA to publish. Afterwards: run it manually, check public reading, base path and real links. None of this had been performed at the time of this documentation snapshot; public links could not yet be accepted.

## Limits and rollback

QA combines desktop/mobile Chrome, keyboard, internal links, no external requests and selected WCAG A/AA axe rules. It does not certify complete accessibility, compatibility with every browser or absolute security. The CSP blocks scripts, connections and forms on the site; it does not replace content review.

Rollback of this unit: remove `src`, `public`, `scripts`, `tests`, Astro/Playwright/TypeScript configuration, package/lock, the manual workflow and this documentation; preserve `AGENTS.md`, historical evidence and the original repository initialization. The other six repositories were not modified. No remote deployment, spending or credential provisioning was executed. Review mode: `disabled/unmanaged`.

## Documentation policy

`README.md` is the primary Spanish entry point and this file is its complete English companion. `AGENTS.md` and the historical `evidence/` notes keep their original language and bytes to protect operational instructions and evidence provenance; third-party/vendor documents are not translated.
