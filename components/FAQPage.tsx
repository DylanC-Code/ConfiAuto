import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Content, Locale } from "@/lib/content";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = Readonly<{
  t: Content;
  locale: Locale;
}>;

export default function FAQPage({ t, locale }: Props) {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* HERO FAQ */}
      <section className="py-20 px-4 text-center bg-[radial-gradient(circle_at_top,var(--color-background-light),var(--color-background))]">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher locale={locale} />
        </div>

        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
          {t.faqPage.hero.title}
        </h1>

        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          {t.faqPage.hero.subtitle}
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {t.faqPage.categories.map((category, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="card-ui px-4">
              <AccordionTrigger>{category.title}</AccordionTrigger>

              <AccordionContent className="text-muted-foreground">
                {category.items.map((item, j) => (
                  <div key={j}>
                    <p>{item.q}</p>
                    <p>{item.a}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-linear-to-r from-background to-card">
        <h2 className="text-2xl text-primary mb-6 font-heading">
          {t.cta.title}
        </h2>

        <a
          href="https://wa.me/33612345678"
          target="_blank"
          className="inline-block mt-6 px-6 py-3 bg-primary  rounded-md cursor-pointer text-black font-semibold max-w-[250px] mx-auto hover:bg-primary/80 transition-colors leading-5"
        >
          {t.cta.button}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-border text-sm text-muted-foreground">
        {t.footer.contact}
      </footer>
    </main>
  );
}
