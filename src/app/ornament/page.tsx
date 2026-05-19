import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Ornament",
  description:
    "Ornament och symboler till gravstenar. Se exempel och begär personlig offert från Stillasten."
};

const ornaments = [
  "Kors",
  "Blomma",
  "Fågel",
  "Hjärta",
  "Naturmotiv",
  "Egen symbol"
];

export default function OrnamentPage() {
  return (
    <>
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs items={[{ href: "/ornament", label: "Ornament" }]} />
          <h1 className="mt-8 page-title">Ornament och symboler.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Ornament ska stödja minnet utan att ta över. Exakt placering,
            storlek och teknik bestäms i gravyrskissen efter offertförfrågan.
          </p>
          <Link className={cn(buttonVariants({ className: "mt-8", size: "lg" }))} href="/offert">
            Begär kostnadsfri offert
          </Link>
        </div>
      </section>
      <section className="section-y">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {ornaments.map((ornament) => (
              <div className="rounded-md border bg-card p-6" key={ornament}>
                <h2 className="font-serif text-3xl">{ornament}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Läggs som offertval och kompletteras med verkliga bildexempel
                  i CMS.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
