import HomePage from "@/components/HomePage";
import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(content.es, "es");

export default function Page() {
  return <HomePage t={content.es} locale="es" />;
}
