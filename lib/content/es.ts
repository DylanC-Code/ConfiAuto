import { BaseContent } from "./types";

const es = {
  hero: {
    title: "ConfiAuto",
    subtitle: "Tu escudo contra fraudes en la compra de coches",
    cta: "Descubrir servicios",
  },

  packs: {
    title: "Nuestros servicios premium",
    items: [
      {
        title: "Pack Mecánico",
        price: "100€",
        subtitle: "✔ 105 puntos de control",
        features: [
          "🔧 Inspección completa del vehículo",
          "📊 Análisis del estado real",
          "🚗 Prueba en carretera",
        ],
        cta: "Reservar",
      },
      {
        title: "Pack Asesor",
        price: "Desde 100€",
        subtitle: "✔ Servicio completo de compra",
        features: [
          "🔎 Búsqueda del vehículo",
          "🤝 Gestión de vendedores",
          "📅 Organización de citas",
          "🚗 105 puntos de control",
        ],
        cta: "Recibir ayuda",
      },
    ],
  },

  trust: {
    title: "¿Por qué elegirnos?",
    items: [
      "🔒 Compras seguras",
      "💰 Evitar fraudes",
      "⚙ Experiencia automotriz real",
    ],
  },

  testimonials: {
    title: "Opiniones de clientes",
    items: [
      "“Evité una estafa de 3000€ gracias a ellos.”",
      "“Servicio muy profesional y tranquilizador.”",
      "“Lo recomiendo antes de comprar un coche.”",
    ],
  },

  faqPreview: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo funciona el servicio?",
        a: "Inspeccionamos el vehículo antes de la compra con más de 100 puntos de control para evitar cualquier fraude.",
      },
      {
        q: "¿Se desplazan?",
        a: "Sí, nos desplazamos según tu ubicación para inspeccionar el vehículo directamente.",
      },
      {
        q: "¿Qué pasa si el vehículo tiene un problema?",
        a: "Te damos un informe claro para evitar una mala compra o negociar el precio.",
      },
      {
        q: "¿Cuánto dura una inspección?",
        a: "Entre 1 y 2 horas dependiendo del vehículo.",
      },
    ],
    more: "Ver todas las preguntas",
  },

  faqPage: {
    hero: {
      title: "FAQ",
      subtitle:
        "Todas las respuestas para comprar o vender tu coche sin riesgos",
    },

    categories: [
      {
        title: "🔎 Compra de coche",
        items: [
          {
            q: "¿Cómo comprar un coche sin conocimientos?",
            a: "Te acompañamos de principio a fin: análisis de necesidades, búsqueda de vehículos fiables, verificación completa y negociación del precio.",
          },
          {
            q: "¿Es arriesgado comprar un coche solo?",
            a: "Sí, especialmente en el mercado de segunda mano. Los riesgos incluyen coches accidentados, kilometraje manipulado, defectos ocultos o vendedores falsos.",
          },
          {
            q: "¿Cómo evitar una estafa al comprar un coche?",
            a: "Cuidado con precios demasiado bajos, vendedores insistentes, pagos anticipados o falta de documentos. Nosotros verificamos cada vehículo.",
          },
          {
            q: "¿Qué verifica ConfiAuto antes de una compra?",
            a: "Historial del vehículo, estado mecánico, coherencia de documentos y análisis del precio de mercado.",
          },
          {
            q: "¿Qué presupuesto debo prever?",
            a: "Recomendamos no superar 6 meses de salario y optimizar el presupuesto evitando malas compras.",
          },
        ],
      },

      {
        title: "🚗 Venta de coche",
        items: [
          {
            q: "¿Cómo vender un coche sin ser estafado?",
            a: "Las estafas son frecuentes (transferencias falsas, compradores dudosos). Nosotros aseguramos toda la transacción.",
          },
          {
            q: "¿Puede ConfiAuto vender mi coche?",
            a: "Sí: estimación del precio, creación del anuncio, selección de compradores y negociación.",
          },
          {
            q: "¿Cómo fijar el precio correcto?",
            a: "Analizamos el mercado, el estado del vehículo y la demanda para vender rápido al mejor precio.",
          },
        ],
      },

      {
        title: "🛡️ Seguridad y fraudes",
        items: [
          {
            q: "¿Por qué usar un intermediario automotriz?",
            a: "Ahorro de tiempo, máxima seguridad, mejor precio y acompañamiento personalizado.",
          },
          {
            q: "¿Cuáles son las estafas más comunes?",
            a: "Coches robados, documentos falsos, kilometraje manipulado o daños ocultos.",
          },
          {
            q: "¿ConfiAuto garantiza una compra segura?",
            a: "Sí: cero estafas, cero estrés y cero sorpresas desagradables.",
          },
        ],
      },

      {
        title: "👩‍🦰 Mujeres / compradoras solas",
        items: [
          {
            q: "¿Por qué ConfiAuto es ideal para una mujer sola?",
            a: "Reducimos riesgos, guiamos decisiones y aseguramos cada paso del proceso.",
          },
          {
            q: "¿Acompañan en las citas?",
            a: "Sí, físicamente o a distancia para ayudar y negociar.",
          },
          {
            q: "¿Puedo comprar sin desplazarme?",
            a: "Sí: gestionamos búsqueda, verificación y compra a distancia.",
          },
          {
            q: "¿Qué coche elegir?",
            a: "Te aconsejamos según seguridad, fiabilidad, facilidad de conducción y presupuesto.",
          },
          {
            q: "¿Coche nuevo o de segunda mano?",
            a: "Segunda mano es más barato pero más arriesgado; nuevo es más seguro pero más caro.",
          },
          {
            q: "¿Se puede negociar el precio?",
            a: "Sí, y un profesional suele conseguir mejores condiciones.",
          },
        ],
      },
    ],
  },

  cta: {
    title: "No tomes riesgos innecesarios",
    button: "Contactar\nahora",
  },

  footer: {
    contact: "📞 +33 6 12 34 56 78 | Instagram @confiauto",
    faq: "FAQ",
  },
} satisfies BaseContent;

export default es;
