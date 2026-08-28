export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "pizze" | "rostilj" | "predjela" | "deserti" | "salate";
  image?: string;
  tags?: string[];
  active?: boolean;
}

export const CATEGORIES = [
  { id: "pizze", name: "Pizze" },
  { id: "rostilj", name: "Jela s roštilja" },
  { id: "predjela", name: "Predjela" },
  { id: "deserti", name: "Deserti" },
  { id: "salate", name: "Salate" },
] as const;

export const MENU_ITEMS: MenuItemType[] = [
  // 1. PIZZE (Existing items unchanged)
  {
    id: "piz-1",
    name: "Pizza Margherita",
    description: "Umak od rajčice, svježa mozzarella, maslinovo ulje i svježi bosiljak.",
    price: 9,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-2",
    name: "Pizza Vesuvio",
    description: "Umak od rajčice, mozzarella, kuhana šunka i origano.",
    price: 10,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-3",
    name: "Pizza Capricciosa",
    description: "Umak od rajčice, mozzarella, kuhana šunka, svježi šampinjoni i masline.",
    price: 11,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-4",
    name: "Pizza Quattro Formaggi",
    description: "Umak od rajčice, mozzarella, gorgonzola, lokalni krčki sir i parmezan.",
    price: 12,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-5",
    name: "Pizza Al Tonno",
    description: "Umak od rajčice, mozzarella, tunjevina, kapari, crveni luk i maslinovo ulje.",
    price: 12,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-6",
    name: "Pizza Picante",
    description: "Umak od rajčice, mozzarella, ljuta salama, feferoni, ajvar i crveni luk.",
    price: 12,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-7",
    name: "Krčka pizza",
    description: "Umak od rajčice, lokalni krčki ovčji sir, domaći pršut, divlje smokve i rikula.",
    price: 14,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-8",
    name: "Pizza Rustica",
    description: "Umak od rajčice, mozzarella, domaći špek, šampinjoni, kiselo vrhnje i luk.",
    price: 12,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-9",
    name: "Pizza Vegetariana",
    description: "Umak od rajčice, mozzarella, grillane tikvice, patlidžani, paprika, kukuruz i cherry rajčice.",
    price: 11,
    category: "pizze",
    active: true,
  },
  {
    id: "piz-10",
    name: "Pizzeria Mandrać Special",
    description: "Umak od rajčice, mozzarella, trakice junećeg bifteka, krema od tartufa i svježa rikula.",
    price: 16,
    category: "pizze",
    active: true,
  },

  // 2. JELA S ROŠTILJA
  {
    id: "ros-1",
    name: "Ćevapi (10 kom)",
    description: "Domaći ćevapi s lukom i kajmakom",
    price: 9.0,
    category: "rostilj",
    active: true,
  },
  {
    id: "ros-2",
    name: "Pljeskavica",
    description: "Domaća pljeskavica punjena sirom",
    price: 10.0,
    category: "rostilj",
    active: true,
  },
  {
    id: "ros-3",
    name: "Mješano meso na žaru",
    description: "Svinjski vrat, kobasica, pileći ražnjić",
    price: 15.0,
    category: "rostilj",
    active: true,
  },
  {
    id: "ros-4",
    name: "Svinjski vrat na žaru",
    description: "S prilogom po izboru",
    price: 12.0,
    category: "rostilj",
    active: true,
  },
  {
    id: "ros-5",
    name: "Pileći ražnjići",
    description: "Mariniran pileći file na žaru",
    price: 11.0,
    category: "rostilj",
    active: true,
  },
  {
    id: "ros-6",
    name: "Janjeći kotleti",
    description: "Janjetina s roštilja, ružmarin",
    price: 18.0,
    category: "rostilj",
    active: true,
  },

  // 3. PREDJELA
  {
    id: "prd-1",
    name: "Pršut i sir",
    description: "Domaći pršut, kravlji i ovčji sir, masline",
    price: 10.0,
    category: "predjela",
    active: true,
  },
  {
    id: "prd-2",
    name: "Punjene gljive",
    description: "Gljive punjene sirom i pršutom, zapečene",
    price: 8.0,
    category: "predjela",
    active: true,
  },
  {
    id: "prd-3",
    name: "Domaća pancetta",
    description: "Hrskava pancetta s medom i orasima",
    price: 8.0,
    category: "predjela",
    active: true,
  },
  {
    id: "prd-4",
    name: "Bruschetta",
    description: "Na tri načina: rajčica, pršut, gljive",
    price: 7.0,
    category: "predjela",
    active: true,
  },
  {
    id: "prd-5",
    name: "Domaća juha dana",
    description: "Svježa juha po izboru kuhara",
    price: 6.0,
    category: "predjela",
    active: true,
  },

  // 4. DESERTI
  {
    id: "des-1",
    name: "Palačinke s Nutellom",
    description: "S lješnjacima i šlagom",
    price: 5.0,
    category: "deserti",
    active: true,
  },
  {
    id: "des-2",
    name: "Tiramisu",
    description: "Domaći, po tradicionalnom receptu",
    price: 5.5,
    category: "deserti",
    active: true,
  },
  {
    id: "des-3",
    name: "Rožata",
    description: "Dalmatinski karamel puding",
    price: 5.0,
    category: "deserti",
    active: true,
  },
  {
    id: "des-4",
    name: "Sladoled (3 kuglice)",
    description: "Izbor okusa",
    price: 4.5,
    category: "deserti",
    active: true,
  },
  {
    id: "des-5",
    name: "Krostata s marmeladom",
    description: "Domaći kolač s voćnim nadjevom",
    price: 5.0,
    category: "deserti",
    active: true,
  },

  // 5. SALATE
  {
    id: "sal-1",
    name: "Zelena salata",
    description: "Miješana zelena salata, maslinovo ulje",
    price: 4.5,
    category: "salate",
    active: true,
  },
  {
    id: "sal-2",
    name: "Salata Mandrać",
    description: "Rikola, cherry rajčice, parmezan, orasi",
    price: 7.0,
    category: "salate",
    active: true,
  },
  {
    id: "sal-3",
    name: "Grčka salata",
    description: "Feta sir, masline, paprika, krastavac",
    price: 8.0,
    category: "salate",
    active: true,
  },
  {
    id: "sal-4",
    name: "Salata s tunom",
    description: "Tuna, jaje, rajčica, luk, masline",
    price: 9.0,
    category: "salate",
    active: true,
  },
  {
    id: "sal-5",
    name: "Caprese",
    description: "Mozzarella, rajčica, bosiljak, maslinovo ulje",
    price: 8.5,
    category: "salate",
    active: true,
  },
];
