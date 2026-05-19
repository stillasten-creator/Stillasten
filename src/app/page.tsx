import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { ProductCard } from "@/components/site/product-card";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/cn";
import { faqs, materials, processSteps, stoneModels } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stillasten",
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <section className="relative isolate overflow-hidden bg-foreground text-white">
        <Image
          alt="Stillasten gravsten i stillsam kyrkogårdsmiljö"
          className="absolute inset-0 -z-10 object-cover opacity-70"
          fill
          priority
          sizes="100vw"
          src="/images/stillasten-hero.svg"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/86 via-foreground/58 to-foreground/18" />
        <div className="container grid min-h-[calc(100svh-9rem)] max-w-none items-end py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur">
              Kostnadsfri offert, personlig rådgivning och ingen onlinebeställning
            </p>
            <h1 className="hero-title">
              Gravstenar valda i lugn och ro.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
              Se modeller, stensorter och vad som ingår. Skicka sedan en
              förfrågan så återkommer Stillasten med skiss, råd och tydlig
              offert.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className={cn(buttonVariants({ size: "lg" }))} href="/offert">
                Begär kostnadsfri offert
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/60 bg-white/10 text-white hover:bg-white/20"
                )}
                href="/sa-fungerar-det"
              >
                Så fungerar det
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="container grid gap-4 py-6 md:grid-cols-3">
          {[
            "Tydliga prisramar innan dialog",
            "Gravyrskiss innan formellt godkännande",
            `Återkoppling inom ${siteConfig.responseTime}`
          ].map((text) => (
            <div className="flex items-center gap-3 text-sm font-semibold" key={text}>
              <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-primary" />
              {text}
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Utvalda modeller"
              text="Startpunkter för offertdialogen. Alla detaljer justeras personligt innan något godkänns."
              title="Gravstenar med tydlig form och varm närvaro."
            />
            <Link className={cn(buttonVariants({ variant: "outline" }))} href="/gravstenar">
              Se alla modeller
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stoneModels.map((model) => (
              <ProductCard key={model.slug} model={model} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef2ef] section-y">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            text="Flödet är byggt för trygg dialog, inte snabb checkout."
            title="Från första tanke till färdig offert."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {processSteps.slice(0, 6).map((step, index) => (
              <article className="rounded-md border bg-card p-5" key={step.title}>
                <span className="text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Stensorter"
            text="Materialvalet påverkar uttryck, kontrast, skötsel och prisnivå."
            title="Nordiska toner, tydliga ytor och hållbara material."
          />
          <div className="grid gap-4">
            {materials.map((material) => (
              <Link
                className="grid gap-4 rounded-md border bg-card p-4 transition-colors hover:bg-muted md:grid-cols-[7rem_1fr_auto] md:items-center"
                href={`/stensorter/${material.slug}`}
                key={material.slug}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <Image
                    alt={material.name}
                    className="object-cover"
                    fill
                    sizes="7rem"
                    src={material.image}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl">{material.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {material.description}
                  </p>
                </div>
                <ArrowRight aria-hidden="true" className="hidden h-5 w-5 md:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-card section-y">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Vanliga frågor"
              title="Svaren som brukar behövas innan en offert."
            />
            <div className="mt-8 grid gap-4">
              {faqs.slice(0, 3).map((faq) => (
                <details className="rounded-md border p-5" key={faq.question}>
                  <summary className="cursor-pointer font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <aside className="rounded-md bg-primary p-6 text-primary-foreground">
            <Leaf aria-hidden="true" className="h-8 w-8" />
            <h2 className="mt-5 font-serif text-3xl">
              Vill du få hjälp att välja?
            </h2>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/82">
              Du behöver inte veta modell, stensort eller exakt text. Skicka
              det du vet, så hjälper Stillasten dig vidare.
            </p>
            <div className="mt-6 grid gap-3">
              <Link
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "bg-white text-primary hover:bg-white/90"
                )}
                href="/offert"
              >
                Begär kostnadsfri offert
              </Link>
              <a
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-white/50 bg-transparent text-white hover:bg-white/10"
                )}
                href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Ring oss
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
