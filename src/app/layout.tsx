import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

import { getBistroData } from "@/utils/cache";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const alexBrush = Alex_Brush({
  subsets: ["latin", "latin-ext"],
  variable: "--font-script",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pizzeria Mandrać",
  description: "Enjoy authentic wood-fired pizzas, charcoal grill, and delicious meals at Pizzeria Mandrać in Zidarići, Malinska, Krk Island, Croatia.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Pizzeria Mandrać",
  "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80",
  "telephone": "051 850 404",
  "priceRange": "€15–20",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rova 22",
    "addressLocality": "Zidarići",
    "postalCode": "51511",
    "addressCountry": "HR"
  },
  "servesCuisine": ["Pizza", "Mediterranean", "Grill"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "13:00",
      "closes": "22:00"
    }
  ],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Outdoor seating available",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Wi-Fi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Good for kids",
      "value": true
    }
  ]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bistroData = await getBistroData();
  return (
    <html
      lang="hr"
      className={`${playfair.variable} ${plusJakarta.variable} ${cormorant.variable} ${alexBrush.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory-50 text-chocolate-900 dark:bg-[#1A1512] dark:text-ivory-100 font-sans selection:bg-ivory-200 selection:text-chocolate-900 overflow-x-hidden transition-colors duration-250">
        <ThemeProvider>
          <LanguageProvider
            initialSiteContent={bistroData.site_content}
            initialMenuItems={bistroData.menu_items}
            initialOpeningHours={bistroData.opening_hours}
            initialSettings={bistroData.site_settings}
          >
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

