import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Hur Stillasten behandlar personuppgifter i offert- och kontaktflöden."
};

export default function PrivacyPage() {
  return (
    <section className="section-y">
      <div className="container max-w-3xl">
        <Breadcrumbs
          items={[{ href: "/integritetspolicy", label: "Integritetspolicy" }]}
        />
        <h1 className="mt-8 page-title">Integritetspolicy.</h1>
        <div className="mt-8 grid gap-6 leading-8 text-muted-foreground">
          <p>
            Denna sida är en starttext och ska juridiskt granskas före
            lansering. Stillasten behandlar uppgifter som skickas via offert-
            och kontaktformulär för att kunna återkomma med rådgivning,
            gravyrskiss och offert.
          </p>
          <p>
            Uppgifter kan omfatta namn, e-post, telefonnummer, kyrkogård/ort,
            meddelande och eventuell bifogad referensbild. Uppgifterna delas
            inte med tredje part utöver de tjänster som behövs för drift,
            lagring, e-post och analys.
          </p>
          <p>
            För frågor om personuppgifter kontaktar du Stillasten via{" "}
            <a className="font-semibold text-foreground underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
