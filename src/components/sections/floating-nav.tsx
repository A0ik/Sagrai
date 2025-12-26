"use client";

import React, { useMemo } from "react";
import { Home, UtensilsCrossed, Info, MessageSquare, Phone } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

export function FloatingNav() {
  const sections = useMemo(
    () => [
      { name: "Accueil", id: "top", icon: Home },
      { name: "Menu", id: "menu", icon: UtensilsCrossed },
      { name: "À propos", id: "about", icon: Info },
      { name: "Avis", id: "avis", icon: MessageSquare },
      { name: "Contact", id: "contact", icon: Phone },
    ],
    []
  );

  const items = sections.map((s) => ({
    name: s.name,
    url: `#${s.id}`,
    icon: s.icon,
  }));

  return (
    <AnimeNavBar
      items={items}
      defaultActive="Accueil"
      topOffsetPx={45}   // baisse un peu la navbar
    />
  );
}