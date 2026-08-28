"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Review {
  id: string;
  name: string;
  location: string;
  date: {
    hr: string;
    en: string;
    it: string;
    de: string;
  };
  rating: number;
  badge: {
    hr: string;
    en: string;
    it: string;
    de: string;
  };
  text: {
    hr: string;
    en: string;
    it: string;
    de: string;
  };
  dish?: string;
}

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Luka Maras",
    location: "Zagreb, Hrvatska",
    date: {
      hr: "Prije 2 tjedna",
      en: "2 weeks ago",
      it: "2 settimane fa",
      de: "Vor 2 Wochen",
    },
    rating: 5,
    badge: {
      hr: "Lokalni vodič",
      en: "Local Guide",
      it: "Local Guide",
      de: "Local Guide",
    },
    text: {
      hr: "Definitivno najbolja pizza na otoku Krku! Tijesto je lagano, prozračno i savršeno hrskavo iz prave krušne peći. Ambijent na terasi uz borove i miris mora u Zidarićima je neprocjenjiv.",
      en: "Hands down the best pizza on Krk Island! The dough is light, airy, and perfectly crisp from the genuine wood-fired oven. The seaside terrace atmosphere in Zidarići is unbeatable.",
      it: "Senza dubbio la migliore pizza dell'isola di Krk! L'impasto è leggero e fragrante, cotto alla perfezione nel forno a legna. Atmosfera magnifica sulla terrazza vicino al mare.",
      de: "Zweifellos die beste Pizza auf der Insel Krk! Der Teig ist herrlich leicht und knusprig aus dem echten Holzofen. Die Atmosphäre auf der schattigen Terrasse am Meer ist fantastisch.",
    },
    dish: "Pizza Capricciosa & Malvazija",
  },
  {
    id: "2",
    name: "Markus & Elena Schmidt",
    location: "München, Deutschland",
    date: {
      hr: "Prije 3 tjedna",
      en: "3 weeks ago",
      it: "3 settimane fa",
      de: "Vor 3 Wochen",
    },
    rating: 5,
    badge: {
      hr: "Provjereni gost",
      en: "Verified Guest",
      it: "Ospite verificato",
      de: "Verifizierter Gast",
    },
    text: {
      hr: "Echtes Holzofen-Erlebnis! Pizze su izvanredne, a roštilj na drvenom ugljenu je vrhunski – sočni ćevapi i burgeri. Dolazimo svako ljeto kad smo u Malinskoj. Sve preporuke!",
      en: "Authentic wood-fired dining experience! Exceptional pizzas and the charcoal grill specialties were succulent and flavorful. We make sure to visit every summer in Malinska.",
      it: "Un'esperienza fantastica! Pizze straordinarie e carni alla brace cotte alla perfezione. Personale cordiale e servizio veloce anche in alta stagione. Consigliatissimo!",
      de: "Authentisches Holzofen-Erlebnis! Die Pizzen sind hervorragend und auch die Fleischgerichte vom Holzkohlegrill waren saftig und perfekt gewürzt. Jederzeit wieder!",
    },
    dish: "Plata Mandrać & Pivo",
  },
  {
    id: "3",
    name: "Matteo Bianchi",
    location: "Milano, Italia",
    date: {
      hr: "Prije mjesec dana",
      en: "1 month ago",
      it: "1 mese fa",
      de: "Vor 1 Monat",
    },
    rating: 5,
    badge: {
      hr: "Provjereni gost",
      en: "Verified Guest",
      it: "Ospite verificato",
      de: "Verifizierter Gast",
    },
    text: {
      hr: "Kao Talijani vrlo smo izbirljivi oko pizze, ali ovdje smo ostali oduševljeni: tijesto s dugom fermentacijom, svježi sastojci i predivna lokacija blizu mora. Čista petica!",
      en: "As Italians we have high standards for pizza, but we were genuinely impressed: long-fermented dough, fresh ingredients, and a lovely location near the sea. Top quality!",
      it: "Da italiani siamo sempre esigenti sulla pizza, ma qui siamo rimasti davvero entusiasti: impasto a lunga lievitazione, ingredienti freschissimi e vista mare rilassante.",
      de: "Als Italiener sind wir bei Pizza sehr anspruchsvoll, aber hier waren wir absolut begeistert: Perfekt gereifter Teig, frische Zutaten und ein wunderschöner Blick aufs Meer.",
    },
    dish: "Pizza Margherita & Burrata",
  },
  {
    id: "4",
    name: "Sophie & David Walker",
    location: "London, United Kingdom",
    date: {
      hr: "Prije mjesec dana",
      en: "1 month ago",
      it: "1 mese fa",
      de: "Vor 1 Monat",
    },
    rating: 5,
    badge: {
      hr: "Lokalni vodič",
      en: "Local Guide",
      it: "Local Guide",
      de: "Local Guide",
    },
    text: {
      hr: "Predivan ambijent i hrana! Sjeli smo na terasu u sumrak, pizza s tankim tijestom i domaće palačinke bile su božanstvene. Cijene su vrlo poštene za takvu kvalitetu.",
      en: "Incredible evening! We sat on the breezy terrace at sunset; the wood-fired crust was thin and crispy, and homemade desserts were heavenly. Great prices and warm hospitality.",
      it: "Serata meravigliosa al tramonto! Pizze eccellenti con crosta fragrante e dolci fatti in casa deliziosi. Prezzi onesti e servizio impeccabile.",
      de: "Wundervoller Abend bei Sonnenuntergang! Dünner, knuspriger Pizzateig und hausgemachte Desserts von höchster Qualität. Sehr faire Preise und herzlicher Service.",
    },
    dish: "Pizza Vesuvio & Palačinke",
  },
];

export default function ReviewsSection() {
  const { language } = useLanguage();

  const sectionCopy = {
    hr: {
      eyebrow: "DOJMOVI GOSTIJU • GOOGLE RECENZIJE",
      title: "Što kažu naši gosti",
      subtitle: "Iskrena iskustva domaćih gostiju i putnika koji se uvijek rado vraćaju u Pizzeriju Mandrać.",
      scoreLabel: "Google ocjena",
      reviewsCount: "na temelju 350+ recenzija",
      googleBtn: "Otvori sve recenzije na Googleu",
    },
    en: {
      eyebrow: "GUEST REVIEWS • GOOGLE RATING",
      title: "What Our Guests Say",
      subtitle: "Honest experiences from travelers and locals who cherish their moments at Pizzeria Mandrać.",
      scoreLabel: "Google Score",
      reviewsCount: "based on 350+ reviews",
      googleBtn: "View all reviews on Google",
    },
    it: {
      eyebrow: "RECENSIONI • GOOGLE RATING",
      title: "Cosa dicono i nostri ospiti",
      subtitle: "Esperienze autentiche di ospiti e viaggiatori che tornano sempre con piacere da Mandrać.",
      scoreLabel: "Valutazione Google",
      reviewsCount: "basato su oltre 350 recensioni",
      googleBtn: "Visualizza recensioni su Google",
    },
    de: {
      eyebrow: "GÄSTEBEWERTUNGEN • GOOGLE RATING",
      title: "Was unsere Gäste sagen",
      subtitle: "Ehrliche Erfahrungen von Gästen und Urlaubern, die immer wieder gerne in die Pizzeria Mandrać kommen.",
      scoreLabel: "Google Bewertung",
      reviewsCount: "basierend auf 350+ Bewertungen",
      googleBtn: "Alle Bewertungen auf Google ansehen",
    },
  }[language] || {
    eyebrow: "DOJMOVI GOSTIJU • GOOGLE RECENZIJE",
    title: "Što kažu naši gosti",
    subtitle: "Iskrena iskustva domaćih gostiju i putnika koji se uvijek rado vraćaju u Pizzeriju Mandrać.",
    scoreLabel: "Google ocjena",
    reviewsCount: "na temelju 350+ recenzija",
    googleBtn: "Otvori sve recenzije na Googleu",
  };

  return (
    <section
      id="reviews"
      className="bg-[#FAF7F2] dark:bg-[#151210] text-[#32231A] dark:text-[#EFE9DF] py-20 sm:py-28 lg:py-32 overflow-hidden relative border-t border-[#EAE3D6] dark:border-[#28211B] transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          
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
              {sectionCopy.eyebrow}
            </span>
            <span className="h-[1px] w-6 bg-[#B86E2B] dark:bg-[#E2984D]" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140F] dark:text-[#FAF7F2] mb-4 tracking-tight leading-tight"
          >
            {sectionCopy.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B5749] dark:text-[#CCC1B5] font-sans font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            {sectionCopy.subtitle}
          </motion.p>

          {/* Google Aggregate Score Badge Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-3 bg-white dark:bg-[#201A16] px-5 py-2.5 rounded-full border border-[#EAE3D6] dark:border-[#33271F] shadow-sm"
          >
            {/* Google G Icon */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F4B400] text-[#F4B400]" />
              ))}
            </div>

            <span className="font-sans font-bold text-sm text-[#1C140F] dark:text-[#FAF7F2]">
              4.8
            </span>
            <span className="text-xs text-[#786455] dark:text-[#A89A8E] font-sans">
              • {sectionCopy.reviewsCount}
            </span>
          </motion.div>

        </div>

        {/* Reviews Grid (2x2 Layout on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#201A16] border border-[#EAE3D6] dark:border-[#33271F] shadow-[0_4px_20px_rgba(40,25,15,0.04)] hover:shadow-[0_8px_30px_rgba(40,25,15,0.08)] hover:border-[#DCD2C3] dark:hover:border-[#4A392D] transition-all duration-300 group"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#B86E2B] text-[#B86E2B] dark:fill-[#E8A555] dark:text-[#E8A555]"
                      />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-[#EAE3D6] dark:text-[#382E26] group-hover:text-[#B86E2B]/40 dark:group-hover:text-[#E8A555]/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-[15px] font-sans font-light text-[#4A392D] dark:text-[#CCC1B5] leading-relaxed mb-6">
                  "{review.text[language as keyof typeof review.text] || review.text.hr}"
                </p>
              </div>

              {/* Bottom: Author Details & Tag */}
              <div className="pt-4 border-t border-[#F2ECE0] dark:border-[#2C231D] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#FAF5ED] dark:bg-[#2E241D] border border-[#EAE0D2] dark:border-[#3D3025] flex items-center justify-center font-serif text-sm font-semibold text-[#B86E2B] dark:text-[#E8A555]">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-[#1C140F] dark:text-[#FAF7F2]">
                        {review.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853] flex-shrink-0" />
                    </div>
                    <p className="text-xs text-[#786455] dark:text-[#A89A8E] font-sans">
                      {review.location} • {review.date[language as keyof typeof review.date] || review.date.hr}
                    </p>
                  </div>
                </div>

                {/* Optional Dish/Context Badge */}
                {review.dish && (
                  <span className="hidden sm:inline-block text-[11px] font-sans font-medium text-[#B86E2B] dark:text-[#E8A555] bg-[#FAF5ED] dark:bg-[#2E241D] px-2.5 py-1 rounded-full border border-[#EAE0D2] dark:border-[#3D3025]">
                    {review.dish}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://maps.google.com/?q=Pizzeria+Mandra%C4%87+Zidari%C4%87i"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#2B1B12] hover:bg-[#B86E2B] dark:bg-[#FAF7F2] dark:hover:bg-[#E8A555] text-[#FAF7F2] dark:text-[#2B1B12] font-sans text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer uppercase tracking-wider"
          >
            <span>{sectionCopy.googleBtn}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
