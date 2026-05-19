export type StoneCategory = {
  slug: string;
  title: string;
  intro: string;
};

export type StoneModel = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  intro: string;
  description: string;
  image: string;
  alt: string;
  priceFrom: string;
  dimensions: string;
  materials: string[];
  badges: string[];
  included: string[];
  recommendedFor: string[];
};

export type Material = {
  slug: string;
  name: string;
  tone: string;
  description: string;
  maintenance: string;
  priceLevel: string;
  image: string;
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  readingTime: string;
};

export const categories: StoneCategory[] = [
  {
    slug: "staende",
    title: "Stående gravstenar",
    intro:
      "Klassiska och tydliga modeller med plats for namn, datum, symboler och personlig text."
  },
  {
    slug: "liggande",
    title: "Liggande gravstenar",
    intro:
      "Laga modeller for urngrav, mindre gravplatser eller platser dar en diskret gravvard passar bast."
  },
  {
    slug: "urngrav",
    title: "Gravstenar for urngrav",
    intro:
      "Omsorgsfullt proportionerade stenar for mindre ytor, med tydlig text och enkel skotsel."
  }
];

export const stoneModels: StoneModel[] = [
  {
    slug: "parva",
    name: "Parva",
    category: "staende",
    categoryLabel: "Stående",
    intro: "En lågmäld stående sten med mjuk ovankant och tydlig textyta.",
    description:
      "Parva passar familjer som vill ha en varm, klassisk gravsten utan att uttrycket blir tungt. Formen ger bra plats for namn, datum och ett mindre ornament.",
    image: "/images/model-parva.svg",
    alt: "Illustration av gravstenen Parva i svart granit",
    priceFrom: "fr. 18 900 kr",
    dimensions: "70 x 55 x 12 cm",
    materials: ["svart-granit", "morkgrå-granit", "ljusgrå-granit"],
    badges: ["Populär", "Bra textyta"],
    included: [
      "Gravyr av namn och datum",
      "Enkel gravyrskiss innan godkännande",
      "Rådgivning kring kyrkogårdens regler"
    ],
    recommendedFor: ["Familjegrav", "Klassisk gravplats", "Tydlig inskription"]
  },
  {
    slug: "alva",
    name: "Alva",
    category: "liggande",
    categoryLabel: "Liggande",
    intro: "En stillsam liggande modell for urngrav och mindre gravplatser.",
    description:
      "Alva ar gjord for nar uttrycket ska vara enkelt och nara marken. Den fungerar fint tillsammans med lykta, liten vas eller diskret ornament.",
    image: "/images/model-alva.svg",
    alt: "Illustration av den liggande gravstenen Alva",
    priceFrom: "fr. 14 500 kr",
    dimensions: "55 x 40 x 10 cm",
    materials: ["svart-granit", "ljusgrå-granit"],
    badges: ["Urngrav", "Diskret"],
    included: [
      "Gravyr av namn och datum",
      "Rådgivning kring placering",
      "Förslag på tillval vid behov"
    ],
    recommendedFor: ["Urngrav", "Mindre gravplats", "Låg profil"]
  },
  {
    slug: "linnea",
    name: "Linnea",
    category: "staende",
    categoryLabel: "Stående",
    intro: "En modern sten med asymmetrisk siluett och varm, personlig känsla.",
    description:
      "Linnea passar nar gravstenen ska kannas personlig men fortfarande tidlos. Den oregelbundna kanten ger stenen ett mjukare uttryck.",
    image: "/images/model-linnea.svg",
    alt: "Illustration av gravstenen Linnea med mjuk sidokant",
    priceFrom: "fr. 21 400 kr",
    dimensions: "78 x 58 x 12 cm",
    materials: ["morkgrå-granit", "röd-granit", "svart-granit"],
    badges: ["Modern", "Personlig"],
    included: [
      "Gravyr av namn och datum",
      "Gravyrskiss for godkännande",
      "Hjälp med textplacering och ornament"
    ],
    recommendedFor: ["Personlig gravsten", "Modern form", "Ornament"]
  }
];

export const materials: Material[] = [
  {
    slug: "svart-granit",
    name: "Svart granit",
    tone: "Djup svart, polerad eller matt yta",
    description:
      "Ett klassiskt och tydligt material dar gravyr och ljusa detaljer framtrader skarpt.",
    maintenance:
      "Latt att halla ren. Polerad yta bor tvattas varsamt med milda medel.",
    priceLevel: "Mellan till hog",
    image: "/images/material-dark.svg"
  },
  {
    slug: "morkgrå-granit",
    name: "Morkgrå granit",
    tone: "Mjuk, nordisk grå ton",
    description:
      "Ett lugnt material som ger gravstenen en modern och naturlig karaktar.",
    maintenance:
      "Tål svenska forhallanden väl och fungerar både polerad och råhuggen.",
    priceLevel: "Mellan",
    image: "/images/material-grey.svg"
  },
  {
    slug: "ljusgrå-granit",
    name: "Ljusgrå granit",
    tone: "Ljus sten med tydlig struktur",
    description:
      "Passar nar uttrycket ska vara varmt, mjukt och mindre kontraststarkt.",
    maintenance:
      "Kan krava något oftare rengoring eftersom pollen och jord syns tydligare.",
    priceLevel: "Lag till mellan",
    image: "/images/material-light.svg"
  }
];

export const guides: Guide[] = [
  {
    slug: "hur-valjer-man-gravsten",
    title: "Hur väljer man gravsten?",
    excerpt:
      "En lugn genomgang av form, storlek, stensort, text och tillval innan du begar offert.",
    category: "Val och planering",
    readingTime: "6 min",
    body: [
      "Börja med gravplatsens forutsattningar. Kyrkogårdens regler, gravens storlek och tidigare gravvardar styr ofta mer an man tror.",
      "Valj sedan form och material. En stående sten ger mer textyta, medan en liggande sten ofta passar mindre gravplatser och urngravar.",
      "Texten ar det viktigaste. Namn, datum och eventuell minnestext bor planeras tidigt sa att modellen far rätt proportioner."
    ]
  },
  {
    slug: "gravratt-och-regler",
    title: "Gravrätt och regler",
    excerpt:
      "Vad gravratt betyder, vem som far fatta beslut och varfor kyrkogardsforvaltningen granskar gravstenen.",
    category: "Regler",
    readingTime: "7 min",
    body: [
      "Gravrättsinnehavaren ansvarar normalt for beslut om gravplatsen. Innan en ny gravsten monteras ska den oftast godkannas av kyrkogardsforvaltningen.",
      "Reglerna kan skilja sig mellan kyrkogardar. Hojd, bredd, fundament, material och losa foremal kan omfattas av lokala bestammelser.",
      "Stillasten hjalper till att tolka forutsattningarna nar du skickar en offertforfragan och anger kyrkogard eller ort."
    ]
  },
  {
    slug: "pris-och-vad-som-ingar",
    title: "Priser och vad som ingar",
    excerpt:
      "Sa fungerar totalpris, tillval och offert nar gravstenen inte bestalls direkt online.",
    category: "Pris",
    readingTime: "5 min",
    body: [
      "Ett tydligt pris bor visa vad som ingar: sten, grundgravyr, enkel skiss och normal hantering. Tillval som extra ornament, lykta eller omfattande gravyr kan paverka priset.",
      "Hos Stillasten ar offertforfragan kostnadsfri och utan forpliktelse. Du far ett personligt prisforslag innan något formellt godkanns.",
      "Det slutliga priset beror pa modell, stensort, textmangd, tillval och lokala krav."
    ]
  },
  {
    slug: "montering-av-gravsten",
    title: "När och hur monteras gravstenen?",
    excerpt:
      "Om ansokan, godkannande, produktion och normal vantetid innan stenen ar pa plats.",
    category: "Process",
    readingTime: "5 min",
    body: [
      "Montering sker normalt efter att skiss, pris och kyrkogardsforvaltningens krav ar godkanda.",
      "Vader, tjale och lokala handlaggningstider kan paverka tidsplanen. Darfor ar det bra att vara ute i god tid.",
      "Stillasten aterkommer med tydlig tidsplan i samband med offerten."
    ]
  },
  {
    slug: "skotsel-och-rengoring",
    title: "Skötsel och rengöring",
    excerpt:
      "Materialberoende rad for att halla gravstenen ren utan att skada yta eller gravyr.",
    category: "Skotsel",
    readingTime: "4 min",
    body: [
      "Anvand mjuk borste, vatten och milda rengoringsmedel. Undvik starka kemikalier och hogtryckstvatt nara gravyr och fogar.",
      "Polerade ytor visar smuts och fingeravtryck pa ett annat satt an matta ytor, men ar ofta enkla att torka av.",
      "Kontrollera alltid lokala regler innan du placerar lyktor, krukor eller vinterdekorationer."
    ]
  }
];

export const faqs = [
  {
    question: "Kan jag beställa en gravsten direkt på sajten?",
    answer:
      "Nej. Stillasten tar inte emot onlinebeställningar. Du skickar en kostnadsfri offertförfrågan och får personlig återkoppling med prisförslag och gravyrskiss."
  },
  {
    question: "Är offertförfrågan bindande?",
    answer:
      "Nej. Offertförfrågan är kostnadsfri och utan förpliktelse. Ett köp sker först efter personlig dialog och formellt godkännande."
  },
  {
    question: "Måste jag veta exakt modell innan jag skickar formuläret?",
    answer:
      "Nej. Du kan välja 'Vet ej / behöver rådgivning' och beskriva dina önskemål fritt."
  },
  {
    question: "Kan jag bifoga en bild på en befintlig gravsten?",
    answer:
      "Ja. Offertformuläret har valfri bilduppladdning för referensbild, skiss eller inspiration."
  },
  {
    question: "Hur snabbt återkommer Stillasten?",
    answer:
      "Målet är att återkomma inom 1-2 arbetsdagar. Exakt svarstid kan justeras i sajtens miljövariabler."
  },
  {
    question: "Hjälper ni till med kyrkogårdens regler?",
    answer:
      "Ja. Ange kyrkogård eller ort i formuläret så kan Stillasten ta hänsyn till lokala bestämmelser i rådgivningen."
  }
];

export const processSteps = [
  {
    title: "Besök och inspiration",
    text: "Bläddra bland modeller, stensorter och guider i lugn och ro."
  },
  {
    title: "Offertförfrågan",
    text: "Skicka ett kort formulär. Det är kostnadsfritt och inte en beställning."
  },
  {
    title: "Personlig återkoppling",
    text: "Stillasten kontaktar dig via telefon eller e-post och reder ut detaljerna."
  },
  {
    title: "Skiss och prisförslag",
    text: "Du får en gravyrskiss och ett tydligt prisförslag med vad som ingår."
  },
  {
    title: "Dialog och justering",
    text: "Du kan be om ändringar eller ställa frågor innan något godkänns."
  },
  {
    title: "Formellt godkännande",
    text: "Köpet sker utanför sajten efter godkänd offert, skiss och praktiska villkor."
  }
];
