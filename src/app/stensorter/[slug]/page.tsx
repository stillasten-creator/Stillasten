import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { ProductCard } from "@/components/site/product-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { materials, stoneModels } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return materials.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = materials.find((item) => item.slug === slug);

  if (!material) {
    return {};
  }

  return {
    title: `${material.name} gravsten`,
    description: `${material.description} Se passande modeller och begär kostnadsfri offert.`
  };
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = materials.find((item) => item.slug === slug);

  if (!material) {
    notFound();
  }

  const relatedModels = stoneModels.filter((model) =>
    model.materials.includes(material.slug)
  );

  return (
    <>
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs
            items={[
              { href: "/gravstenar", label: "Gravstenar" },
              { href: `/stensorter/${material.slug}`, label: material.name }
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Stensort
              </p>
              <h1 className="mt-3 page-title">{material.name}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {material.description}
              </p>
              <Link className={cn(buttonVariants({ className: "mt-8" }))} href="/offert">
                Begär kostnadsfri offert
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border bg-muted">
              <Image
                alt={material.name}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                src={material.image}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-y">
        <div className="container grid gap-6 md:grid-cols-3">
          <article className="rounded-md border bg-card p-6">
            <h2 className="font-serif text-3xl">Ton</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {material.tone}
            </p>
          </article>
          <article className="rounded-md border bg-card p-6">
            <h2 className="font-serif text-3xl">Skötsel</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {material.maintenance}
            </p>
          </article>
          <article className="rounded-md border bg-card p-6">
            <h2 className="font-serif text-3xl">Prisnivå</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {material.priceLevel}
            </p>
          </article>
        </div>
      </section>
      <section className="bg-[#eef2ef] section-y">
        <div className="container">
          <h2 className="font-serif text-4xl">Modeller som passar</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedModels.map((model) => (
              <ProductCard key={model.slug} model={model} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
