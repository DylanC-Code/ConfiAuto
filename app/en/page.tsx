import HomePage from "@/components/HomePage";
import { content } from "@/lib/content";

export default function Page() {
  return <HomePage t={content.en} locale="en" />;
}
