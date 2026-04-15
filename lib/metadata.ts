import { Content, Locale } from "@/lib/content";

const BASE_URL = "https://confi-auto.com";

export function buildMetadata(t: Content, locale: Locale) {
  const url = `${BASE_URL}/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),

    title: `${t.hero.title} - ${t.hero.subtitle}`,
    description: t.hero.subtitle,

    alternates: {
      canonical: url,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
      },
    },

    openGraph: {
      title: `${t.hero.title} - ${t.hero.subtitle}`,
      description: t.hero.subtitle,
      url,
      locale,
      type: "website",
    },
  };
}

export function buildFaqMetadata(t: Content, locale: Locale) {
  const url = `${BASE_URL}/${locale}/faq`;

  return {
    metadataBase: new URL(BASE_URL),

    title: `FAQ - ${t.hero.title}`,
    description: t.faqPage.hero.subtitle,

    openGraph: {
      title: `FAQ - ${t.hero.title}`,
      description: t.faqPage.hero.subtitle,
      url,
      locale,
      type: "website",
    },

    alternates: {
      canonical: url,
      languages: {
        fr: `${BASE_URL}/fr/faq`,
        en: `${BASE_URL}/en/faq`,
        es: `${BASE_URL}/es/faq`,
      },
    },
  };
}
