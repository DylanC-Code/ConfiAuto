import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQPage({ t }: any) {
  return (
    <main className="bg-[#0B1C2C] text-white min-h-screen">
      {/* HERO FAQ */}
      <section className="py-20 px-4 text-center bg-[radial-gradient(circle_at_top,#122a44,#050c14)]">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
          {t.faqPage.hero.title}
        </h1>
        <p className="mt-4 opacity-80 max-w-xl mx-auto">
          {t.faqPage.hero.subtitle}
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {t.faqPage.items.map((item: any, i: number) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white/5 border border-yellow-500/30 rounded-lg px-4"
            >
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-linear-to-r from-[#0B1C2C] to-[#111]">
        <h2 className="text-2xl text-yellow-500 mb-6">{t.cta.title}</h2>

        <a
          href="https://wa.me/33612345678"
          target="_blank"
          className="w-full max-w-[230px] mx-auto block"
        >
          <Button className="bg-yellow-500 text-black font-semibold text-lg w-full py-4">
            {t.cta.button.replace("\n", " ")}
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-yellow-500/50 text-sm opacity-80">
        {t.footer.contact}
      </footer>
    </main>
  );
}
