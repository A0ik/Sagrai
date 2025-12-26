import Image from "next/image";
import { ChefHat, Heart, Zap } from "lucide-react";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FloatingNav } from "@/components/sections/floating-nav";

const DELIVEROO =
  "https://deliveroo.fr/fr/menu/paris/ozoir-la-ferriere/ca-graille";

const GMAPS =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e665651878a2e9:0x9808f41daf9f23b2?sa=X&ved=1t:8290&ictx=111";

const INSTAGRAM = "https://instagram.com/cagraille.restaurant";

const ADDRESS = "13 Av. du Général Leclerc, 77330 Ozoir-la-Ferrière, France";
const PHONE_DISPLAY = "09 72 86 02 82";
const PHONE_TEL = "+33972860282";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.880627014712!2d2.6727357!3d48.7650759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665651878a2e9%3A0x9808f41daf9f23b2!2s%C3%87A%20GRAILLE!5e0!3m2!1sfr!2sfr!4v1766584670447!5m2!1sfr!2sfr";

const menuCards = [
  {
    title: "Burgers",
    price: "À partir de 8,90€",
    desc: "Des burgers généreux avec des produits frais. Du classique au gourmand.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Kebabs",
    price: "À partir de 7,50€",
    desc: "Viande grillée, légumes croquants et sauces savoureuses.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/25/D%C3%B6ner_kebap.jpg",
  },
  {
    title: "Sandwich",
    price: "À partir de 3,50€",
    desc: "Sandwichs, snacks et options rapides pour accompagner ou compléter.",
    img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=2400&q=80",
  },
];

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-[#f7f6f3]">
      <div id="top" />
      <FloatingNav />

      {/* HERO */}
      <section className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
        <Image
          alt="Cagraille - Burger"
          src="/images/hero-cagraille.jpg"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <div className="mt-20" />
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Ça graille
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Saveurs du monde à Ozoir-la-Ferrière. Bowls & sandwiches briochés.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#menu"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Voir le menu
            </a>

            <a
              href={DELIVEROO}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              Commander (Deliveroo)
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-white/75">
            <span className="rounded-full bg-white/10 px-3 py-1">
              4,9★ (815 avis)
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">10–20€</span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              Restaurant halal
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">Terrasse</span>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/50">
              <div className="mt-1 h-2 w-1 rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-20">
        <div id="top" />
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight">Notre Menu</h2>
          <p className="mt-4 text-black/60">
            Découvrez nos spécialités préparées avec des ingrédients frais et
            savoureux
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {menuCards.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <div className="relative h-56 w-full">
                <Image alt={c.title} src={c.img} fill className="object-cover" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-sm text-white">
                  {c.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-black/60">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={DELIVEROO}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Commander sur Deliveroo
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-tight">
              À propos de nous
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-black/60">
              Chez <span className="text-orange-500">Ça graille</span>, on fait
              simple: de la bouffe généreuse, et ça doit caler.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Cuisiné sur place",
                text: "Préparé à la minute, pas du décoratif.",
                Icon: ChefHat,
              },
              {
                title: "Fait avec passion",
                text: "Recettes généreuses, sauces bien choisies.",
                Icon: Heart,
              },
              {
                title: "Service rapide",
                text: "Efficace pour les plus pressés.",
                Icon: Zap,
              },
            ].map(({ title, text, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border bg-[#f7f6f3] p-10 text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                  <Icon className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-black/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS */}
      <TestimonialsSection />

      {/* CONTACT */}
      {/* CONTACT */}
<section id="contact" className="bg-white py-20">
  <div className="mx-auto max-w-6xl px-4">
    <div className="text-center">
      <h2 className="text-5xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-4 text-black/60">Les vraies infos, pas du Lorem Ipsum.</p>
    </div>

    <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
      {/* COL GAUCHE: contact card */}
      <div className="rounded-2xl border bg-[#f7f6f3] p-8">
        <h3 className="text-xl font-semibold">📞 Téléphone</h3>
        <a
          className="mt-3 inline-block font-semibold text-orange-600 hover:underline"
          href={`tel:${PHONE_TEL}`}
        >
          {PHONE_DISPLAY}
        </a>

        <h3 className="mt-8 text-xl font-semibold">📍 Adresse</h3>
        <p className="mt-3 text-black/60">{ADDRESS}</p>

        <h3 className="mt-8 text-xl font-semibold">📷 Instagram</h3>
        <a
          className="mt-3 inline-block font-semibold text-orange-600 hover:underline"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram.com/cagraille.restaurant
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            href={DELIVEROO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Commander (Deliveroo)
          </a>
          <a
            className="rounded-full border bg-white px-5 py-3 text-sm font-semibold hover:bg-[#fff7ed]"
            href={GMAPS}
            target="_blank"
            rel="noopener noreferrer"
          >
            Itinéraire (Google Maps)
          </a>
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6">
          <h4 className="font-semibold">Horaires</h4>
          <ul className="mt-3 space-y-2 text-black/70 text-sm">
            <li>Mercredi : 11:00–15:00, 18:00–23:00</li>
            <li>Jeudi : 11:00–15:00, 18:00–23:00</li>
            <li>Vendredi : 11:00–15:00, 18:00–00:00</li>
            <li>Samedi : 11:00–15:00, 18:00–00:00</li>
            <li>Dimanche : 18:00–23:00</li>
            <li>Lundi : 18:00–23:00</li>
            <li>Mardi : 11:00–15:00, 18:00–23:00</li>
          </ul>
        </div>
      </div>

      {/* COL DROITE: map alignée (même hauteur) */}
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm min-h-[520px] lg:min-h-0 lg:h-full">
        <div className="relative h-full w-full">
          <iframe
            title="Carte Ça Graille"
            src={MAP_EMBED}
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>

    <footer className="mt-16 text-center text-sm text-black/50">
      © {new Date().getFullYear()} Ça graille. Tous droits réservés.
    </footer>
  </div>
      </section>
    </main>
  );
}