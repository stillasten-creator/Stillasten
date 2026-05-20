import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { StoneModel } from "@/lib/data";

export function ProductCard({
  model,
  priority = false
}: {
  model: StoneModel;
  priority?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-md border bg-card shadow-sm">
      <Link href={`/gravstenar/${model.slug}`}>
        <div className="relative aspect-[4/3] bg-muted">
          <Image
            alt={model.alt}
            className="object-cover"
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, 100vw"
            src={model.image}
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {model.categoryLabel}
            </p>
            <h3 className="mt-1 font-serif text-2xl">{model.name}</h3>
          </div>
          <p className="shrink-0 text-sm font-semibold">{model.priceFrom}</p>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {model.intro}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {model.badges.map((badge) => (
            <span
              className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
              key={badge}
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            href={`/gravstenar/${model.slug}`}
          >
            Se modell
          </Link>
          <Link
            className={cn(buttonVariants({ size: "sm" }))}
            href={`/offert?modell=${model.slug}`}
          >
            Begär offert
          </Link>
        </div>
      </div>
    </article>
  );
}
