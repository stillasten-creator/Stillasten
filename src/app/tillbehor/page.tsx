import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Tillbehör",
  description:
    "Tillbehör till gravstenar: lykta, vas, sockel och andra val som specificeras i personlig offert."
};

const accessories = [
  {
    title: "Gravlykta",
    text: "Kan ge en varm och praktisk plats för ljus, men lokala regler varierar."
  },
  {
    title: "Vas",
    text: "Ett diskret tillval för blommor, ofta beroende av stenens form och placering."
  },
  {
    title: "Sockel och fundament",
    text: "Anpassas efter gravsten, markförhållanden och kyrkogårdens krav."
  }
];

export default function AccessoriesPage() {
  return (
    <>
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs items={[{ href: "/tillbehor", label: "Tillbehör" }]} />
          <h1 className="mt-8 page-title">Tillbehör till gravstenen.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Tillbehör används för att göra gravplatsen mer personlig och
            praktisk. I första versionen hanteras de som val i offertdialogen
            och modelleras i Sanity.
          </p>
          <Link className={cn(buttonVariants({ className: "mt-8", size: "lg" }))} href="/offert">
            Begär kostnadsfri offert
          </Link>
        </div>
      </section>
      <section className="section-y">
        <div className="container grid gap-5 md:grid-cols-3">
          {accessories.map((item) => (
            <article className="rounded-md border bg-card p-6" key={item.title}>
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
