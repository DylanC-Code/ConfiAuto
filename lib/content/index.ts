import fr from "./fr";
import en from "./en";
import es from "./es";
import { BaseContent } from "./types";

export const content: Record<string, BaseContent> = {
  fr,
  en,
  es,
};

export type Content = BaseContent;
export type Locale = keyof typeof content;

export const locales = Object.keys(content);
