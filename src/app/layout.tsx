import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AnalyticsScripts } from "@/components/integrations/analytics";
import { CookieyesScript } from "@/components/integrations/cookieyes";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { MobileQuoteBar } from "@/components/site/mobile-quote-bar";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Stillasten | Gravstenar med kostnadsfri offert",
    template: "%s | Stillasten"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Stillasten",
    description: siteConfig.description,
    siteName: "Stillasten",
    locale: "sv_SE",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="min-h-screen pb-24 antialiased lg:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileQuoteBar />
        <CookieyesScript />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
