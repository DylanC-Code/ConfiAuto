import { locales } from "./content";

export function generateLocaleParams() {
  return locales.map((locale) => ({ locale }));
}
