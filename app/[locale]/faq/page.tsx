import FAQPage from "@/components/FAQPage";
import { content, Locale } from "@/lib/content";
import { Metadata } from "next";

export function generateMetadata(props: {
  params: { locale: Locale };
}): Metadata {
  const t = content[props.params.locale];

  return {
    title: t.faqPage.seo.title,
    description: t.faqPage.seo.description,
  };
}

export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;

  return <FAQPage t={content[locale]} locale={locale} />;
}
