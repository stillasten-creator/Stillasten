import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { guides } from "@/lib/data";

export const metadata: Metadata = {
  title: "Guider",
  description:
    "Guider om gravsten, gravrätt, priser, montering och skötsel från Stillasten."
};

export default function GuidesPage() {
  return (
    <>
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs items={[{ href: "/guider", label: "Guider" }]} />
          <h1 className="mt-8 page-title">Guider för ett lugnare val.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Här samlas svaren som ofta behövs innan en offert: regler,
            gravrätt, pris, material, montering och skötsel.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              className="rounded-md border bg-card p-6 transition-colors hover:bg-muted"
              href={`/guider/${guide.slug}`}
              key={guide.slug}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                {guide.category} · {guide.readingTime}
              </p>
              <h2 className="mt-3 font-serif text-3xl">{guide.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{guide.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                Läs guiden
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
