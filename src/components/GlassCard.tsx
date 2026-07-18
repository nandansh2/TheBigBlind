"use client";

import { RefObject, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import SpadeMark from "./SpadeMark";
import { useReducedMotion } from "@/lib/useReducedMotion";

type GlassCardProps = {
  containerRef: RefObject<HTMLElement>;
};

function CornerIndex({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <div
      className={`absolute ${
        mirrored ? "bottom-2 right-2 rotate-180" : "top-2 left-2"
      } glass-chip rounded-md px-1.5 py-1 flex flex-col items-center gap-0.5 border border-white/20`}
    >
      <span className="text-white text-[11px] sm:text-xs font-extrabold leading-none">
        B
      </span>
      <SpadeMark className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
    </div>
  );
}

export default function GlassCard({ containerRef }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [canTilt, setCanTilt] = useState(false);
  const [mounted, setMounted] = useState(false);

  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const tiltRotateX = useSpring(rawTiltX, {
    stiffness: 150,
    damping: 18,
    mass: 0.6,
  });
  const tiltRotateY = useSpring(rawTiltY, {
    stiffness: 150,
    damping: 18,
    mass: 0.6,
  });

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(pointer: fine)");
    setCanTilt(mq.matches);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !canTilt || prefersReducedMotion) return;

    function handlePointerMove(e: PointerEvent) {
      const rect = node!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rawTiltY.set(px * 40);
      rawTiltX.set(py * -40);
    }
    function handlePointerLeave() {
      rawTiltX.set(0);
      rawTiltY.set(0);
    }

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [containerRef, canTilt, prefersReducedMotion, rawTiltX, rawTiltY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scrollRotateY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const combinedRotateY = useTransform(
    [tiltRotateY, scrollRotateY],
    ([tilt, scroll]) => (tilt as number) + (scroll as number)
  );

  return (
    <motion.div
      className="absolute left-1/2 bottom-[-64px] sm:bottom-[-100px] z-30"
      style={{ x: "-50%", y: prefersReducedMotion ? 0 : parallaxY }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={mounted ? { x: "-50%", opacity: 1, scale: 1 } : { x: "-50%" }}
      transition={{
        duration: 0.9,
        delay: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={prefersReducedMotion ? "" : "card-bob"}>
        <div className="[perspective:1400px] w-[170px] h-[240px] sm:w-[230px] sm:h-[326px]">
          <motion.div
            className="relative w-full h-full [transform-style:preserve-3d]"
            style={{
              rotateX: prefersReducedMotion ? 0 : tiltRotateX,
              rotateY: prefersReducedMotion ? 0 : combinedRotateY,
            }}
          >
            {/* Front face */}
            <div className="absolute inset-0 rounded-card glass-card-face [backface-visibility:hidden] overflow-hidden">
              <div
                className={`absolute -inset-1/2 w-[200%] h-[200%] pointer-events-none opacity-60 ${
                  prefersReducedMotion ? "" : "sheen-sweep"
                }`}
                style={{
                  background:
                    "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)",
                  mixBlendMode: "overlay",
                }}
              />
              <CornerIndex />
              <CornerIndex mirrored />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <SpadeMark className="w-16 h-16 sm:w-24 sm:h-24 opacity-90 [&_path]:fill-white/10 [&_path]:stroke-white [&_path]:stroke-[3]" />
              </div>
            </div>

            {/* Back face */}
            <div className="absolute inset-0 rounded-card glass-card-face [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 12px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 glass-chip flex items-center justify-center">
                  <span className="eyebrow text-white text-xs sm:text-sm">
                    BB
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
