export type Lang = 'es' | 'en';

export const SITE = {
  name: 'David Graciano',
  email: 'davidgracianox@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-graciano2000/',
  github: 'https://github.com/Davidgraciano',
};

export const ui = {
  es: {
    htmlLang: 'es',
    role: 'Ingeniero de Software · Datos e IA aplicada',
    title: 'David Graciano · Ingeniero de Software, Datos e IA',
    description:
      'Ingeniero de Software en Medellín. Construyo sistemas de datos e IA en producción: pipelines, Elasticsearch, PostgreSQL/PostGIS, RAG y MCP.',
    nav: { cases: 'Casos', experience: 'Experiencia', stack: 'Stack', contact: 'Contacto' },
    switchLang: 'EN',
    switchLangLabel: 'Read in English',
    themeLabel: 'Cambiar entre tema oscuro y claro',
    available: 'Disponible para proyectos remotos',
    heroTitle: ['Datos e IA que la gente usa ', 'a diario.'],
    heroText:
      'Construyo sistemas de datos e IA y los llevo de punta a punta: entiendo el problema con quien lo vive, diseño la solución, la despliego y la sostengo en producción. Desde 2024 lo hago para el Centro Integrado de Tráfico y Transporte (CITRA) de Medellín.',
    ctaCases: 'Ver casos',
    ctaContact: 'Escríbeme',
    photoAlt: 'Foto de David Graciano',
    metrics: [
      { value: '2.624 M', label: 'registros de cámaras LPR reindexados y enriquecidos en Elasticsearch' },
      { value: '~5×', label: 'más rápida la ingesta y geocodificación de siniestros viales' },
      { value: '133', label: 'pruebas automáticas en el Registro de Siniestralidad Vial' },
    ],
    casesTitle: 'Casos de estudio',
    casesIntro:
      'Sistemas reales en producción para la movilidad de Medellín y para clientes privados. Los datos de CITRA son confidenciales: aquí cuento el problema, lo que hice y el resultado, sin datos personales.',
    readCase: 'Leer el caso',
    experienceTitle: 'Experiencia',
    stackTitle: 'Stack',
    stackIntro: 'Las herramientas que uso a diario en producción.',
    openSourceTitle: 'Código abierto',
    openSourceMore: 'Ver todos mis repositorios en GitHub',
    educationTitle: 'Formación',
    certsTitle: 'Certificaciones y cursos',
    contactTitle: '¿Tienes un proyecto de datos, backend o IA?',
    contactText:
      'Me interesan proyectos remotos de ingeniería de datos, backend e IA aplicada, por contrato o por horas. Escríbeme y conversamos.',
    copy: 'Copiar correo',
    copied: 'Correo copiado',
    location: 'Medellín, Colombia · remoto',
    footer: 'Hecho con Astro y desplegado en Vercel.',
    caseLabels: {
      back: 'Todos los casos',
      problem: 'El problema',
      did: 'Lo que hice',
      flow: 'Cómo fluyen los datos',
      stack: 'Stack',
      next: 'Siguiente caso',
      confidential: 'Los datos de este proyecto son confidenciales. Este resumen no incluye datos personales ni capturas del sistema.',
      confidentialShots: 'Los datos de este proyecto son confidenciales. Las capturas vienen de mis informes de labores; los registros individuales y las placas aparecen difuminados.',
      gallery: 'Capturas',
      galleryHint: 'Abre una captura para verla en grande.',
      close: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente',
      ctaTitle: '¿Necesitas algo parecido?',
    },
  },
  en: {
    htmlLang: 'en',
    role: 'Software Engineer · Data & Applied AI',
    title: 'David Graciano · Software Engineer, Data & AI',
    description:
      'Software engineer in Medellín, Colombia. I build data and AI systems that run in production: pipelines, Elasticsearch, PostgreSQL/PostGIS, RAG and MCP.',
    nav: { cases: 'Case studies', experience: 'Experience', stack: 'Stack', contact: 'Contact' },
    switchLang: 'ES',
    switchLangLabel: 'Leer en español',
    themeLabel: 'Switch between dark and light theme',
    available: 'Available for remote projects',
    heroTitle: ['Data and AI that people use ', 'every day.'],
    heroText:
      'I build data and AI systems end to end: I work out the problem with the people who live it, design the solution, ship it and keep it running in production. Since 2024 I have done this for the Integrated Traffic and Transport Center (CITRA) of Medellín, Colombia.',
    ctaCases: 'See case studies',
    ctaContact: 'Get in touch',
    photoAlt: 'Photo of David Graciano',
    metrics: [
      { value: '2.62 B', label: 'license plate camera records reindexed and enriched in Elasticsearch' },
      { value: '~5×', label: 'faster ingestion and geocoding of road crash reports' },
      { value: '133', label: 'automated tests in the road crash registry' },
    ],
    casesTitle: 'Case studies',
    casesIntro:
      'Real systems in production for Medellín’s mobility authority and for private clients. CITRA data is confidential, so each case covers the problem, what I did and the result, with no personal data.',
    readCase: 'Read the case',
    experienceTitle: 'Experience',
    stackTitle: 'Stack',
    stackIntro: 'The tools I use every day in production.',
    openSourceTitle: 'Open source',
    openSourceMore: 'See all my repositories on GitHub',
    educationTitle: 'Education',
    certsTitle: 'Certifications and courses',
    contactTitle: 'Do you have a data, backend or AI project?',
    contactText:
      'I am open to remote data engineering, backend and applied AI work, on contract or hourly. I work in Spanish; my English is basic and improving.',
    copy: 'Copy email',
    copied: 'Email copied',
    location: 'Medellín, Colombia · remote',
    footer: 'Built with Astro and deployed on Vercel.',
    caseLabels: {
      back: 'All case studies',
      problem: 'The problem',
      did: 'What I did',
      flow: 'How the data flows',
      stack: 'Stack',
      next: 'Next case',
      confidential: 'This project’s data is confidential. This summary has no personal data or screenshots of the system.',
      confidentialShots: 'This project’s data is confidential. The screenshots come from my monthly work reports; individual records and plates are blurred.',
      gallery: 'Screenshots',
      galleryHint: 'Open a screenshot to see it full size.',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
      ctaTitle: 'Need something similar?',
    },
  },
} as const;

type Localized = { es: string; en: string };
type LocalizedList = { es: string[]; en: string[] };

export interface CaseStudy {
  slug: { es: string; en: string };
  org: Localized;
  period: string;
  title: Localized;
  summary: Localized;
  problem: Localized;
  did: LocalizedList;
  metrics: { value: Localized; label: Localized }[];
  flow: LocalizedList;
  stack: string[];
  shotsNote?: Localized;
}

export const cases: CaseStudy[] = [
  {
    slug: { es: 'registro-de-siniestralidad-vial', en: 'road-crash-registry' },
    org: { es: 'CITRA · Secretaría de Movilidad de Medellín', en: 'CITRA · Medellín Mobility Department' },
    period: '2026',
    title: { es: 'Registro de Siniestralidad Vial', en: 'Road Crash Registry' },
    summary: {
      es: 'Una aplicación web construida desde cero para registrar los informes de accidentes de tránsito. Reemplazó una hoja de cálculo y hoy la usan a diario los digitadores del área.',
      en: 'A web app built from scratch to record traffic crash reports. It replaced a shared spreadsheet and the data entry team now uses it every day.',
    },
    problem: {
      es: 'Los informes de accidentes de tránsito (IPAT) se registraban en una hoja de cálculo compartida: sin validaciones, sin trazabilidad y difícil de cruzar con otros sistemas de la Secretaría.',
      en: 'Traffic crash reports were kept in a shared spreadsheet: no validation, no audit trail and hard to cross with the department’s other systems.',
    },
    did: {
      es: [
        'Propuse Appsmith para construir rápido y diseñé el modelo de datos en PostgreSQL.',
        'Construí formularios con validaciones de calidad, un mapa con geocodificación (Leaflet) y tableros (ECharts).',
        'Integré en solo lectura el Formulario de Policía Judicial y construí el módulo de entrega de expedientes.',
        'Resolví el mismo día una caída en producción paginando en la base de datos.',
        'Escribí guías de diligenciamiento y conservé el formato que el equipo ya conocía.',
      ],
      en: [
        'Proposed Appsmith to move fast and designed the data model in PostgreSQL.',
        'Built forms with data quality checks, a geocoded map (Leaflet) and dashboards (ECharts).',
        'Added a read-only integration with the judicial police form and built the case file handover module.',
        'Fixed a production outage the same day by moving pagination into the database.',
        'Wrote data entry guides and kept the layout the team already knew.',
      ],
    },
    metrics: [
      { value: { es: '+2.800', en: '2,800+' }, label: { es: 'casos gestionados', en: 'cases managed' } },
      { value: { es: '133', en: '133' }, label: { es: 'pruebas automáticas', en: 'automated tests' } },
      { value: { es: '7,3 MB → 45 KB', en: '7.3 MB → 45 KB' }, label: { es: 'por respuesta tras la corrección', en: 'per response after the fix' } },
      { value: { es: '0', en: '0' }, label: { es: 'datos perdidos al migrar 45.815 filas', en: 'rows lost migrating 45,815 rows' } },
    ],
    flow: {
      es: ['Formulario', 'Validaciones', 'PostgreSQL', 'Mapa y tableros'],
      en: ['Form', 'Quality checks', 'PostgreSQL', 'Map and dashboards'],
    },
    stack: ['Appsmith', 'PostgreSQL', 'Leaflet', 'ECharts'],
  },
  {
    slug: { es: 'gdp-planes-semaforicos', en: 'dynamic-signal-plans' },
    org: { es: 'CITRA · Secretaría de Movilidad de Medellín', en: 'CITRA · Medellín Mobility Department' },
    period: '2026',
    title: { es: 'Semáforos que eligen su plan con el tráfico real', en: 'Traffic signals that pick their plan from live traffic' },
    summary: {
      es: 'Rediseñé GDP 2.0, el motor que cada unos 5 minutos mide con Waze la congestión de cada entrada a un cruce y elige, entre los planes semafóricos ya validados, el que mejor la atiende. Está en piloto, en modo simulación.',
      en: 'I redesigned GDP 2.0, the engine that every 5 minutes or so measures congestion on each approach to an intersection with Waze and picks, among the already approved signal plans, the one that serves it best. It is in a pilot, running in simulation mode.',
    },
    problem: {
      es: 'Los semáforos cambian de plan por horario fijo, sin ver el tráfico de ese día. La versión anterior del motor intentaba corregirlo, pero daba pesos negativos a algunas vías, usaba una señal de Waze que solo existe cuando hay atasco y atribuía la demanda a grupos de señal equivocados.',
      en: 'Traffic signals switch plans on a fixed schedule, blind to that day’s traffic. The previous engine tried to fix this, but it gave some roads negative weights, relied on a Waze signal that only exists during jams and assigned demand to the wrong signal groups.',
    },
    did: {
      es: [
        'Cambié la regla de decisión: comparo la demanda de verde de cada grupo de señal con el reparto de cada plan y elijo el que mejor la cubre, en lugar de subir por una escalera de planes.',
        'Usé como señal principal el tiempo de viaje de Waze frente a su histórico, que es direccional y no depende de que haya atasco.',
        'Corregí el mapa entre entradas y grupos de señal contra 11.188 registros del controlador; desde ahí el sistema mide la entrada más cargada del cruce piloto, que antes no veía.',
        'Agregué guardas: tiempo mínimo entre cambios, confirmación del plan aplicado, modo simulación y auditoría de cada decisión.',
        'Pasé de notebooks sin pruebas a 12 módulos Python con 23 pruebas, y migré la configuración a PostgreSQL verificando que el motor diera la misma salida byte a byte.',
      ],
      en: [
        'Changed the decision rule: I compare the green-time demand of each signal group with each plan’s split and pick the one that covers it best, instead of climbing a ladder of plans.',
        'Used Waze travel time against its history as the main signal, which is directional and does not depend on a jam existing.',
        'Fixed the approach-to-signal-group map against 11,188 controller records; from then on the system measures the busiest approach of the pilot intersection, which it could not see before.',
        'Added safeguards: minimum time between changes, read-back of the applied plan, simulation mode and an audit of every decision.',
        'Went from untested notebooks to 12 Python modules with 23 tests, and moved configuration to PostgreSQL, checking the engine gave byte-for-byte the same output.',
      ],
    },
    metrics: [
      { value: { es: '9', en: '9' }, label: { es: 'fuentes de datos integradas, entre Waze, bases de datos y un grafo del corredor', en: 'data sources integrated across Waze, databases and a corridor graph' } },
      { value: { es: '23', en: '23' }, label: { es: 'pruebas automáticas donde antes no había ninguna', en: 'automated tests where there were none' } },
      { value: { es: '~5 min', en: '~5 min' }, label: { es: 'entre cada decisión del lazo de control', en: 'between decisions of the control loop' } },
      { value: { es: '704', en: '704' }, label: { es: 'controladores que la misma configuración ya puede describir', en: 'controllers the same configuration can already describe' } },
    ],
    flow: {
      es: ['Waze en Elasticsearch', 'Saturación por entrada', 'Demanda de verde por grupo', 'Plan que mejor la cubre', 'Controlador', 'Auditoría'],
      en: ['Waze in Elasticsearch', 'Saturation per approach', 'Green demand per group', 'Best-matching plan', 'Controller', 'Audit'],
    },
    stack: ['Python', 'Elasticsearch', 'PostgreSQL', 'Neo4j', 'Waze', 'pytest'],
    shotsNote: {
      es: 'Capturas del informe técnico del rediseño, sin nombres de servidores, direcciones de red ni detalles de conexión a los equipos. El piloto corre en modo simulación: todavía no se afirma una reducción de tiempos de viaje; esa validación se hará con cámaras LPR.',
      en: 'Screenshots of the redesign’s technical report, without server names, network addresses or device connection details. The pilot runs in simulation mode: no travel-time reduction is claimed yet; that will be validated with LPR cameras.',
    },
  },
  {
    slug: { es: 'reindexacion-registros-lpr', en: 'lpr-records-reindex' },
    org: { es: 'CITRA · Secretaría de Movilidad de Medellín', en: 'CITRA · Medellín Mobility Department' },
    period: '2025',
    title: { es: 'Reindexación de 2.624 millones de registros LPR', en: 'Reindexing 2.62 billion LPR records' },
    summary: {
      es: 'Reindexé las lecturas de las cámaras de reconocimiento de placas en Elasticsearch y enriquecí el 93,6 % con datos del registro nacional de vehículos (RUNT).',
      en: 'I reindexed the license plate recognition (LPR) camera reads in Elasticsearch and enriched 93.6% of them with Colombia’s national vehicle registry (RUNT).',
    },
    problem: {
      es: 'Las lecturas de placas estaban en índices que no servían para las consultas que necesitaba la operación y les faltaba la información del vehículo.',
      en: 'Plate reads lived in indices that did not fit the queries operations needed, and they lacked vehicle information.',
    },
    did: {
      es: [
        'Diseñé el nuevo mapeo de índices y un plan de reindexación por lotes con puntos de control, para reanudar sin repetir trabajo.',
        'Crucé cada lectura con datos del RUNT durante la reindexación.',
        'Ejecuté el proceso en un clúster de Elasticsearch de 4 nodos.',
      ],
      en: [
        'Designed the new index mappings and a batch reindex plan with checkpoints, so it could resume without redoing work.',
        'Joined each read with RUNT data during the reindex.',
        'Ran the process on a 4-node Elasticsearch cluster.',
      ],
    },
    metrics: [
      { value: { es: '2.624 M', en: '2.62 B' }, label: { es: 'registros reindexados', en: 'records reindexed' } },
      { value: { es: '93,6 %', en: '93.6%' }, label: { es: 'enriquecidos con el RUNT', en: 'enriched with RUNT data' } },
      { value: { es: '4', en: '4' }, label: { es: 'nodos en el clúster', en: 'cluster nodes' } },
    ],
    flow: {
      es: ['Índices de origen', 'Lotes con puntos de control', 'Enriquecimiento RUNT', 'Índices nuevos'],
      en: ['Source indices', 'Checkpointed batches', 'RUNT enrichment', 'New indices'],
    },
    stack: ['Elasticsearch', 'Python'],
  },
  {
    slug: { es: 'ingesta-y-geocodificacion-de-siniestros', en: 'crash-ingestion-and-geocoding' },
    org: { es: 'CITRA · Secretaría de Movilidad de Medellín', en: 'CITRA · Medellín Mobility Department' },
    period: '2025',
    title: { es: 'Ingesta y geocodificación de siniestros', en: 'Crash report ingestion and geocoding' },
    summary: {
      es: 'Rehice el proceso que trae los informes de siniestros de SQL Server a PostgreSQL y los ubica en el mapa. Ahora es unas 5 veces más rápido.',
      en: 'I rebuilt the process that moves crash reports from SQL Server to PostgreSQL and places them on the map. It now runs about 5 times faster.',
    },
    problem: {
      es: 'La carga completa era lenta y muchas direcciones colombianas no se ubicaban bien con un solo servicio de geocodificación.',
      en: 'Full reloads were slow, and many Colombian street addresses could not be located well with a single geocoding service.',
    },
    did: {
      es: [
        'Cambié la carga completa por una carga incremental de SQL Server a PostgreSQL/PostGIS.',
        'Normalicé las direcciones y armé una cascada de geocodificación: MAPGIS primero, luego HERE y Google Maps.',
      ],
      en: [
        'Replaced full reloads with incremental loads from SQL Server to PostgreSQL/PostGIS.',
        'Normalized addresses and built a geocoding cascade: MAPGIS first, then HERE and Google Maps.',
      ],
    },
    metrics: [
      { value: { es: '~5×', en: '~5×' }, label: { es: 'más rápida', en: 'faster' } },
      { value: { es: '3', en: '3' }, label: { es: 'servicios de geocodificación en cascada', en: 'geocoding services in cascade' } },
    ],
    flow: {
      es: ['SQL Server', 'Carga incremental', 'Normalización de direcciones', 'MAPGIS → HERE → Google', 'PostGIS'],
      en: ['SQL Server', 'Incremental load', 'Address normalization', 'MAPGIS → HERE → Google', 'PostGIS'],
    },
    stack: ['Python', 'SQL Server', 'PostgreSQL', 'PostGIS', 'HERE', 'Google Maps'],
  },
  {
    slug: { es: 'comparendos-en-elasticsearch', en: 'traffic-tickets-in-elasticsearch' },
    org: { es: 'CITRA · Secretaría de Movilidad de Medellín', en: 'CITRA · Medellín Mobility Department' },
    period: '2026',
    title: { es: 'Comparendos en Elasticsearch y cruce con los operativos', en: 'Traffic tickets in Elasticsearch, matched with enforcement operations' },
    summary: {
      es: 'Construí el pipeline que lleva 14,17 millones de comparendos del data warehouse a Elasticsearch, enriquecidos con el RUNT, y el cruce que compara lo que declara cada operativo de tránsito con los comparendos que realmente se impusieron.',
      en: 'I built the pipeline that moves 14.17 million traffic tickets from the data warehouse into Elasticsearch, enriched with the national vehicle registry, and the match that compares what each enforcement operation reports with the tickets actually issued.',
    },
    problem: {
      es: 'Los comparendos vivían en un data warehouse en PostgreSQL, separados de las lecturas LPR y de Waze, y no había cómo verificar cuántos comparendos salían de cada operativo de tránsito.',
      en: 'Traffic tickets lived in a PostgreSQL data warehouse, apart from LPR reads and Waze, and there was no way to check how many tickets each enforcement operation produced.',
    },
    did: {
      es: [
        'Extraje por streaming desde el esquema estrella y escribí en índices mensuales por fecha del hecho, alineados con LPR y Waze para poder cruzarlos.',
        'Enriquecí cada comparendo con el parque automotor del RUNT y usé el número de comparendo como identificador, así que reindexar actualiza en vez de duplicar.',
        'Corregí 6 problemas de calidad del dato: zona horaria, comuna con un ID desfasado, direcciones duplicadas, campos repetidos, textos truncados y valores centinela.',
        'Crucé unos 34.000 operativos de 2024 a 2026 con los comparendos de sus agentes por ventana horaria, incluidos turnos nocturnos y cambios de mes, para medir la diferencia entre lo declarado y lo real.',
        'Lo dejé listo para producción como job de Nomad, con carga histórica por lotes.',
      ],
      en: [
        'Streamed data out of the star schema into monthly indices by event date, aligned with LPR and Waze so they can be crossed.',
        'Enriched every ticket with the national vehicle registry and used the ticket number as the ID, so reindexing updates instead of duplicating.',
        'Fixed 6 data quality issues: time zone, a district ID off by one, duplicated addresses, repeated fields, truncated text and sentinel values.',
        'Matched about 34,000 operations from 2024 to 2026 with their officers’ tickets by time window, including night shifts and month changes, to measure the gap between reported and actual.',
        'Left it production-ready as a Nomad job, with batched historical loading.',
      ],
    },
    metrics: [
      { value: { es: '14,17 M', en: '14.17 M' }, label: { es: 'comparendos en el data warehouse de origen', en: 'tickets in the source data warehouse' } },
      { value: { es: '~34.000', en: '~34,000' }, label: { es: 'operativos cruzados con sus comparendos', en: 'operations matched with their tickets' } },
      { value: { es: '6', en: '6' }, label: { es: 'problemas de calidad del dato corregidos', en: 'data quality issues fixed' } },
    ],
    flow: {
      es: ['PostgreSQL (esquema estrella)', 'Enriquecimiento con RUNT', 'Elasticsearch por mes', 'Cruce con operativos', 'Tablero en Kibana'],
      en: ['PostgreSQL (star schema)', 'Registry enrichment', 'Monthly Elasticsearch indices', 'Match with operations', 'Kibana dashboard'],
    },
    stack: ['Python', 'PostgreSQL', 'Elasticsearch', 'Nomad', 'Kibana'],
  },
  {
    slug: { es: 'congestion-en-puestos-de-votacion', en: 'polling-station-congestion' },
    org: { es: 'CITRA · Secretaría de Movilidad de Medellín', en: 'CITRA · Medellín Mobility Department' },
    period: '2026',
    title: { es: 'Congestión vial en jornadas electorales', en: 'Traffic congestion on election days' },
    summary: {
      es: 'Medí cómo cambia el tráfico alrededor de los 180 puestos de votación de Medellín en las elecciones de 2026 y entregué una predicción para la segunda vuelta presidencial en un informe web interactivo.',
      en: 'I measured how traffic changes around Medellín’s 180 polling stations in the 2026 elections and delivered a forecast for the presidential runoff in an interactive web report.',
    },
    problem: {
      es: 'Para planear el dispositivo de la segunda vuelta, la Secretaría necesitaba saber dónde y a qué hora se congestiona la ciudad en una jornada electoral, y si el tráfico sube o baja frente a un domingo común.',
      en: 'To plan traffic control for the runoff, the department needed to know where and when the city gets congested on election day, and whether traffic goes up or down compared with an ordinary Sunday.',
    },
    did: {
      es: [
        'Tracé un corredor de 400 m alrededor de cada uno de los 180 puestos y crucé los embotellamientos, alertas y velocidades de Waze en 21 comunas y corregimientos y 135 barrios.',
        'Comparé dos jornadas observadas (legislativas del 8 de marzo y primera vuelta del 31 de mayo) con los domingos comunes del mismo mes.',
        'Construí la predicción por comuna para el 21 de junio, ponderando más la jornada presidencial, con su banda y su confiabilidad.',
        'Entregué un informe web interactivo con mapa, perfil horario, mapa de calor, vías y barrios críticos y recomendaciones operativas.',
      ],
      en: [
        'Drew a 400 m corridor around each of the 180 stations and matched Waze jams, alerts and speeds across 21 districts and 135 neighborhoods.',
        'Compared two observed election days (March 8 legislative and May 31 first round) with ordinary Sundays of the same month.',
        'Built the per-district forecast for June 21, weighting the presidential day more, with its range and confidence.',
        'Delivered an interactive web report with a map, hourly profile, heat map, critical roads and neighborhoods, and operational recommendations.',
      ],
    },
    metrics: [
      { value: { es: '180', en: '180' }, label: { es: 'puestos de votación con su corredor de 400 m', en: 'polling stations, each with a 400 m corridor' } },
      { value: { es: '≈11:00', en: '≈11:00' }, label: { es: 'hora pico de congestión electoral', en: 'peak congestion time on election day' } },
      { value: { es: '16 de 20', en: '16 of 20' }, label: { es: 'comunas circularon más rápido que un domingo común', en: 'districts moved faster than on an ordinary Sunday' } },
      { value: { es: '15,3 %', en: '15.3%' }, label: { es: 'de variación entre comunas: predicción de confiabilidad alta', en: 'variation across districts: a high-confidence forecast' } },
    ],
    flow: {
      es: ['Waze en Elasticsearch', 'Corredor de 400 m por puesto', 'Comparación con domingos comunes', 'Predicción por comuna', 'Informe web'],
      en: ['Waze in Elasticsearch', '400 m corridor per station', 'Comparison with ordinary Sundays', 'Per-district forecast', 'Web report'],
    },
    stack: ['Python', 'Elasticsearch', 'Waze', 'Leaflet'],
    shotsNote: {
      es: 'Capturas del informe que entregué. Solo usa datos agregados de Waze por corredor, comuna y barrio; no contiene datos personales.',
      en: 'Screenshots of the report I delivered. It only uses Waze data aggregated by corridor, district and neighborhood; it has no personal data.',
    },
  },
];

export const experience = [
  {
    role: { es: 'Desarrollador de Software, Datos e IA', en: 'Software, Data and AI Developer' },
    org: {
      es: 'CITRA, Secretaría de Movilidad de Medellín (contratista del ITM)',
      en: 'CITRA, Medellín Mobility Department (contractor through ITM)',
    },
    period: { es: 'may. 2024 – hoy', en: 'May 2024 – present' },
    bullets: {
      es: [
        'Construí desde cero el Registro de Siniestralidad Vial, que reemplazó una hoja de cálculo y hoy se usa a diario.',
        'Reindexé 2.624 millones de registros de cámaras LPR en Elasticsearch y enriquecí el 93,6 % con datos del RUNT.',
        'Hice unas 5 veces más rápida la ingesta y geocodificación de siniestros viales.',
        'Rediseñé GDP 2.0, el motor que elige el plan semafórico de un cruce según el tráfico de Waze: 12 módulos, 23 pruebas y 9 fuentes de datos, hoy en piloto.',
        'Llevé 14,17 millones de comparendos a Elasticsearch enriquecidos con el RUNT y los crucé con unos 34.000 operativos de tránsito.',
        'Medí la congestión alrededor de los 180 puestos de votación en las elecciones de 2026 y entregué la predicción para la segunda vuelta.',
        'Desarrollé pipelines de ingesta hacia Elasticsearch con Logstash, Python y Nomad, y tableros en Kibana para seguridad vial.',
      ],
      en: [
        'Built the Road Crash Registry from scratch; it replaced a spreadsheet and is used every day.',
        'Reindexed 2.62 billion LPR camera records in Elasticsearch and enriched 93.6% with national vehicle registry data.',
        'Made crash report ingestion and geocoding about 5 times faster.',
        'Redesigned GDP 2.0, the engine that picks an intersection’s signal plan from Waze traffic: 12 modules, 23 tests and 9 data sources, now in a pilot.',
        'Moved 14.17 million traffic tickets into Elasticsearch enriched with the vehicle registry and matched them with about 34,000 enforcement operations.',
        'Measured congestion around the 180 polling stations in the 2026 elections and delivered the forecast for the runoff.',
        'Built ingestion pipelines into Elasticsearch with Logstash, Python and Nomad, and Kibana dashboards for road safety.',
      ],
    },
  },
  {
    role: { es: 'Desarrollador Backend e IA', en: 'Backend and AI Developer' },
    org: { es: 'Clectif S.A.S.', en: 'Clectif S.A.S.' },
    period: { es: 'feb. 2023 – hoy', en: 'Feb 2023 – present' },
    bullets: {
      es: [
        'Trabajo en el desarrollo del backend y la IA de Smart Decisions Platform, una plataforma de Clectif en producción para CITRA.',
        'Construí un cliente MCP que conecta modelos de lenguaje con Elasticsearch, PostgreSQL, Neo4j y n8n.',
        'Desarrollé flujos en n8n para un bot de WhatsApp con IA para reservas de vehículos.',
      ],
      en: [
        'Work on the backend and AI of Smart Decisions Platform, a Clectif platform in production at CITRA.',
        'Built an MCP client that connects language models to Elasticsearch, PostgreSQL, Neo4j and n8n.',
        'Built n8n flows for an AI WhatsApp bot that books vehicles.',
      ],
    },
  },
  {
    role: { es: 'Practicante de Datos', en: 'Data Intern' },
    org: { es: 'Alcaldía de Medellín, Secretaría de Movilidad', en: 'City of Medellín, Mobility Department' },
    period: { es: 'jul. – dic. 2022', en: 'Jul – Dec 2022' },
    bullets: {
      es: ['Procesé datos de siniestralidad vial con Python, los cargué en Elasticsearch y construí visualizaciones en Kibana.'],
      en: ['Processed road crash data with Python, loaded it into Elasticsearch and built Kibana visualizations.'],
    },
  },
];

export const stack = [
  { group: { es: 'Datos', en: 'Data' }, items: ['Python', 'SQL', 'PostgreSQL', 'PostGIS', 'Elasticsearch', 'Logstash', 'Kibana', 'pandas', 'SQL Server'] },
  { group: { es: 'IA', en: 'AI' }, items: ['RAG', 'LLM', 'LangChain', 'Ollama', 'MCP', 'n8n'] },
  { group: { es: 'Backend e infraestructura', en: 'Backend and infrastructure' }, items: ['FastAPI', 'APIs REST', 'Docker', 'Nomad', 'Linux', 'Git'] },
  { group: { es: 'Apps y geoespacial', en: 'Apps and geospatial' }, items: ['Appsmith', 'Streamlit', 'Leaflet', 'Geocodificación'] },
];

export const openSource = [
  {
    name: 'appsmith-mcp',
    url: 'https://github.com/Davidgraciano/appsmith-mcp',
    lang: 'JavaScript',
    description: {
      es: 'Servidor MCP que permite administrar una instancia propia de Appsmith desde agentes de IA, a través de su API REST.',
      en: 'MCP server that lets AI agents manage a self-hosted Appsmith instance through its REST API.',
    },
  },
  {
    name: 'rag-local',
    url: 'https://github.com/Davidgraciano/rag-local',
    lang: 'Python',
    description: {
      es: 'Preguntas y respuestas sobre documentos propios con Elasticsearch, Ollama y FastAPI, con citas de fuentes y sin enviar datos a APIs externas.',
      en: 'Q&A over private documents with Elasticsearch, Ollama and FastAPI, with source citations and no data sent to external APIs.',
    },
  },
  {
    name: 'es-reindexador',
    url: 'https://github.com/Davidgraciano/es-reindexador',
    lang: 'Python',
    description: {
      es: 'Reindexa Elasticsearch por lotes con puntos de control para continuar tras una caída, y enriquece cada documento desde un CSV.',
      en: 'Reindexes Elasticsearch in batches with checkpoints to resume after a crash, and enriches each document from a CSV.',
    },
  },
  {
    name: 'geocodificador-co',
    url: 'https://github.com/Davidgraciano/geocodificador-co',
    lang: 'Python',
    description: {
      es: 'Normaliza direcciones colombianas y las geocodifica en cascada (Nominatim, HERE, Google), con registro de cada intento.',
      en: 'Normalizes Colombian street addresses and geocodes them through a provider cascade (Nominatim, HERE, Google), logging every attempt.',
    },
  },
];

export const education = [
  {
    title: { es: 'Ingeniero en Software', en: 'B.Eng. in Software Engineering' },
    org: 'Tecnológico de Antioquia',
    year: '2025',
  },
  {
    title: { es: 'Matrícula profesional de Ingeniería en Software', en: 'Professional engineering license (Software)' },
    org: 'COPNIA',
    year: '2026',
  },
  {
    title: { es: 'Tecnólogo en Sistemas', en: 'Systems Technologist' },
    org: 'Tecnológico de Antioquia',
    year: '2024',
  },
];

export const certs = [
  { title: { es: 'Bootcamp de IA aplicada con Claude', en: 'Applied AI with Claude bootcamp' }, org: 'Smart Talent', year: '2026' },
  { title: { es: 'Curso de Claude AI', en: 'Claude AI course' }, org: 'Platzi', year: '2026' },
  { title: { es: 'Generación de imágenes con IA', en: 'AI image generation' }, org: 'Platzi', year: '2026' },
  { title: { es: 'Fundamentos de Ingeniería de Software', en: 'Software engineering fundamentals' }, org: 'Platzi', year: '2025' },
  { title: { es: 'Scrum Fundamentals Certified', en: 'Scrum Fundamentals Certified' }, org: 'SCRUMstudy', year: '2023' },
];

export function casePath(c: CaseStudy, lang: Lang) {
  return lang === 'es' ? `/casos/${c.slug.es}/` : `/en/cases/${c.slug.en}/`;
}

export interface CaseImage {
  file: string;
  width: number;
  height: number;
  alt: Localized;
}

// Capturas tomadas de los informes de labores. Los registros individuales y las placas van difuminados.
export const caseImages: Record<string, CaseImage[]> = {
  'gdp-planes-semaforicos': [
    { file: 'antes-despues', width: 1600, height: 515, alt: { es: 'El cambio de mayor impacto: con el mapa corregido, el sistema por fin mide la entrada más congestionada del cruce.', en: 'The highest-impact change: with the fixed map, the system finally measures the most congested approach.' } },
    { file: 'magnitud', width: 1600, height: 487, alt: { es: 'Magnitud del trabajo en julio de 2026: módulos, pruebas, tablas y fuentes.', en: 'Scope of the July 2026 work: modules, tests, tables and sources.' } },
  ],
  'congestion-en-puestos-de-votacion': [
    { file: 'resumen', width: 1600, height: 1229, alt: { es: 'Portada del informe: cómo se mide el nivel de congestión de Waze y las cifras principales.', en: 'Report cover: how Waze congestion level is measured and the headline figures.' } },
    { file: 'perfil-horario', width: 1600, height: 795, alt: { es: 'Embotellamientos por hora en la jornada electoral, con el pico hacia las 11:00.', en: 'Traffic jams per hour on election day, peaking around 11:00.' } },
    { file: 'mapa-de-calor', width: 1600, height: 790, alt: { es: 'Mapa de calor de embotellamientos por hora y comuna para escalonar el dispositivo.', en: 'Heat map of jams by hour and district to stagger traffic control.' } },
    { file: 'sube-o-baja', width: 1600, height: 838, alt: { es: 'Factor electoral por comuna: dónde sube y dónde baja la congestión frente a un domingo común.', en: 'Election factor per district: where congestion rises or falls against an ordinary Sunday.' } },
    { file: 'velocidad', width: 1600, height: 1296, alt: { es: 'Velocidad media por comuna: 16 de 20 circularon más rápido que un domingo común.', en: 'Average speed per district: 16 of 20 moved faster than on an ordinary Sunday.' } },
    { file: 'vias-y-barrios', width: 1600, height: 1111, alt: { es: 'Vías más congestionadas y barrios con mayor nivel previsto para la segunda vuelta.', en: 'Most congested roads and neighborhoods with the highest forecast level for the runoff.' } },
    { file: 'alertas', width: 1600, height: 850, alt: { es: 'Anatomía de las alertas de Waze: suben los embotellamientos y caen los cierres de vía.', en: 'Breakdown of Waze alerts: jams go up and road closures drop.' } },
    { file: 'recomendaciones', width: 1600, height: 605, alt: { es: 'Recomendaciones operativas para la segunda vuelta del 21 de junio.', en: 'Operational recommendations for the June 21 runoff.' } },
  ],
  'registro-de-siniestralidad-vial': [
    {
      file: 'tablero',
      width: 1600,
      height: 900,
      alt: {
        es: 'Tablero de gestión: qué expedientes piden atención, devoluciones y días a radicación.',
        en: 'Management dashboard: which case files need attention, returns and days to filing.',
      },
    },
    {
      file: 'franjas',
      width: 1600,
      height: 900,
      alt: {
        es: 'Siniestros por día, por franja horaria y por día de la semana.',
        en: 'Crashes per day, by hour and by day of the week.',
      },
    },
    {
      file: 'comunas',
      width: 1600,
      height: 900,
      alt: {
        es: 'Distribución por comuna, vehículos implicados y actor vial afectado.',
        en: 'Breakdown by district, vehicles involved and road user affected.',
      },
    },
    {
      file: 'devoluciones',
      width: 1600,
      height: 900,
      alt: {
        es: 'Motivos de devolución y carga por digitador, para ver dónde está el atraso.',
        en: 'Return reasons and workload per data entry user, to see where the backlog is.',
      },
    },
    {
      file: 'casos',
      width: 1600,
      height: 900,
      alt: {
        es: 'Listado de casos con filtros. Los registros aparecen difuminados.',
        en: 'Case list with filters. The records are blurred.',
      },
    },
  ],
  'reindexacion-registros-lpr': [
    {
      file: 'pipeline',
      width: 1600,
      height: 774,
      alt: {
        es: 'Pipeline de ingesta en Elasticsearch que enriquece cada lectura con la ubicación de la cámara y los datos del vehículo.',
        en: 'Elasticsearch ingest pipeline that enriches each read with the camera location and the vehicle data.',
      },
    },
    {
      file: 'indices',
      width: 1426,
      height: 476,
      alt: {
        es: 'Vista de datos sobre los índices mensuales de lecturas LPR.',
        en: 'Data view over the monthly LPR read indices.',
      },
    },
  ],
  'ingesta-y-geocodificacion-de-siniestros': [
    {
      file: 'mapa',
      width: 1600,
      height: 549,
      alt: {
        es: 'Tablero en Kibana con los siniestros geocodificados sobre el mapa de Medellín.',
        en: 'Kibana dashboard with geocoded crashes on the map of Medellín.',
      },
    },
    {
      file: 'diagnostico',
      width: 1311,
      height: 511,
      alt: {
        es: 'Diagnóstico de geocodificación: 97,97 % de 982.788 registros con coordenadas válidas.',
        en: 'Geocoding audit: 97.97% of 982,788 records with valid coordinates.',
      },
    },
    {
      file: 'ingesta',
      width: 1380,
      height: 705,
      alt: {
        es: 'Registro de la ingesta diaria automática: de SQL Server a PostgreSQL por lotes.',
        en: 'Log of the automatic daily ingestion: SQL Server to PostgreSQL in batches.',
      },
    },
  ],
};

export function imagesFor(c: CaseStudy): CaseImage[] {
  return caseImages[c.slug.es] ?? [];
}

export function imageSrc(c: CaseStudy, img: CaseImage) {
  return `/casos/${c.slug.es}/${img.file}.webp`;
}
