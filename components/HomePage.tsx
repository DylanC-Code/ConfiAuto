import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage({ t }: any) {
  return (
    <main className="bg-[#0B1C2C] text-white">
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-[radial-gradient(circle_at_top,#122a44,#050c14)]">
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-500">
          {t.hero.title}
        </h1>
        <p className="mt-3 text-lg opacity-80">{t.hero.subtitle}</p>

        <a href="#packs" className="w-full max-w-[230px]">
          <Button className="mt-6 bg-yellow-500 text-black font-semibold hover:scale-105 transition w-full py-5">
            {t.hero.cta}
          </Button>
        </a>
      </section>

      {/* PACKS */}
      <section id="packs" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-yellow-500 text-center mb-10">
          {t.packs.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {t.packs.items.map((pack: any, i: number) => (
            <Card
              key={i}
              className="bg-white/5 border border-yellow-500/30 backdrop-blur-lg hover:-translate-y-2 transition"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">{pack.title}</h3>
                <p className="text-2xl text-yellow-500 mt-2">{pack.price}</p>
                <p className="mt-2 text-white">{pack.subtitle}</p>

                <div className="mt-4 space-y-2 text-sm opacity-90 text-gray-100">
                  {pack.features.map((f: string, idx: number) => (
                    <p key={idx}>{f}</p>
                  ))}
                </div>

                <a href="https://wa.me/33612345678" target="_blank">
                  <Button className="mt-6 bg-yellow-500 text-black font-semibold text-lg hover:scale-105 transition w-full py-5">
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
        <h2 className="text-3xl text-yellow-500 text-center mb-10">
          {t.trust.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {t.trust.items.map((item: string, i: number) => (
            <Card
              key={i}
              className="bg-white/5 p-6 border border-yellow-500/30 text-white font-medium"
            >
              {item}
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-yellow-500 text-center mb-10">
          {t.testimonials.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item: string, i: number) => (
            <Card
              key={i}
              className="bg-white/5 border-l-4 border-yellow-500 p-5"
            >
              {item}
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl text-yellow-500 text-center mb-10">
          {t.faqPreview.title}
        </h2>

        <div className="bg-white/5 border border-yellow-500/30 rounded-xl p-4">
          <Accordion type="single" collapsible>
            {t.faqPreview.items.map((item: any, i: number) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-6">
          <a href="/faq" className="text-sm opacity-70 hover:underline">
            {t.faqPreview.more}
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-linear-to-r from-[#0B1C2C] to-[#111]">
        <h2 className="text-2xl text-yellow-500 mb-6">{t.cta.title}</h2>

        <a
          href="https://wa.me/33612345678"
          target="_blank"
          className="w-full max-w-[230px] mx-auto block"
        >
          <Button className="bg-yellow-500 text-black font-semibold text-lg w-full py-2 leading-5">
            {t.cta.button.split("\n").map((line: string, i: number) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-yellow-500/50 text-sm opacity-80">
        {t.footer.contact}
        <div className="mt-2">
          <a href="/faq" className="underline">
            {t.footer.faq}
          </a>
        </div>
      </footer>
    </main>
  );
}
