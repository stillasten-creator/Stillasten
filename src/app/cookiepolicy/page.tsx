import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/breadcrumbs";

export const metadata: Metadata = {
  title: "Cookiepolicy",
  description: "Information om kakor, samtycke, Cookieyes, GTM och GA4 på Stillasten."
};

export default function CookiePolicyPage() {
  return (
    <section className="section-y">
      <div className="container max-w-3xl">
        <Breadcrumbs items={[{ href: "/cookiepolicy", label: "Cookiepolicy" }]} />
        <h1 className="mt-8 page-title">Cookiepolicy.</h1>
        <div className="mt-8 grid gap-6 leading-8 text-muted-foreground">
          <p>
            Stillasten använder nödvändiga kakor för att sajten och formulären
            ska fungera. Analys- och marknadsföringskakor aktiveras bara efter
            samtycke.
          </p>
          <p>
            Du kan när som helst ändra eller återkalla ditt samtycke via
            cookieinställningarna på sajten. Frågor om kakor och spårning kan
            skickas till Stillasten via kontaktuppgifterna i sidfoten.
          </p>
        </div>
      </div>
    </section>
  );
}
