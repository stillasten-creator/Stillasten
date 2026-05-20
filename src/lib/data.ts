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
      "Klassiska och tydliga modeller med plats för namn, datum, symboler och personlig text."
  },
  {
    slug: "liggande",
    title: "Liggande gravstenar",
    intro:
      "Låga modeller för urngrav, mindre gravplatser eller platser där en diskret gravvård passar bäst."
  },
  {
    slug: "urngrav",
    title: "Gravstenar för urngrav",
    intro:
      "Omsorgsfullt proportionerade stenar för mindre ytor, med tydlig text och enkel skötsel."
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
      "Parva passar familjer som vill ha en varm, klassisk gravsten utan att uttrycket blir tungt. Formen ger bra plats för namn, datum och ett mindre ornament.",
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
    intro: "En stillsam liggande modell för urngrav och mindre gravplatser.",
    description:
      "Alva är gjord för när uttrycket ska vara enkelt och nära marken. Den fungerar fint tillsammans med lykta, liten vas eller diskret ornament.",
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
      "Linnea passar när gravstenen ska kännas personlig men fortfarande tidlös. Den oregelbundna kanten ger stenen ett mjukare uttryck.",
    image: "/images/model-linnea.svg",
    alt: "Illustration av gravstenen Linnea med mjuk sidokant",
    priceFrom: "fr. 21 400 kr",
    dimensions: "78 x 58 x 12 cm",
    materials: ["morkgrå-granit", "röd-granit", "svart-granit"],
    badges: ["Modern", "Personlig"],
    included: [
      "Gravyr av namn och datum",
      "Gravyrskiss för godkännande",
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
      "Ett klassiskt och tydligt material där gravyr och ljusa detaljer framträder skarpt.",
    maintenance:
      "Lätt att hålla ren. Polerad yta bör tvättas varsamt med milda medel.",
    priceLevel: "Mellan till hög",
    image: "/images/material-dark.svg"
  },
  {
    slug: "morkgrå-granit",
    name: "Mörkgrå granit",
    tone: "Mjuk, nordisk grå ton",
    description:
      "Ett lugnt material som ger gravstenen en modern och naturlig karaktär.",
    maintenance:
      "Tål svenska förhållanden väl och fungerar både polerad och råhuggen.",
    priceLevel: "Mellan",
    image: "/images/material-grey.svg"
  },
  {
    slug: "ljusgrå-granit",
    name: "Ljusgrå granit",
    tone: "Ljus sten med tydlig struktur",
    description:
      "Passar när uttrycket ska vara varmt, mjukt och mindre kontraststarkt.",
    maintenance:
      "Kan kräva något oftare rengöring eftersom pollen och jord syns tydligare.",
    priceLevel: "Låg till mellan",
    image: "/images/material-light.svg"
  }
];

export const guides: Guide[] = [
  {
    slug: "hur-valjer-man-gravsten",
    title: "Hur väljer man gravsten?",
    excerpt:
      "En lugn genomgång av form, storlek, stensort, text och tillval innan du begär offert.",
    category: "Val och planering",
    readingTime: "6 min",
    body: [
      "Börja med gravplatsens förutsättningar. Kyrkogårdens regler, gravens storlek och tidigare gravvårdar styr ofta mer än man tror.",
      "Välj sedan form och material. En stående sten ger mer textyta, medan en liggande sten ofta passar mindre gravplatser och urngravar.",
      "Texten är det viktigaste. Namn, datum och eventuell minnestext bör planeras tidigt så att modellen får rätt proportioner."
    ]
  },
  {
    slug: "gravratt-och-regler",
    title: "Gravrätt och regler",
    excerpt:
      "Vad gravrätt betyder, vem som får fatta beslut och varför kyrkogårdsförvaltningen granskar gravstenen.",
    category: "Regler",
    readingTime: "7 min",
    body: [
      "Gravrättsinnehavaren ansvarar normalt för beslut om gravplatsen. Innan en ny gravsten monteras ska den oftast godkännas av kyrkogårdsförvaltningen.",
      "Reglerna kan skilja sig mellan kyrkogårdar. Höjd, bredd, fundament, material och lösa föremål kan omfattas av lokala bestämmelser.",
      "Stillasten hjälper till att tolka förutsättningarna när du skickar en offertförfrågan och anger kyrkogård eller ort."
    ]
  },
  {
    slug: "pris-och-vad-som-ingar",
    title: "Priser och vad som ingar",
    excerpt:
      "Så fungerar totalpris, tillval och offert när gravstenen inte beställs direkt online.",
    category: "Pris",
    readingTime: "5 min",
    body: [
      "Ett tydligt pris bör visa vad som ingår: sten, grundgravyr, enkel skiss och normal hantering. Tillval som extra ornament, lykta eller omfattande gravyr kan påverka priset.",
      "Hos Stillasten är offertförfrågan kostnadsfri och utan förpliktelse. Du får ett personligt prisförslag innan något formellt godkänns.",
      "Det slutliga priset beror på modell, stensort, textmängd, tillval och lokala krav."
    ]
  },
  {
    slug: "montering-av-gravsten",
    title: "När och hur monteras gravstenen?",
    excerpt:
      "Om ansökan, godkännande, produktion och normal väntetid innan stenen är på plats.",
    category: "Process",
    readingTime: "5 min",
    body: [
      "Montering sker normalt efter att skiss, pris och kyrkogårdsförvaltningens krav är godkända.",
      "Väder, tjäle och lokala handläggningstider kan påverka tidsplanen. Därför är det bra att vara ute i god tid.",
      "Stillasten återkommer med tydlig tidsplan i samband med offerten."
    ]
  },
  {
    slug: "skotsel-och-rengoring",
    title: "Skötsel och rengöring",
    excerpt:
      "Materialberoende råd för att hålla gravstenen ren utan att skada yta eller gravyr.",
    category: "Skötsel",
    readingTime: "4 min",
    body: [
      "Använd mjuk borste, vatten och milda rengöringsmedel. Undvik starka kemikalier och högtryckstvätt nära gravyr och fogar.",
      "Polerade ytor visar smuts och fingeravtryck på ett annat sätt än matta ytor, men är ofta enkla att torka av.",
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
      "Målet är att återkomma inom 1-2 arbetsdagar när formuläret är skickat."
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
