"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "@/data/menuData";
import MenuItem from "./MenuItem";
import { useLanguage } from "@/context/LanguageContext";
import useSWR from "swr";

// Category Banner Images (All 5 categories use authentic local photos):
const CATEGORY_BANNERS: Record<string, string> = {
  pizze: "/image/pizza.jpg",
  rostilj: "/image/rostilj.jpg",
  predjela: "/image/plata.png",
  deserti: "/image/deserti.jpg",
  salate: "/image/salad.png",
};

export default function MenuSection() {
  const { dict, menuItems: fallbackItems } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("pizze");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 150);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: rawMenuItems } = useSWR("/api/menu_items", fetcher, {
    fallbackData: fallbackItems,
    revalidateOnFocus: false
  });

  const menuItems = Array.isArray(rawMenuItems) ? rawMenuItems : fallbackItems;

  const filteredItems = menuItems.filter(
    (item: any) => item.category === activeCategory && item.active
  );

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#FAF7F2] dark:bg-[#16120E] px-4 sm:px-6 lg:px-8 border-t border-[#EAE3D6] dark:border-[#28211B] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-sans tracking-[0.22em] text-[#B86E2B] dark:text-[#E2984D] uppercase font-semibold">
            {dict.menu.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140F] dark:text-[#FAF7F2] mt-3 mb-4 tracking-tight">
            {dict.menu.title}
          </h2>
          <div className="h-0.5 w-14 bg-[#B86E2B] dark:bg-[#E2984D] mx-auto rounded mb-4" />
          <p className="text-[#6B5749] dark:text-[#CCC1B5] font-sans font-light text-sm sm:text-base leading-relaxed">
            {dict.menu.subtitle}
          </p>
        </div>

        {/* Categories Tab Bar (Mobile Horizontally Scrollable) */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-3 sm:pb-0 scrollbar-none w-full max-w-5xl justify-start sm:justify-center px-2 flex-nowrap">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              const displayName = dict.menu.categories[cat.id as keyof typeof dict.menu.categories] || cat.name;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex-shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-sans font-semibold tracking-wide uppercase transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive ? "text-white" : "text-[#5A493D] dark:text-[#CCC1B5] hover:text-[#1C140F] dark:hover:text-white hover:bg-white/80 dark:hover:bg-[#231D18]"
                  }`}
                >
                  {/* Sliding Background Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#B86E2B] rounded-full z-0 shadow-sm"
                    />
                  )}
                  <span className="relative z-10">{displayName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category Atmosphere Banner */}
        <div className="relative w-full h-[180px] sm:h-[260px] md:h-[300px] mb-10 sm:mb-12 overflow-hidden rounded-3xl border border-[#EAE3D6] dark:border-[#2C231D] shadow-md bg-[#EFEAE0] dark:bg-[#231D18]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={CATEGORY_BANNERS[activeCategory]}
                alt={`${activeCategory} Showcase`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
              
              {/* Overlay Title */}
              <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-8 text-left">
                <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white uppercase tracking-wider">
                  {dict.menu.categories[activeCategory as keyof typeof dict.menu.categories] || activeCategory}
                </h3>
                <p className="text-white/85 font-sans text-xs sm:text-sm mt-1 sm:mt-1.5 font-light">
                  {dict.menu.banner_subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Menu Cards Grid split into two columns with parchment backing */}
        <div className="bg-[#FAF8F5]/80 dark:bg-[#1B1511]/80 backdrop-blur-sm rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#EAE3D6]/90 dark:border-[#2C231D] shadow-sm">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 transition-all duration-300 ease-out transform ${
            isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Dietary Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#786455] dark:text-[#A89A8E] font-sans font-light">
            {dict.menu.allergy_note}
          </p>
        </div>

      </div>
    </section>
  );
}
