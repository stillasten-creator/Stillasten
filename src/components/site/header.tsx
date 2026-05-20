"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { mainNav, quoteCta, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replaceAll(" ", "")}` : "";

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
              className="-mx-2 inline-flex min-h-11 items-center px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {phoneHref ? (
            <a
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
              href={phoneHref}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          ) : null}
          <Link className={cn(buttonVariants({ size: "sm" }))} href={quoteCta.href}>
            {quoteCta.label}
          </Link>
        </div>

        <div className="relative lg:hidden">
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "relative z-50"
            )}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
          <div
            className={cn(
              "absolute right-0 top-14 w-[min(88vw,22rem)] rounded-md border bg-card p-4 shadow-soft",
              isOpen ? "block" : "hidden"
            )}
            id="mobile-navigation"
          >
            <nav aria-label="Mobilnavigation" className="grid gap-1">
              {mainNav.map((item) => (
                <Link
                  className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted"
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className={cn(buttonVariants({ className: "mt-3 w-full" }))}
                href={quoteCta.href}
                onClick={() => setIsOpen(false)}
              >
                {quoteCta.label}
              </Link>
              {phoneHref ? (
                <a
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      className: "mt-2 w-full"
                    })
                  )}
                  href={phoneHref}
                  onClick={() => setIsOpen(false)}
                >
                  Ring oss
                </a>
              ) : null}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
