"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const labelWho = {
  hr: "Tko dolazi?",
  en: "Who is coming?",
  it: "Chi viene?",
  de: "Wer kommt?"
};

const labelWhen = {
  hr: "Kada dolazite?",
  en: "When are you coming?",
  it: "Quando arrivate?",
  de: "Wann kommen Sie?"
};

const openInMapsTranslations = {
  hr: "Otvori u Kartama",
  en: "Open in Maps",
  it: "Apri in Mappe",
  de: "In Maps öffnen"
};

const whatsappNote = {
  hr: "Klikom na gumb otvorit će se chat s unaprijed unesenom porukom. Samo upišite svoje ime, broj gostiju i željeni termin rezervacije te pošaljite poruku.",
  en: "Clicking the button will open a chat with a pre-filled message. Just enter your name, number of guests, and desired reservation time, then send the message.",
  it: "Cliccando sul pulsante si aprirà una chat con un messaggio precompilato. Inserisci il tuo nome, il numero di ospiti e l'orario di prenotazione desiderato, quindi invia il messaggio.",
  de: "Durch Klicken auf die Schaltfläche wird ein Chat mit einer vorausgefüllten Nachricht geöffnet. Geben Sie einfach Ihren Namen, die Anzahl der Gäste und die gewünschte Reservierungszeit ein und senden Sie die Nachricht."
};

const whatsappNoteTitle = {
  hr: "Napomena za WhatsApp:",
  en: "Note for WhatsApp:",
  it: "Nota per WhatsApp:",
  de: "Hinweis für WhatsApp:"
};

export default function Footer() {
  const { dict, language, openingHours } = useLanguage();
  const [userName, setUserName] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("19");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", name: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", name: "Twitter" },
  ];

  const quickLinks = [
    { name: dict.navbar.home, href: "#home" },
    { name: dict.navbar.about, href: "#about" },
    { name: dict.navbar.menu, href: "#menu" },
    { name: dict.navbar.contact, href: "#contact" },
  ];

  const handleWhatsAppBooking = () => {
    // Compile dynamic WhatsApp pre-filled template replacing tags
    const bookingTime = `${selectedHour}:${selectedMinute}`;
    const template = dict.action_box.whatsapp_template;
    const text = template
      .replace("{name}", userName)
      .replace("{guests}", guestCount)
      .replace("{date}", bookingDate)
      .replace("{time}", bookingTime);

    const encodedText = encodeURIComponent(text);
    const link = `https://wa.me/38551850404?text=${encodedText}`;
    window.open(link, "_blank");
  };

  return (
    <footer id="contact" className="bg-[#FAF7F2] dark:bg-[#151210] border-t border-[#EAE3D6] dark:border-[#28211B] py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
           {/* Left Column: Address, Hours, & Google Map */}
          <motion.div
            id="footer-contact"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col space-y-5"
          >
            <div>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.22em] text-[#B86E2B] dark:text-[#E2984D] uppercase font-semibold">
                {dict.footer.contact_tagline}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C140F] dark:text-[#FAF7F2] mt-2 mb-3 tracking-tight">
                {dict.footer.visit_us}
              </h2>
              <div className="h-0.5 w-12 bg-[#B86E2B] dark:bg-[#E2984D] rounded" />
            </div>

            {/* Hours & Address Combined Card */}
            <div className="space-y-3">
              
              {/* Address */}
              <div className="bg-white dark:bg-[#201A16] p-4 rounded-2xl border border-[#EAE3D6] dark:border-[#33271F] shadow-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#B86E2B] dark:text-[#E8A555] flex-shrink-0" />
                  <h4 className="font-serif text-sm font-semibold text-[#1C140F] dark:text-[#FAF7F2] uppercase tracking-wider">
                    {dict.footer.address_title}
                  </h4>
                </div>
                <div className="mt-1.5 pl-6">
                  <a
                    href="https://maps.google.com/?q=Rova+22,+51511+Zidari%C4%87i,+Croatia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#6B5749] dark:text-[#CCC1B5] font-sans font-light text-xs sm:text-sm hover:text-[#B86E2B] dark:hover:text-[#E8A555] transition-colors"
                  >
                    {dict.footer.address_value}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white dark:bg-[#201A16] p-4 rounded-2xl border border-[#EAE3D6] dark:border-[#33271F] shadow-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-[#B86E2B] dark:text-[#E8A555] flex-shrink-0" />
                  <h4 className="font-serif text-sm font-semibold text-[#1C140F] dark:text-[#FAF7F2] uppercase tracking-wider">
                    {dict.footer.hours_title}
                  </h4>
                </div>
                <div className="mt-2 pl-6 text-[#6B5749] dark:text-[#CCC1B5] font-sans font-light text-xs space-y-1">
                  {openingHours && openingHours.map((h: any) => (
                    <p key={h.id || h.day_group} className="flex justify-between max-w-xs">
                      <span>{h.day_group}:</span>
                      <span className="text-[#1C140F] dark:text-white font-medium">
                        {h.open_time} {h.close_time !== "Zatvoreno" ? `- ${h.close_time}` : ""}
                      </span>
                    </p>
                  ))}
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-[#EAE3D6] dark:border-[#33271F] shadow-sm bg-white dark:bg-[#201A16] p-1">
              <iframe
                src="https://maps.google.com/maps?q=Rova%2022,%2051511%20Zidari%C4%87i,%20Croatia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ 
                  border: 0
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pizzeria Mandrać Google Maps Location"
                className="rounded-xl dark:invert-[90%] dark:hue-rotate-[180deg] dark:contrast-[85%] dark:brightness-[90%]"
              ></iframe>
              
              {/* Custom 'Open in Maps' Button overlay */}
              <div className="absolute bottom-2.5 right-2.5 z-10">
                <a
                  href="https://maps.google.com/?q=Rova+22,+51511+Zidari%C4%87i,+Croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1C140F] dark:bg-[#2E241D] hover:bg-[#B86E2B] dark:hover:bg-[#B86E2B] text-white font-sans text-[10px] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-all duration-300 uppercase tracking-wider block"
                >
                  {openInMapsTranslations[language] || "Otvori u Kartama"}
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Split Cards Layout */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Card 1: WhatsApp Reservations Form */}
            <motion.div
              id="footer-booking-reservation"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#201A16] border border-[#EAE3D6] dark:border-[#33271F] rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col space-y-4 text-center"
            >
              <div className="space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C140F] dark:text-[#FAF7F2] uppercase tracking-wide">
                  {dict.action_box.reserve_title}
                </h3>
                <p className="text-[#6B5749] dark:text-[#CCC1B5] font-sans font-light text-xs leading-relaxed max-w-md mx-auto">
                  {dict.action_box.reserve_subtitle}
                </p>
              </div>

              {/* Grouped Input Fields */}
              <div className="space-y-4 w-full text-left">
                
                {/* Group 1: Tko dolazi? */}
                <div className="space-y-1.5">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#B86E2B] dark:text-[#E8A555]">
                    {labelWho[language] || "Tko dolazi?"}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder={dict.action_box.name_placeholder}
                      className="w-full bg-transparent border-b border-[#E0D5C7] dark:border-[#3D3025] focus:border-[#1C140F] dark:focus:border-white focus:outline-none pb-1.5 text-[#1C140F] dark:text-white font-sans text-xs transition-colors placeholder:text-[#A89A8E] dark:placeholder:text-[#6B5A4E] rounded-none px-1"
                    />
                    <input
                      type="text"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      placeholder={dict.action_box.guests_placeholder}
                      className="w-full bg-transparent border-b border-[#E0D5C7] dark:border-[#3D3025] focus:border-[#1C140F] dark:focus:border-white focus:outline-none pb-1.5 text-[#1C140F] dark:text-white font-sans text-xs transition-colors placeholder:text-[#A89A8E] dark:placeholder:text-[#6B5A4E] rounded-none px-1"
                    />
                  </div>
                </div>

                {/* Group 2: Kada dolazite? */}
                <div className="space-y-1.5">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#B86E2B] dark:text-[#E8A555]">
                    {labelWhen[language] || "Kada dolazite?"}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                    <input
                      type="text"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      placeholder={dict.action_box.date_placeholder}
                      onFocus={(e) => {
                        e.currentTarget.type = "date";
                      }}
                      onBlur={(e) => {
                        if (!e.currentTarget.value) e.currentTarget.type = "text";
                      }}
                      min={minDate}
                      className="w-full bg-transparent border-b border-[#E0D5C7] dark:border-[#3D3025] focus:border-[#1C140F] dark:focus:border-white focus:outline-none pb-1.5 text-[#1C140F] dark:text-white font-sans text-xs transition-colors placeholder:text-[#A89A8E] dark:placeholder:text-[#6B5A4E] rounded-none px-1"
                    />
                    <div className="grid grid-cols-2 gap-x-3">
                      <select
                        value={selectedHour}
                        onChange={(e) => setSelectedHour(e.target.value)}
                        className="w-full bg-transparent border-b border-[#E0D5C7] dark:border-[#3D3025] focus:border-[#1C140F] dark:focus:border-white focus:outline-none pb-1.5 text-[#1C140F] dark:text-white font-sans text-xs transition-all rounded-none px-1 cursor-pointer appearance-none"
                      >
                        {Array.from({ length: 15 }, (_, i) => {
                          const hrVal = String(i + 9).padStart(2, "0");
                          return (
                            <option key={hrVal} value={hrVal} className="bg-white dark:bg-[#1A1512] text-[#1C140F] dark:text-white">
                              {hrVal}:--
                            </option>
                          );
                        })}
                      </select>
                      <select
                        value={selectedMinute}
                        onChange={(e) => setSelectedMinute(e.target.value)}
                        className="w-full bg-transparent border-b border-[#E0D5C7] dark:border-[#3D3025] focus:border-[#1C140F] dark:focus:border-white focus:outline-none pb-1.5 text-[#1C140F] dark:text-white font-sans text-xs transition-all rounded-none px-1 cursor-pointer appearance-none"
                      >
                        {["00", "15", "30", "45"].map((minVal) => (
                          <option key={minVal} value={minVal} className="bg-white dark:bg-[#1A1512] text-[#1C140F] dark:text-white">
                            --:{minVal}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

              </div>

              {/* WhatsApp Booking Button */}
              <button
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#2B1B12] hover:bg-[#B86E2B] dark:bg-[#FAF7F2] dark:hover:bg-[#E8A555] text-[#FAF7F2] dark:text-[#2B1B12] font-sans font-semibold py-3 px-5 rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all duration-300 cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
              >
                <svg className="h-4 w-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.727-1.465L0 24zm6.59-4.846c1.665.988 3.311 1.488 4.96.16 6.305-.28 11.442-5.41 11.446-11.725.002-3.003-1.168-5.83-3.292-7.957C17.639 2.505 14.808 1.332 11.8 1.333c-5.918 0-10.732 4.81-10.736 10.735-.001 1.914.502 3.784 1.457 5.438L1.47 21.65l4.316-1.579c1.6.877 3.4 1.332 5.093 1.332h.004-.002zm12.336-8.918c-.328-.164-1.94-.959-2.241-1.07-.3-.11-.518-.165-.738.165-.219.329-.85 1.07-.1.042-.15.19-.328.329-.657.165-.328 0-.656-.164-.329-.164-.33-.163-.656.329-1.637.33-.984.001-1.64.001-.82-.656-.328-.656-.328-1.748-1.07-2.32-.657-.573-1.256-.466-1.72-.055-.466-.411-.902-.821-1.229-.821-.328 0-.656-.164-.82.164-.164.329-.656 1.638-.656 1.638s.163.33.328.657c.164.328.492.656.82.82.328.164 1.15.82 2.3.985.49.07 1.05.08 1.54.04 1.31-.09 2.45-.66 2.87-1.39.42-.73.42-1.37.28-1.54-.14-.17-.518-.329-.848-.493z" />
                </svg>
                <span>{dict.action_box.reserve_btn}</span>
              </button>

              {/* Informational Tip box */}
              <div className="bg-[#FAF7F2] dark:bg-[#1A1512] p-3 rounded-xl border border-[#EAE3D6] dark:border-[#33271F] flex items-start space-x-2.5 text-left">
                <Phone className="h-4 w-4 text-[#B86E2B] dark:text-[#E8A555] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] sm:text-xs text-[#6B5749] dark:text-[#CCC1B5] font-sans font-light leading-relaxed">
                  <strong className="font-semibold text-[#1C140F] dark:text-white">{whatsappNoteTitle[language] || "Napomena za WhatsApp:"}</strong> {whatsappNote[language]}
                </p>
              </div>
            </motion.div>

            {/* Card 2: Phone Orders & Delivery (Compact) */}
            <motion.div
              id="footer-booking-delivery"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white dark:bg-[#201A16] border border-[#EAE3D6] dark:border-[#33271F] rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            >
              <div className="space-y-0.5">
                <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1C140F] dark:text-[#FAF7F2] uppercase tracking-wide">
                  {dict.action_box.order_title}
                </h3>
                <p className="text-[#6B5749] dark:text-[#CCC1B5] font-sans font-light text-xs max-w-sm">
                  {dict.action_box.order_subtitle}
                </p>
              </div>

              {/* Contact Button */}
              <a
                href="tel:051850404"
                className="flex-shrink-0 border border-[#2B1B12] dark:border-[#E8A555] text-[#2B1B12] dark:text-[#FAF7F2] hover:bg-[#2B1B12] hover:text-white dark:hover:bg-[#E8A555] dark:hover:text-[#2B1B12] font-sans font-semibold py-2.5 px-5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer text-xs uppercase tracking-wider"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{dict.action_box.contact_btn}</span>
              </a>
            </motion.div>

          </div>

        </div>

        {/* Subfooter (Brand copyright, links, and socials) */}
        <div className="border-t border-ivory-200/50 dark:border-chocolate-850/40 pt-8 flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <a href="#home" className="flex items-center space-x-2.5 group">
              <Image
                src="/image/logo.png"
                alt="Pizzeria Mandrać Logo"
                width={32}
                height={32}
                className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-serif text-lg font-bold tracking-wide text-chocolate-900 dark:text-ivory-100">
                Pizzeria Mandrać
              </span>
            </a>
            <p className="text-chocolate-800 dark:text-ivory-300 font-sans font-light text-xs">
              {dict.footer.logo_desc}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center space-x-6 sm:space-x-8">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-chocolate-850 dark:text-ivory-200 hover:text-sea-600 dark:hover:text-sea-250 font-sans text-sm font-semibold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-chocolate-700 dark:text-ivory-200 hover:text-white p-2.5 bg-white dark:bg-[#26201B] border border-ivory-200 dark:border-chocolate-850/50 shadow-soft hover:bg-sea-600 dark:hover:bg-sea-600 rounded-full transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Copyright info */}
        <div className="pt-4 flex items-center justify-center text-chocolate-700/50 dark:text-ivory-300/30 font-sans text-xs font-light">
          <p>
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
