import fr from "./fr";
// import en from "./en";

export const content = {
  fr,
  //   en,
};

export type Content = typeof fr;
export type Locale = keyof typeof content;
