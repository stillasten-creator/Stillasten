import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Så fungerar det",
  description:
    "Från offertförfrågan till gravyrskiss, dialog och formellt godkännande. Stillasten tar inte emot onlinebeställningar."
};

export default function ProcessPage() {
  return (
    <>
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs items={[{ href: "/sa-fungerar-det", label: "Så fungerar det" }]} />
          <h1 className="mt-8 page-title">Ett tryggt offertflöde, inte en checkout.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Du kan inspireras, jämföra och beskriva dina önskemål online. Själva
            köpet sker först efter personlig kontakt, gravyrskiss, prisförslag
            och formellt godkännande.
          </p>
          <Link className={cn(buttonVariants({ className: "mt-8", size: "lg" }))} href="/offert">
            Begär kostnadsfri offert
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <article
                className="grid gap-4 rounded-md border bg-card p-5 md:grid-cols-[6rem_1fr] md:p-7"
                key={step.title}
              >
                <span className="font-serif text-4xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif text-3xl">{step.title}</h2>
                  <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
