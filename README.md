# Fabio Farruggio — portfolio local verificable

Sitio Astro estático con nueve páginas, contenido profesional en español y extractos sanitizados del laboratorio. **Preparación local de TASK-063–066 / REQ-PORT-001–004; no es aceptación de M6 ni publicación autorizada.**

## Ejecutar y verificar

Requiere Node **24.21.0**, npm **11.19.0** y Chrome instalado para la QA de navegador. No instala un navegador ni usa perfiles existentes.

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
$env:npm_config_cache = Join-Path $PWD '.npm-cache'
npm ci --ignore-scripts --no-fund
npm run verify:local
npm run preview
```

Abrir `http://127.0.0.1:4321/fabio-farruggio-portfolio/`. El preview sólo sirve `dist` en loopback. No utiliza la aplicación del laboratorio, SaaS, modelos, fuentes externas ni un backend. Detener con Ctrl+C. El servidor de QA no reutiliza servicios existentes y se cierra al terminar.

`verify:local` registra en un directorio fechado: checks de Astro, pruebas adversariales de contenido, build, QA real de Chrome y hashes antes/después de fuentes y HTML/CSS/JSON generado. Los fallos se conservan. El registro indica si el working tree estaba modificado: no presenta el HEAD inicial como código ejecutado limpio.

## Recorrido

- **Ejecutivo:** Inicio y Caso principal explican problema, decisión, alcance y límites.
- **Técnico:** Arquitectura, Agentes y límites, Decisiones y Repositorios.
- **Verificable:** Resultados ofrece tres JSON locales con commits, modo, límites y SHA-256 de la fuente original. Flujos de demostración distingue preparación de ejecución conectada. Sobre Fabio declara autoría individual sin inventar trayectoria, contactos o clientes.

Catálogo y Pedidos son **squads simulados**. Los siete repositorios y diez roles de agente son alcance de diseño, no una métrica de impacto. No hay inferencia ni una consola conectada para visitantes.

## Evidencia seleccionada

`scripts/import-evidence.mjs` lee únicamente blobs Git de commits completos y rutas fijas de los repositorios hermanos. Selecciona campos explícitos; no copia logs, variables, URLs internas ni carpetas completas. Sus tres salidas están incluidas, por lo que el build no necesita los repositorios hermanos.

| Extracto | Qué demuestra | Qué no demuestra |
| --- | --- | --- |
| Catálogo | 25 pruebas HTTP/Chrome en un run vinculado a `a2f7ea68…`; Store de memoria aislado. | PostgreSQL, el HEAD actual, SaaS o release. |
| PostgreSQL | 8 checks de UI sobre app `1584d300…`, con PostgreSQL real. | Suite completa, sandbox o inferencia. |
| Policy | 121 pruebas específicas del boundary; working tree y hashes declarados. | Publicación GitHub, autenticación real o aislamiento de jobs. |

`source.archiveCommit` identifica dónde se conserva el registro, **no** la revisión ejecutada. El lock local de extractos hace fallar el build si se alteran los bytes; no sustituye autenticación ni una atestación del entorno. Para actualizar un extracto hay que revisar su fuente, regenerar deliberadamente y repetir QA.

## Dependencias y fuentes técnicas

Astro **7.3.3**, `@astrojs/check` **0.9.10**, TypeScript **6.0.3**, Playwright **1.63.0**, axe-core Playwright **4.13.0** y tipos Node **24.13.5** están fijados en el lockfile. Node24 satisface los requisitos oficiales. [Instalación oficial de Astro](https://docs.astro.build/en/install-and-setup/).

El inventario de licencias de paquetes bloqueados está en `evidence/local/dependency-license-inventory.json`. Incluye dependencias opcionales de otras plataformas; no afirma que todas estén instaladas. No se concedió una licencia pública al contenido propio: esa decisión sigue pendiente del propietario.

## GitHub Pages: preparado, no ejecutado

La configuración conserva el base path de proyecto `/fabio-farruggio-portfolio/`, siguiendo la [guía oficial de Astro para GitHub Pages](https://docs.astro.build/en/guides/deploy/github/). No se inventa una cuenta ni un origen público; el sitio mantiene `noindex` durante esta preparación.

El workflow sólo admite `workflow_dispatch`; no tiene triggers de push ni schedule. Los cuatro actions oficiales están fijados a SHAs verificados mediante `git ls-remote`. Por defecto no se ejecuta ningún job: exige `PORTFOLIO_PUBLICATION_APPROVED=true` y un `PORTFOLIO_SITE` HTTPS explícito de GitHub Pages. Ese flag y una referencia escrita **no autentican por sí mismos una aprobación humana**.

Antes de habilitarlo: aprobar cuenta, repositorio, visibilidad, licencia, costos/cuotas y contenido; configurar Pages y protección de ambiente con revisión humana; verificar scopes; revisar la referencia aprobada y el SHA a publicar. Después: ejecutar manualmente, comprobar lectura pública, base path y links reales. Nada de esto se ha realizado aquí; los enlaces públicos aún no pueden aceptarse.

## Límites y rollback

La QA combina Chrome desktop/móvil, teclado, links internos, ausencia de requests externos y reglas axe WCAG A/AA seleccionadas. No certifica accesibilidad completa, compatibilidad con todos los navegadores ni seguridad absoluta. El CSP bloquea scripts, conexiones y formularios del sitio; no reemplaza la revisión del contenido.

Rollback de esta unidad: retirar `src`, `public`, `scripts`, `tests`, configuración Astro/Playwright/TypeScript, package/lock, el workflow manual y esta documentación; conservar `AGENTS.md`, evidencia histórica y la inicialización original del repositorio. Los demás seis repositorios no fueron modificados. No se ejecutó despliegue remoto, gasto ni provisión de credenciales. Review mode: `disabled/unmanaged`.
