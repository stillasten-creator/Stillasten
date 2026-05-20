import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { ProductCard } from "@/components/site/product-card";
import { SectionHeading } from "@/components/site/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { categories, stoneModels } from "@/lib/data";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Gravstenar",
  description:
    "Se Stillastens gravstensmodeller, jämför form, prisram och stensort, och begär en kostnadsfri offert."
};

export default function GravstenarPage() {
  return (
    <>
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs items={[{ href: "/gravstenar", label: "Gravstenar" }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h1 className="page-title">Gravstenar med tydlig prisram.</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                Bläddra bland modellerna och använd dem som startpunkt för en
                personlig offert. Du behöver inte välja allt själv innan du
                skickar en förfrågan.
              </p>
            </div>
            <div className="rounded-md bg-secondary p-5 text-sm leading-6">
              Alla priser är vägledande startpunkter. Den slutliga offerten
              beror på stensort, text, ornament, montering och lokala regler.
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              href={`/gravstenar/${category.slug}`}
              key={category.slug}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <SectionHeading
            title="Modeller"
            text="Välj en form som startpunkt. Pris, text, material och tillval stäms av i den personliga offerten."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stoneModels.map((model, index) => (
              <ProductCard key={model.slug} model={model} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
