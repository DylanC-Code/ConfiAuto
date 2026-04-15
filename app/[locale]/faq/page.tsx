import FAQPage from "@/components/FAQPage";
import { content, Locale } from "@/lib/content";

import { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const locale = (await props.params).locale;
  const t = content[locale];

  return {
    title: t.faqPage.seo.title,
    description: t.faqPage.seo.description,
  };
}

export default async function Page({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  const locale = (await params).locale;

  return <FAQPage t={content[locale]} locale={locale} />;
}

export { generateLocaleParams as generateStaticParams } from "@/lib/generateStaticParams";
