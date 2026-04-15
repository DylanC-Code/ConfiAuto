import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Content, Locale } from "@/lib/content";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = Readonly<{
  t: Content;
  locale: Locale;
}>;

export default function HomePage({ t, locale }: Props) {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-[radial-gradient(circle_at_top,var(--color-background-light),var(--color-background))]">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher locale={locale} />
        </div>

        <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary">
          {t.hero.title}
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">{t.hero.subtitle}</p>

        <a href="#packs" className="w-full max-w-[230px]">
          <Button className="mt-6 w-full py-5 text-base">{t.hero.cta}</Button>
        </a>
      </section>

      {/* PACKS */}
      <section id="packs" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-primary text-center mb-10 font-heading">
          {t.packs.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {t.packs.items.map((pack, i) => (
            <Card key={i} className="card-ui hover:-translate-y-2 transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold">
                  {pack.title}
                </h3>

                <p className="text-2xl text-primary mt-2">{pack.price}</p>

                <p className="mt-2 text-muted-foreground">{pack.subtitle}</p>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {pack.features.map((f, idx) => (
                    <p key={idx}>{f}</p>
                  ))}
                </div>

                <a href="https://wa.me/33612345678" target="_blank">
                  <Button className="mt-6 w-full py-5 text-base">
                    {pack.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-primary text-center mb-10 font-heading">
          {t.trust.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {t.trust.items.map((item, i) => (
            <Card key={i} className="card-ui font-medium">
              {item}
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-primary text-center mb-10 font-heading">
          {t.testimonials.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <Card key={i} className="card-ui border-l-4 border-primary p-5">
              {item}
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl text-primary text-center mb-10 font-heading">
          {t.faqPreview.title}
        </h2>

        <div className="card-ui p-4">
          <Accordion type="single" collapsible>
            {t.faqPreview.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-6">
          <a
            href={`/${locale}/faq`}
            className="text-sm text-muted-foreground hover:underline"
          >
            {t.faqPreview.more}
          </a>
        </div>
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
          <Button className="w-full text-base leading-5">
            {t.cta.button.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-border text-sm text-muted-foreground">
        {t.footer.contact}
        <div className="mt-2">
          <a href={`/${locale}/faq`} className="hover:underline">
            {t.footer.faq}
          </a>
        </div>
      </footer>
    </main>
  );
}
