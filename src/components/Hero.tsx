"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-start bg-chocolate-900 overflow-hidden"
    >
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/image/hero.jpg"
          alt="Pizzeria Mandrać Wood-Fired Pizza Oven Ambient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-102"
        />
        {/* Editorial Dark Gradient Overlay for left-aligned text legibility */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Subtle Warm Copper Ambient Lighting Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#C1682B]/15 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Editorial Left-Aligned Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl space-y-6 sm:space-y-8 text-left">
          
          {/* Eyebrow Label with Accent Rule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <span className="h-[1px] w-10 bg-[#DFB283]/80" />
            <span className="text-xs sm:text-sm font-sans tracking-[0.3em] text-[#DFB283] uppercase font-semibold">
              {dict.hero.accent}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white leading-[0.98] uppercase drop-shadow-xl"
          >
            Pizzeria Mandrać
          </motion.h1>

          {/* Short Single-Sentence Subtitle with Left Border Accent */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-2xl lg:text-3xl text-ivory-100 font-serif font-light leading-relaxed max-w-2xl drop-shadow-md border-l-2 border-[#C1682B] pl-4 sm:pl-6"
          >
            {dict.hero.subtitle}
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6"
          >
            <a
              href="#menu"
              className="group flex items-center justify-center space-x-2.5 bg-[#C1682B] hover:bg-[#A9551E] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-active cursor-pointer"
            >
              <span>{dict.hero.ctaMenu}</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 cursor-pointer"
            >
              {dict.hero.ctaBook}
            </a>
          </motion.div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator (Maintained at Bottom Center) */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.85, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.7 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-ivory-200 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase font-semibold text-[#DFB283] mb-1">
          {dict.hero?.explore || "ISTRAŽITE"}
        </span>
        <ChevronDown className="h-5 w-5 text-white/80 group-hover:text-white transition-colors" />
      </motion.a>

    </section>
  );
}
