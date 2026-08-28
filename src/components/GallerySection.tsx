"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { language, dict } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = [
    {
      src: "/image/gallery/gallery-1.jpg",
      alt: "Svježa domaća pizza iz krušne peći i vino uz more",
      tag: {
        hr: "Krušna peć & More",
        en: "Wood-Fired & Sea",
        it: "Forno a Legna & Mare",
        de: "Holzofen & Meer",
      },
    },
    {
      src: "/image/gallery/gallery-2.jpg",
      alt: "Jela s roštilja na prirodnom ugljenu s pogledom na zalazak sunca",
      tag: {
        hr: "Žar drvenog ugljena",
        en: "Natural Charcoal Grill",
        it: "Brace a Carbone",
        de: "Holzkohlegrill",
      },
    },
    {
      src: "/image/gallery/gallery-3.jpg",
      alt: "Ljetna terasa Pizzerije Mandrać u uvali Zidarići",
      tag: {
        hr: "Otočka terasa uz more",
        en: "Seaside Dining Terrace",
        it: "Terrazza sul Mare",
        de: "Terrasse am Meer",
      },
    },
    {
      src: "/image/gallery/gallery-4.jpg",
      alt: "Tradicija pripreme hrskavog tijesta i pečenja pizze",
      tag: {
        hr: "Majstorska priprema pizze",
        en: "Artisan Pizzaiolo Craft",
        it: "Arte della Pizza",
        de: "Traditionelle Pizzakunst",
      },
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".gallery-card");
    if (!cards.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".gallery-card");
    if (cards[index]) {
      const card = cards[index];
      const scrollTarget = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, scrollTarget),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
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
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

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

      {/* Relative Wrapper for Navigation Arrows & Gallery Slider */}
      <div className="relative max-w-[1440px] mx-auto z-10 px-3 sm:px-8">

        {/* Left Arrow Button */}
        <button
          onClick={scrollPrev}
          disabled={activeIndex === 0}
          aria-label="Previous photos"
          className={`absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-[#1A1512]/95 hover:bg-[#B86E2B] hover:text-white dark:hover:bg-[#B86E2B] text-[#1C140F] dark:text-[#FAF7F2] border border-[#E0D5C7] dark:border-[#382E26] shadow-md backdrop-blur-md transition-all duration-300 cursor-pointer ${
            activeIndex === 0 ? "opacity-25 cursor-not-allowed" : "hover:scale-105 active:scale-95"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={scrollNext}
          disabled={activeIndex === galleryImages.length - 1}
          aria-label="Next photos"
          className={`absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-[#1A1512]/95 hover:bg-[#B86E2B] hover:text-white dark:hover:bg-[#B86E2B] text-[#1C140F] dark:text-[#FAF7F2] border border-[#E0D5C7] dark:border-[#382E26] shadow-md backdrop-blur-md transition-all duration-300 cursor-pointer ${
            activeIndex === galleryImages.length - 1 ? "opacity-25 cursor-not-allowed" : "hover:scale-105 active:scale-95"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Horizontal Carousel Track with Clean Photographic Gallery Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-5 sm:space-x-7 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth py-4 px-4 sm:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="gallery-card w-[80vw] sm:w-[440px] lg:w-[500px] min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] flex-shrink-0 snap-center rounded-3xl overflow-hidden border border-[#EAE3D6] dark:border-[#2C231D] relative aspect-[16/11] group select-none bg-[#EAE4D8] dark:bg-[#201A16]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 440px, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Minimal Frosted Glass Gallery Tag Badge (Fades in cleanly on hover) */}
              <div className="absolute bottom-4 left-4 z-10 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <div className="flex items-center gap-2 bg-[#FAF7F2]/90 dark:bg-[#1A1512]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-sm">
                  <Camera className="w-3.5 h-3.5 text-[#B86E2B] dark:text-[#E8A555]" />
                  <span className="text-xs font-sans font-medium text-[#1C140F] dark:text-[#FAF7F2]">
                    {img.tag[language as keyof typeof img.tag] || img.tag.hr}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Pill Dots Indicator */}
        <div className="flex items-center justify-center space-x-2 pt-4 sm:pt-6">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 h-2 bg-[#B86E2B] dark:bg-[#E8A555] rounded-full shadow-sm"
                  : "w-2.5 h-2.5 bg-[#D5C9B9] dark:bg-[#3D3025] hover:bg-[#B86E2B]/50 rounded-full"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


