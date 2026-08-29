"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { language, dict } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const galleryImages = [
    {
      src: "/image/galerija.png",
      alt: "Pizzeria Mandrać - Domaća riba",
      label: "PIZZERIA MANDRAĆ",
      description: {
        hr: "Domaća riba",
        en: "Fresh local fish",
        it: "Pesce fresco locale",
        de: "Frischer lokaler Fisch",
      },
    },
    {
      src: "/image/galerija1.png",
      alt: "Pizzeria Mandrać - Terasa Pizzerie Mandrać",
      label: "PIZZERIA MANDRAĆ",
      description: {
        hr: "Terasa Pizzerie Mandrać",
        en: "Pizzeria Mandrać Terrace",
        it: "Terrazza della Pizzeria Mandrać",
        de: "Terrasse der Pizzeria Mandrać",
      },
    },
    {
      src: "/image/galerija2.png",
      alt: "Pizzeria Mandrać - Specijalitet kuće – Pizza s dagnjama",
      label: "PIZZERIA MANDRAĆ",
      description: {
        hr: "Specijalitet kuće – Pizza s dagnjama",
        en: "House specialty – Mussel pizza",
        it: "Specialità della casa – Pizza con cozze",
        de: "Hausspezialität – Muschelpizza",
      },
    },
    {
      src: "/image/galerija3.png",
      alt: "Pizzeria Mandrać - Pogled iz pizzerie",
      label: "PIZZERIA MANDRAĆ",
      description: {
        hr: "Pogled iz pizzerie",
        en: "View from the pizzeria",
        it: "Vista dalla pizzeria",
        de: "Blick aus der Pizzeria",
      },
    },
    {
      src: "/image/galerija5.jpg",
      alt: "Pizzeria Mandrać - Zalazak sunca nad Malinskom",
      label: "PIZZERIA MANDRAĆ",
      description: {
        hr: "Zalazak sunca nad Malinskom",
        en: "Sunset over Malinska",
        it: "Tramonto su Malinska",
        de: "Sonnenuntergang über Malinska",
      },
    },
  ];

  // Dynamically track viewport breakpoint to adjust card step shifting
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCards(3);
      } else if (width >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, galleryImages.length - 1));
  };

  // Calculate track transform offset percentage
  const maxShiftIndex = Math.max(0, galleryImages.length - visibleCards);
  const effectiveShiftIndex = Math.min(activeIndex, maxShiftIndex);
  const translatePercentage = effectiveShiftIndex * (100 / visibleCards);

  return (
    <section
      id="gallery"
      className="bg-[#F2ECE0] dark:bg-[#181310] text-[#32231A] dark:text-[#EFE9DF] py-20 sm:py-28 lg:py-32 overflow-hidden relative border-t border-b border-[#E2D8CA] dark:border-[#2C221A] transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2.5 mb-3"
          >
            <span className="h-[1px] w-6 bg-[#B86E2B] dark:bg-[#E2984D]" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.24em] text-[#B86E2B] dark:text-[#E2984D] uppercase">
              {dict.gallery?.badge || "FOTOGALERIJA"}
            </span>
            <span className="h-[1px] w-6 bg-[#B86E2B] dark:bg-[#E2984D]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140F] dark:text-[#FAF7F2] mb-3.5 tracking-tight leading-tight"
          >
            {dict.gallery?.title_start || "Doživite atmosferu u "}
            <span className="text-[#B86E2B] dark:text-[#E8A555]">
              {dict.gallery?.title_highlight || "Pizzeriji Mandrać"}
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B5749] dark:text-[#CCC1B5] font-sans font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            {dict.gallery?.subtitle || "Pogledajte trenutke iz naše pizzerije, terase uz more i kuhinje."}
          </motion.p>
        </div>

      </div>

      {/* Multi-Image Carousel Track Container */}
      <div className="relative max-w-[1440px] mx-auto z-10 px-4 sm:px-10 lg:px-12">

        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous photo"
          className={`absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-[#1A1512]/95 hover:bg-[#B86E2B] hover:text-white dark:hover:bg-[#B86E2B] text-[#1C140F] dark:text-[#FAF7F2] border border-[#E0D5C7] dark:border-[#382E26] shadow-md backdrop-blur-md transition-all duration-300 cursor-pointer ${
            activeIndex === 0 ? "opacity-25 cursor-not-allowed" : "hover:scale-105 active:scale-95"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          disabled={activeIndex >= Math.max(0, galleryImages.length - visibleCards)}
          aria-label="Next photo"
          className={`absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-[#1A1512]/95 hover:bg-[#B86E2B] hover:text-white dark:hover:bg-[#B86E2B] text-[#1C140F] dark:text-[#FAF7F2] border border-[#E0D5C7] dark:border-[#382E26] shadow-md backdrop-blur-md transition-all duration-300 cursor-pointer ${
            activeIndex >= Math.max(0, galleryImages.length - visibleCards) ? "opacity-25 cursor-not-allowed" : "hover:scale-105 active:scale-95"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Viewport Frame */}
        <div className="overflow-hidden rounded-3xl py-2">
          
          {/* Framer Motion Smooth Controlled Track with Touch Drag Support */}
          <motion.div
            className="flex cursor-grab active:cursor-grabbing touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, { offset }) => {
              if (offset.x < -40 && activeIndex < galleryImages.length - 1) {
                handleNext();
              } else if (offset.x > 40 && activeIndex > 0) {
                handlePrev();
              }
            }}
            animate={{ x: `-${translatePercentage}%` }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 select-none"
              >
                <div className="gallery-card relative aspect-[16/11] rounded-3xl overflow-hidden border border-[#EAE3D6] dark:border-[#2C231D] bg-[#EAE4D8] dark:bg-[#201A16] shadow-md group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  {/* Bottom-Left Brand Accent & Caption Label Overlay */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10 pointer-events-none">
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.2em] text-[#E8A555] uppercase">
                        {img.label}
                      </span>
                      <p className="text-xs sm:text-sm font-serif font-medium text-white drop-shadow-md leading-tight">
                        {img.description[language as keyof typeof img.description] || img.description.hr}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Responsive Pagination Dots (3 dots on desktop for 3 valid view positions) */}
        <div className="flex items-center justify-center space-x-2.5 pt-6 sm:pt-8">
          {Array.from({ length: Math.max(1, galleryImages.length - visibleCards + 1) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide position ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 h-2.5 bg-[#B86E2B] dark:bg-[#E8A555] rounded-full shadow-sm"
                  : "w-2.5 h-2.5 bg-[#D5C9B9] dark:bg-[#3D3025] hover:bg-[#B86E2B]/50 rounded-full"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
