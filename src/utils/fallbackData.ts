import { MENU_ITEMS } from "@/data/menuData";
import { MENU_TRANSLATIONS } from "@/data/menuTranslations";

export const FALLBACK_OPENING_HOURS = [
  { id: 1, day_group: "Pon, Uto, Čet - Ned", open_time: "13:00", close_time: "22:00", season_label: "Radno vrijeme" },
  { id: 2, day_group: "Srijeda", open_time: "Zatvoreno", close_time: "Zatvoreno", season_label: "Srijeda" },
  { id: 3, day_group: "Kuhinja", open_time: "13:00", close_time: "21:30", season_label: "Kuhinja" },
  { id: 4, day_group: "Takeaway", open_time: "13:00", close_time: "18:00", season_label: "Takeaway" }
];

export const FALLBACK_MENU_ITEMS = MENU_ITEMS.map((item, index) => ({
  id: item.id,
  category: item.category,
  name: item.name,
  description: item.description,
  price: item.price,
  display_order: index,
  active: true
}));

export const FALLBACK_SITE_CONTENT = {
  HR: {
    navbar: {
      home: "Početna",
      about: "O nama",
      menu: "Jelovnik",
      contact: "Kontakt & Rezervacije"
    },
    hero: {
      accent: "Zidarići, Malinska • Otok Krk • Pizzeria & Grill",
      subtitle: "Domaća pizza iz krušne peći, sočni roštilj i pogled na more u Zidarićima na otoku Krku.",
      desc: "Svakodnevno za vas pripremamo domaće pizze iz krušne peći, sočna jela s roštilja i svježe specijalitete. Outdoor terasasti ugođaj, besplatan Wi-Fi i prilagođeno obiteljima.",
      ctaMenu: "Pogledaj jelovnik",
      ctaBook: "Rezerviraj stol",
      explore: "ISTRAŽITE"
    },
    about: {
      tagline: "Kvalitetna hrana & opušten ambijent",
      title: "Dobrodošli u Pizzeriju Mandrać",
      desc: "Smještena u mirnom naselju Zidarići uz obalu Malinske na otoku Krku, **Pizzeria Mandrać** nudi vrhunska, svježe pripremljena jela. Naša obiteljska atmosfera donosi hrskave pizze i sočan roštilj u kojima uživa cijela obitelj.",
      feature1_title: "Žar drvenog ugljena",
      feature1_desc: "Sočni burgeri i meso pripremljeni na otvorenom žaru.",
      feature2_title: "Pizze iz krušne peći",
      feature2_desc: "Bogate, hrskave pizze s kvalitetnim sastojcima i rastopljenim sirom.",
      bottom_text: "Otvorena terasa, besplatan Wi-Fi i ugodna atmosfera za obitelji s djecom. Dođite i ugasite glad uz vrhunske obroke uz pristupačne cijene (€15–20 po osobi).",
      reviews_tagline: "Dojmovi gostiju",
      reviews_title: "Što kažu naši gosti",
      google_score: "Google ocjena: 4.8 / 5"
    },
    menu: {
      tagline: "Domaći recepti & svježi sastojci",
      title: "Naš jelovnik",
      subtitle: "Istražite bogatu ponudu autohtonih otočkih pizza i roštilj specijaliteta.",
      banner_subtitle: "Domaći ugođaj u Zidarićima uz tradiciju i kvalitetu",
      allergy_note: "* Molimo da o mogućim alergijama obavijestite naše osoblje prije naručivanja. Sve cijene su izražene u eurima i uključuju PDV.",
      categories: {
        pizze: "Pizze",
        rostilj: "Jela s roštilja",
        predjela: "Predjela",
        deserti: "Deserti",
        salate: "Salate"
      }
    },
    gallery: {
      badge: "FOTOGALERIJA",
      title_start: "Doživite atmosferu u ",
      title_highlight: "Pizzeriji Mandrać",
      subtitle: "Pogledajte trenutke iz naše pizzerije, terase i kuhinje."
    },
    footer: {
      contact_tagline: "Kontakt & Lokacija",
      visit_us: "Posjetite nas",
      address_title: "Adresa",
      address_value: "Rova 22, 51511 Zidarići, Hrvatska",
      hours_title: "Radno vrijeme",
      hours_weekdays: "Pon - Uto, Čet - Ned: 13:00 - 22:00 (Srijeda: Zatvoreno)",
      hours_sunday: "Nedjelja: 13:00 - 22:00",
      logo_desc: "Pizzeria & Grill • Zidarići, Malinska, Krk",
      copyright: "Pizzeria Mandrać. Sva prava pridržana."
    },
    action_box: {
      reserve_title: "Rezervacija Stola",
      reserve_subtitle: "Osigurajte svoje mjesto na vrijeme. Unesite svoje podatke ispod kako biste pokrenuli brzu rezervaciju stola putem WhatsApp poruke.",
      name_placeholder: "Vaše Ime i Prezime",
      guests_placeholder: "Broj osoba",
      date_placeholder: "Datum",
      time_placeholder: "Vrijeme",
      reserve_btn: "Rezerviraj stol (WhatsApp)",
      order_title: "Narudžba Hrane (Takeaway)",
      order_subtitle: "Za narudžbe hrane za ponijeti (Takeaway 13:00–18:00) ili brze telefonske upite nazovite nas direktno na 051 850 404.",
      contact_btn: "Nazovi 051 850 404",
      whatsapp_template: "Pozdrav! Želio bih rezervirati stol u Pizzeriji Mandrać. Ime i prezime: {name}, Broj ljudi: {guests}, Datum: {date}, Vrijeme: {time}"
    }
  },
  EN: {
    navbar: {
      home: "Home",
      about: "About Us",
      menu: "Menu",
      contact: "Contact & Booking"
    },
    hero: {
      accent: "Zidarići, Malinska • Krk Island • Pizzeria & Grill",
      subtitle: "Homemade wood-fired pizza, juicy charcoal grill, and a sea view in Zidarići on Krk island.",
      desc: "Every day we prepare homemade wood-fired pizzas, juicy grilled meats, and fresh island specialties. Outdoor seating, free Wi-Fi, and family friendly.",
      ctaMenu: "View Menu",
      ctaBook: "Book a Table",
      explore: "EXPLORE"
    },
    about: {
      tagline: "Quality food & relaxed atmosphere",
      title: "Welcome to Pizzeria Mandrać",
      desc: "Located in the serene village of Zidarići near Malinska on Krk island, **Pizzeria Mandrać** offers simple, freshly prepared dishes. Our family atmosphere brings crispy pizzas and juicy grills enjoyed by all.",
      feature1_title: "Charcoal Grill",
      feature1_desc: "Juicy burgers and classic specialties grilled over real charcoal.",
      feature2_title: "Wood-Fired Pizza",
      feature2_desc: "Crispy wood-fired pizzas loaded with homemade sauce and melted cheese.",
      bottom_text: "Spacious outdoor terrace, free Wi-Fi, and a warm family-friendly environment (€15–20 per person).",
      reviews_tagline: "Guest Reviews",
      reviews_title: "What our guests say",
      google_score: "Google Rating: 4.8 / 5"
    },
    menu: {
      tagline: "Homemade recipes & fresh ingredients",
      title: "Our Menu",
      subtitle: "Explore our rich selection of authentic pizzas and grill specialties.",
      banner_subtitle: "Cozy ambient in Zidarići with quality and tradition",
      allergy_note: "* Please inform our staff of any possible allergies before ordering. All prices are in EUR and include VAT.",
      categories: {
        pizze: "Pizzas",
        rostilj: "Charcoal Grills",
        predjela: "Starters",
        deserti: "Desserts",
        salate: "Salads"
      }
    },
    gallery: {
      badge: "PHOTO GALLERY",
      title_start: "Experience the ambiance at ",
      title_highlight: "Pizzeria Mandrać",
      subtitle: "Take a glance at moments from our pizzeria, terrace, and kitchen."
    },
    footer: {
      contact_tagline: "Contact & Location",
      visit_us: "Visit Us",
      address_title: "Address",
      address_value: "Rova 22, 51511 Zidarići, Croatia",
      hours_title: "Opening Hours",
      hours_weekdays: "Mon - Tue, Thu - Sun: 13:00 - 22:00 (Wed: Closed)",
      hours_sunday: "Sunday: 13:00 - 22:00",
      logo_desc: "Pizzeria & Grill • Zidarići, Malinska, Krk",
      copyright: "Pizzeria Mandrać. All rights reserved."
    },
    action_box: {
      reserve_title: "Table Reservation",
      reserve_subtitle: "Secure your spot in time. Enter your details below to initiate a quick table reservation via WhatsApp message.",
      name_placeholder: "Your First and Last Name",
      guests_placeholder: "Number of guests",
      date_placeholder: "Date",
      time_placeholder: "Time",
      reserve_btn: "Reserve table (WhatsApp)",
      order_title: "Food Takeaway & Orders",
      order_subtitle: "For takeaway food orders (Takeaway 13:00–18:00) or phone inquiries, call us directly at 051 850 404.",
      contact_btn: "Call 051 850 404",
      whatsapp_template: "Hello! I would like to reserve a table at Pizzeria Mandrać. Name: {name}, People: {guests}, Date: {date}, Time: {time}"
    }
  },
  IT: {
    navbar: {
      home: "Inizio",
      about: "Chi Siamo",
      menu: "Menu",
      contact: "Contatti"
    },
    hero: {
      accent: "Zidarići, Malinska • Isola di Krk • Pizzeria & Grill",
      subtitle: "Pizza fatta in casa dal forno a legna, carne alla griglia e vista mare a Zidarići sull'isola di Krk.",
      desc: "Ogni giorno prepariamo pizze fatte in casa dal forno a legna, succulenti piatti alla griglia e specialità fresche. Terrazza all'aperto, Wi-Fi gratuito e ambiente ideale per famiglie.",
      ctaMenu: "Vedi il menu",
      ctaBook: "Prenota un tavolo",
      explore: "ESPLORA"
    },
    about: {
      tagline: "Cibo di qualità e atmosfera rilassata",
      title: "Benvenuti alla Pizzeria Mandrać",
      desc: "Situata a Zidarići vicino a Malinska sull'isola di Krk, la **Pizzeria Mandrać** offre piatti semplici e preparati al momento per tutta la famiglia.",
      feature1_title: "Griglia a carbone",
      feature1_desc: "Hamburger succulenti e carne cotta su vera griglia a carbone.",
      feature2_title: "Pizze dal forno a legna",
      feature2_desc: "Pizze croccanti con ingredienti freschi e tanto formaggio fuso.",
      bottom_text: "Terrazza all'aperto, Wi-Fi gratis e ambiente per famiglie (€15–20 a persona).",
      reviews_tagline: "Recensioni dei clienti",
      reviews_title: "Cosa dicono i nostri ospiti",
      google_score: "Punteggio Google: 4.8 / 5"
    },
    menu: {
      tagline: "Ricette fatte in casa e ingredienti freschi",
      title: "Il nostro menu",
      subtitle: "Esplora la ricca offerta di pizze e specialità alla griglia.",
      banner_subtitle: "Ambiente accogliente a Zidarići",
      allergy_note: "* Si prega di informare il nostro staff di eventuali allergie prima di ordinare. Tutti i prezzi sono in euro e comprensivi di IVA.",
      categories: {
        pizze: "Pizze",
        rostilj: "Grigliate",
        predjela: "Antipasti",
        deserti: "Dolci",
        salate: "Insalate"
      }
    },
    gallery: {
      badge: "GALLERIA FOTOGRAFICA",
      title_start: "Vivi l'atmosfera alla ",
      title_highlight: "Pizzeria Mandrać",
      subtitle: "Guarda i momenti della nostra pizzeria, terrazza e cucina."
    },
    footer: {
      contact_tagline: "Contatti & Posizione",
      visit_us: "Vieni a trovarci",
      address_title: "Indirizzo",
      address_value: "Rova 22, 51511 Zidarići, Croazia",
      hours_title: "Orari di apertura",
      hours_weekdays: "Lun - Mar, Gio - Dom: 13:00 - 22:00 (Mer: Chiuso)",
      hours_sunday: "Domenica: 13:00 - 22:00",
      logo_desc: "Pizzeria & Grill • Zidarići, Malinska, Krk",
      copyright: "Pizzeria Mandrać. Tutti i diritti riservati."
    },
    action_box: {
      reserve_title: "Prenotazione Tavolo",
      reserve_subtitle: "Assicurati il tuo posto in tempo. Inserisci i tuoi dati qui sotto per avviare una prenotazione rapida via WhatsApp.",
      name_placeholder: "Il tuo Nome e Cognome",
      guests_placeholder: "Numero di persone",
      date_placeholder: "Data",
      time_placeholder: "Ora",
      reserve_btn: "Prenota tavolo (WhatsApp)",
      order_title: "Asporto & Ordinazioni",
      order_subtitle: "Per ordini da asporto (Takeaway 13:00–18:00) o informazioni, chiamaci al 051 850 404.",
      contact_btn: "Chiama 051 850 404",
      whatsapp_template: "Ciao! Vorrei prenotare un tavolo alla Pizzeria Mandrać. Nome: {name}, Persone: {guests}, Data: {date}, Ora: {time}"
    }
  },
  DE: {
    navbar: {
      home: "Start",
      about: "Über Uns",
      menu: "Speisekarte",
      contact: "Kontakt & Reservierung"
    },
    hero: {
      accent: "Zidarići, Malinska • Insel Krk • Pizzeria & Grill",
      subtitle: "Hausgemachte Holzofenpizza, saftiges vom Grill und Meerblick in Zidarići auf der Insel Krk.",
      desc: "Jeden Tag bereiten wir hausgemachte Holzofenpizzen, saftige Grillgerichte und frische Spezialitäten zu. Außenterrasse, kostenloses WLAN und familienfreundlich.",
      ctaMenu: "Speisekarte ansehen",
      ctaBook: "Tisch reservieren",
      explore: "ENTDECKEN"
    },
    about: {
      tagline: "Qualitätsessen & entspannte Atmosphäre",
      title: "Willkommen in der Pizzeria Mandrać",
      desc: "Im ruhigen Ort Zidarići bei Malinska auf der Insel Krk bietet die **Pizzeria Mandrać** frisch zubereitete Speisen für die ganze Familie.",
      feature1_title: "Holzkohlegrill",
      feature1_desc: "Saftige Burger und Grillspezialitäten vom echten Holzkohlegrill.",
      feature2_title: "Pizza aus dem Holzofen",
      feature2_desc: "Knusprige Holzofenpizzen mit besten Zutaten und viel geschmolzenem Käse.",
      bottom_text: "Sonnige Außenterrasse, kostenfreies WLAN und ein gemütliches Umfeld für Familien mit Kindern (€15–20 pro Person).",
      reviews_tagline: "Gästebewertungen",
      reviews_title: "Was unsere Gäste sagen",
      google_score: "Google-Bewertung: 4.8 / 5"
    },
    menu: {
      tagline: "Hausgemachte Rezepte & frische Zutaten",
      title: "Speisekarte",
      subtitle: "Entdecken Sie die reichhaltige Auswahl an Pizzen und Grillgerichten.",
      banner_subtitle: "Gemütliches Ambiente in Zidarići",
      allergy_note: "* Bitte informieren Sie unser Personal vor der Bestellung über eventuelle Allergien. Alle Preise sind in Euro angegeben und enthalten MwSt.",
      categories: {
        pizze: "Pizzen",
        rostilj: "Grillspezialitäten",
        predjela: "Vorspeisen",
        deserti: "Desserts",
        salate: "Salate"
      }
    },
    gallery: {
      badge: "FOTOGALERIE",
      title_start: "Erleben Sie die Atmosphäre in der ",
      title_highlight: "Pizzeria Mandrać",
      subtitle: "Werfen Sie einen Blick auf Momente aus unserer Pizzeria, Terrasse und Küche."
    },
    footer: {
      contact_tagline: "Kontakt & Lage",
      visit_us: "Besuchen Sie uns",
      address_title: "Adresse",
      address_value: "Rova 22, 51511 Zidarići, Kroatien",
      hours_title: "Öffnungszeiten",
      hours_weekdays: "Mon - Di, Do - So: 13:00 - 22:00 (Mi: Geschlossen)",
      hours_sunday: "Sonntag: 13:00 - 22:00",
      logo_desc: "Pizzeria & Grill • Zidarići, Malinska, Krk",
      copyright: "Pizzeria Mandrać. Alle Rechte vorbehalten."
    },
    action_box: {
      reserve_title: "Tischreservierung",
      reserve_subtitle: "Sichern Sie sich rechtzeitig Ihren Platz via WhatsApp.",
      name_placeholder: "Ihr Vor- und Nachname",
      guests_placeholder: "Anzahl der Personen",
      date_placeholder: "Datum",
      time_placeholder: "Uhrzeit",
      reserve_btn: "Tisch reservieren (WhatsApp)",
      order_title: "Bestellung zum Mitnehmen (Takeaway)",
      order_subtitle: "Für Bestellungen zum Mitnehmen (Takeaway 13:00–18:00) rufen Sie uns direkt an unter 051 850 404.",
      contact_btn: "Anrufen 051 850 404",
      whatsapp_template: "Hallo! Ich möchte einen Tisch in der Pizzeria Mandrać reservieren. Name: {name}, Personen: {guests}, Datum: {date}, Uhrzeit: {time}"
    }
  }
};

