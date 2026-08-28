"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import useSWR from "swr";

interface TranslatedReview {
  author_name: string;
  rating: number;
  text: {
    hr: string;
    en: string;
    de: string;
    it: string;
  };
  relative_time_description: {
    hr: string;
    en: string;
    de: string;
    it: string;
  };
}

function ReviewItem({ review }: { review: TranslatedReview }) {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const langKey = language.toLowerCase() as "hr" | "en" | "de" | "it";
  const reviewText = review.text[langKey] || review.text.hr;
  const reviewTime = review.relative_time_description[langKey] || review.relative_time_description.hr;

  useEffect(() => {
    const timer = setTimeout(() => {
      const element = textRef.current;
      if (element) {
        setIsTruncated(element.scrollHeight > element.clientHeight);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [reviewText]);

  const readMoreText = {
    hr: "Pročitaj više",
    en: "Read more",
    de: "Mehr lesen",
    it: "Leggi di più",
  }[language] || "Read more";

  const showLessText = {
    hr: "Prikaži manje",
    en: "Show less",
    de: "Weniger anzeigen",
    it: "Mostra meno",
  }[language] || "Show less";

  return (
    <div className="space-y-2 border-b border-ivory-200/50 dark:border-chocolate-850/40 pb-5 last:border-0 last:pb-0">
      {/* Rating Stars in Warm Sand/Copper */}
      <div className="flex space-x-1">
        {[...Array(Math.round(review.rating || 5))].map((_, i) => (
          <span key={i} className="text-[#C1682B] dark:text-[#DFB283] text-sm">★</span>
        ))}
      </div>
      
      {/* Quote text */}
      <div className="relative">
        <p
          ref={textRef}
          className={`text-chocolate-850 dark:text-ivory-200 font-serif italic text-sm sm:text-base leading-relaxed transition-all duration-300 ease-in-out ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          &ldquo;{reviewText}&rdquo;
        </p>
      </div>

      {isTruncated && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#C1682B] hover:text-[#A9551E] dark:text-[#DFB283] dark:hover:text-white font-sans text-xs font-semibold uppercase tracking-wider focus:outline-none mt-1 transition-colors duration-200 cursor-pointer"
        >
          {isExpanded ? showLessText : readMoreText}
        </button>
      )}

      {/* Guest Name & Time */}
      <div className="flex items-center space-x-2 text-chocolate-700/70 dark:text-ivory-300/60 font-sans text-xs pt-1">
        <span className="font-semibold text-chocolate-900 dark:text-ivory-100">— {review.author_name}</span>
        {reviewTime && (
          <>
            <span>&bull;</span>
            <span>{reviewTime}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default function AboutUs() {
  const { language, dict } = useLanguage();

  const backupReviews: TranslatedReview[] = [
    {
      author_name: "Ana H.",
      rating: 5,
      text: {
        hr: "Najbolja pizza na otoku Krku! Osoblje je iznimno uslužno, a ambijent na terasi uz more je predivan.",
        en: "The best pizza on Krk island! Extremely attentive staff and a wonderful seaside terrace ambiance.",
        de: "Die beste Pizza auf der Insel Krk! Sehr aufmerksames Personal und eine wunderschöne Terrasse am Meer.",
        it: "La migliore pizza sull'isola di Krk! Personale gentilissimo e splendida terrazza vista mare."
      },
      relative_time_description: {
        hr: "prije tjedan dana",
        en: "a week ago",
        de: "vor einer Woche",
        it: "una settimana fa"
      }
    },
    {
      author_name: "Marko K.",
      rating: 5,
      text: {
        hr: "Izvrsna jela s roštilja na ugljen i fantastična obiteljska usluga. Svaka preporuka!",
        en: "Excellent charcoal grill dishes and fantastic family service. Highly recommended!",
        de: "Hervorragende Holzkohlegrill-Gerichte und fantastischer Familienservice. Sehr zu empfehlen!",
        it: "Eccellenti piatti alla griglia a carbone e fantastico servizio familiare. Consigliatissimo!"
      },
      relative_time_description: {
        hr: "prije 2 tjedna",
        en: "2 weeks ago",
        de: "vor 2 Wochen",
        it: "2 settimane fa"
      }
    }
  ];

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: rawReviewsData } = useSWR("/api/reviews", fetcher, {
    fallbackData: { rating: 4.8, reviews: backupReviews },
    revalidateOnFocus: false
  });

  const reviewsToRender = rawReviewsData?.reviews && Array.isArray(rawReviewsData.reviews) && rawReviewsData.reviews.length > 0
    ? (rawReviewsData.reviews as TranslatedReview[])
    : backupReviews;

  const liveRating = rawReviewsData?.rating ?? null;

  const contentTranslations = {
    hr: {
      eyebrow: "ZIDARIĆI • MALINSKA • KRK",
      heading: "Autentični okusi iz krušne peći i roštilja na ugljen",
      paragraph: "Smještena u mirnom naselju Zidarići uz obalu Malinske na otoku Krku, Pizzeria Mandrać donosi vrhunska, svježe pripremljena jela. Naša obiteljska tradicija spaja hrskave pizze iz autentične krušne peći i sočna jela s roštilja na drveni ugljen u ugodnom i opuštenom mediteranskom ambijentu.",
      highlights: [
        "Krušna peć na drva",
        "Sporo dizano tijesto",
        "Žar drvenog ugljena",
        "Terasa uz more"
      ],
      stats: [
        { val: "15+", label: "Godina tradicije" },
        { val: "100%", label: "Domaći sastojci" },
        { val: liveRating !== null ? liveRating.toFixed(1) : "4.8", label: "Google ocjena" },
      ]
    },
    en: {
      eyebrow: "ZIDARIĆI • MALINSKA • KRK",
      heading: "Authentic flavors from wood oven & charcoal grill",
      paragraph: "Located in the serene seaside village of Zidarići near Malinska on Krk island, Pizzeria Mandrać offers freshly prepared dishes crafted with passion. Our family tradition combines crispy wood-fired pizzas and succulent charcoal grilled meats served in a warm Mediterranean seaside setting.",
      highlights: [
        "Wood-fired oven",
        "Slow-fermented dough",
        "Charcoal grill",
        "Seaside terrace"
      ],
      stats: [
        { val: "15+", label: "Years of Tradition" },
        { val: "100%", label: "Fresh Ingredients" },
        { val: liveRating !== null ? liveRating.toFixed(1) : "4.8", label: "Google Rating" },
      ]
    },
    de: {
      eyebrow: "ZIDARIĆI • MALINSKA • KRK",
      heading: "Authentische Aromen aus Holzofen & Holzkohlegrill",
      paragraph: "In dem ruhigen Ort Zidarići bei Malinska auf der Insel Krk bietet die Pizzeria Mandrać frisch zubereitete Speisen. Unsere Familientradition verbindet knusprige Holzofenpizzen und saftiges vom Holzkohlegrill in einer gemütlichen Atmosphäre am Meer.",
      highlights: [
        "Echter Holzofen",
        "Langsam gereifter Teig",
        "Echter Holzkohlegrill",
        "Terrasse am Meer"
      ],
      stats: [
        { val: "15+", label: "Jahre Tradition" },
        { val: "100%", label: "Frische Zutaten" },
        { val: liveRating !== null ? liveRating.toFixed(1) : "4.8", label: "Google-Bewertung" },
      ]
    },
    it: {
      eyebrow: "ZIDARIĆI • MALINSKA • KRK",
      heading: "Autentici sapori dal forno a legna e griglia a carbone",
      paragraph: "Situata a Zidarići vicino a Malinska sull'isola di Krk, la Pizzeria Mandrać offre piatti preparati al momento con passione. La nostra tradizione familiare unisce pizze croccanti dal forno a legna e succulente grigliate servite in un'atmosfera sul mare.",
      highlights: [
        "Forno a legna",
        "Lunga lievitazione",
        "Griglia a carbone",
        "Terrazza sul mare"
      ],
      stats: [
        { val: "15+", label: "Anni di Tradizione" },
        { val: "100%", label: "Ingredienti Freschi" },
        { val: liveRating !== null ? liveRating.toFixed(1) : "4.8", label: "Valutazione Google" },
      ]
    }
  };

  const currentContent = contentTranslations[language as keyof typeof contentTranslations] || contentTranslations.hr;

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-ivory-50 dark:bg-chocolate-900 text-chocolate-900 dark:text-ivory-100 border-y border-ivory-200/60 dark:border-chocolate-850/50 transition-colors duration-300 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C1682B]/10 dark:bg-[#C1682B]/15 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric Editorial Grid (55 / 45 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: One Large Atmospheric Photo (Bleeding / Large format) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-ivory-200 dark:border-chocolate-850/60 group">
              <Image
                src="/image/gallery/gallery-3.jpg"
                alt="Pizzeria Mandrać seaside terrace in Zidarići"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Photo Caption Label */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-sans tracking-widest text-[#DFB283] uppercase font-semibold block mb-1">
                  Zidarići • Malinska
                </span>
                <p className="font-serif text-sm sm:text-base font-medium opacity-90">
                  Ugodan ambijent i ljetna terasa uz obalu
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            
            {/* Eyebrow Label with Thin Accent Line */}
            <div className="flex items-center space-x-3">
              <span className="h-[1px] w-8 bg-[#C1682B]" />
              <span className="text-xs sm:text-sm font-sans tracking-[0.25em] text-[#C1682B] dark:text-[#DFB283] uppercase font-semibold">
                {currentContent.eyebrow}
              </span>
            </div>

            {/* Large Statement Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-chocolate-900 dark:text-white leading-[1.18]">
              {currentContent.heading}
            </h2>

            {/* Flowing Body Paragraph (No Blue Colors) */}
            <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed text-chocolate-850/90 dark:text-ivory-200/90 font-light max-w-2xl">
              {currentContent.paragraph}
            </p>

            {/* Inline Selling Points (Subtle Dividers, No Boxes or Circular Icons) */}
            <div className="pt-2 pb-2">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-sans font-medium text-chocolate-900/90 dark:text-ivory-100/90 tracking-wide uppercase">
                {currentContent.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 sm:space-x-6">
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C1682B] dark:bg-[#DFB283] inline-block mr-2.5" />
                      {item}
                    </span>
                    {idx < currentContent.highlights.length - 1 && (
                      <span className="text-chocolate-300 dark:text-chocolate-700 hidden sm:inline">&bull;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Understated Stat-like Highlights & Guest Rating */}
            <div className="pt-6 border-t border-ivory-200 dark:border-chocolate-850/50 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              {currentContent.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C1682B] dark:text-[#DFB283]">
                    {stat.val}{idx === 2 ? "★" : ""}
                  </span>
                  <span className="text-xs sm:text-sm text-chocolate-800 dark:text-ivory-300/80 font-sans font-light">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Integrated Google Reviews Highlight Snippet */}
            {reviewsToRender.length > 0 && (
              <div className="pt-6 border-t border-ivory-200 dark:border-chocolate-850/50">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-chocolate-700/80 dark:text-ivory-300/70 mb-4">
                  <svg className="h-4 w-4 fill-current text-[#C1682B]" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.7 0 3.3.65 4.5 1.8l2.4-2.4C17.34 1.7 14.9 1 12.24 1c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.353 0 10.57-4.468 10.57-10.772 0-.726-.078-1.272-.23-1.943H12.24z" />
                  </svg>
                  <span>Google Reviews ({dict.about.google_score.replace("4.5+", liveRating !== null ? liveRating.toFixed(1) : "4.8")})</span>
                </div>
                <div className="space-y-4">
                  {reviewsToRender.slice(0, 2).map((review, idx) => (
                    <ReviewItem key={`${idx}-${language}`} review={review} />
                  ))}
                </div>
              </div>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
