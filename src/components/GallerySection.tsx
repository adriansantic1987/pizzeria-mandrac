"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { language, dict } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = [
    {
      src: "/image/gallery/gallery-1.jpg",
      alt: "Fresh wood-fired pizza at Pizzeria Mandrać",
      caption: {
        hr: "Domaća pizza iz krušne peći",
        en: "Fresh wood-fired pizza",
        it: "Pizza fresca dal forno a legna",
        de: "Frische Holzofenpizza"
      }
    },
    {
      src: "/image/gallery/gallery-2.jpg",
      alt: "Charcoal grill meat platter at Pizzeria Mandrać",
      caption: {
        hr: "Specijaliteti s roštilja na ugljen",
        en: "Charcoal grill specialties",
        it: "Specialità alla griglia a carbone",
        de: "Holzkohlegrill-Spezialitäten"
      }
    },
    {
      src: "/image/gallery/gallery-3.jpg",
      alt: "Outdoor restaurant terrace ambiance in Krk Croatia",
      caption: {
        hr: "Ugodna ljetna terasa uz more",
        en: "Cozy seaside outdoor terrace",
        it: "Accogliente terrazza sul mare",
        de: "Gemütliche Terrasse am Meer"
      }
    },
    {
      src: "/image/gallery/gallery-4.jpg",
      alt: "Chef preparing pizza in wood oven",
      caption: {
        hr: "Tradicija pripreme hrskavog tijesta",
        en: "Crafting traditional pizza dough",
        it: "Tradizione nella preparazione della pizza",
        de: "Traditionelle Teigzubereitung"
      }
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.75));
    setActiveIndex(Math.min(Math.max(index, 0), galleryImages.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.scrollWidth / galleryImages.length;
    scrollRef.current.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    const nextIndex = Math.max(activeIndex - 1, 0);
    scrollToSlide(nextIndex);
  };

  const scrollNext = () => {
    const nextIndex = Math.min(activeIndex + 1, galleryImages.length - 1);
    scrollToSlide(nextIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section
      id="gallery"
      className="bg-ivory-50 dark:bg-chocolate-900 text-chocolate-900 dark:text-ivory-100 py-16 sm:py-24 overflow-hidden relative border-t border-b border-ivory-200/60 dark:border-chocolate-850/50 transition-colors duration-300"
    >
      {/* Warm Copper Ambient Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C1682B]/10 dark:bg-[#C1682B]/12 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          
          {/* Centered Small Pill Badge with Dash Line Accents */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-3"
          >
            <span className="h-[1px] w-6 sm:w-8 bg-[#C1682B]" />
            <span className="bg-[#C1682B] text-white font-sans text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-widest shadow-sm">
              {dict.gallery?.badge || "FOTOGALERIJA"}
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#C1682B]" />
          </motion.div>

          {/* Warm Serif Heading with Highlighted & Underlined Phrase */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-chocolate-900 dark:text-white mb-3.5 tracking-tight leading-tight"
          >
            {dict.gallery?.title_start || "Doživite atmosferu u "}
            <span className="text-[#C1682B] dark:text-[#DFB283] underline decoration-[#C1682B] decoration-2 underline-offset-8">
              {dict.gallery?.title_highlight || "Pizzeriji Mandrać"}
            </span>
          </motion.h2>

          {/* Muted Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-chocolate-850 dark:text-ivory-200/90 font-sans font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            {dict.gallery?.subtitle || "Pogledajte trenutke iz naše pizzerije, terase i kuhinje."}
          </motion.p>
        </div>

      </div>

      {/* Relative Wrapper for Navigation Arrows & Carousel Container */}
      <div className="relative max-w-[1400px] mx-auto z-10 px-4 sm:px-8">
        
        {/* Left Arrow Button */}
        <button
          onClick={scrollPrev}
          disabled={activeIndex === 0}
          aria-label="Previous photos"
          className={`absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white dark:bg-[#1A1512]/80 hover:bg-[#C1682B] hover:text-white text-chocolate-900 dark:text-ivory-100 border border-ivory-200 dark:border-chocolate-800/60 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer ${
            activeIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:scale-105 active:scale-95"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={scrollNext}
          disabled={activeIndex === galleryImages.length - 1}
          aria-label="Next photos"
          className={`absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white dark:bg-[#1A1512]/80 hover:bg-[#C1682B] hover:text-white text-chocolate-900 dark:text-ivory-100 border border-ivory-200 dark:border-chocolate-800/60 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer ${
            activeIndex === galleryImages.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:scale-105 active:scale-95"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Horizontal Carousel Track with Peeking Edge Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth py-2 px-4 sm:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-[76vw] sm:w-[420px] lg:w-[480px] flex-shrink-0 snap-center rounded-2xl sm:rounded-3xl overflow-hidden border border-ivory-200 dark:border-chocolate-850/60 shadow-xl relative aspect-[16/10] group select-none"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 76vw, (max-width: 1024px) 420px, 480px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle Gradient & Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10">
                <span className="text-[10px] sm:text-xs font-sans tracking-widest text-[#DFB283] uppercase font-semibold block mb-0.5">
                  Pizzeria Mandrać
                </span>
                <h3 className="text-sm sm:text-base font-serif font-semibold text-white">
                  {img.caption[language as keyof typeof img.caption] || img.caption.hr}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots Indicator */}
        <div className="flex items-center justify-center space-x-2 pt-6 sm:pt-8">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 h-2 bg-[#C1682B] rounded-full shadow-soft"
                  : "w-2.5 h-2.5 bg-chocolate-300 dark:bg-white/30 hover:bg-chocolate-400 dark:hover:bg-white/50 rounded-full"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
