# Stillasten - genomforandeplan

## Produktmal

Stillasten ska vara en lugn, modern och SEO-stark informationssajt for gravstenar. Sajten ska inspirera, forklara och specificera, men aldrig fungera som e-handel. Den enda primara konverteringen ar en kostnadsfri och icke-bindande offertforfragan.

## Fas 1 - Grund och informationsarkitektur

- Skapa Next.js 15-projekt med App Router, TypeScript och Tailwind.
- Satta global designgrund: lugn typografi, stor whitespace, mjuka men tydliga CTA:er och tillgangliga fokuslagen.
- Implementera sitemap enligt rapporten:
  - `/`
  - `/gravstenar`
  - `/gravstenar/[slug]`
  - `/stensorter/[slug]`
  - `/sa-fungerar-det`
  - `/guider`
  - `/guider/[slug]`
  - `/faq`
  - `/om-stillasten`
  - `/kontakta-oss`
  - `/offert`
  - `/integritetspolicy`
  - `/cookiepolicy`
- Satta konsekvent slug-standard: ASCII, gemener och bindestreck.

## Fas 2 - Data och CMS

- Modellera Sanity-innehall:
  - gravstensmodell
  - stensort
  - tillbehor/ornament
  - guide
  - FAQ
  - site settings
- Starta med lokal seed-data sa frontend kan byggas innan CMS fylls.
- Byt gradvis ut lokal data mot GROQ-fragor nar Sanity-projektet ar skapat.

## Fas 3 - Offert och lead-hantering

- Bygga offertformularet med React Hook Form och Zod.
- Krava namn samt minst e-post eller telefon.
- Tydlig samtyckestext och länk till integritetspolicy.
- Lata besokaren bifoga referensbild.
- Spara lead i Supabase `quote_leads`.
- Ladda upp eventuell fil till privat Supabase Storage-bucket.
- Skicka notis till Stillasten via Resend.
- Separat callback-formular for snabb ateruppringning.

## Fas 4 - SEO, metadata och schema

- Satta sidmetadata for alla huvudmallar.
- Generera `sitemap.xml` och `robots.txt`.
- Lägga in `BreadcrumbList` pa relevanta sidor.
- Lägga in `Organization`, `Product`, `Article` och `FAQPage` dar det passar.
- Forbereda bild-altar och filnamnsstandard.

## Fas 5 - Analytics, CMP och GDPR

- Cookieyes laddas via `NEXT_PUBLIC_COOKIEYES_ID`.
- Vercel Analytics laddas om aktiverat.
- GTM/GA4 laddas via miljo-ID och ska kopplas till samtycke i Cookieyes.
- Key events:
  - `start_quote`
  - `submit_quote`
  - `click_phone`
  - `submit_callback`
  - `view_model`

## Fas 6 - Innehall och visuella assets

- Ersatta placeholders med verkliga bilder:
  - monterade gravstenar i naturligt ljus
  - frilagda produktbilder
  - stensortsdetaljer
  - ornament och inskriptioner
- Skriva lanseringsinnehall:
  - startsida
  - katalogintro
  - processsida
  - FAQ
  - minst fem guider fran rapporten

## Acceptanskriterier for MVP

- Besokaren forstar inom forsta skarmen att detta ar offert, inte onlinekop.
- Offertformularet fungerar pa mobil och desktop.
- Alla sidor har korrekt primar CTA.
- Ingen text anvander "kop", "varukorg" eller "checkout" i konverteringsflodet.
- Formularet sparar lead, laddar upp fil och skickar e-postnotis nar miljo-nycklar finns.
- Sidorna ar indexerbara, snabba och har grundlaggande strukturerad data.
