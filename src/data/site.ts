export const base = '/fabio-farruggio-portfolio/';
export const href = (path = '') => `${base}${path}`;

export const social = {
  github: 'https://github.com/fabiofarruggio',
  linkedin: 'https://ar.linkedin.com/in/fabio-farruggio',
} as const;

export const navigation = [
  ['proyectos', 'Proyectos'],
  ['qa-agent', 'Plataforma'],
  ['trayectoria', 'Trayectoria'],
  ['sobre', 'Sobre mí'],
  ['repositorios', 'Repositorios'],
] as const;

export const heroFocus = [
  { title: 'Frameworks mantenibles', text: 'Convenciones, fixtures, componentes reutilizables y CI.' },
  { title: 'Feedback útil', text: 'Resultados que explican riesgo, causa y próximo paso.' },
  { title: 'Ownership del producto', text: 'Herramientas y acuerdos para que cada equipo sostenga la calidad.' },
] as const;

export const leadershipPillars = [
  {
    number: '01',
    title: 'Frameworks que se pueden mantener',
    problem: 'Las suites crecen sin una forma de trabajo común.',
    practice: 'Defino convenciones, fixtures, componentes reutilizables, datos controlados y CI.',
    result: 'El equipo puede extender la cobertura sin depender de una sola persona.',
  },
  {
    number: '02',
    title: 'Feedback que ayuda a decidir',
    problem: 'Un resultado rojo no siempre explica qué riesgo existe.',
    practice: 'Conecto estrategia, automatización y diagnóstico con el contexto del producto.',
    result: 'El equipo sabe qué investigar y qué decisión queda pendiente.',
  },
  {
    number: '03',
    title: 'Ownership en el equipo',
    problem: 'La calidad se vuelve una tarea aislada de QA.',
    practice: 'Acompaño acuerdos entre desarrollo, producto y testing.',
    result: 'La calidad queda instalada en el producto, no concentrada en un rol.',
  },
] as const;

export const featuredProjects = [
  {
    slug: 'qa-agent',
    kind: 'Proyecto principal',
    name: 'Self-Service Agentic Quality Platform',
    shortName: 'QA Agent Platform',
    description: 'Laboratorio de Quality Engineering que separa propuesta, autorización, ejecución y evidencia para que la automatización pueda revisarse antes de influir en una decisión.',
    role: 'Arquitectura · Quality Engineering · QA Automation',
    stack: 'TypeScript · LangGraph · Playwright · Vitest · Docker',
    outcome: 'Un equipo puede convertir una historia en una propuesta de pruebas, una ejecución controlada y evidencia revisable.',
    scope: '7 repositorios · 10 roles definidos · 2 squads simulados',
    status: 'Laboratorio local con evidencia offline_replay',
    url: 'https://github.com/fabiofarruggio/qa-agent-platform',
  },
  {
    slug: 'qa-framework-template',
    kind: 'Framework de automatización',
    name: 'QA Framework Template',
    shortName: 'QA Framework Template',
    description: 'Base versionada para que los equipos construyan suites de Playwright con TypeScript, fixtures compartidos, convenciones claras y migraciones controladas.',
    role: 'Arquitectura de pruebas · Developer Tooling',
    stack: 'TypeScript · Playwright · Vitest · Ajv',
    outcome: 'Un squad inicia una suite consistente y puede evolucionarla sin copiar el framework ni sobrescribir su código.',
    scope: 'Paquete local 0.1.0 · Catálogo y Pedidos como consumidores simulados',
    status: 'Verificado localmente; sin registry ni PR remoto automático',
    url: 'https://github.com/fabiofarruggio/qa-framework-template',
  },
] as const;

export const platformFlow = [
  { number: '01', title: 'Historia y contexto', text: 'Se recibe una necesidad con alcance y datos permitidos.' },
  { number: '02', title: 'Análisis y estrategia', text: 'Se aclaran criterios, riesgos y escenarios.' },
  { number: '03', title: 'Framework y ejecución', text: 'Se prepara una suite y se prueba en un entorno controlado.' },
  { number: '04', title: 'Evidencia y revisión', text: 'Se conserva la versión, el resultado y la decisión pendiente.' },
] as const;

export const platformComponents = [
  {
    number: '01',
    name: 'Contratos y procedencia',
    repository: 'qa-agent-platform',
    purpose: 'Define entradas, salidas, IDs, versiones y referencias de evidencia.',
    connection: 'Historia → agentes → resultado',
    result: 'Cada artefacto puede relacionarse con una revisión concreta.',
    daily: 'Evita que una propuesta pierda contexto al pasar entre roles.',
    url: 'https://github.com/fabiofarruggio/qa-agent-platform',
  },
  {
    number: '02',
    name: 'Roles de agentes',
    repository: 'qa-agent-platform',
    purpose: 'Distribuye análisis, estrategia, generación, revisión y release en diez responsabilidades acotadas.',
    connection: 'Contratos → rol autorizado',
    result: 'Cada etapa tiene una entrada, una salida y límites explícitos.',
    daily: 'Hace visible quién propone, quién revisa y qué no puede hacer cada rol.',
    url: 'https://github.com/fabiofarruggio/qa-agent-platform',
  },
  {
    number: '03',
    name: 'Políticas y aprobaciones',
    repository: 'qa-agent-platform',
    purpose: 'Evalúa permisos y efectos antes de entregar credenciales o publicar.',
    connection: 'Solicitud → policy → acción permitida o bloqueada',
    result: 'Una sugerencia no se convierte automáticamente en un efecto externo.',
    daily: 'Protege al equipo de merges, publicaciones o gastos implícitos.',
    url: 'https://github.com/fabiofarruggio/qa-agent-platform',
  },
  {
    number: '04',
    name: 'Estado y reconciliación',
    repository: 'qa-agent-platform',
    purpose: 'Conserva inbox, ejecuciones, aprobaciones, registry y outbox con identidad estable.',
    connection: 'Evento → estado durable → reconciliación',
    result: 'Un timeout no obliga a repetir una escritura a ciegas.',
    daily: 'Permite retomar un trabajo sin perder la intención ni duplicar efectos.',
    url: 'https://github.com/fabiofarruggio/qa-agent-platform',
  },
  {
    number: '05',
    name: 'Framework de suites',
    repository: 'qa-framework-template',
    purpose: 'Entrega una base versionada de Playwright y TypeScript con fixtures y generación controlada.',
    connection: 'TeamManifest → suite consumidora',
    result: 'Cada squad obtiene una estructura compatible y trazable.',
    daily: 'Reduce trabajo repetido al iniciar o migrar una suite.',
    url: 'https://github.com/fabiofarruggio/qa-framework-template',
  },
  {
    number: '06',
    name: 'Laboratorio bajo prueba',
    repository: 'quality-lab-app',
    purpose: 'Ofrece una aplicación de comercio electrónico con datos sintéticos y reglas reproducibles.',
    connection: 'Suite → API / UI / PostgreSQL',
    result: 'Las pruebas se ejecutan sobre un sistema controlado sin datos reales.',
    daily: 'Permite experimentar y reproducir fallos sin depender de un producto externo.',
    url: 'https://github.com/fabiofarruggio/quality-lab-app',
  },
  {
    number: '07',
    name: 'Suites de Catálogo y Pedidos',
    repository: 'quality-lab-catalog-tests · quality-lab-orders-tests',
    purpose: 'Muestran cómo dos squads simulados consumen el mismo framework con ownership de dominio.',
    connection: 'Framework → suite del squad → evidencia',
    result: 'La adopción se puede comparar sin centralizar todo el código de pruebas.',
    daily: 'Ayuda a separar una base común de las decisiones propias de cada equipo.',
    url: 'https://github.com/fabiofarruggio/quality-lab-catalog-tests',
  },
  {
    number: '08',
    name: 'Evaluación y evidencia',
    repository: 'qa-agent-evals',
    purpose: 'Versiona corpus y evaluaciones offline para observar cambios y regresiones.',
    connection: 'Ejecución → métricas → revisión humana',
    result: 'Se distinguen resultados medidos de capacidades todavía pendientes.',
    daily: 'Evita presentar un replay local como razonamiento conectado o producción.',
    url: 'https://github.com/fabiofarruggio/qa-agent-evals',
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

export const agentGroups = [
  { title: 'Entender', text: 'Convertir una necesidad en contexto, riesgos y preguntas.', roles: ['Requirements Analyst', 'Explorer', 'Impact Analyst'] },
  { title: 'Diseñar', text: 'Definir estrategia, framework y pruebas trazables.', roles: ['Test Strategist', 'Framework Engineer', 'Test Engineer'] },
  { title: 'Revisar', text: 'Conservar calidad del patch y del diagnóstico.', roles: ['Independent Reviewer', 'Maintenance Analyst'] },
  { title: 'Coordinar', text: 'Ordenar el recorrido y explicar el resultado.', roles: ['Orchestrator', 'Release Advisor'] },
] as const;

export const repositories = [
  ['qa-agent-platform', 'Contratos, agentes, políticas, runtime, estado y fronteras.', 'Núcleo', 'https://github.com/fabiofarruggio/qa-agent-platform'],
  ['qa-framework-template', 'Plantilla versionada de suites Playwright + TypeScript.', 'Framework', 'https://github.com/fabiofarruggio/qa-framework-template'],
  ['quality-lab-app', 'Aplicación de laboratorio con datos sintéticos.', 'Sistema bajo prueba', 'https://github.com/fabiofarruggio/quality-lab-app'],
  ['quality-lab-catalog-tests', 'Suite del squad simulado Catálogo.', 'Pruebas de dominio', 'https://github.com/fabiofarruggio/quality-lab-catalog-tests'],
  ['quality-lab-orders-tests', 'Suite del squad simulado Pedidos.', 'Pruebas de dominio', 'https://github.com/fabiofarruggio/quality-lab-orders-tests'],
  ['qa-agent-evals', 'Corpus y evaluaciones offline de la plataforma.', 'Evaluación', 'https://github.com/fabiofarruggio/qa-agent-evals'],
  ['fabio-farruggio-portfolio', 'Presentación pública del trabajo y su evidencia permitida.', 'Portfolio', 'https://github.com/fabiofarruggio/fabio-farruggio-portfolio'],
] as const;

export const careerJourney = [
  { number: '01', title: 'QA Manual', text: 'Aprendí a entender el producto, explorar riesgos y distinguir un defecto importante de un resultado inesperado.', tools: 'Exploración · criterios · riesgo' },
  { number: '02', title: 'QA Automation', text: 'Convertí verificaciones repetibles en suites mantenibles y trabajé con Robot Framework, Python, Playwright, SQL y CI/CD.', tools: 'Robot Framework · Python · Playwright · SQL · CI/CD' },
  { number: '03', title: 'QA Automation & Quality Engineering', text: 'Pasé de escribir pruebas a diseñar frameworks, convenciones y formas de trabajo que otros equipos puedan adoptar.', tools: 'Frameworks · estrategia · ownership' },
  { number: '04', title: 'QA con agentes', text: 'Diseño una plataforma donde los agentes proponen, las políticas delimitan, los runners ejecutan y la evidencia permite revisar.', tools: 'Contratos · políticas · agentes · evidencia' },
] as const;

export const career = careerJourney;

export interface Section { title: string; text: string; items?: string[] }
export interface Page { slug: string; eyebrow: string; title: string; intro: string; sections: Section[] }

export const pages: Page[] = [
  { slug: 'proyectos', eyebrow: 'Proyectos', title: 'Dos proyectos que muestran mi enfoque.', intro: 'El proyecto principal y el framework de automatización que mejor explican cómo trabajo con calidad, herramientas y equipos.', sections: [
    { title: 'El proyecto principal', text: 'Self-Service Agentic Quality Platform reúne contratos, políticas, agentes, ejecución y evidencia en un laboratorio de siete repositorios. Su alcance y sus límites están declarados.' },
    { title: 'El framework', text: 'QA Framework Template es una base versionada de Playwright y TypeScript para que los equipos construyan suites consistentes sin copiar el core ni perder la procedencia.' },
    { title: 'El resto del sistema', text: 'Quality Lab App, las suites de Catálogo y Pedidos y QA Agent Evals sostienen el laboratorio de la plataforma. Se presentan como componentes, no como proyectos independientes.' },
  ] },
  { slug: 'qa-agent', eyebrow: 'Plataforma', title: 'Self-Service Agentic Quality Platform.', intro: 'La plataforma ayuda a transformar una necesidad de calidad en una propuesta de pruebas, una ejecución controlada y evidencia que otra persona pueda revisar.', sections: [
    { title: 'Qué problema resuelve', text: 'Una propuesta generada no es una aprobación y una prueba ejecutada no es una decisión de release. La plataforma separa esas responsabilidades para conservar contexto, permisos y evidencia.' },
    { title: 'Resultado esperado', text: 'Un equipo puede partir de una historia, identificar riesgos, proponer pruebas, ejecutarlas sobre un entorno controlado y conservar suficiente contexto para decidir qué revisar antes de un release.' },
    { title: 'Límite actual', text: 'El alcance publicado es un laboratorio original con datos sintéticos y evidencia local offline_replay. No demuestra diez agentes de razonamiento conectados, producción ni inferencia autorizada.' },
  ] },
  { slug: 'trayectoria', eyebrow: 'Trayectoria', title: 'De ejecutar pruebas a diseñar sistemas de calidad.', intro: 'Mi recorrido evolucionó desde QA manual hacia la automatización, el liderazgo técnico y el diseño de herramientas que ayudan a otros equipos a sostener la calidad.', sections: [
    { title: 'Cómo trabajo hoy', text: 'Lidero equipos para adoptar mejores prácticas de desarrollo de frameworks de tests automatizados, construir feedback útil y tomar ownership de la calidad del producto.' },
    { title: 'Qué queda en el equipo', text: 'Mi objetivo no es concentrar la calidad en QA. Dejo convenciones, herramientas, contexto y criterios que cada equipo pueda usar y mejorar.' },
    { title: 'Alcance de esta historia', text: 'La secuencia profesional está presentada como evolución de capacidades, sin inventar fechas ni empleadores que no estén documentados públicamente.' },
  ] },
  { slug: 'arquitectura', eyebrow: 'Plataforma / flujo', title: 'Cómo se conectan los componentes.', intro: 'Un flujo directo: historia, análisis, estrategia, framework, ejecución, evidencia y revisión humana. Cada paso tiene una responsabilidad distinta.', sections: [
    { title: 'Contratos antes que prompts', text: 'Las entradas, salidas, identidades y versiones se validan antes de que una propuesta cruce una frontera de ejecución o publicación.' },
    { title: 'Política antes que efecto', text: 'Una solicitud se evalúa por recurso, actor y operación. Si el permiso no está probado, el sistema bloquea o pide una acción humana.' },
    { title: 'Evidencia antes que afirmación', text: 'Una corrida local conserva modo, revisión y limitaciones. No se presenta como integración conectada ni como resultado de producción.' },
  ] },
  { slug: 'agentes', eyebrow: 'Plataforma / responsabilidades', title: 'Diez roles con límites explícitos.', intro: 'Los roles forman parte del diseño y del catálogo de responsabilidades. No son diez servicios ni prueban por sí mismos diez agentes de razonamiento conectados.', sections: [
    { title: 'Entender, diseñar, revisar y coordinar', text: 'Los roles se agrupan por etapa para que el equipo pueda ver qué trabajo se delega y dónde se conserva la decisión humana.' },
    { title: 'Sin autoridad implícita', text: 'Un agente puede proponer, analizar o explicar. No puede ampliar permisos, aprobar su propio patch, publicar ni cambiar una política.' },
  ] },
  { slug: 'demos', eyebrow: 'Validación', title: 'Qué se valida y qué queda pendiente.', intro: 'Los recorridos del sistema se explican con datos sintéticos, versiones identificadas y límites visibles. Un replay local no se presenta como una integración viva.', sections: [
    { title: 'Historia → propuesta → revisión', text: 'Preparado localmente: contratos y fronteras de publicación. Pendiente: generación conectada autorizada, revisión humana y PR remoto verificado.' },
    { title: 'Release → selección → evidencia', text: 'Observado por partes: aplicación y pruebas con versiones identificadas. Pendiente: recorrido integrado de selección y gate de release.' },
    { title: 'Fallo → diagnóstico', text: 'La regla es conservar el intento fallido, identificar la causa y verificar la corrección sobre una revisión identificada.' },
  ] },
  { slug: 'resultados', eyebrow: 'Resultados verificables', title: 'Qué está verificado hoy.', intro: 'Los registros técnicos sirven para revisar ejecuciones locales concretas. No son una métrica de productividad ni un estado vivo de la plataforma.', sections: [
    { title: 'Cómo leerlos', text: 'Cada registro identifica repositorio, revisión, modo de ejecución, fecha y limitaciones. No se suman resultados de entornos diferentes para fabricar un indicador.' },
    { title: 'Qué no afirman', text: 'No publican ahorros de tiempo, reducción de costos, precisión de agentes ni aceptación conectada. Esas afirmaciones requieren evidencia adicional.' },
  ] },
  { slug: 'decisiones', eyebrow: 'Criterio técnico', title: 'Decisiones que hacen revisable el sistema.', intro: 'El diseño prioriza límites, procedencia y recuperación antes que una apariencia de autonomía.', sections: [
    { title: 'Política fuera del modelo', text: 'Los efectos pasan por una política explícita y por una aprobación vigente. El modelo no decide sus propios permisos.' },
    { title: 'Persistencia antes que reintentos', text: 'La intención y el resultado se registran para reconciliar un timeout sin duplicar efectos.' },
    { title: 'Sitio estático, explicación pública', text: 'El portfolio presenta snapshots sanitizados. No consulta la aplicación ni ejecuta agentes con privilegios.' },
  ] },
  { slug: 'repositorios', eyebrow: 'Mapa técnico', title: 'Siete repositorios que sostienen el sistema.', intro: 'No son siete proyectos de portfolio separados: son piezas con ownership distinto dentro del alcance aprobado.', sections: [] },
  { slug: 'sobre', eyebrow: 'Sobre Fabio', title: 'Fabio Farruggio.', intro: 'QA Automation y Quality Engineering con una mirada de ingeniería: entender el riesgo, automatizar lo repetible y dejar herramientas que otros equipos puedan sostener.', sections: [
    { title: 'Mi recorrido', text: 'Evolucioné desde QA manual hacia la automatización, el liderazgo técnico y el diseño de sistemas de calidad asistidos por agentes.' },
    { title: 'Lo que construyo', text: 'Frameworks de pruebas, prácticas de trabajo y herramientas que convierten el feedback en una responsabilidad compartida del producto.' },
    { title: 'Qué podés revisar', text: 'El código público está en GitHub y mi trayectoria profesional en LinkedIn. No hay una consola ni una invitación ambigua: cada enlace tiene un propósito concreto.' },
  ] },
];
