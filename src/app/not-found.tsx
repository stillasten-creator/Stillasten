import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          404
        </p>
        <h1 className="mt-3 page-title">Sidan finns inte.</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Länken kan vara gammal eller så har sidan flyttats.
        </p>
        <Link className={cn(buttonVariants({ className: "mt-8" }))} href="/">
          Till startsidan
        </Link>
      </div>
    </section>
  );
}
