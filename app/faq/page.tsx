import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <main className="bg-[#0B1C2C] text-white min-h-screen">
      {/* HERO FAQ */}
      <section className="py-20 px-4 text-center bg-[radial-gradient(circle_at_top,#122a44,#050c14)]">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">FAQ</h1>
        <p className="mt-4 opacity-80 max-w-xl mx-auto">
          Toutes les réponses à vos questions avant d’acheter votre véhicule
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem
            value="item-1"
            className="bg-white/5 border border-yellow-500/30 rounded-lg px-4"
          >
            <AccordionTrigger>
              Comment fonctionne votre service ?
            </AccordionTrigger>
            <AccordionContent>
              Nous analysons le véhicule avant achat avec une inspection
              complète afin d’éviter toute mauvaise surprise.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="bg-white/5 border border-yellow-500/30 rounded-lg px-4"
          >
            <AccordionTrigger>Est-ce que vous vous déplacez ?</AccordionTrigger>
            <AccordionContent>
              Oui, nous nous déplaçons directement pour inspecter le véhicule à
              votre place.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="bg-white/5 border border-yellow-500/30 rounded-lg px-4"
          >
            <AccordionTrigger>
              Combien de temps dure une inspection ?
            </AccordionTrigger>
            <AccordionContent>
              En moyenne entre 1h et 2h selon le type de véhicule et les
              vérifications nécessaires.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="bg-white/5 border border-yellow-500/30 rounded-lg px-4"
          >
            <AccordionTrigger>
              Que se passe-t-il si le véhicule a un problème ?
            </AccordionTrigger>
            <AccordionContent>
              Nous vous fournissons un rapport clair pour vous aider à éviter
              l’achat ou négocier le prix.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="bg-white/5 border border-yellow-500/30 rounded-lg px-4"
          >
            <AccordionTrigger>
              Quels types de véhicules inspectez-vous ?
            </AccordionTrigger>
            <AccordionContent>
              Tous types de véhicules : citadines, SUV, utilitaires, etc.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-linear-to-r from-[#0B1C2C] to-[#111]">
        <h2 className="text-2xl text-yellow-500 mb-6">
          Besoin d’un accompagnement ?
        </h2>

        <a
          href="https://wa.me/33612345678"
          target="_blank"
          className="w-full max-w-[230px] mx-auto block"
        >
          <button className="bg-yellow-500 text-black font-semibold text-lg hover:scale-105 transition w-full py-4 rounded-md">
            Contacter maintenant
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-yellow-500/50 text-sm opacity-80">
        📞 06 12 34 56 78 | Instagram @confiauto
      </footer>
    </main>
  );
}
