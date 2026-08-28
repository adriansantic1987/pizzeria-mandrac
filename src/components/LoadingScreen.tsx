"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Brief, elegant loading transition (~900ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#151210] text-[#FAF7F2] select-none"
        >
          {/* Centered Pizzeria Mandrać Logo */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-6">
            <Image
              src="/image/logo.png"
              alt="Pizzeria Mandrać"
              fill
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain filter drop-shadow-md"
            />
          </div>

          {/* Minimal Thin Copper Loading Accent Bar */}
          <div className="w-28 sm:w-36 h-[2px] bg-[#2C231C] rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full bg-[#B86E2B] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
