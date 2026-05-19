import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import { CallbackForm } from "@/components/forms/callback-form";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakta oss",
  description:
    "Kontakta Stillasten via telefon, e-post eller begär återuppringning om gravsten, offert och rådgivning."
};

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container">
        <Breadcrumbs items={[{ href: "/kontakta-oss", label: "Kontakt" }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h1 className="page-title">Kontakt och rådgivning.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              Hör av dig om du vill prata igenom modell, stensort, regler eller
              offert. Kontaktvägar och eventuell fysisk adress uppdateras innan
              lansering.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
              >
                <Phone aria-hidden="true" className="h-5 w-5" />
                {siteConfig.phone}
              </a>
              <a
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                href={`mailto:${siteConfig.email}`}
              >
                <Mail aria-hidden="true" className="h-5 w-5" />
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-8 rounded-md bg-secondary p-5 text-sm leading-6">
              Vi återkommer vanligtvis inom {siteConfig.responseTime}. För
              offert rekommenderar vi formuläret på offert-sidan eftersom det
              samlar modell, stensort och kyrkogård direkt.
            </div>
          </div>
          <div>
            <h2 className="mb-4 font-serif text-3xl">Bli uppringd</h2>
            <CallbackForm />
          </div>
        </div>
      </div>
    </section>
  );
}
