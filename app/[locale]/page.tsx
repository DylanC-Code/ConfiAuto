import HomePage from "@/components/HomePage";
import { content, Locale } from "@/lib/content";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  return <HomePage t={content[locale]} locale={locale} />;
}

export { generateLocaleParams as generateStaticParams } from "@/lib/generateStaticParams";
