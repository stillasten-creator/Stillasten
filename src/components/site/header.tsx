import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { mainNav, quoteCta, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/94 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link aria-label="Stillasten startsida" className="group" href="/">
          <span className="block font-serif text-2xl leading-none tracking-normal">
            Stillasten
          </span>
          <span className="mt-1 block text-xs text-muted-foreground">
            Gravstenar med personlig offert
          </span>
        </Link>

        <nav aria-label="Huvudnavigation" className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
            href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link className={cn(buttonVariants({ size: "sm" }))} href={quoteCta.href}>
            {quoteCta.label}
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary
            aria-label="Öppna meny"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "list-none [&::-webkit-details-marker]:hidden"
            )}
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,22rem)] rounded-md border bg-card p-4 shadow-soft">
            <nav aria-label="Mobilnavigation" className="grid gap-1">
              {mainNav.map((item) => (
                <Link
                  className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className={cn(buttonVariants({ className: "mt-3 w-full" }))}
                href={quoteCta.href}
              >
                {quoteCta.label}
              </Link>
              <a
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className: "mt-2 w-full"
                  })
                )}
                href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
              >
                Ring oss
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
