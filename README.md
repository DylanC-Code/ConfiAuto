# 🚗 ConfiAuto

**ConfiAuto** est une landing page optimisée SEO et performance, dédiée à l’accompagnement à l’achat et à la vente de véhicules d’occasion.

👉 Objectif : **éviter les arnaques automobiles** et sécuriser chaque transaction.

---

## ✨ Fonctionnalités

* 🌍 Multi-langues : Français / Anglais / Espagnol
* ⚡ Performance optimisée (Next.js + Tailwind)
* 🔎 SEO avancé (metadata dynamique, hreflang, canonical)
* 📱 Design responsive
* 💬 FAQ structurée (prête pour rich snippets Google)
* 🔁 Switch de langue avec navigation dynamique

---

## 🛠️ Stack technique

* **Framework** : Next.js 16 (App Router)
* **UI** : TailwindCSS + shadcn/ui
* **Langages** : TypeScript
* **SEO** : Metadata API + structure multilingue
* **Fonts** : Inter & Montserrat (optimisées avec `display: swap`)

---

## 📁 Structure du projet

```
/app
  /fr
    page.tsx
    /faq/page.tsx
  /en
    page.tsx
    /faq/page.tsx
  /es
    page.tsx
    /faq/page.tsx

/components
  HomePage.tsx
  FAQPage.tsx
  LanguageSwitcher.tsx

/lib
  content/
    fr.ts
    en.ts
    es.ts
  metadata.ts

/public
  /flags
```

---

## 🌍 Gestion des langues

Chaque langue possède sa propre route :

* 🇫🇷 `/fr`
* 🇬🇧 `/en`
* 🇪🇸 `/es`

👉 Pas de routing dynamique (`[locale]`) pour maximiser :

* les performances
* la stabilité
* le SEO

---

## 🔎 SEO

Le projet inclut :

* ✅ Balises `canonical` (URLs absolues)
* ✅ `hreflang` multi-langues
* ✅ OpenGraph
* ✅ Metadata dynamique basée sur le contenu

Exemple :

```ts
export const metadata = buildMetadata(content.fr, "fr");
```

---

## 🚀 Lancer le projet

```bash
pnpm install
pnpm dev
```

---

## 📦 Build

```bash
pnpm build
pnpm start
```

---

## ⚡ Performance

* CSS optimisé (pas de surcharge inutile)
* Hero sans composants bloquants
* Fonts optimisées
* Static rendering

---

## 🎯 Roadmap SEO

* [ ] Ajout de pages SEO ciblées (ex: inspection voiture occasion)
* [ ] Intégration Schema.org (FAQ rich snippets)
* [ ] Sitemap.xml
* [ ] Backlinks & référencement externe

---

## 💬 À propos

ConfiAuto accompagne les acheteurs et vendeurs pour :

* 🔒 éviter les arnaques
* 🚗 sécuriser les transactions
* 💰 acheter au bon prix

---

## 📞 Contact

📱 06 12 34 56 78
📸 Instagram : @confiauto

---

## 📄 Licence

Projet privé – tous droits réservés.

