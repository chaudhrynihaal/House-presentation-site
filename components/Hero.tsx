"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  videoSrc,
  posterSrc,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  videoSrc: string;
  posterSrc: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="overview" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="eyebrow text-gold mb-8"
          style={{ letterSpacing: "0.35em" }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="font-display text-7xl md:text-9xl tracking-tight leading-[0.95] text-offwhite mb-8"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="max-w-xl text-offwhite/80 text-base md:text-lg leading-relaxed"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="h-10 w-px bg-gold/60" />
      </div>
    </section>
  );
}
