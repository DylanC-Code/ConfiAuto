import fr from "./fr";
import en from "./en";
import es from "./es";

type DeepReplace<T> = {
  readonly [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly any[]
      ? readonly DeepReplace<T[K][number]>[]
      : DeepReplace<T[K]>;
};

export type Content = DeepReplace<typeof fr>;

export const content: Record<string, Content> = {
  fr,
  en,
  es,
};

export type Locale = keyof typeof content;

export const locales = Object.keys(content);
