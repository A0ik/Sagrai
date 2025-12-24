"use client";

import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  { text: "Portions généreuses, rapide, et ça cale bien. Validé.", image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Yanis", role: "Avis Google" },
  { text: "Kebab bien garni, bonnes sauces. Rien à dire.", image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Sarah", role: "Avis Google" },
  { text: "Burger solide, service efficace.", image: "https://randomuser.me/api/portraits/men/12.jpg", name: "Mehdi", role: "Avis Google" },
  { text: "Rapport qualité/prix très correct, je reviens.", image: "https://randomuser.me/api/portraits/women/18.jpg", name: "Inès", role: "Avis Google" },
  { text: "Terrasse + service rapide = parfait quand t’es pressé.", image: "https://randomuser.me/api/portraits/men/55.jpg", name: "Adam", role: "Avis Google" },
  { text: "Simple, bon, généreux. C’est tout ce que je demande.", image: "https://randomuser.me/api/portraits/women/9.jpg", name: "Lina", role: "Avis Google" },
  { text: "4,9★ c’est pas pour rien, ça régale.", image: "https://randomuser.me/api/portraits/men/77.jpg", name: "Nassim", role: "Avis Google" },
  { text: "Sandwich bien chargé, ça fait plaisir.", image: "https://randomuser.me/api/portraits/women/28.jpg", name: "Maya", role: "Avis Google" },
  { text: "Je recommande. Ça sort vite et c’est chaud.", image: "https://randomuser.me/api/portraits/men/8.jpg", name: "Bilal", role: "Avis Google" },
  { text: "Bonne viande, pain ok, sauces bien dosées.", image: "https://randomuser.me/api/portraits/men/41.jpg", name: "Samy", role: "Avis Google" },

  { text: "Gros mangeur ici: j’ai été respecté.", image: "https://randomuser.me/api/portraits/men/64.jpg", name: "Kamel", role: "Avis Google" },
  { text: "Franchement propre, ça fait le taf sans forcer.", image: "https://randomuser.me/api/portraits/women/61.jpg", name: "Nora", role: "Avis Google" },
  { text: "Le menu est simple mais efficace. Qualité au rendez-vous.", image: "https://randomuser.me/api/portraits/men/23.jpg", name: "Ilyes", role: "Avis Google" },
  { text: "Service rapide et accueil cool. Rien à dire.", image: "https://randomuser.me/api/portraits/women/12.jpg", name: "Julie", role: "Avis Google" },
  { text: "Kebab bien grillé, pas gras, c’est rare.", image: "https://randomuser.me/api/portraits/men/2.jpg", name: "Hugo", role: "Avis Google" },
  { text: "Les portions sont vraiment généreuses.", image: "https://randomuser.me/api/portraits/women/2.jpg", name: "Sofia", role: "Avis Google" },
  { text: "Les sauces maison sont trop bonnes.", image: "https://randomuser.me/api/portraits/men/19.jpg", name: "Rayane", role: "Avis Google" },
  { text: "Parfait après le sport, ça cale direct.", image: "https://randomuser.me/api/portraits/men/88.jpg", name: "Noah", role: "Avis Google" },
  { text: "Simple, efficace, et c’est bon. On demande quoi de plus.", image: "https://randomuser.me/api/portraits/women/36.jpg", name: "Emma", role: "Avis Google" },
  { text: "Bon rapport prix/quantité. Je conseille.", image: "https://randomuser.me/api/portraits/men/90.jpg", name: "Omar", role: "Avis Google" },
];

const col1 = testimonials.slice(0, 7);
const col2 = testimonials.slice(7, 14);
const col3 = testimonials.slice(14, 20);

export function TestimonialsSection() {
  return (
    <section id="avis" className="bg-[#f7f6f3] py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[620px] mx-auto text-center"
        >
          <div className="inline-flex border bg-white py-1 px-4 rounded-lg">
            Avis
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-5">
            Ils ont goûté, ils ont validé
          </h2>
          <p className="mt-4 text-black/60">
            4,9★ sur Google (815 avis). Oui, ça envoie.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={col1} duration={16} />
          <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={20} />
          <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={18} />
        </div>
      </div>
    </section>
  );
}
