export const siteConfig = {
  name: "Stillasten",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@stillasten.se",
  responseTime: process.env.NEXT_PUBLIC_RESPONSE_TIME ?? "1-2 arbetsdagar",
  organizationNumber: process.env.NEXT_PUBLIC_ORGANIZATION_NUMBER ?? "",
  description:
    "Stillasten hjälper dig att välja gravsten i lugn och ro. Se modeller, stensorter och tillval, och begär sedan en kostnadsfri offert utan förpliktelse."
};

export const mainNav = [
  { href: "/gravstenar", label: "Gravstenar" },
  { href: "/tillbehor", label: "Tillbehör" },
  { href: "/sa-fungerar-det", label: "Så fungerar det" },
  { href: "/guider", label: "Guider" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakta-oss", label: "Kontakt" }
];

export const quoteCta = {
  href: "/offert",
  label: "Begär kostnadsfri offert"
};
