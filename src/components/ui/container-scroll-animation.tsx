"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // ✅ plus stable sur mobile
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Valeurs stables selon device
  const startScale = isMobile ? 0.9 : 1.05;
  const endScale = 1;

 // ✅ Animation inversée: au début "levée", puis droite
 // ✅ Animation BEAUCOUP plus visible (réaction plus rapide)
const rotate = useTransform(scrollYProgress, [0, 0.55], [35, 0]); // plus incliné -> droit
const rotateZ = useTransform(scrollYProgress, [0, 0.55], [-6, 0]);
const scale = useTransform(scrollYProgress, [0, 0.55], [isMobile ? 1.0 : 1.12, 1]);
const headerTranslate = useTransform(scrollYProgress, [0, 0.55], [0, -80]);


  return (
    <div
      ref={containerRef}
      className="h-[44rem] md:h-[68rem] flex items-center justify-center relative px-4 md:px-20"
    >
      <div className="py-10 md:py-24 w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={headerTranslate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} rotateZ={rotateZ}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  rotateZ,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  rotateZ: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        rotateZ,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mt-8 mx-auto h-[22rem] md:h-[36rem] w-full border-4 border-zinc-300/70 p-2 md:p-4 bg-zinc-900 rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-transparent p-0">
        {children}
      </div>
    </motion.div>
  );
};