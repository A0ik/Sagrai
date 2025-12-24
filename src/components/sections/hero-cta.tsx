"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function HeroCTA() {
  return (
    <InteractiveHoverButton
      text="Commander"
      className="border-white/20 bg-white/10 text-white"
      onClick={() => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }}
    />
  );
}