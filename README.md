# Fabio Farruggio — portfolio

**Idioma / Language:** Español (principal) · [English](README.en.md)

Portfolio personal de Fabio Farruggio, orientado a **QA Automation** y **Quality Engineering**. Presenta mi trayectoria, proyectos open source y el proyecto destacado [Self-Service Agentic Quality Platform](https://github.com/fabiofarruggio/qa-agent-platform), conocido en este sitio como **QA Agent Platform**.

## Qué vas a encontrar

- **Quién soy:** mi foco profesional en calidad de software, automatización y herramientas de ingeniería.
- **Proyectos:** QA Agent Platform, Frávega E-commerce, Find Work Agent, Consorcio, Mundial 2026 y Bot Dólar Blue.
- **Repositorios:** el mapa público de los siete repositorios que forman el laboratorio de QA Agent.
- **Evidencia:** tres registros locales seleccionados, con revisión, modo de ejecución y limitaciones visibles.

## Ver el portfolio

El sitio público está disponible en [fabiofarruggio.github.io/fabio-farruggio-portfolio](https://fabiofarruggio.github.io/fabio-farruggio-portfolio/).

El recorrido recomendado es: **Inicio → Proyectos → QA Agent → Trayectoria → Repositorios**. La página de QA Agent explica el caso técnico sin presentarlo como una plataforma conectada ni como una métrica de impacto.

## Ejecutar y verificar localmente

Requiere Node **24.21.0**, npm **11.19.0** y Chrome instalado para la QA de navegador. No instala un navegador ni usa perfiles existentes.

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
$env:npm_config_cache = Join-Path $PWD '.npm-cache'
npm ci --ignore-scripts --no-fund
npm run verify:local
npm run preview
```

Abrir `http://127.0.0.1:4321/fabio-farruggio-portfolio/`. El preview sirve `dist` en loopback, no usa servicios externos, modelos ni un backend.

Checks principales:

- `npm run check`: Astro + pruebas adversariales de contenido.
- `npm run build`: valida los tres registros de evidencia y genera 11 páginas estáticas.
- `npm run test:browser`: Chrome desktop/mobile, teclado, enlaces, viewport de 320 px y reglas axe WCAG seleccionadas.
- `npm run verify:local`: agrupa build, QA de navegador y hashes de fuentes/generados.

## QA Agent Platform

QA Agent Platform es un laboratorio original de Quality Engineering. La idea central es separar propuesta, autorización, ejecución y publicación para que una decisión se pueda revisar.

Alcance de diseño:

- 7 repositorios públicos.
- 10 roles de agente definidos.
- 2 squads simulados: Catálogo y Pedidos.

La evidencia seleccionada usa el modo `offline_replay`: no demuestra llamadas a un proveedor de modelos, integración SaaS ni aprobación remota. La publicación del portfolio es pública; las capacidades conectadas de QA Agent siguen pendientes.

## Evidencia seleccionada

| Registro | Qué muestra | Qué no demuestra |
| --- | --- | --- |
| Catálogo | 25 pruebas HTTP/Chrome en un run vinculado | PostgreSQL, SaaS o release completo |
| PostgreSQL | 8 checks de UI sobre el laboratorio | Suite completa, sandbox o inferencia |
| Policy | 121 pruebas de fronteras locales | Publicación GitHub o autenticación real |

Los JSON públicos están en [`public/evidence`](public/evidence). Cada registro conserva su origen, revisión y limitaciones; no contiene secretos ni rutas privadas.

## Licencia

El código original se distribuye bajo [MIT](LICENSE). Las dependencias conservan sus licencias propias. El texto editorial, diagramas y assets del portfolio no se relicencian implícitamente como código.

## Documentación

Este `README.md` es la entrada principal en español. La versión completa en inglés está en [`README.en.md`](README.en.md). La documentación de implementación interna y los registros operativos de coordinación se mantienen fuera de este repositorio público.
