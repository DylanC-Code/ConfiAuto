import { content, Locale } from "@/lib/content";

import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

const titleMap: Record<Locale, string> = {
  fr: "Inspection voiture avant achat | ConfiAuto",
  en: "Car inspection before buying | ConfiAuto",
  es: "Inspección de coche antes de comprar | ConfiAuto",
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const locale = (await props.params).locale;
  const t = content[locale];

  const title = titleMap[locale];
  const description = t.hero.subtitle;

  return {
    metadataBase: new URL("https://confi-auto.com"),
    title,
    description,

    openGraph: {
      title,
      description,
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

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export { generateLocaleParams as generateStaticParams } from "@/lib/generateStaticParams";
