export type BaseContent = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  packs: {
    title: string;
    items: {
      title: string;
      price: string;
      subtitle: string;
      features: string[];
      cta: string;
    }[];
  };
  trust: {
    title: string;
    items: string[];
  };
  testimonials: {
    title: string;
    items: string[];
  };
  faqPreview: {
    title: string;
    items: {
      q: string;
      a: string;
    }[];
    more: string;
  };
  faqPage: {
    hero: {
      title: string;
      subtitle: string;
    };
    categories: {
      title: string;
      items: {
        q: string;
        a: string;
      }[];
    }[];
  };
  cta: {
    title: string;
    button: string;
  };
  footer: {
    contact: string;
    faq: string;
  };
};
