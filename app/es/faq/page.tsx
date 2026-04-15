import FAQPage from "@/components/FAQPage";
import { content } from "@/lib/content";
import { buildFaqMetadata } from "@/lib/metadata";

export const metadata = buildFaqMetadata(content.es, "es");

export default function Page() {
  return <FAQPage t={content.es} locale="es" />;
}
