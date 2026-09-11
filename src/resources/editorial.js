const guides = {
  'iconos': {
    intro: 'Los iconos definen la legibilidad de una interfaz: un buen set mantiene grosor, estilo y tamaños coherentes en toda la app. Aquí reúno bibliotecas gratuitas con SVG listos para React, Vue o HTML, incluyendo opciones animadas y de banderas.',
    faqs: [
      { q: '¿SVG o fuente de iconos?', a: 'SVG: pesa menos, se puede colorear por CSS y no bloquea el render como las fuentes de iconos.' },
      { q: '¿Cómo mantengo coherencia visual?', a: 'Usa un solo set por proyecto y un único grosor de trazo en toda la interfaz.' },
    ],
  },
  'banco-de-imagenes': {
    intro: 'Una buena foto o ilustración eleva un diseño. Estos bancos ofrecen fotos, ilustraciones y vectores de alta calidad para usar en proyectos creativos, con licencias claras para no tener sorpresas.',
    faqs: [
      { q: '¿Puedo usar estas imágenes en proyectos comerciales?', a: 'Depende de cada banco: revisa siempre la licencia de la foto concreta antes de publicarla.' },
      { q: '¿Fotos o ilustraciones?', a: 'Fotos para contenido real y testimonios; ilustraciones y vectores para héroes, vacíos y onboarding.' },
    ],
  },
  'spinners': {
    intro: 'Una carga sin feedback parece una app rota. Los spinners y loaders de esta sección dan vida a las esperas con animaciones CSS livianas, sin dependencias pesadas.',
    faqs: [
      { q: '¿Spinner o skeleton?', a: 'Spinner para esperas cortas e indeterminadas; skeleton cuando conoces la estructura del contenido que viene.' },
      { q: '¿Afectan al rendimiento?', a: 'Los basados en CSS puro casi no cuestan; evita loaders con JavaScript pesado o GIFs grandes.' },
    ],
  },
  'github': {
    intro: 'GitHub es donde vive gran parte del ecosistema frontend: repositorios, plantillas y herramientas mantenidas por la comunidad. Esta selección reúne proyectos útiles para descubrir, aprender y contribuir.',
    faqs: [
      { q: '¿Cómo evalúo un repositorio?', a: 'Mira estrellas, fecha del último commit, issues abiertos y si tiene documentación clara.' },
      { q: '¿Puedo contribuir aunque sea principiante?', a: 'Sí: la documentación, los typos y los ejemplos son aportes bienvenidos en casi todos los proyectos.' },
    ],
  },
  'apis': {
    intro: 'Las APIs conectan tu frontend con datos reales: clima, pagos, mapas, IA y más. Aquí listo APIs con documentación clara para integrar en minutos con fetch o tu cliente favorito.',
    faqs: [
      { q: '¿Qué miro antes de elegir una API?', a: 'Autenticación, límites del plan gratuito, latencia y calidad de la documentación con ejemplos.' },
      { q: '¿Dónde guardo las claves?', a: 'Nunca en el frontend público: usa variables de entorno y un backend o función serverless como intermediario.' },
    ],
  },
  'datatables': {
    intro: 'Mostrar cientos de filas sin orden, filtro ni paginación frustra a cualquier usuario. Estas librerías de tablas agregan ordenamiento, búsqueda y paginación a tus datos con poco código.',
    faqs: [
      { q: '¿Tabla simple o librería?', a: 'Tabla HTML simple hasta ~50 filas; librería cuando necesitas ordenar, filtrar o paginar.' },
      { q: '¿Y con miles de filas?', a: 'Busca paginación del lado del servidor o virtualización para no renderizar todo el DOM.' },
    ],
  },
  'dashboards': {
    intro: 'Un dashboard convierte datos en decisiones: gráficos claros, KPIs visibles y filtros útiles. Aquí hay plantillas y componentes para presentar métricas de forma clara e intuitiva.',
    faqs: [
      { q: '¿Qué hace bueno a un dashboard?', a: 'Pocos KPIs relevantes arriba, gráficos con una sola idea cada uno y filtros que no confundan.' },
      { q: '¿Plantilla o desde cero?', a: 'Plantilla para prototipar rápido; a medida cuando el producto necesita identidad propia.' },
    ],
  },
  'skeleton': {
    intro: 'Los skeletons reducen la percepción de espera mostrando el esqueleto del contenido mientras carga. Mejoran la experiencia frente a pantallas en blanco o spinners eternos.',
    faqs: [
      { q: '¿Cuándo usar skeletons?', a: 'Cuando conoces la estructura del contenido (cards, listas, perfiles) y la carga tarda más de 300ms.' },
      { q: '¿Algún cuidado de accesibilidad?', a: 'Marca la zona como ocupada con aria-busy y evita animaciones agresivas si el usuario prefiere movimiento reducido.' },
    ],
  },
  'divisores-secciones-web': {
    intro: 'Los divisores separan secciones con ondas, curvas y diagonales sin imágenes pesadas: puro CSS o SVG. Dan ritmo visual a landing pages de una sola pasada.',
    faqs: [
      { q: '¿SVG o CSS?', a: 'SVG para formas orgánicas como ondas; CSS para diagonales y patrones simples.' },
      { q: '¿Afectan al responsive?', a: 'No si usan viewBox y preserveAspectRatio: escalan perfecto en móvil.' },
    ],
  },
  'json': {
    intro: 'JSON es el idioma del intercambio de datos en la web. Estas herramientas formatean, validan y visualizan JSON para depurar APIs sin sufrir entre llaves.',
    faqs: [
      { q: '¿Cómo depuro una respuesta gigante?', a: 'Pega el JSON en un formateador con colapso por niveles y búsqueda de claves.' },
      { q: '¿JSON o JSONC?', a: 'JSON puro para APIs; JSONC (con comentarios) solo para configuración local.' },
    ],
  },
  'animaciones': {
    intro: 'Las animaciones bien usadas guían la atención y dan sensación de calidad; mal usadas, marean. Esta colección muestra librerías y ejemplos para transiciones y micro-interacciones fluidas.',
    faqs: [
      { q: '¿Cuánta animación es demasiada?', a: 'Si el usuario nota la animación en vez del contenido, es demasiada. Prioriza duraciones de 150-300ms.' },
      { q: '¿CSS o librería?', a: 'CSS para hovers y transiciones; librería cuando hay físicas, gestos o secuencias coordinadas.' },
    ],
  },
  'librerias': {
    intro: 'Las librerías resuelven problemas comunes —fechas, formularios, drag & drop— para no reinventar la rueda. Selección de utilidades probadas que ahorran semanas de desarrollo.',
    faqs: [
      { q: '¿Cómo elijo una librería?', a: 'Mantenimiento activo, tamaño del bundle, documentación y que resuelva tu caso sin traerte 50 features de más.' },
      { q: '¿Muchas dependencias son un riesgo?', a: 'Sí: audita cada tanto con npm audit y elimina las que dejaron de usarse.' },
    ],
  },
  'ia': {
    intro: 'La IA acelera el desarrollo: autocompletado, generación de componentes, imágenes y textos. Reúno herramientas de IA aplicadas al desarrollo web para probar y comparar.',
    faqs: [
      { q: '¿La IA reemplaza al desarrollador?', a: 'No: acelera lo repetitivo, pero las decisiones de arquitectura y UX siguen siendo humanas.' },
      { q: '¿Qué cuidado debo tener?', a: 'Revisa el código generado, no subas secretos a prompts y verifica licencias del contenido generado.' },
    ],
  },
  'frameworks': {
    intro: 'El framework define cómo estructuras tu app: reactividad, routing y render. Comparo opciones populares para desarrollo web moderno, del SPA al SSR.',
    faqs: [
      { q: '¿SPA o SSR?', a: 'SPA para paneles y apps internas; SSR cuando importa el SEO o la primera carga.' },
      { q: '¿Cómo elijo framework?', a: 'Ecosistema, curva de aprendizaje, oferta laboral y qué tan bien encaja con tu equipo.' },
    ],
  },
  'componentes-ui': {
    intro: 'Las bibliotecas de componentes dan botones, modales, tablas y formularios accesibles desde el día uno. Ideales para interfaces modernas y responsivas sin diseñar cada pieza.',
    faqs: [
      { q: '¿Componentes o diseño propio?', a: 'Componentes para velocidad y accesibilidad; diseño propio cuando la marca lo exige.' },
      { q: '¿Qué verificar antes?', a: 'Soporte de temas, accesibilidad (roles ARIA, foco) y peso en el bundle.' },
    ],
  },
  'deployment-hosting': {
    intro: 'Subir tu frontend a producción debería tomar minutos: estas plataformas despliegan sitios estáticos y apps con SSL automático, previews por rama y deploys continuos desde Git.',
    faqs: [
      { q: '¿Qué plan gratuito alcanza?', a: 'Para portfolios y MVPs, los planes gratuitos con deploy desde Git suelen sobrar.' },
      { q: '¿Vercel, Netlify o Render?', a: 'Los tres resuelven hosting estático; la diferencia está en funciones serverless, bases de datos y precios al escalar.' },
    ],
  },
  'generadores-de-uis-basados-en-ai': {
    intro: 'Describes lo que quieres y obtienes una interfaz lista: estos generadores de UI con IA crean componentes, landings y prototipos en minutos a partir de un prompt.',
    faqs: [
      { q: '¿El código generado sirve para producción?', a: 'Como punto de partida sí; revísalo, simplifícalo y adáptalo a tu sistema de diseño.' },
      { q: '¿Cómo logro buenos resultados?', a: 'Prompts específicos: describe layout, colores, secciones y el contenido real, no solo “una landing linda”.' },
    ],
  },
  'recursos-varios': {
    intro: 'El cajón de herramientas misceláneas: utilidades difíciles de clasificar pero que todo desarrollador termina usando, desde colores y fuentes hasta validadores y conversores.',
    faqs: [
      { q: '¿Cómo encuentro algo aquí?', a: 'Usa el buscador de la categoría con palabras clave como “color”, “regex” o “lorem”.' },
      { q: '¿Puedo sugerir un recurso?', a: 'Sí, desde la página de contacto con nombre, URL y por qué debería estar listado.' },
    ],
  },
  'herramientas': {
    intro: 'Utilidades prácticas para el día a día del desarrollo y el diseño: medir, convertir, optimizar y depurar sin instalar nada.',
    faqs: [
      { q: '¿Online o instaladas?', a: 'Online para tareas puntuales; instaladas cuando trabajas a diario o sin conexión.' },
      { q: '¿Son seguras?', a: 'Evita pegar claves secretas, tokens o datos de clientes en herramientas online que no conoces.' },
    ],
  },
  'opensource': {
    intro: 'Software libre que potencia el desarrollo frontend: proyectos con código abierto, comunidad activa y licencias que permiten usar, estudiar y contribuir sin restricciones.',
    faqs: [
      { q: '¿Qué licencia me conviene?', a: 'MIT/Apache para máxima libertad; GPL si quieres que los derivados sigan abiertos.' },
      { q: '¿Cómo empiezo a contribuir?', a: 'Lee el README y CONTRIBUTING, resuelve un issue marcado como buen primer aporte.' },
    ],
  },
};

export const getGuide = (slug = '') => guides[slug] || null;
