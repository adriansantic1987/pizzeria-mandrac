"use client";

import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn, TestimonialItem } from "@/components/ui/testimonials-columns-1";
import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const { language } = useLanguage();

  const testimonialsData: Record<string, TestimonialItem[]> = {
    hr: [
      {
        text: "Najbolja pizza iz krušne peći na otoku Krku! Hrskavo tijesto, domaći umak i fantastičan pogled na more.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        name: "Ana Horvat",
        role: "Lokalni Gost • Malinska",
      },
      {
        text: "Prekrasan ambijent na terasi uz vrhunske roštilj specijalitete. Osoblje je izuzetno ljubazno i pažljivo.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        name: "Marko Kovačević",
        role: "Obiteljski Posjetitelj",
      },
      {
        text: "Pizzeria Mandrać nam je omiljeno mjesto u Zidarićima. Pizze su bogate sastojcima, a ugođaj je nesvakidašnji.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        name: "Elena Perić",
        role: "Gost s Obitelji",
      },
      {
        text: "Sočni burgeri i žar na ugljen daju poseban okus. Savršeno mjesto za večeru s pogledom na zalazak sunca.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        name: "Luka Radić",
        role: "Stalni Gost",
      },
      {
        text: "Izvrsna brza narudžba za ponijeti i uvijek toplo poslužena hrana. Svaka preporuka za sve ljubitelje dobre pizze!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        name: "Maja Babić",
        role: "Turist iz Zagreba",
      },
      {
        text: "Savršen spoj tradicionalnog pečenja u krušnoj peći i ugodnog mediteranskog ugođaja na terasi.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
        name: "Ivan Tomić",
        role: "Gost na Odmoru",
      },
      {
        text: "Ljubaznost i kvaliteta jela na najvišem nivou. Svakako se vraćamo i sljedeće godine!",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
        name: "Petra Novak",
        role: "Gost iz Rijeke",
      },
      {
        text: "Divna atmosfera za obitelji s djecom, besplatan Wi-Fi i pristupačne cijene uz sam vrhunski kvalitet.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
        name: "Tomislav Jurić",
        role: "Obiteljski Gost",
      },
      {
        text: "Pizzeria Mandrać donosi pravi okus domaće krušne peći. Neprocjenjivo iskustvo u Zidarićima!",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
        name: "Filip Zorić",
        role: "Otočanin",
      },
    ],
    en: [
      {
        text: "The best wood-fired pizza on Krk island! Crispy crust, homemade sauce, and a breathtaking sea view.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        name: "Anna Smith",
        role: "Tourist from UK",
      },
      {
        text: "Wonderful terrace atmosphere with fantastic charcoal grill dishes. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        name: "Marcus Weber",
        role: "Guest from Germany",
      },
      {
        text: "Pizzeria Mandrać is our favorite dinner spot in Zidarići. Generous toppings and warm friendly service.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        name: "Elena Rossi",
        role: "Family Traveler",
      },
      {
        text: "Juicy burgers and authentic wood-fired pizzas. Sunset dinner on their terrace is unforgettable.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        name: "Lukas Miller",
        role: "Regular Visitor",
      },
      {
        text: "Great takeaway service and always fresh food served with a smile. We will definitely return!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        name: "Sophia Martinez",
        role: "Vacation Guest",
      },
      {
        text: "Authentic Mediterranean flavors with a cozy terrace and top quality ingredients.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
        name: "David Brown",
        role: "Foodie Traveler",
      },
      {
        text: "Friendliest staff and delicious food. Perfect dining experience near the beach.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
        name: "Emma Wilson",
        role: "Krk Island Lover",
      },
      {
        text: "Family friendly, free Wi-Fi, and reasonable prices for high-end wood-fired cooking.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
        name: "Thomas Koch",
        role: "Family Guest",
      },
      {
        text: "Pizzeria Mandrać delivers true wood-oven perfection. An unforgettable culinary highlight in Zidarići!",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
        name: "Philip Taylor",
        role: "Summer Guest",
      },
    ],
  };

  const currentTestimonials = testimonialsData[language] || testimonialsData.hr;

  const firstColumn = currentTestimonials.slice(0, 3);
  const secondColumn = currentTestimonials.slice(3, 6);
  const thirdColumn = currentTestimonials.slice(6, 9);

  const headings = {
    hr: { badge: "RECENZIJE GOSTIJU", title: "Što kažu naši gosti", subtitle: "Dojmovi i iskustva posjetitelja Pizzerije Mandrać" },
    en: { badge: "GUEST REVIEWS", title: "What Our Guests Say", subtitle: "Experiences and feedback from visitors of Pizzeria Mandrać" },
    it: { badge: "RECENSIONI DEGLI OSPITI", title: "Cosa dicono i nostri ospiti", subtitle: "Esperienze e opinioni dei visitatori della Pizzeria Mandrać" },
    de: { badge: "GÄSTEBEWERTUNGEN", title: "Was unsere Gäste sagen", subtitle: "Erfahrungen und Rückmeldungen unserer Besucher" },
  };

  const content = headings[language as keyof typeof headings] || headings.hr;

  return (
    <section className="bg-[#171310] text-ivory-100 py-16 sm:py-24 relative overflow-hidden border-t border-b border-chocolate-850/60">
      
      {/* Subtle Warm Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C1682B]/12 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <div className="flex items-center space-x-3 mb-3">
            <span className="h-[1px] w-6 sm:w-8 bg-[#C1682B]/80" />
            <span className="bg-[#C1682B] text-white font-sans text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-widest shadow-sm">
              {content.badge}
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#C1682B]/80" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-100 tracking-tight leading-tight mb-3">
            {content.title}
          </h2>

          {/* Rating Stars */}
          <div className="flex items-center space-x-1.5 text-[#DFB283] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4.5 w-4.5 fill-current" />
            ))}
            <span className="font-sans text-xs font-semibold text-ivory-200/90 ml-1.5">
              4.8 / 5.0 (Google Reviews)
            </span>
          </div>

          <p className="text-ivory-200/80 font-sans font-light text-sm sm:text-base leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Animated Infinite Testimonials Columns Grid */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>

      </div>
    </section>
  );
}
