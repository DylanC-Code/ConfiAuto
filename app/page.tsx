import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="bg-[#0B1C2C] text-white">
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-[radial-gradient(circle_at_top,#122a44,#050c14)]">
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-500">
          ConfiAuto
        </h1>
        <p className="mt-3 text-lg opacity-80">
          Le bouclier anti-arnaque automobile
        </p>

        <a href="#packs" className="w-full max-w-[230px]">
          <Button className="mt-6 bg-yellow-500 text-black font-semibold hover:scale-105 transition w-full max-w-[230px] py-5">
            Découvrir les packs
          </Button>
        </a>
      </section>

      {/* PACKS */}
      <section id="packs" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-yellow-500 text-center mb-10">
          Nos services premium
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/5 border border-yellow-500/30 backdrop-blur-lg hover:-translate-y-2 transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white">Pack Amis Mécano</h3>
              <p className="text-2xl text-yellow-500 mt-2">100€</p>
              <p className="mt-2 text-white">✔ 105 points de contrôle</p>

              <div className="mt-4 space-y-2 text-sm opacity-90 text-gray-100">
                <p>🔧 Inspection complète du véhicule</p>
                <p>📊 Analyse état réel</p>
                <p>🚗 Essai routier</p>
              </div>

              <a href="https://wa.me/33612345678" target="_blank">
                <Button className="mt-6 bg-yellow-500 text-black font-semibold text-lg hover:scale-105 transition w-full max-w-[230px] py-5">
                  Réserver
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-yellow-500/30 backdrop-blur-lg hover:-translate-y-2 transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white">
                Pack Amis Courtier
              </h3>
              <p className="text-2xl text-yellow-500 mt-2">À partir de 100€</p>
              <p className="mt-2 text-white">✔ Service complet d’achat</p>

              <div className="mt-4 space-y-2 text-sm opacity-90 text-gray-100">
                <p>🔎 Recherche du véhicule</p>
                <p>🤝 Gestion vendeurs</p>
                <p>📅 Prise de rendez-vous</p>
                <p>🚗 105 points de contrôle</p>
              </div>

              <a href="https://wa.me/33612345678" target="_blank">
                <Button className="mt-6 bg-yellow-500 text-black font-semibold text-lg hover:scale-105 transition w-full max-w-[230px] py-5">
                  Être accompagné
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-yellow-500 text-center mb-10">
          Pourquoi nous choisir ?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Card className="bg-white/5 p-6 border border-yellow-500/30 text-white font-medium text-md hover:scale-103 transition-all duration 300">
            🔒 Sécurisation des achats
          </Card>
          <Card className="bg-white/5 p-6 border border-yellow-500/30 text-white font-medium text-md hover:scale-103 transition-all duration 300">
            💰 Éviter les arnaques
          </Card>
          <Card className="bg-white/5 p-6 border border-yellow-500/30 text-white font-medium text-md hover:scale-103 transition-all duration 300">
            ⚙ Expertise automobile réelle
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-yellow-500 text-center mb-10">
          Avis clients
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-l-4 border-yellow-500 p-5 text-white font-medium text-md ">
            “J’ai évité une arnaque à 3000€ grâce à eux.”
          </Card>
          <Card className="bg-white/5 border-l-4 border-yellow-500 p-5 text-white font-medium text-md ">
            “Service ultra pro, très rassurant.”
          </Card>
          <Card className="bg-white/5 border-l-4 border-yellow-500 p-5 text-white font-medium text-md ">
            “Je recommande à 100% avant achat voiture.”
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-linear-to-r from-[#0B1C2C] to-[#111]">
        <h2 className="text-2xl text-yellow-500 mb-6">
          Ne prenez plus de risques inutiles
        </h2>

        <a
          href="https://wa.me/33612345678"
          target="_blank"
          className="w-full max-w-[230px] py-5 mx-auto block"
        >
          <Button className=" bg-yellow-500 text-black font-semibold text-lg hover:scale-105 transition w-full max-w-[230px] h-max py-2 leading-5">
            Contacter
            <br />
            maintenant
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-yellow-500/50 text-sm opacity-80">
        📞 06 12 34 56 78 | Instagram @confiauto
      </footer>
    </main>
  );
}
