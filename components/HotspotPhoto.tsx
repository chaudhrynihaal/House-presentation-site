"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Hotspot } from "@/content/property";

export default function HotspotPhoto({
  src,
  alt,
  hotspots,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  hotspots: Hotspot[];
  sizes: string;
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pinRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const groupId = src.replace(/[^a-zA-Z0-9]/g, "-");

  const active = activeIndex !== null ? hotspots[activeIndex] : null;

  useEffect(() => {
    if (active) {
      closeButtonRef.current?.focus();
    }
  }, [active]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setActiveIndex(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeAndReturnFocus(indexToFocus: number) {
    setActiveIndex(null);
    pinRefs.current[indexToFocus]?.focus();
  }

  function handleTiltMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
  }

  function handleTiltLeave() {
    const el = containerRef.current;
    if (!el) return;
    el.style.transform = "";
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleTiltMove}
      onMouseLeave={handleTiltLeave}
      className={`relative aspect-[3/2] overflow-hidden bg-charcoal-light [transition:transform_0.4s_cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />

      <div className="absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-charcoal/60 to-transparent pointer-events-none" />
      <span className="absolute bottom-2.5 left-3 z-10 text-[0.6rem] font-medium tracking-[0.15em] uppercase text-offwhite/70">
        Furnished for illustration
      </span>

      {hotspots.map((hotspot, index) => (
        <button
          key={`${hotspot.title}-${index}`}
          ref={(el) => {
            pinRefs.current[index] = el;
          }}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={activeIndex === index}
          aria-label={`${hotspot.category}: ${hotspot.title}`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-gold bg-charcoal/80 text-gold text-xs font-medium shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
        >
          {activeIndex === index ? "×" : index + 1}
        </button>
      ))}

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="false"
            aria-labelledby={`hotspot-title-${groupId}-${activeIndex}`}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="absolute z-30 inset-x-2.5 bottom-2.5 bg-charcoal/95 border border-gold/30 p-4 shadow-2xl"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => closeAndReturnFocus(activeIndex)}
              aria-label="Close"
              className="absolute top-2 right-2 h-6 w-6 flex items-center justify-center text-offwhite/60 hover:text-gold transition-colors"
            >
              ×
            </button>
            <p className="text-[0.65rem] font-sans font-medium tracking-widest2 uppercase text-gold mb-2 pr-6">
              {active.category}
            </p>
            <h3
              id={`hotspot-title-${groupId}-${activeIndex}`}
              className="font-display text-base text-offwhite mb-1.5 pr-4"
            >
              {active.title}
            </h3>
            <p className="text-xs text-offwhite/70 leading-relaxed">{active.body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
