"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export function Timeline({
  data,
  heading = "Pourquoi Ça graille",
  subheading = "Une promesse simple: du chaud, du généreux, du goût.",
  className = "",
  imageZoom = 1, // ✅ 1 seul réglage pour “dézoomer” toutes les images
}: {
  data: TimelineEntry[];
  heading?: string;
  subheading?: string;
  className?: string;
  imageZoom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <section
      ref={containerRef}
      className={[
        "w-full font-sans md:px-10",
        "bg-[#f7f6f3] text-black",
        className,
      ].join(" ")}
      style={{ ["--timeline-img-zoom" as any]: imageZoom }}
    >
      <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl">
          {heading}
        </h2>
        <p className="mt-3 text-black/60 text-sm md:text-base max-w-xl">
          {subheading}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            {/* Col gauche sticky */}
            <div className="sticky z-40 top-36 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="relative flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#f7f6f3] flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-orange-200 border border-orange-300" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-orange-500">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Col droite contenu */}
            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-orange-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Ligne verticale + progression orange */}
        <div
          style={{ height: height + "px" }}
          className={[
            "absolute left-6 md:left-6 top-0 overflow-hidden w-[2px]",
            "bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]",
            "from-transparent via-black/15 to-transparent",
            "[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]",
          ].join(" ")}
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-orange-500 via-orange-300 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * ✅ Bloc image “propre” (Next/Image)
 * - pas des mini rectangles
 * - beau ratio
 * - zoom global via --timeline-img-zoom
 */
export function TimelineImage({
  src,
  alt,
  ratio = "16/9",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: "16/9" | "4/3" | "1/1";
  className?: string;
  priority?: boolean;
}) {
  const ratioClass =
    ratio === "1/1"
      ? "aspect-square"
      : ratio === "4/3"
      ? "aspect-[4/3]"
      : "aspect-[16/9]";

  return (
    <div
      className={[
        "relative w-full overflow-hidden rounded-2xl border border-black/10 bg-black/5",
        "shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
        ratioClass,
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 700px"
        className="object-cover object-center"
        style={{ transform: "scale(var(--timeline-img-zoom))" }}
      />
      <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl pointer-events-none" />
    </div>
  );
}