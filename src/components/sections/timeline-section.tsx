"use client";

import React from "react";
import {
  Timeline,
  TimelineImage,
  type TimelineEntry,
} from "@/components/ui/timeline";

export function TimelineSection({ uberEatsUrl }: { uberEatsUrl: string }) {
  const data: TimelineEntry[] = [
    {
      title: "Quand t’as la dalle",
      content: (
        <div className="space-y-5">
          <p className="text-black/70 leading-relaxed">
            Ozoir-la-Ferrière, c’est souvent des journées longues. Les trajets,
            la fatigue, le cerveau en mode <span className="font-semibold">“j’ai plus d’énergie”</span>.
            Et là, t’as juste besoin d’un truc simple:{" "}
            <span className="font-semibold">du chaud, du vrai, du réconfort</span>.
          </p>

          <TimelineImage
            src="/images/ambiance.png"
            alt="Préparation & ambiance chaleureuse"
            ratio="16/9"
            priority
          />

          <p className="text-black/60 text-sm">
            Le genre d’ambiance qui te fait respirer un peu. Et te rappeler que
            manger, c’est pas juste “remplir”.
          </p>
        </div>
      ),
    },
    {
      title: "Le nom",
      content: (
        <div className="space-y-5">
          <p className="text-black/70 leading-relaxed">
            Le nom, il vient d’un truc tout bête et ultra humain. La fille du
            gérant répète souvent:{" "}
            <span className="font-semibold">« j’ai la dalle, ça graille »</span>.
          </p>
          <p className="text-black/70 leading-relaxed">
            Pas une phrase marketing. Juste une vérité. Et au fond, c’est
            exactement ça: quand t’as faim, tu veux pas un “concept”.{" "}
            <span className="font-semibold">Tu veux manger.</span>
          </p>
        </div>
      ),
    },
    {
      title: "La promesse",
      content: (
        <div className="space-y-5">
          <p className="text-black/70 leading-relaxed">
            Ici, on a voulu un endroit qui te fait du bien sans te demander de
            faire semblant. Un sandwich brioché qui arrive chaud, généreux, avec
            ce goût qui te fait dire:{" "}
            <span className="font-semibold">“ok… ça, ça va me sauver la soirée.”</span>
          </p>

          <TimelineImage
            src="/images/grosplan.png"
            alt="Assemblage gourmand en cuisine"
            ratio="16/9"
          />

          <p className="text-black/60 text-sm">
            Le soin, c’est pas du luxe. C’est juste du respect: pour le produit,
            et pour ta faim.
          </p>
        </div>
      ),
    },
    {
      title: "Le moment",
      content: (
        <div className="space-y-4">
          <p className="text-black/70 leading-relaxed">
            Le vrai déclic, c’est le moment où tu ouvres. Tu sens direct que ça
            va être sérieux: le pain brioché, la viande, la sauce, les toppings…
            Tout est là pour une seule mission:{" "}
            <span className="font-semibold">te calmer la dalle</span>.
          </p>

          <ul className="text-black/65 text-sm space-y-2 list-disc pl-5">
            <li>Le chaud qui rassure</li>
            <li>Le moelleux + le croustillant</li>
            <li>La sauce qui “tombe” juste comme il faut</li>
          </ul>
        </div>
      ),
    },
    {
      title: "La première bouchée",
      content: (
        <div className="space-y-5">
          <p className="text-black/70 leading-relaxed">
            Et là… t’as cette première bouchée. Celle où tu te tais. Pas parce
            que t’es poli. Parce que ton cerveau est occupé à dire:{" "}
            <span className="font-semibold">“c’est bon… j’en avais besoin.”</span>
          </p>

          <TimelineImage
            src="/images/degustation.png"
            alt="Dégustation du sandwich"
            ratio="16/9"
          />

          <p className="text-black/60 text-sm">
            C’est bête, mais parfois un bon sandwich, ça te remet droit.
          </p>
        </div>
      ),
    },
    {
      title: "Tu passes à l’action",
      content: (
        <div className="space-y-5">
          <p className="text-black/70 leading-relaxed">
            Donc voilà. Tu peux continuer à scroller, ou tu peux faire le truc
            le plus logique du monde:{" "}
            <span className="font-semibold">commander maintenant</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Convaincu ? Commander sur Uber Eats
            </a>

            <span className="text-black/50 text-sm">
              Promis, ton toi de dans 30 minutes va te remercier.
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="story">
      <Timeline
        heading="Pourquoi Ça graille"
        subheading="Parce que quand t’as la dalle, tu veux du chaud. Du vrai. Et un peu de réconfort."
        data={data}
        imageZoom={1} // ✅ ajuste ici: 0.97 léger / 0.94 bien / 0.90 gros dézoom
      />
    </section>
  );
}
