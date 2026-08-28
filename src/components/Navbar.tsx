"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, dict } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.navbar.home, href: "#home" },
    { name: dict.navbar.about, href: "#about" },
    { name: dict.navbar.menu, href: "#menu" },
    { name: dict.navbar.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Floating Pill Navbar (Compact, translucent glassmorphism, adaptive contrast on scroll) */}
      <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-[94%] sm:w-[92%] max-w-7xl">
        <div
          className={`backdrop-blur-xl rounded-full border flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-[#FAF7F2]/92 dark:bg-[#16120E]/88 border-[#E5DCD0]/90 dark:border-white/10 shadow-[0_8px_30px_rgba(40,25,15,0.09)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] px-5 sm:px-7 py-2.5 sm:py-3"
              : "bg-[#16120E]/65 border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.25)] px-5 sm:px-7 py-3 sm:py-3.5"
          }`}
        >
          
          {/* Logo + Site Name (Far Left) */}
          <a href="#home" className="flex items-center space-x-2.5 sm:space-x-3 group flex-shrink-0">
            <Image
              src="/image/logo.png"
              alt="Pizzeria Mandrać Logo"
              width={40}
              height={40}
              className="h-7.5 sm:h-8.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wide whitespace-nowrap transition-colors duration-300 ${
                isScrolled ? "text-[#1C140F] dark:text-[#FAF7F2]" : "text-white"
              }`}
            >
              Pizzeria Mandrać
            </span>
          </a>

          {/* Desktop Navigation Links (Spaced in Center/Left-Center) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-xs sm:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
                  isScrolled
                    ? "text-[#4A392D] hover:text-[#B86E2B] dark:text-[#D5CCC1] dark:hover:text-[#FAF7F2]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls Area: Language Selector & Pill CTA Button */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-5">
            
            {/* Language Selector Dropdown */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className={`flex items-center space-x-1 font-sans text-xs tracking-wider uppercase font-bold cursor-pointer focus:outline-none transition-colors ${
                  isScrolled
                    ? "text-[#4A392D] hover:text-[#1C140F] dark:text-[#D5CCC1] dark:hover:text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span>{language.toUpperCase()}</span>
                <span className="text-[9px] opacity-70">▼</span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute right-0 mt-2.5 w-16 rounded-xl shadow-2xl py-1.5 z-50 text-center flex flex-col justify-start border ${
                      isScrolled
                        ? "bg-[#FAF7F2] dark:bg-[#221C18] border-[#E5DCD0] dark:border-white/10"
                        : "bg-[#221C18] border-white/10"
                    }`}
                  >
                    {(["hr", "en", "it", "de"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setDropdownOpen(false);
                        }}
                        className={`w-full py-1 text-xs font-sans font-bold uppercase transition-colors cursor-pointer ${
                          language === lang
                            ? "text-[#B86E2B] dark:text-[#E2984D] font-black"
                            : isScrolled
                            ? "text-[#5A493D] hover:text-[#1C140F] hover:bg-black/5 dark:text-[#CCC1B5] dark:hover:text-white dark:hover:bg-white/5"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solid Pill CTA Button in Brand Amber/Copper */}
            <a
              href="#contact"
              className="bg-[#B86E2B] hover:bg-[#9E5A20] active:scale-98 text-white font-sans text-xs font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer uppercase tracking-wider"
            >
              {dict.hero.ctaBook || "Rezerviraj stol"}
            </a>

          </div>

          {/* Mobile Actions (Hamburger Button) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 focus:outline-none transition-colors cursor-pointer ${
                isScrolled ? "text-[#1C140F] dark:text-white" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-[70px] z-40 bg-[#1A1512]/98 backdrop-blur-lg md:hidden flex flex-col justify-center px-6 py-12 border-t border-chocolate-850/50 overflow-y-auto max-h-[calc(100vh-70px)]"
          >
            <nav className="flex flex-col space-y-7 items-center text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-white hover:text-[#DFB283] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#C1682B] hover:bg-[#A9551E] text-white font-sans text-sm font-semibold px-6 py-3 rounded-full transition-all uppercase tracking-wider mt-2"
              >
                {dict.hero.ctaBook || "Rezerviraj stol"}
              </motion.a>

              {/* Mobile Language Selector */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
                className="flex items-center space-x-4 pt-6 border-t border-white/10 w-32 justify-center"
              >
                {(["hr", "en", "it", "de"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsOpen(false);
                    }}
                    className={`font-sans text-sm font-bold uppercase transition-colors cursor-pointer ${
                      language === lang ? "text-[#DFB283] underline underline-offset-4" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
