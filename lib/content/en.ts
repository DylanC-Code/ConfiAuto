import { BaseContent } from "./types";

const en = {
  hero: {
    title: "ConfiAuto",
    subtitle: "Your shield against car scams",
    cta: "Discover our services",
  },

  packs: {
    title: "Our premium services",
    items: [
      {
        title: "Mechanic Friend Package",
        price: "€100",
        subtitle: "✔ 105 inspection points",
        features: [
          "🔧 Full vehicle inspection",
          "📊 Real condition analysis",
          "🚗 Road test",
        ],
        cta: "Book now",
      },
      {
        title: "Broker Friend Package",
        price: "From €100",
        subtitle: "✔ Full purchase support",
        features: [
          "🔎 Vehicle search",
          "🤝 Seller management",
          "📅 Appointment scheduling",
          "🚗 105 inspection points",
        ],
        cta: "Get assistance",
      },
    ],
  },

  trust: {
    title: "Why choose us?",
    items: [
      "🔒 Secure purchases",
      "💰 Avoid scams",
      "⚙ Real automotive expertise",
    ],
  },

  testimonials: {
    title: "Customer reviews",
    items: [
      "“I avoided a €3000 scam thanks to them.”",
      "“Very professional and reassuring service.”",
      "“I highly recommend before buying a car.”",
    ],
  },

  faqPreview: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How does your service work?",
        a: "We inspect the vehicle before purchase with over 100 checkpoints to avoid any scam.",
      },
      {
        q: "Do you travel to inspect vehicles?",
        a: "Yes, we travel based on your location to inspect the vehicle directly.",
      },
      {
        q: "What if the vehicle has an issue?",
        a: "We provide a clear report to help you avoid a bad purchase or negotiate the price.",
      },
      {
        q: "How long does an inspection take?",
        a: "On average between 1 to 2 hours depending on the vehicle.",
      },
    ],
    more: "See all questions",
  },

  faqPage: {
    hero: {
      title: "FAQ",
      subtitle: "All the answers to buy or sell your car safely",
    },

    categories: [
      {
        title: "🔎 Buying a car",
        items: [
          {
            q: "How can I buy a car without knowledge?",
            a: "We support you from A to Z: needs analysis, vehicle search, full inspection and price negotiation.",
          },
          {
            q: "Is it risky to buy a car alone?",
            a: "Yes, especially on the used market. Risks include damaged cars, mileage fraud, hidden defects and fake sellers.",
          },
          {
            q: "How to avoid scams when buying a car?",
            a: "Watch for prices too low, pushy sellers, upfront payments or refusal to provide documents.",
          },
          {
            q: "What does ConfiAuto check before purchase?",
            a: "Vehicle history, mechanical condition, document consistency and market price analysis.",
          },
          {
            q: "What budget should I plan?",
            a: "We recommend not exceeding 6 months of salary and optimizing your budget to avoid bad deals.",
          },
        ],
      },

      {
        title: "🚗 Selling a car",
        items: [
          {
            q: "How to sell a car safely?",
            a: "Scams are common (fake transfers, suspicious buyers). We secure the entire transaction.",
          },
          {
            q: "Can ConfiAuto sell my car for me?",
            a: "Yes: valuation, listing creation, buyer selection and negotiation.",
          },
          {
            q: "How to set the right price?",
            a: "We analyze market value, condition and demand for a fast and optimal sale.",
          },
        ],
      },

      {
        title: "🛡️ Security & scams",
        items: [
          {
            q: "Why use a car broker?",
            a: "Time saving, maximum security, better pricing and personalized support.",
          },
          {
            q: "What are the most common scams?",
            a: "Stolen cars, fake documents, mileage fraud, hidden damage.",
          },
          {
            q: "Do you guarantee a safe purchase?",
            a: "Yes: zero scams, zero stress, zero bad surprises.",
          },
        ],
      },

      {
        title: "👩‍🦰 Women / solo buyers",
        items: [
          {
            q: "Why is ConfiAuto ideal for women?",
            a: "We reduce risks, guide decisions and secure every step.",
          },
          {
            q: "Do you attend appointments?",
            a: "Yes, physically or remotely to assist and negotiate.",
          },
          {
            q: "Can I buy remotely?",
            a: "Yes: search, inspection and transaction handled remotely.",
          },
          {
            q: "Which car should I choose?",
            a: "We advise based on safety, reliability, ease of driving and budget.",
          },
          {
            q: "Used or new car?",
            a: "Used is cheaper but riskier, new is safer but more expensive.",
          },
          {
            q: "Can I negotiate the price?",
            a: "Yes, and professionals often get better deals.",
          },
        ],
      },
    ],
  },

  cta: {
    title: "Stop taking unnecessary risks",
    button: "Contact\nnow",
  },

  footer: {
    contact: "📞 +33 6 12 34 56 78 | Instagram @confiauto",
    faq: "FAQ",
  },
} satisfies BaseContent;

export default en;
