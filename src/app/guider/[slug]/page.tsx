import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { guides } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.excerpt
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    author: {
      "@type": "Organization",
      name: "Stillasten"
    },
    articleSection: guide.category,
    mainEntityOfPage: `${siteConfig.url}/guider/${guide.slug}`
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <article>
        <section className="section-y bg-card">
          <div className="container max-w-4xl">
            <Breadcrumbs
              items={[
                { href: "/guider", label: "Guider" },
                { href: `/guider/${guide.slug}`, label: guide.title }
              ]}
            />
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {guide.category} · {guide.readingTime}
            </p>
            <h1 className="mt-3 page-title">{guide.title}</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {guide.excerpt}
            </p>
          </div>
        </section>

        <section className="section-y">
          <div className="container max-w-3xl">
            <div className="grid gap-6 text-lg leading-8">
              {guide.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 rounded-md border bg-card p-6">
              <h2 className="font-serif text-3xl">Vill du ha personlig hjälp?</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Skicka en kostnadsfri förfrågan. Du behöver inte ha alla svaren
                klara innan du hör av dig.
              </p>
              <Link className={cn(buttonVariants({ className: "mt-5" }))} href="/offert">
                Begär kostnadsfri offert
              </Link>
            </div>
          </div>
        </section>
      </article>
      <CtaBand />
    </>
  );
}
