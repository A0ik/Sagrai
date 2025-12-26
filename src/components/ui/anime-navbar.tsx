"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string; // ex: "#top", "#menu", "#about"...
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  defaultActive?: string;
  topOffsetPx?: number; // pour “baisser” la navbar
}

export function AnimeNavBar({
  items,
  className,
  defaultActive = "Accueil",
  topOffsetPx = 18, // baisse un peu par défaut
}: NavBarProps) {
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(defaultActive);
  const [isMobile, setIsMobile] = useState(false);

  // anti “je clique puis ça revient sur Accueil”
  const clickLockUntilRef = useRef<number>(0);

  // Map name -> targetId
  const nameToId = useMemo(() => {
    const map = new Map<string, string>();
    for (const it of items) {
      const id = it.url.startsWith("#") ? it.url.slice(1) : it.url;
      map.set(it.name, id);
    }
    return map;
  }, [items]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll-spy (IntersectionObserver)
  useEffect(() => {
    if (!mounted) return;

    const ids = items
      .map((it) => (it.url.startsWith("#") ? it.url.slice(1) : it.url))
      .filter(Boolean);

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // si on vient de cliquer, on ignore l’observer (sinon reset)
        if (Date.now() < clickLockUntilRef.current) return;

        // on prend la section la plus visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!visible?.target?.id) return;

        const targetId = visible.target.id;
        const item = items.find((it) => {
          const id = it.url.startsWith("#") ? it.url.slice(1) : it.url;
          return id === targetId;
        });

        if (item && item.name !== activeTab) setActiveTab(item.name);
      },
      {
        // ajuste si ta navbar cache un peu le titre
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items, mounted, activeTab]);

  if (!mounted) return null;

  const goTo = (itemName: string) => {
    const id = nameToId.get(itemName);
    if (!id) return;

    // lock l’observer pendant le scroll déclenché par clic
    clickLockUntilRef.current = Date.now() + 700;

    // active immédiatement l’onglet (mascotte suit)
    setActiveTab(itemName);

    // scroll smooth
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="fixed left-0 right-0 z-[9999]"
      style={{ top: topOffsetPx }}
    >
      <div className="flex justify-center pt-6">
        <motion.div
          className={cn(
            // ✅ look: orange léger + flou + transparence
            "flex items-center gap-3 rounded-full px-2 py-2 shadow-lg relative",
            "backdrop-blur-xl border",
            "bg-orange-500/18 border-orange-200/25",
            "shadow-orange-500/10",
            className
          )}
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            const isHovered = hoveredTab === item.name;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => goTo(item.name)}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold rounded-full transition-all duration-300",
                  "px-5 py-3",
                  "text-white/100 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {/* Background hover */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 rounded-full -z-10 bg-white/30"
                    />
                  )}
                </AnimatePresence>

                {/* Active glow */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.25, 0.35, 0.25], scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md" />
                    <div className="absolute inset-[-10px] rounded-full bg-orange-500/12 blur-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 [animation:shine_3s_ease-in-out_infinite]" />
                  </motion.div>
                )}

                <span className="hidden md:inline relative z-10">{item.name}</span>
                <span className="md:hidden relative z-10">
                  <Icon size={18} strokeWidth={2.5} />
                </span>

                {/* Mascotte */}
                {isActive && (
                  <motion.div
                    layoutId="anime-mascot"
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 pointer-events-none",
                      // mobile: on la baisse un poil pour pas couper
                      isMobile ? "-top-10" : "-top-12"
                    )}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="relative w-12 h-12">
                      <motion.div
                        className="absolute w-10 h-10 rounded-full left-1/2 -translate-x-1/2 bg-white"
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div
                          className="absolute w-2 h-2 bg-black rounded-full"
                          style={{ left: "25%", top: "40%" }}
                        />
                        <div
                          className="absolute w-2 h-2 bg-black rounded-full"
                          style={{ right: "25%", top: "40%" }}
                        />
                        <div
                          className="absolute w-2 h-1.5 rounded-full bg-orange-300"
                          style={{ left: "15%", top: "55%", opacity: 0.7 }}
                        />
                        <div
                          className="absolute w-2 h-1.5 rounded-full bg-orange-300"
                          style={{ right: "15%", top: "55%", opacity: 0.7 }}
                        />
                        <div
                          className="absolute w-4 h-2 border-b-2 border-black rounded-full"
                          style={{ left: "30%", top: "60%" }}
                        />
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                        animate={{ y: [0, 2, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        <div className="w-full h-full bg-white rotate-45 origin-center" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}