import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  text,
  className
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{text}</p>
      ) : null}
    </div>
  );
}
