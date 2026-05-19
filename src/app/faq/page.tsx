import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBand } from "@/components/site/cta-band";
import { faqs } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Svar på vanliga frågor om offert, gravstenar, regler, kontakt och Stillastens arbetssätt."
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    })),
    url: `${siteConfig.url}/faq`
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <section className="section-y bg-card">
        <div className="container">
          <Breadcrumbs items={[{ href: "/faq", label: "FAQ" }]} />
          <h1 className="mt-8 page-title">Vanliga frågor.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Svar på de frågor som ofta kommer innan en offertförfrågan. För
            detaljer kring en specifik gravplats rekommenderar vi personlig
            kontakt.
          </p>
        </div>
      </section>
      <section className="section-y">
        <div className="container max-w-4xl">
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details className="rounded-md border bg-card p-5" key={faq.question}>
                <summary className="cursor-pointer text-lg font-semibold">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
