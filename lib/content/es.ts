import { BaseContent } from "./types";

const es = {
  hero: {
    title: "ConfiAuto",
    subtitle: "Tu escudo contra fraudes automotrices",
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
          "📅 Citas organizadas",
          "🚗 105 puntos de control",
        ],
        cta: "Ser acompañado",
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
        a: "Inspeccionamos el vehículo antes de la compra con más de 100 puntos de control.",
      },
      {
        q: "¿Se desplazan?",
        a: "Sí, nos desplazamos según tu ubicación.",
      },
      {
        q: "¿Qué pasa si hay un problema?",
        a: "Te damos un informe claro para evitar malas compras.",
      },
      {
        q: "¿Cuánto dura la inspección?",
        a: "Entre 1 y 2 horas según el vehículo.",
      },
    ],
    more: "Ver todas las preguntas",
  },

  faqPage: {
    hero: {
      title: "FAQ",
      subtitle: "Todas las respuestas para comprar o vender sin riesgo",
    },

    categories: [
      {
        title: "🔎 Compra de coche",
        items: [
          {
            q: "¿Cómo comprar sin conocimientos?",
            a: "Te acompañamos en todo el proceso: análisis, búsqueda, inspección y negociación.",
          },
          {
            q: "¿Es arriesgado comprar solo?",
            a: "Sí, especialmente en el mercado de segunda mano.",
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
