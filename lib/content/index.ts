import fr from "./fr";
// import en from "./en";

export const content = {
  fr,
  en: fr,
};

export type Content = typeof fr;
export type Locale = keyof typeof content;

export const locales = Object.keys(content) as Locale[];
