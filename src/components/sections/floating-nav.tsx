"use client";

import { Home, Menu as MenuIcon, Info, PhoneCall, Star } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

const navItems = [
  { name: "Accueil", url: "#top", icon: Home },
  { name: "Menu", url: "#menu", icon: MenuIcon },
  { name: "À propos", url: "#about", icon: Info },
  { name: "Avis", url: "#avis", icon: Star },
  { name: "Contact", url: "#contact", icon: PhoneCall },
];

export function FloatingNav() {
  return <AnimeNavBar items={navItems} defaultActive="Accueil" />;
}