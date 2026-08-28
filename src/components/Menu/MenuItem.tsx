"use client";

import { motion } from "framer-motion";
import { MenuItemType } from "@/data/menuData";
import { useLanguage } from "@/context/LanguageContext";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const { translateMenuItem } = useLanguage();
  const { name, description } = translateMenuItem(item);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#231D18] border border-[#EAE3D6] dark:border-[#33271F] shadow-[0_2px_12px_rgba(40,25,15,0.03)] hover:shadow-[0_6px_20px_rgba(40,25,15,0.07)] hover:border-[#D8CEBF] dark:hover:border-[#47372B] hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Top Row: Name, Leader Dots & Price */}
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="font-serif text-base sm:text-lg font-semibold text-[#1C140F] dark:text-[#FAF7F2] tracking-tight group-hover:text-[#B86E2B] dark:group-hover:text-[#E8A555] transition-colors">
          {name}
        </h4>
        
        {/* Price Badge */}
        <div className="flex-shrink-0 font-sans font-bold text-sm sm:text-base text-[#B86E2B] dark:text-[#E8A555] bg-[#FAF7F2] dark:bg-[#2D231C] px-3 py-1 rounded-full border border-[#EAE3D6] dark:border-[#3D2E24]">
          {(typeof item.price === "number" ? item.price : parseFloat(item.price) || 0).toFixed(2)} €
        </div>
      </div>

      {/* Description / Ingredients */}
      {description && (
        <p className="text-xs sm:text-[13px] text-[#6B5749] dark:text-[#CCC1B5] font-sans font-normal leading-relaxed mt-2 pr-2">
          {description}
        </p>
      )}
    </motion.div>
  );
}

