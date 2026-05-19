import type { Metadata } from "next";
import { Suspense } from "react";

import { QuoteForm } from "@/components/forms/quote-form";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Begär kostnadsfri offert",
  description:
    "Beskriv din gravsten och skicka en förfrågan. Stillasten återkommer med personlig offert och gravyrskiss utan förpliktelse."
};

export default function OffertPage() {
  return (
    <section className="section-y">
      <div className="container">
        <Breadcrumbs items={[{ href: "/offert", label: "Offert" }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Kostnadsfritt och utan förpliktelse
            </p>
            <h1 className="mt-3 page-title">Begär offert på gravsten.</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Det här är inte en beställning. Du beskriver vad du vet, så
              återkommer Stillasten personligen med rådgivning, prisförslag och
              gravyrskiss.
            </p>
            <div className="mt-8 rounded-md border bg-card p-5">
              <h2 className="font-serif text-3xl">Efter att du skickat</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                <li>1. Vi går igenom modell, stensort och önskemål.</li>
                <li>2. Vi kontrollerar relevanta regler om du angett kyrkogård.</li>
                <li>3. Du får ett konkret prisförslag och en gravyrskiss.</li>
              </ul>
              <p className="mt-4 text-sm font-semibold">
                Normal svarstid: {siteConfig.responseTime}.
              </p>
            </div>
          </div>
          <Suspense fallback={<div className="rounded-md border bg-card p-8">Laddar formulär...</div>}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
