import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { ProductCard } from "@/components/site/product-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { categories, materials, stoneModels } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    ...categories.map((category) => ({ slug: category.slug })),
    ...stoneModels.map((model) => ({ slug: model.slug }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = stoneModels.find((item) => item.slug === slug);
  const category = categories.find((item) => item.slug === slug);

  if (model) {
    return {
      title: `${model.name} gravsten | Mått, stensorter och offert`,
      description: `${model.intro} Se mått, stensorter, vad som ingår och begär kostnadsfri offert.`
    };
  }

  if (category) {
    return {
      title: `${category.title}`,
      description: `${category.intro} Jämför modeller och begär kostnadsfri offert.`
    };
  }

  return {};
}

export default async function GravstenSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const model = stoneModels.find((item) => item.slug === slug);

  if (category) {
    const models = stoneModels.filter((item) => item.category === category.slug);

    return (
      <>
        <section className="section-y bg-card">
          <div className="container">
            <Breadcrumbs
              items={[
                { href: "/gravstenar", label: "Gravstenar" },
                { href: `/gravstenar/${category.slug}`, label: category.title }
              ]}
            />
            <h1 className="mt-8 page-title">{category.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              {category.intro}
            </p>
          </div>
        </section>
        <section className="section-y">
          <div className="container grid gap-6 md:grid-cols-3">
            {models.map((item, index) => (
              <ProductCard key={item.slug} model={item} priority={index === 0} />
            ))}
          </div>
        </section>
        <CtaBand />
      </>
    );
  }

  if (!model) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${model.name} gravsten`,
    description: model.description,
    brand: {
      "@type": "Brand",
      name: "Stillasten"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      price: model.priceFrom.replace(/\D/g, ""),
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/gravstenar/${model.slug}`
    }
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs
            items={[
              { href: "/gravstenar", label: "Gravstenar" },
              { href: `/gravstenar/${model.slug}`, label: model.name }
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {model.categoryLabel}
              </p>
              <h1 className="mt-3 page-title">{model.name} gravsten</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {model.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  className={cn(buttonVariants({ size: "lg" }))}
                  href={`/offert?modell=${model.slug}`}
                >
                  Begär kostnadsfri offert
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
                <Link
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                  href="/sa-fungerar-det"
                >
                  Läs om processen
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-md border bg-muted">
              <div className="relative aspect-[4/3]">
                <Image
                  alt={model.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src={model.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container grid gap-8 lg:grid-cols-3">
          <article className="rounded-md border bg-card p-6">
            <h2 className="font-serif text-3xl">Prisram</h2>
            <p className="mt-4 text-3xl font-semibold">{model.priceFrom}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Slutligt pris sätts efter text, material, tillval och lokala
              förutsättningar.
            </p>
          </article>
          <article className="rounded-md border bg-card p-6">
            <h2 className="font-serif text-3xl">Mått</h2>
            <p className="mt-4 text-lg font-semibold">{model.dimensions}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Mått kan behöva anpassas efter kyrkogårdens regler.
            </p>
          </article>
          <article className="rounded-md border bg-card p-6">
            <h2 className="font-serif text-3xl">Passar för</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {model.recommendedFor.map((item) => (
                <li className="flex gap-2" key={item}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-[#eef2ef] section-y">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl">Vad som ingår</h2>
            <ul className="mt-6 grid gap-3">
              {model.included.map((item) => (
                <li className="flex gap-3 rounded-md bg-card p-4" key={item}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-4xl">Stensorter</h2>
            <div className="mt-6 grid gap-3">
              {model.materials.map((slug) => {
                const material = materials.find((item) => item.slug === slug);

                if (!material) {
                  return null;
                }

                return (
                  <Link
                    className="rounded-md border bg-card p-4 hover:bg-muted"
                    href={`/stensorter/${material.slug}`}
                    key={material.slug}
                  >
                    <span className="font-semibold">{material.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {material.tone}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
