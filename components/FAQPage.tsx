import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQPage({ t }: any) {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* HERO FAQ */}
      <section className="py-20 px-4 text-center bg-[radial-gradient(circle_at_top,var(--color-background-light),var(--color-background))]">
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
          className="w-full max-w-[230px] mx-auto block"
        >
          <Button className="w-full text-base">
            {t.cta.button.replace("\n", " ")}
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-border text-sm text-muted-foreground">
        {t.footer.contact}
      </footer>
    </main>
  );
}
