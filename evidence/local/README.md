# Verificación local del portfolio

**Resultado observado: 9 páginas estáticas generadas; 27 pruebas de contenido y 23 pruebas reales de Chrome aprobadas, sin skips.** Registro reproducible final: [verified-2026-09-17T13-46-57.064Z/verification.json](verified-2026-09-17T13-46-57.064Z/verification.json).

Preparación de TASK-063–066, no publicación ni aceptación de M6. Fuentes del sitio y bytes de `dist` coinciden antes/después de esa ejecución. El working tree está declarado como modificado; el HEAD inicial del repositorio no se usa como supuesto SHA de implementación.

## Qué se comprobó

- Astro check: cero errores, warnings o hints; build estático real de nueve páginas.
- 27 controles de extractos: mediciones ausentes, límites omitidos, identidad de fuente ausente, modo conectado no probado, paths privados, datos no permitidos, tokens sintéticos, PostgreSQL falsamente atribuido a memoria, estado dirty ocultado, check fallido e inflación posterior del resultado.
- Chrome: nueve páginas a 1440 px y 390 px; reglas axe WCAG2 A/AA y WCAG2.1 AA sin violaciones detectadas, sin errores de página ni requests externos.
- Teclado: skip link, foco en contenido, apertura del menú nativo y navegación. Todos los enlaces renderizados y tres JSON resuelven dentro del base path local.
- Nueve páginas sin overflow a 320 px. Navegación y resultados funcionan con JavaScript deshabilitado. Se conservaron exactamente siete repositorios y diez roles definidos.
- El servidor de preview terminó sin dejar listener en 4321 tras el run final. Ningún servicio de la aplicación fue invocado.

## Inspección visual real

Se inspeccionaron las capturas de inicio desktop/móvil, arquitectura desktop y resultados móvil del run final. Se observan jerarquía y contraste legibles, menú compacto, cards apiladas, SHAs contenidos y etiquetas persistentes de demo individual / modo / publicación pendiente. Se corrigió una regla responsive que agrandaba indebidamente el disclaimer de métricas en móvil.

- [Inicio desktop](verified-2026-09-17T13-46-57.064Z/screenshots/inicio-desktop.png)
- [Inicio móvil](verified-2026-09-17T13-46-57.064Z/screenshots/inicio-mobile.png)
- [Arquitectura desktop](verified-2026-09-17T13-46-57.064Z/screenshots/arquitectura-desktop.png)
- [Resultados móvil](verified-2026-09-17T13-46-57.064Z/screenshots/resultados-mobile.png)

Esta inspección visual acotada y los controles automatizados no equivalen a certificación completa de accesibilidad ni a una revisión con lector de pantalla por una persona.

## Intentos previos conservados

1. `check-initial-failure.txt`: faltaban tipos Node en el harness TypeScript; se fijó `@types/node` y su configuración.
2. `browser-2026-09-17T13-39-11.993Z`: primera corrida exploratoria21/21; no se presenta como verificación del snapshot final.
3. `verified-2026-09-17T13-41-36.915Z`: el harness apuntaba al antiguo nombre de CLI Astro; se corrigió a la ruta verificada en Astro7.
4. `verified-2026-09-17T13-42-02.848Z`: bloqueo correcto por puerto ocupado. El preview Astro previo dejó un proceso hijo en Windows. Se verificó su identidad antes de detener sólo ese PID (`preview-orphan-identity.json`). La QA ahora usa un servidor estático de un solo proceso y no reutiliza listeners ajenos.

## Pendientes de aceptación

No se ha publicado en GitHub Pages; no hay URL pública comprobada, cuentas aprovisionadas, aprobación de licencia/contenido ni demo conectada. El workflow sólo está preparado y restringido a disparo manual. La aceptación de los MUST y gates originales permanece a cargo del coordinador y del propietario.
