"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, type BaseSyntheticEvent, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";
import { materials, stoneModels } from "@/lib/data";
import { quoteSchema, type QuoteInput } from "@/lib/schemas/quote";
import { siteConfig } from "@/lib/site";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const selectedModel = searchParams.get("modell") ?? "";
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sourcePath = useMemo(() => {
    if (typeof window === "undefined") {
      return "/offert";
    }

    return window.location.pathname + window.location.search;
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      model: selectedModel,
      sourcePath,
      consent: false
    }
  });

  async function onSubmit(_data: QuoteInput, event?: BaseSyntheticEvent) {
    setStatus("idle");
    trackEvent("start_quote", { model: selectedModel || undefined });

    const form = event?.target as HTMLFormElement | undefined;
    const formData = new FormData(form);

    const response = await fetch("/api/quote", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    trackEvent("submit_quote", { model: selectedModel || undefined });
    setStatus("success");
    reset({
      model: selectedModel,
      sourcePath,
      consent: false
    });
  }

  return (
    <form
      className="rounded-md border bg-card p-5 shadow-soft md:p-8"
      encType="multipart/form-data"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field error={errors.name?.message} label="Namn">
          <Input autoComplete="name" {...register("name")} />
        </Field>

        <Field error={errors.email?.message} label="E-post">
          <Input autoComplete="email" inputMode="email" {...register("email")} />
        </Field>

        <Field error={errors.phone?.message} label="Telefon">
          <Input autoComplete="tel" inputMode="tel" {...register("phone")} />
        </Field>

        <Field error={errors.model?.message} label="Önskad modell">
          <select
            className="min-h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("model")}
          >
            <option value="">Vet ej / behöver rådgivning</option>
            {stoneModels.map((model) => (
              <option key={model.slug} value={model.slug}>
                {model.name}
              </option>
            ))}
          </select>
        </Field>

        <Field error={errors.material?.message} label="Stensort">
          <select
            className="min-h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("material")}
          >
            <option value="">Vet ej / behöver rådgivning</option>
            {materials.map((material) => (
              <option key={material.slug} value={material.slug}>
                {material.name}
              </option>
            ))}
          </select>
        </Field>

        <Field error={errors.cemetery?.message} label="Kyrkogård / ort">
          <Input placeholder="T.ex. Skogskyrkogården, Stockholm" {...register("cemetery")} />
        </Field>
      </div>

      <div className="mt-5">
        <Field error={errors.message?.message} label="Meddelande / önskemål">
          <Textarea
            placeholder="Berätta fritt om text, ornament, tidsram, budget eller om du vill ha hjälp att välja."
            {...register("message")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Label htmlFor="attachment">Bifoga referensbild (valfritt)</Label>
        <Input
          accept="image/jpeg,image/png,image/webp,application/pdf"
          className="mt-2"
          id="attachment"
          name="attachment"
          type="file"
        />
        <p className="mt-2 text-xs leading-5 text-muted-foreground">
          Foto på befintlig gravsten, skiss eller inspirationsbild. Max 10 MB.
        </p>
      </div>

      <input type="hidden" {...register("sourcePath")} />

      <label className="mt-6 flex gap-3 text-sm leading-6 text-muted-foreground">
        <input
          className="mt-1 h-5 w-5 rounded border-input text-primary focus:ring-ring"
          type="checkbox"
          {...register("consent")}
        />
        <span>
          Jag godkänner att Stillasten behandlar mina uppgifter för att kunna
          återkomma med offert och rådgivning. Läs mer i{" "}
          <a className="font-semibold text-foreground underline" href="/integritetspolicy">
            integritetspolicyn
          </a>
          .
        </span>
      </label>
      {errors.consent?.message ? (
        <p className="mt-2 text-sm font-medium text-destructive">
          {errors.consent.message}
        </p>
      ) : null}

      <div className="mt-6 rounded-md bg-secondary p-4 text-sm leading-6">
        Helt kostnadsfritt och utan förpliktelse. Vi återkopplar vanligtvis inom{" "}
        {siteConfig.responseTime}.
      </div>

      <Button className="mt-6 w-full md:w-auto" disabled={isSubmitting} size="lg" type="submit">
        {isSubmitting ? (
          <>
            <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
            Skickar
          </>
        ) : (
          "Skicka offertförfrågan"
        )}
      </Button>

      {status === "success" ? (
        <div className="mt-5 flex gap-3 rounded-md border border-primary/25 bg-primary/10 p-4 text-sm leading-6">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 text-primary" />
          <p>
            Tack. Din förfrågan är mottagen. Stillasten återkommer personligen
            via e-post eller telefon.
          </p>
        </div>
      ) : null}

      {status === "error" ? (
        <p className="mt-5 rounded-md border border-destructive/30 bg-destructive/10 p-4 text-sm font-medium text-destructive">
          Något gick fel när formuläret skickades. Försök igen eller kontakta
          oss direkt via {siteConfig.email}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  children,
  error,
  label
}: {
  children: ReactNode;
  error?: string;
  label: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm font-medium text-destructive">{error}</p> : null}
    </div>
  );
}
