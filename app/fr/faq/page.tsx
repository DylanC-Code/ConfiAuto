import FAQPage from "@/components/FAQPage";
import { content } from "@/lib/content";
import { buildFaqMetadata } from "@/lib/metadata";

export const metadata = buildFaqMetadata(content.fr, "fr");

export default function Page() {
  return <FAQPage t={content.fr} locale="fr" />;
}
