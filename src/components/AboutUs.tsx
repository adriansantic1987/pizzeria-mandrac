"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { language } = useLanguage();

  const content = {
    hr: {
      eyebrow: "DOBRODOŠLI U PIZZERIJU & GRILL MANDRAĆ",
      titleLine1: "DOĐITE I UPOZNAJTE",
      scriptWord: "nas",
      titleLine2: "U MANDRAĆU",
      p1: "Ugniježđena u mirnoj uvali Zidarići uz samu obalu Malinske na otoku Krku, Pizzeria Mandrać stvorena je iz jednostavne želje – ponuditi domaćim gostima i putnicima iskrenu hranu pripremljenu s pažnjom i bez kompromisa.",
      p2: "Naše tijesto prolazi sporu, prirodnu fermentaciju kako bi kora bila lagana, prozračna i hrskava, pečena u tradicionalnoj krušnoj peći na drva. Sa žara drvenog ugljena stižu sočni burgeri i mesni specijaliteti – savršeni za ljetna druženja uz miris mora i borova.",
      ctaText: "ISTRAŽITE NAŠ JELOVNIK",
      mapText: "NAĐITE NAS NA MAPI",
      tagline1: "Krušna peć na bukovo drvo",
      tagline2: "Žar prirodnog drvenog ugljena",
      locationBadge: "Zidarići, Malinska • Krk",
    },
    en: {
      eyebrow: "WELCOME TO PIZZERIA & GRILL MANDRAĆ",
      titleLine1: "COME & MEET",
      scriptWord: "us",
      titleLine2: "AT MANDRAĆ",
      p1: "Tucked away in the tranquil bay of Zidarići on the shores of Malinska, Krk Island, Pizzeria Mandrać was born from a simple desire: to serve genuine, honest Mediterranean food prepared with passion and the finest ingredients.",
      p2: "Our dough undergoes slow, natural fermentation resulting in a light, airy, and delicately crisp crust baked inside an authentic beechwood-fired oven. Alongside our pizzas, our natural charcoal grill turns out succulent gourmet burgers and sizzling meats in a relaxed seaside setting.",
      ctaText: "DISCOVER OUR MENU",
      mapText: "FIND US ON MAP",
      tagline1: "Authentic Beechwood Oven",
      tagline2: "Natural Charcoal Grill",
      locationBadge: "Zidarići, Malinska • Krk",
    },
    it: {
      eyebrow: "BENVENUTI ALLA PIZZERIA & GRILL MANDRAĆ",
      titleLine1: "VENITE A CONOSCER",
      scriptWord: "ci",
      titleLine2: "DA MANDRAĆ",
      p1: "Immersa nella quiete della baia di Zidarići, sulle rive di Malinska nell'isola di Krk, la Pizzeria Mandrać nasce dal desiderio di offrire sapori autentici e materie prime scelte con cura in un'atmosfera calda e accogliente.",
      p2: "Il nostro impasto segue una lenta lievitazione naturale per garantire massima leggerezza e fragranza, cotto nel classico forno a legna. Sulla brace a carbone naturale prepariamo carni selezionate e hamburger artigianali, accompagnati dalla brezza del mare.",
      ctaText: "SCOPRI IL NOSTRO MENU",
      mapText: "TROVACI SULLA MAPPA",
      tagline1: "Forno a legna di faggio",
      tagline2: "Brace a carbone naturale",
      locationBadge: "Zidarići, Malinska • Krk",
    },
    de: {
      eyebrow: "WILLKOMMEN IN DER PIZZERIA & GRILL MANDRAĆ",
      titleLine1: "BESUCHEN SIE",
      scriptWord: "uns",
      titleLine2: "BEI MANDRAĆ",
      p1: "Eingebettet in die idyllische Bucht von Zidarići an der Küste von Malinska auf der Insel Krk entstand die Pizzeria Mandrać aus der Leidenschaft für ehrliche, mediterrane Küche und unvergessliche Urlaubsmomente.",
      p2: "Unser Pizzateig reift durch schonende, lange Teigführung und wird im traditionellen Buchenholzofen knusprig gebacken. Vom offenen Holzkohlegrill servieren wir saftige Burger und Fleischspezialitäten – ideal für laue Sommerabende unter Pinien.",
      ctaText: "SPEISEKARTE ENTDECKEN",
      mapText: "AUF DER KARTE FINDEN",
      tagline1: "Traditioneller Holzofen",
      tagline2: "Echter Holzkohlegrill",
      locationBadge: "Zidarići, Malinska • Krk",
    },
  }[language] || {
    eyebrow: "DOBRODOŠLI U PIZZERIJU & GRILL MANDRAĆ",
    titleLine1: "DOĐITE I UPOZNAJTE",
    scriptWord: "nas",
    titleLine2: "U MANDRAĆU",
    p1: "Ugniježđena u mirnoj uvali Zidarići uz samu obalu Malinske na otoku Krku, Pizzeria Mandrać stvorena je iz jednostavne želje – ponuditi domaćim gostima i putnicima iskrenu hranu pripremljenu s pažnjom i bez kompromisa.",
    p2: "Naše tijesto prolazi sporu, prirodnu fermentaciju kako bi kora bila lagana, prozračna i hrskava, pečena u tradicionalnoj krušnoj peći na drva. Sa žara drvenog ugljena stižu sočni burgeri i mesni specijaliteti – savršeni za ljetna druženja uz miris mora i borova.",
    ctaText: "ISTRAŽITE NAŠ JELOVNIK",
    mapText: "NAĐITE NAS NA MAPI",
    tagline1: "Krušna peć na bukovo drvo",
    tagline2: "Žar prirodnog drvenog ugljena",
    locationBadge: "Zidarići, Malinska • Krk",
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF7F2] dark:bg-[#151210] text-[#32231A] dark:text-[#EFE9DF] transition-colors duration-300 py-20 sm:py-28 lg:py-36 border-b border-[#EAE3D6] dark:border-[#28211B]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-16 2xl:gap-20 items-center">
          
          {/* LEFT COLUMN: Editorial Typography, Overlapping Script Headline & Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 space-y-6 sm:space-y-8 pr-0 lg:pr-2 xl:pr-6">
            
            {/* Small uppercase gold eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5"
            >
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.24em] text-[#B86E2B] dark:text-[#E2984D] uppercase">
                {content.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline with Intertwined Script Word */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-0"
            >
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] 2xl:text-[3.65rem] font-normal leading-[1.15] sm:leading-[1.08] tracking-[-0.01em] text-[#1C140F] dark:text-[#FAF7F2] break-words">
                <span className="inline-block relative">
                  {content.titleLine1}
                  {/* Fluid Hand-lettered Golden Cursive Word overlapping */}
                  <span className="font-script font-normal text-[#C5832B] dark:text-[#E8A555] text-3xl sm:text-5xl md:text-6xl lg:text-[3.2rem] xl:text-[4rem] leading-none inline-block lowercase ml-2 sm:ml-3 -mr-1 relative -top-0.5 sm:-top-2 select-none drop-shadow-sm">
                    {content.scriptWord}
                  </span>
                </span>
                <br />
                <span className="block mt-1 sm:mt-2">
                  {content.titleLine2}
                </span>
              </h2>
            </motion.div>

            {/* Narrative Editorial Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-[#5A493D] dark:text-[#CCC1B5] text-sm sm:text-base leading-relaxed font-sans font-light max-w-xl"
            >
              <p className="leading-relaxed">
                {content.p1}
              </p>
              <p className="leading-relaxed">
                {content.p2}
              </p>
            </motion.div>

            {/* Call To Action Buttons & Underline Link */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-5 sm:gap-9"
            >
              <a
                href="#menu"
                className="group relative inline-flex items-center gap-2 pb-1.5 text-xs sm:text-sm font-sans font-semibold tracking-[0.18em] uppercase text-[#1C140F] dark:text-[#FAF7F2] hover:text-[#B86E2B] dark:hover:text-[#E8A555] transition-colors"
              >
                <span>{content.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 text-[#B86E2B] dark:text-[#E8A555] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                {/* Gold Accent Underline */}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B86E2B] dark:bg-[#E8A555] transition-all duration-300 group-hover:h-[2px]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold tracking-[0.18em] uppercase text-[#735F50] dark:text-[#A89A8E] hover:text-[#B86E2B] dark:hover:text-[#E8A555] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B86E2B] dark:text-[#E8A555] flex-shrink-0" />
                <span>{content.mapText}</span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Layered Dual-Photo Composition with Illustrated Botanical Pattern Background */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center lg:justify-end min-h-[380px] sm:min-h-[520px] lg:min-h-[620px] pt-4 sm:pt-8 lg:pt-0 overflow-hidden">
            
            {/* Patterned Backdrop Canvas (Right Panel) */}
            <div className="absolute right-0 lg:right-[-30px] xl:right-[-50px] top-0 lg:top-[-4%] bottom-0 lg:bottom-[-4%] w-full lg:w-[85%] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-[#EFEAE0]/90 dark:bg-[#1E1814]/90 border border-[#E2D8CA]/70 dark:border-[#2C231D]/80 overflow-hidden shadow-sm pointer-events-none transition-colors duration-300">
              
              {/* Distinct Pizza & Restaurant Line-Art Pattern Overlay */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.22] dark:opacity-[0.12] text-[#634835] dark:text-[#E8DCCF]"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <defs>
                  <pattern
                    id="restaurant-pattern"
                    width="190"
                    height="190"
                    patternUnits="userSpaceOnUse"
                  >
                    {/* 1. PIZZA SLICE with pepperoni and crust */}
                    <g transform="translate(15, 12) rotate(-10)">
                      <path
                        d="M 5,6 Q 22,0 38,6 L 22,46 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 7,10 Q 22,5 36,10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      {/* Pepperoni & Toppings */}
                      <circle cx="19" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1.3" />
                      <circle cx="28" cy="25" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.3" />
                      <circle cx="20" cy="33" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M 12,24 Q 15,22 14,26" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </g>

                    {/* 2. CHEF'S HAT (Toque Blanche) */}
                    <g transform="translate(85, 14)">
                      {/* Hat Band */}
                      <path
                        d="M 6,28 L 32,28 L 30,34 L 8,34 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      {/* Puffy Crown */}
                      <path
                        d="M 6,28 C 0,22 2,10 11,12 C 13,4 25,4 27,12 C 36,10 38,22 32,28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path d="M 13,16 L 14,27 M 25,16 L 24,27" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </g>

                    {/* 3. WINE BOTTLE & GLASS */}
                    <g transform="translate(148, 12)">
                      {/* Stemmed Wine Glass */}
                      <path
                        d="M 2,10 C 2,20 14,20 14,10 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <path d="M 8,20 L 8,30 M 4,30 L 12,30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      {/* Wine Bottle */}
                      <path
                        d="M 24,4 L 28,4 L 28,9 C 25,13 22,16 22,21 L 22,34 L 30,34 L 30,21 C 30,16 27,13 24,9 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                      <path d="M 23,24 L 29,24" stroke="currentColor" strokeWidth="1.1" />
                    </g>

                    {/* 4. FORK & KNIFE (Crossed Cutlery) */}
                    <g transform="translate(18, 76)">
                      {/* Fork */}
                      <path d="M 6,4 L 6,34 M 2,4 L 2,12 C 2,17 10,17 10,12 L 10,4 M 4,4 L 4,11 M 8,4 L 8,11" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      {/* Knife */}
                      <path d="M 20,4 C 24,4 26,10 26,18 L 22,20 L 22,34 L 20,34 L 20,4 Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </g>

                    {/* 5. WOOD-FIRED PIZZA OVEN WITH FLAME */}
                    <g transform="translate(80, 72)">
                      {/* Oven Brick Arch */}
                      <path
                        d="M 4,28 C 4,10 32,10 32,28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path d="M 0,28 L 36,28" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      {/* Oven Flame */}
                      <path
                        d="M 18,25 C 15,20 20,17 17,14 C 22,16 23,20 21,23 C 23,21 24,20 23,25 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                      <path d="M 8,7 L 11,10 M 25,10 L 28,7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </g>

                    {/* 6. OLIVE BRANCH with OLIVES */}
                    <g transform="translate(138, 74)">
                      {/* Stem */}
                      <path d="M 6,28 Q 20,18 36,4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      {/* Leaves */}
                      <path d="M 12,22 Q 8,12 18,14 Q 18,22 12,22 Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M 24,14 Q 22,4 32,7 Q 30,16 24,14 Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
                      {/* Olives */}
                      <ellipse cx="14" cy="27" rx="3" ry="4.5" transform="rotate(30 14 27)" fill="none" stroke="currentColor" strokeWidth="1.3" />
                      <ellipse cx="26" cy="19" rx="3" ry="4.5" transform="rotate(-20 26 19)" fill="none" stroke="currentColor" strokeWidth="1.3" />
                    </g>

                    {/* 7. SERVING CLOCHE (Restaurant Platter) */}
                    <g transform="translate(14, 138)">
                      {/* Platter Base */}
                      <path d="M 2,24 L 34,24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      {/* Dome */}
                      <path
                        d="M 6,24 C 6,10 30,10 30,24 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      {/* Top Handle Knob */}
                      <circle cx="18" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    </g>

                    {/* 8. WHOLE PIZZA ON WOODEN PEEL / BOARD */}
                    <g transform="translate(80, 134)">
                      {/* Round Pizza Board */}
                      <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      {/* Crust Ring */}
                      <circle cx="18" cy="18" r="11.5" fill="none" stroke="currentColor" strokeWidth="1.1" strokeDasharray="3 2" />
                      {/* Slice Lines */}
                      <path d="M 4,18 L 32,18 M 18,4 L 18,32 M 8,8 L 28,28 M 8,28 L 28,8" stroke="currentColor" strokeWidth="1" />
                      {/* Handle */}
                      <path d="M 30,26 L 38,34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </g>

                    {/* 9. BASIL LEAF MOTIF & ROLLING PIN */}
                    <g transform="translate(144, 136)">
                      {/* Rolling Pin */}
                      <path d="M 4,20 L 32,8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 1,21 L 5,19 M 31,9 L 35,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Fresh Basil Leaf */}
                      <path
                        d="M 12,30 Q 6,18 20,18 Q 28,26 12,30 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path d="M 12,30 Q 15,24 20,18" stroke="currentColor" strokeWidth="1" />
                    </g>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#restaurant-pattern)" />
              </svg>

              {/* Soft warm gradient glow inside the panel */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#F5EAD4]/70 dark:from-[#35251B]/40 to-transparent blur-3xl" />
            </div>

            {/* Dual Overlapping Photographic Collage */}
            <div className="relative w-full max-w-[560px] lg:max-w-none flex items-center justify-center lg:justify-end">
              
              {/* Photo 1: Left / Background-Portrait (Authentic Oven & Ambiance) */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-[50%] sm:w-[48%] lg:w-[47%] xl:w-[46%] mr-[-3%] sm:mr-[-8%] lg:mr-[-12%] shadow-2xl rounded-2xl overflow-hidden border border-white/70 dark:border-[#382E26] bg-[#EAE4D8] dark:bg-[#201A16] group"
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full min-h-[290px] sm:min-h-[400px] lg:min-h-[460px] overflow-hidden">
                  <Image
                    src="/image/gallery/gallery-4.jpg"
                    alt="Pizzeria Mandrać - Tradicionalna krušna peć i pizza majstor"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 35vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 pointer-events-none" />
                </div>
              </motion.div>

              {/* Photo 2: Right / Foreground-Overlapping (Vibrant Food & Table Setting) */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-[54%] sm:w-[50%] lg:w-[49%] xl:w-[48%] -mt-12 sm:-mt-16 lg:-mt-20 shadow-2xl rounded-2xl overflow-hidden border-2 sm:border-4 border-[#FAF7F2] dark:border-[#151210] bg-[#EAE4D8] dark:bg-[#201A16] group"
              >
                <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full min-h-[270px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden">
                  <Image
                    src="/image/gallery/gallery-1.jpg"
                    alt="Pizzeria Mandrać - Svježe pečena pizza i vino uz more"
                    fill
                    sizes="(max-width: 768px) 55vw, (max-width: 1200px) 38vw, 32vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                  {/* Subtle top-down overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>

                {/* Floating micro-badge on the corner */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#FAF7F2]/95 dark:bg-[#1A1512]/95 backdrop-blur-md px-3 py-1 sm:py-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-sm pointer-events-none">
                  <span className="text-[10px] sm:text-xs font-sans font-medium tracking-wider text-[#1C140F] dark:text-[#FAF7F2] uppercase">
                    Wood-Fired • Zidarići
                  </span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

