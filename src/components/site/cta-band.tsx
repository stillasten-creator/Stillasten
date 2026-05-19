import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function CtaBand() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
            Kostnadsfritt och utan förpliktelse
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Beskriv stenen, så återkommer vi med råd, skiss och offert.
          </h2>
        </div>
        <Link
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "bg-white text-primary hover:bg-white/90"
          )}
          href="/offert"
        >
          Begär kostnadsfri offert
        </Link>
      </div>
    </section>
  );
}
