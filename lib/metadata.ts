import { Content, Locale } from "@/lib/content";

export function buildMetadata(t: Content, locale: Locale) {
  return {
    title: `${t.hero.title} - ${t.hero.subtitle}`,
    description: t.hero.subtitle,

    openGraph: {
      title: `${t.hero.title} - ${t.hero.subtitle}`,
      description: t.hero.subtitle,
      locale,
      type: "website",
      url: `https://confi-auto.com/${locale}`,
    },

    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        es: "/es",
      },
    },
  };
}

export function buildFaqMetadata(t: Content, locale: Locale) {
  return {
    title: `FAQ - ${t.hero.title}`,
    description: t.faqPage.hero.subtitle,

    openGraph: {
      title: `FAQ - ${t.hero.title}`,
      description: t.faqPage.hero.subtitle,
      locale,
      type: "website",
      url: `https://confi-auto.com/${locale}/faq`,
    },

    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        fr: "/fr/faq",
        en: "/en/faq",
        es: "/es/faq",
      },
    },
  };
}
