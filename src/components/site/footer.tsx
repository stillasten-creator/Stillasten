import Link from "next/link";

import { mainNav, quoteCta, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-[#eef2ef]">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl">Stillasten</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Gravstenar med tydliga prisramar, personlig rådgivning och
            kostnadsfri offert. Ingen onlinebeställning.
          </p>
          <p className="mt-4 text-sm font-semibold">
            Vi återkommer vanligtvis inom {siteConfig.responseTime}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Sidor
          </p>
          <nav className="mt-4 grid gap-3 text-sm">
            {mainNav.map((item) => (
              <Link className="hover:underline" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="font-semibold hover:underline" href={quoteCta.href}>
              {quoteCta.label}
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Kontakt
          </p>
          <div className="mt-4 grid gap-3 text-sm">
            <a className="hover:underline" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
              {siteConfig.phone}
            </a>
            <a className="hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <Link className="hover:underline" href="/integritetspolicy">
              Integritetspolicy
            </Link>
            <Link className="hover:underline" href="/cookiepolicy">
              Cookiepolicy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/10 py-4">
        <div className="container text-xs text-muted-foreground">
          © {new Date().getFullYear()} Stillasten. Organisationsnummer läggs in
          före lansering.
        </div>
      </div>
    </footer>
  );
}
