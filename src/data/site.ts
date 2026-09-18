export const base = '/fabio-farruggio-portfolio/';
export const href = (path = '') => `${base}${path}`;

export const social = {
  github: 'https://github.com/fabiofarruggio',
  linkedin: 'https://ar.linkedin.com/in/fabio-farruggio',
} as const;

export const navigation = [
  ['proyectos', 'Proyectos'],
  ['qa-agent', 'QA Agent'],
  ['trayectoria', 'Trayectoria'],
  ['repositorios', 'Repositorios'],
  ['sobre', 'Sobre mí'],
] as const;

export const featuredProjects = [
  {
    slug: 'qa-agent',
    eyebrow: 'PROYECTO DESTACADO · OPEN SOURCE',
    name: 'Self-Service Agentic Quality Platform',
    shortName: 'QA Agent Platform',
    description: 'Un sistema de Quality Engineering para transformar una historia de producto en pruebas, evidencia y una decisión revisable, sin confundir automatización con autoridad.',
    role: 'Arquitectura · Quality Engineering · QA Automation',
    stack: 'TypeScript · LangGraph · Playwright · Vitest · Docker',
    stats: ['7 repositorios', '10 roles de agente', '2 squads simulados'],
    url: 'https://github.com/fabiofarruggio/qa-agent-platform',
  },
  {
    slug: 'fravega',
    eyebrow: 'QA AUTOMATION',
    name: 'Frávega E-commerce',
    shortName: 'Frávega E-commerce',
    description: 'Automatización de un flujo de e-commerce con foco en mantenibilidad, trazabilidad y reportes útiles para el equipo.',
    role: 'Diseño de pruebas · Automatización',
    stack: 'Playwright · Kotlin · TestNG · Allure',
    stats: ['Page Object Model', 'CI/CD', 'Reportes Allure'],
    url: 'https://github.com/fabiofarruggio/fravega-ecommerce',
  },
  {
    slug: 'find-work',
    eyebrow: 'AUTOMATION TOOLING',
    name: 'Find Work Agent',
    shortName: 'Find Work Agent',
    description: 'Herramienta portable para organizar una búsqueda laboral basada en evidencia, con salidas reproducibles y controlables.',
    role: 'Diseño de herramienta · Automatización',
    stack: 'Python · CLI · Evidencia',
    stats: ['Portable', 'Reproducible', 'Open source'],
    url: 'https://github.com/fabiofarruggio/find-work-agent',
  },
  {
    slug: 'consorcio',
    eyebrow: 'PRODUCT ENGINEERING',
    name: 'Consorcio',
    shortName: 'Consorcio',
    description: 'Piloto de gestión transparente para consorcios, diseñado con una mirada práctica sobre datos, operación y publicación.',
    role: 'Producto · Ingeniería full-stack',
    stack: 'TypeScript · Supabase · Cloudflare Pages',
    stats: ['Datos operativos', 'Publicación web', 'Piloto'],
    url: 'https://github.com/fabiofarruggio/consorcio',
  },
  {
    slug: 'mundial',
    eyebrow: 'SIDE PROJECT',
    name: 'Mundial 2026',
    shortName: 'Mundial 2026',
    description: 'Widget de resultados en vivo y bot para Twitch: un proyecto pequeño para explorar datos, eventos y distribución.',
    role: 'Desarrollo · Integración',
    stack: 'JavaScript · APIs · Twitch',
    stats: ['Widget', 'Bot', 'Eventos'],
    url: 'https://github.com/fabiofarruggio/mundial2026',
  },
  {
    slug: 'dolar-blue',
    eyebrow: 'AUTOMATION',
    name: 'Bot Dólar Blue',
    shortName: 'Bot Dólar Blue',
    description: 'Automatización que consulta una fuente pública y distribuye cambios a canales de comunicación.',
    role: 'Automatización · Integraciones',
    stack: 'Python · Discord · Twitter · Telegram',
    stats: ['Datos periódicos', 'Mensajería', 'Automatización'],
    url: 'https://github.com/fabiofarruggio/botdolarblue',
  },
] as const;

export const agents = [
  ['qa-orchestrator', 'Coordina el proceso', 'No concede permisos ni reemplaza aprobaciones.'],
  ['qa-requirements-analyst', 'Aclara requisitos', 'No inventa reglas de negocio.'],
  ['qa-test-strategist', 'Propone la estrategia', 'No elimina cobertura obligatoria.'],
  ['qa-framework-engineer', 'Evoluciona la plantilla', 'No modifica políticas sin revisión.'],
  ['qa-test-engineer', 'Propone pruebas', 'No aprueba ni publica su propio patch.'],
  ['qa-independent-reviewer', 'Revisa de forma independiente', 'No sustituye al aprobador humano.'],
  ['qa-impact-analyst', 'Analiza impacto', 'No declara seguro un cambio incierto.'],
  ['qa-explorer', 'Explora el laboratorio', 'No navega recursos ajenos al alcance.'],
  ['qa-maintenance-analyst', 'Investiga mantenimiento', 'No debilita assertions para ocultar defectos.'],
  ['qa-release-advisor', 'Explica el riesgo', 'No calcula ni altera la decisión del gate.'],
] as const;

export const repositories = [
  ['qa-agent-platform', 'El núcleo de contratos, políticas, runtime y fronteras.', 'Proyecto destacado', 'https://github.com/fabiofarruggio/qa-agent-platform'],
  ['qa-framework-template', 'Plantilla compartida y convenciones de pruebas.', 'Base reutilizable', 'https://github.com/fabiofarruggio/qa-framework-template'],
  ['quality-lab-app', 'Aplicación de laboratorio con datos sintéticos.', 'Sistema bajo prueba', 'https://github.com/fabiofarruggio/quality-lab-app'],
  ['quality-lab-catalog-tests', 'Suite del squad simulado Catálogo.', 'Pruebas de dominio', 'https://github.com/fabiofarruggio/quality-lab-catalog-tests'],
  ['quality-lab-orders-tests', 'Suite del squad simulado Pedidos.', 'Pruebas de dominio', 'https://github.com/fabiofarruggio/quality-lab-orders-tests'],
  ['qa-agent-evals', 'Evaluaciones y corpus de la plataforma.', 'Evaluación offline', 'https://github.com/fabiofarruggio/qa-agent-evals'],
  ['fabio-farruggio-portfolio', 'Este sitio y su sistema de presentación.', 'Portfolio', 'https://github.com/fabiofarruggio/fabio-farruggio-portfolio'],
] as const;

export const career = [
  { period: 'ACTUAL', title: 'QA Automation & Quality Engineering', detail: 'KIU System Solutions', link: social.linkedin },
  { period: 'FORMACIÓN', title: 'Universidad Tecnológica Nacional', detail: 'Formación técnica y aprendizaje continuo', link: social.linkedin },
  { period: 'ESPECIALIZACIÓN', title: 'Testing, automatización y herramientas', detail: 'Robot Framework · Python · Playwright · SQL · CI/CD', link: social.linkedin },
] as const;

export interface Section { title: string; text: string; items?: string[] }
export interface Page { slug: string; eyebrow: string; title: string; intro: string; sections: Section[] }

export const pages: Page[] = [
  { slug: 'proyectos', eyebrow: 'Proyectos / 01', title: 'Trabajo que convierte calidad en decisiones.', intro: 'Una selección de proyectos para entender qué construyo, qué problema resuelve cada pieza y qué aprendí al llevarla a código.', sections: [
    { title: 'Mi forma de trabajar', text: 'Empiezo por el riesgo y la intención, no por la herramienta. Después diseño una frontera pequeña, la pruebo con datos reales o sintéticos y dejo visible qué queda fuera.' },
    { title: 'El proyecto principal', text: 'QA Agent Platform es el proyecto que reúne esa forma de pensar: contratos, políticas, automatización, evidencia y control humano en un sistema de siete repositorios.' },
    { title: 'Más allá del proyecto principal', text: 'Los proyectos de e-commerce, herramientas de automatización y pilotos de producto muestran el mismo hilo: hacer que un sistema sea útil, mantenible y fácil de revisar.' },
  ] },
  { slug: 'qa-agent', eyebrow: 'Proyecto destacado / 02', title: 'QA Agent Platform.', intro: 'Un sistema de Quality Engineering para que la automatización ayude a decidir mejor, no para reemplazar el criterio de las personas.', sections: [
    { title: 'El problema', text: 'Un agente puede proponer un test, pero una propuesta no es una aprobación. Si el sistema no conserva intención, versión, permisos y evidencia, el resultado pierde valor.' },
    { title: 'La solución', text: 'Separar razonamiento, autorización, ejecución y publicación. Los agentes proponen; los contratos y políticas delimitan; el runner ejecuta; una persona conserva la decisión final.' },
    { title: 'El alcance', text: 'Siete repositorios, diez roles de agente y dos squads simulados: Catálogo y Pedidos. Es un laboratorio original con datos sintéticos, no una implantación en una empresa.', items: ['TypeScript y LangGraph para control y estado.', 'Playwright y Vitest para ejecución determinista.', 'React, PostgreSQL y Docker Compose para el laboratorio.', 'Evidencia local con límites declarados.'] },
    { title: 'Estado honesto', text: 'El proyecto destaca controles y ejecuciones locales verificadas. Las capacidades conectadas, la inferencia real y la aceptación completa de los gates se mantienen separadas de esa evidencia.' },
  ] },
  { slug: 'trayectoria', eyebrow: 'Trayectoria / 03', title: 'Una carrera construida alrededor de la calidad.', intro: 'Mi foco está en conectar estrategia de pruebas, automatización y criterio de ingeniería para que los equipos puedan entregar con más confianza.', sections: [
    { title: 'QA Automation', text: 'Diseño y mantengo automatización que sirve para aprender sobre el producto: no sólo ejecutar casos, sino encontrar señales, reducir ruido y sostener feedback útil.' },
    { title: 'Quality Engineering', text: 'Trabajo en la calidad como una propiedad del sistema completo: requisitos, código, datos, infraestructura, observabilidad y decisiones de release.' },
    { title: 'Aprendizaje continuo', text: 'Mi formación combina ingeniería de software, testing, automatización, Python, SQL, Robot Framework, Playwright y prácticas de CI/CD.' },
  ] },
  { slug: 'arquitectura', eyebrow: 'Cómo funciona / 04', title: 'La confianza tiene fronteras.', intro: 'El diseño evita que una propuesta, un test o una publicación se conviertan en efecto sólo porque un modelo lo pidió.', sections: [
    { title: 'Contratos antes que prompts', text: 'Las entradas, propuestas, aprobaciones y evidencias se validan antes de cruzar una frontera. El sistema conserva identidad y versión, no sólo texto.' },
    { title: 'Estado durable y efectos acotados', text: 'Inbox, runs y outbox conservan identidad e idempotencia. Un timeout posterior a una escritura requiere reconciliación; no justifica repetir una operación a ciegas.' },
    { title: 'Presentación derivada', text: 'El portfolio conserva extractos sanitizados. No consulta la aplicación ni ejecuta agentes: explica el proyecto sin convertirse en una consola privilegiada.' },
  ] },
  { slug: 'agentes', eyebrow: 'Quién hace qué / 05', title: 'Diez roles. Ninguna autoridad implícita.', intro: 'Cada rol tiene una responsabilidad concreta y un límite. El nombre de un agente no acredita razonamiento real: las capacidades observadas y las pendientes se distinguen.', sections: [
    { title: 'Modo visible: offline_replay', text: 'La evidencia seleccionada corresponde a ejecución local determinista o fixtures identificados. No demuestra llamadas a un proveedor de modelos.' },
    { title: 'Presupuesto y aprobación', text: 'El presupuesto inicial de inferencia del producto es cero. Ningún agente puede habilitar pagos, ampliar recursos ni aceptar riesgo en nombre de una persona.' },
  ] },
  { slug: 'demos', eyebrow: 'Recorridos / 06', title: 'Qué funciona, qué falta y por qué.', intro: 'Estas fichas muestran el recorrido esperado y marcan con claridad dónde termina la evidencia local. No son videos de flujos conectados.', sections: [
    { title: 'Historia → propuesta → PR', text: 'Preparado localmente: contratos y frontera de publicación. Pendiente: generación real autorizada, revisión humana y PR remoto verificado.' },
    { title: 'Release → selección → evidencia', text: 'Observado por partes: aplicación y pruebas con versiones identificadas. Pendiente: recorrido integrado de selección y gate de release.' },
    { title: 'Fallo → diagnóstico', text: 'La regla es conservar el intento fallido, identificar la causa y verificar la corrección sobre una revisión identificada.' },
  ] },
  { slug: 'resultados', eyebrow: 'Evidencia / 07', title: 'Un resultado necesita contexto.', intro: 'Estos tres registros muestran qué se midió y bajo qué límites. No son una cifra agregada de éxito ni un estado en vivo.', sections: [
    { title: 'Cómo leer los números', text: 'Cada extracto identifica su repositorio, revisión, modo de ejecución y limitaciones. No se suman resultados de entornos distintos para fabricar una métrica.' },
    { title: 'Lo que no se midió', text: 'No se publican ahorros de tiempo, reducción de costos, productividad o tasas de precisión de agentes: todavía no hay mediciones que sustenten esas afirmaciones.' },
    { title: 'No ocultar evidencia negativa', text: 'Una corrida correcta no debe sobrescribir los intentos fallidos. Lo pendiente sigue siendo pendiente y la publicación no convierte un snapshot en estado vivo.' },
  ] },
  { slug: 'decisiones', eyebrow: 'Criterio técnico / 08', title: 'Las decisiones detrás del diseño.', intro: 'Estas elecciones hacen que el sistema sea revisable. No describen un organigrama real ni un equipo contratado.', sections: [
    { title: 'Política fuera del modelo', text: 'Decisión: denegar efectos antes del transporte mediante recurso, actor, operación y aprobación. Beneficio esperado: límites auditables, no obediencia supuesta.' },
    { title: 'Persistencia antes que reintentos', text: 'Decisión: registrar intención y reconciliar. Repetir una operación tras un timeout puede duplicar un efecto.' },
    { title: 'Sitio estático, no demo privilegiada', text: 'Decisión: Astro y snapshots sanitizados. El visitante puede evaluar el razonamiento sin acceso a servicios vulnerables ni consumo de inferencia.' },
  ] },
  { slug: 'repositorios', eyebrow: 'Mapa del trabajo / 09', title: 'Siete repositorios. Un sistema.', intro: 'Cada repositorio cumple una función distinta. Los enlaces llevan a la publicación pública; las evidencias históricas conservan su fecha y sus límites.', sections: [] },
  { slug: 'sobre', eyebrow: 'Sobre mí / 10', title: 'Fabio Farruggio.', intro: 'QA Automation y Quality Engineering con una mirada de ingeniería: entender el riesgo, automatizar lo repetible y dejar evidencia que otro pueda revisar.', sections: [
    { title: 'Qué me interesa', text: 'Sistemas de calidad que ayuden a los equipos a tomar mejores decisiones: feedback rápido, pruebas mantenibles, diagnósticos claros y límites que no dependan de una promesa.' },
    { title: 'Una demo individual, de forma explícita', text: 'Este proyecto es una demostración individual. Catálogo y Pedidos son squads simulados. Los roles de revisión y ownership son parte del diseño operativo, no una afirmación sobre personal o clientes reales.' },
    { title: 'Dónde encontrarme', text: 'La trayectoria profesional y el perfil público están disponibles en LinkedIn. El código y los proyectos abiertos viven en GitHub.' },
  ] },
];
