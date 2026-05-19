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
            Stillasten ska använda Cookieyes för samtycke. Nödvändiga kakor
            används för sajtens funktion. Analys- och marknadsföringskakor ska
            bara aktiveras efter samtycke.
          </p>
          <p>
            GTM, GA4 och annan spårning kopplas först när Cookieyes-ID och
            mät-ID:n finns i miljövariablerna. En färdig cookie-deklaration från
            Cookieyes bör bäddas in här före lansering.
          </p>
        </div>
      </div>
    </section>
  );
}
