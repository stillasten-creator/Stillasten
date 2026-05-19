import Link from "next/link";
import { Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export function MobileQuoteBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/96 p-3 shadow-soft backdrop-blur lg:hidden">
      <div className="grid grid-cols-[3.25rem_1fr] gap-2">
        <a
          aria-label="Ring Stillasten"
          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
        </a>
        <Link className={cn(buttonVariants({ className: "w-full" }))} href="/offert">
          Begär kostnadsfri offert
        </Link>
      </div>
    </div>
  );
}
