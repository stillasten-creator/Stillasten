import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Om Stillasten",
  description:
    "Stillasten ska kännas lugnt, varmt, modernt och respektfullt. Läs om arbetssättet bakom offert, rådgivning och gravyrskiss."
};

export default function AboutPage() {
  return (
    <>
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs items={[{ href: "/om-stillasten", label: "Om Stillasten" }]} />
          <h1 className="mt-8 page-title">Ett lugnt sätt att välja gravsten.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Stillasten ska vara varmt, tydligt och respektfullt. Målet är att
            göra ett svårt val mer begripligt genom bra information, varsam
            rådgivning och tydliga offerter.
          </p>
          <Link className={cn(buttonVariants({ className: "mt-8", size: "lg" }))} href="/offert">
            Begär kostnadsfri offert
          </Link>
        </div>
      </section>
      <section className="section-y">
        <div className="container grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Ingen onlinebeställning",
              text: "Besökaren ska aldrig känna att de förväntas köpa direkt. Allt går via personlig dialog."
            },
            {
              title: "Tydliga prisramar",
              text: "Modellsidor visar startpris och vad som normalt ingår, så att offerten känns förutsägbar."
            },
            {
              title: "Hjälp med regler",
              text: "Kyrkogårdens lokala krav ska tas med i rådgivningen tidigt i processen."
            }
          ].map((item) => (
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
