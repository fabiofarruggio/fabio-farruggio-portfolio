export const base = '/fabio-farruggio-portfolio/';
export const href = (path = '') => `${base}${path}`;
export const navigation = [
  ['caso', 'Caso principal'], ['arquitectura', 'Arquitectura'], ['agentes', 'Agentes y límites'],
  ['demos', 'Flujos de demostración'], ['resultados', 'Resultados'], ['decisiones', 'Decisiones'],
  ['repositorios', 'Repositorios'], ['sobre', 'Sobre Fabio'],
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
  ['qa-agent-platform', 'Contratos, políticas, runtime y fronteras de herramientas.', 'Implementación local verificada por incrementos.'],
  ['qa-framework-template', 'Plantilla compartida y convenciones de pruebas.', 'Consumo local de referencia; adopción completa pendiente.'],
  ['quality-lab-app', 'Aplicación original con datos sintéticos.', 'HTTP, navegador y PostgreSQL con evidencias separadas.'],
  ['quality-lab-catalog-tests', 'Suite del squad simulado Catálogo.', 'Run histórico vinculado a revisión exacta; no es estado en vivo.'],
  ['quality-lab-orders-tests', 'Suite del squad simulado Pedidos.', 'Adopción y recorrido de segundo squad pendientes.'],
  ['qa-agent-evals', 'Evaluaciones y corpus de la plataforma.', 'Resultados comparativos finales pendientes.'],
  ['fabio-farruggio-portfolio', 'Este caso de estudio y sus extractos de evidencia.', 'Sitio local; publicación autorizada pendiente.'],
] as const;
export interface Section { title: string; text: string; items?: string[] }
export interface Page { slug: string; eyebrow: string; title: string; intro: string; sections: Section[] }
export const pages: Page[] = [
  { slug: 'caso', eyebrow: 'Caso de estudio / 01', title: 'Calidad de autoservicio, con controles explícitos.', intro: 'Self-Service Agentic Quality Platform es una implementación de referencia individual. Explora cómo pasar de una historia a evidencia verificable sin delegar la autoridad a un modelo.', sections: [
    { title: 'El problema', text: 'Una automatización puede ejecutar más pruebas sin mejorar la confianza. Si no une intención, versión y resultado, un indicador verde puede describir el sistema equivocado.' },
    { title: 'La decisión', text: 'Separar razonamiento, autorización, ejecución y publicación. Los agentes proponen; los contratos y políticas delimitan; las personas aprueban donde corresponde.' },
    { title: 'El alcance', text: 'Siete repositorios, diez roles de agente y dos squads simulados: Catálogo y Pedidos. Es un laboratorio original con datos sintéticos, no una implantación en una empresa.', items: ['TypeScript y LangGraph para control y estado.', 'Playwright y Vitest para ejecución determinista.', 'React, PostgreSQL y Docker Compose para el laboratorio.', 'Astro para una presentación estática sin backend.'] },
    { title: 'Qué existe y qué falta', text: 'Hay controles y ejecuciones locales documentados. El recorrido completo historia → PR real, la selección de release integrada y las herramientas SaaS conectadas aún no se presentan como terminados. Las pruebas locales no conceden la aceptación de M6.' },
  ] },
  { slug: 'arquitectura', eyebrow: 'Diseño / 02', title: 'La confianza tiene fronteras.', intro: 'Una historia es entrada no confiable. Un resultado sólo es útil si conserva el vínculo con el código, la configuración y la ejecución que lo produjo.', sections: [
    { title: 'Contratos antes que prompts', text: 'Los documentos de historia, plan, catálogo, propuesta, aprobación y evidencia se validan estructural y semánticamente. Una aprobación queda vinculada a su revisión, no a un texto ambiguo.' },
    { title: 'Estado durable y efectos acotados', text: 'Inbox, runs y outbox conservan identidad e idempotencia. Un timeout posterior a una escritura requiere reconciliación; no justifica enviar otra publicación a ciegas.' },
    { title: 'Runner y publicador no son la misma identidad', text: 'El diseño mantiene el código generado fuera de credenciales de publicación. La frontera local del publicador procesa bytes, rutas y hashes; no ejecuta scripts del patch. La integración remota y su separación de jobs todavía deben comprobarse.' },
    { title: 'Presentación derivada, no fuente de verdad', text: 'Este sitio conserva pequeños extractos sanitizados. No consulta la aplicación ni ejecuta agentes. El diagrama describe la arquitectura: no es una consola conectada ni un dashboard de producción.' },
  ] },
  { slug: 'agentes', eyebrow: 'Delegación / 03', title: 'Diez roles. Ninguna autoridad implícita.', intro: 'La arquitectura define un orquestador y nueve especialistas. Sus nombres no acreditan por sí mismos razonamiento real: las capacidades observadas y las pendientes se distinguen.', sections: [
    { title: 'Modo visible: offline_replay', text: 'La evidencia seleccionada corresponde a ejecución local determinista o fixtures identificados. No demuestra llamadas a un proveedor de modelos. local_live exige inferencia real autorizada; connected_live requiere además integraciones comprobadas.' },
    { title: 'Presupuesto y aprobación', text: 'El presupuesto inicial de inferencia del producto es cero. Ningún agente puede habilitar pagos, trials, upgrades, ampliar recursos ni aceptar riesgo en nombre de una persona.' },
  ] },
  { slug: 'demos', eyebrow: 'Recorridos / 04', title: 'Mostrar el recorrido. También lo que lo detiene.', intro: 'Estas fichas son guiones y evidencia parcial, no videos de flujos conectados. Cada recorrido conserva su condición de salida y su intervención humana.', sections: [
    { title: 'Historia → propuesta → PR', text: 'Preparado localmente: contratos y frontera de publicación. Pendiente: generación real autorizada, revisión humana y PR remoto verificado. Los identificadores fixture no son enlaces a GitHub.' },
    { title: 'Release → selección → evidencia', text: 'Observado por partes: aplicación y pruebas con versiones identificadas. Pendiente: recorrido integrado de selección, comparación con regresión completa y gate de release sobre la combinación exacta.' },
    { title: 'Fallo → diagnóstico', text: 'Regla del recorrido: conservar el intento fallido, identificar si la causa corresponde al producto, al test o al entorno y verificar la corrección sobre una revisión identificada. La grabación del recorrido completo sigue pendiente.' },
    { title: 'Adopción de Pedidos', text: 'Diseño: un segundo squad simulado adopta una plantilla y su manifest, sin copiar el núcleo. El recorrido completo de incorporación y su medición siguen pendientes.' },
    { title: 'Herramientas conectadas', text: 'Jira, Confluence, Vansah, Miro y la publicación en GitHub requieren autorización y lectura posterior. No hay una demo conectada acreditada por estos extractos.' },
  ] },
  { slug: 'resultados', eyebrow: 'Registro de evidencia / 05', title: 'Un resultado necesita contexto.', intro: 'Tres observaciones acotadas, no una cifra agregada de éxito. Los extractos se pueden leer aquí, sin una cuenta SaaS. Son snapshots históricos; no verifican el HEAD actual.', sections: [
    { title: 'Cómo leer los números', text: 'Catálogo usa un Store en memoria aislado por test. La prueba de UI con PostgreSQL es otra ejecución. Los controles de policy usan un transporte de prueba explícito. Sumar esos números no demuestra un flujo end-to-end.' },
    { title: 'Lo que no se midió', text: 'No se publican ahorros de tiempo, reducción de costos, productividad de equipos ni tasas de precisión de agentes: aún no hay mediciones que sustenten esas afirmaciones.' },
    { title: 'No ocultar evidencia negativa', text: 'Los extractos son una selección, no todo el historial. Una corrida correcta no debe sobrescribir los intentos fallidos. Para inspeccionar el registro completo, cada extracto identifica su repositorio y archivo de origen; no se atribuye éxito a casos omitidos.' },
  ] },
  { slug: 'decisiones', eyebrow: 'Criterio técnico / 06', title: 'Liderazgo es hacer explícitos los límites.', intro: 'Decisiones del laboratorio, con alternativas y responsabilidades lógicas. No describen un organigrama real ni un equipo contratado.', sections: [
    { title: 'Política fuera del modelo', text: 'Alternativa descartada: confiar sólo en instrucciones del prompt. Decisión: denegar efectos antes del transporte mediante recurso, actor, operación y aprobación. Costo: más contratos y pruebas; beneficio esperado: límites auditables, no obediencia supuesta.' },
    { title: 'Persistencia antes que reintentos', text: 'Alternativa: repetir una operación tras cualquier timeout. Decisión: registrar intención y reconciliar. Riesgo residual: la garantía depende de la identidad y de las capacidades del adaptador real, aún pendiente de integración remota.' },
    { title: 'Sitio estático, no demo privilegiada', text: 'Alternativa: exponer el laboratorio y un endpoint de agentes. Decisión: Astro y snapshots sanitizados. Costo: no hay interacción en vivo; ventaja: el visitante no recibe acceso a servicios vulnerables ni consume inferencia.' },
    { title: 'Ownership explícito', text: 'Plataforma define contratos y políticas. Cada squad simulado mantiene sus pruebas. El responsable funcional aprueba intención y Fabio autoriza recursos, gasto y publicación. Una persona puede asumir varios roles en la demo; eso no convierte los roles en empleados.' },
    { title: 'Riesgos y siguiente inversión', text: 'Prioridad alta: autenticidad de aprobaciones, límites de credenciales y correspondencia de evidencia con versiones. Siguiente inversión: cerrar recorridos autorizados y medirlos, no agregar más agentes. Responsable lógico: propietario de la plataforma.' },
    { title: 'Roadmap por gates, no por porcentajes', text: 'M0 permisos y preflight; M1 base determinista; M2 historia a PR; M3 release y gate; M4 segundo squad; M5 integraciones; M6 evaluación y publicación. Esta preparación local del portfolio no satisface las dependencias ni acepta esos hitos.' },
  ] },
  { slug: 'repositorios', eyebrow: 'Mapa del proyecto / 07', title: 'Siete repositorios. Un sistema.', intro: 'Los nombres corresponden al workspace local autorizado. No se inventan enlaces remotos: la publicación y visibilidad de GitHub siguen pendientes.', sections: [] },
  { slug: 'sobre', eyebrow: 'Autoría / 08', title: 'Fabio Farruggio.', intro: 'Un portfolio centrado en criterio técnico, calidad de software y sistemas verificables. El caso muestra decisiones, controles y límites mediante una implementación original.', sections: [
    { title: 'Una demo individual, de forma explícita', text: 'Este proyecto es una demostración individual. Catálogo y Pedidos son squads simulados. Los roles de revisión y ownership son parte del diseño operativo, no una afirmación sobre personal o clientes reales.' },
    { title: 'Qué se puede evaluar', text: 'El foco está en contratos, arquitectura, automatización determinista, diagnóstico de fallos y honestidad de evidencia. La IA es una herramienta delegada: las personas conservan autoridad sobre intención, riesgo y recursos.' },
    { title: 'Qué no se presume', text: 'Este sitio no añade títulos profesionales, certificaciones, empleadores, antigüedad, contactos o logros organizacionales no autorizados. Tampoco atribuye al autor la creación de las bibliotecas utilizadas.' },
    { title: 'Atribución y publicación', text: 'El sitio utiliza Astro; la verificación local usa Playwright y axe-core. Las dependencias conservan sus licencias. La licencia pública del contenido y la publicación requieren la decisión del propietario.' },
  ] },
];
