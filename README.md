# Stillasten

Stillasten ar en offertdriven informationssajt for gravstenar byggd med Next.js 15, App Router, Tailwind CSS, shadcn/ui-principer, Sanity, Supabase och Resend.

Sajten ska inte ta emot onlinebestallningar. Alla viktiga floden leder i stallet till en kostnadsfri och icke-bindande offertforfragan.

## Snabbstart

```bash
npm install
npm run dev
```

Kopiera `.env.example` till `.env.local` och fyll i nycklar nar Sanity, Supabase, Resend, Cookieyes, GTM och GA4 ar skapade.

## Viktiga mappar

- `src/app` - App Router-sidor och API-rutter.
- `src/components` - UI, formulär och sajtkomponenter.
- `src/lib` - data, validering och integrationer.
- `src/sanity` - Sanity-scheman.
- `supabase/migrations` - databasstruktur for offertleads.
- `docs` - genomforandeplan och tekniska beslut.

## Lanseringsprinciper

- Primar CTA: `Begär kostnadsfri offert`.
- Forbjudna kopord: bestall, kop, varukorg, checkout.
- Mobilen behandlas som primar plattform.
- Bilderna i denna starter ar placeholders och ska ersattas med verkliga bilder pa stenar, material och detaljer fore lansering.
