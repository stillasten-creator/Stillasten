"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackEvent } from "@/lib/analytics";
import { callbackSchema, type CallbackInput } from "@/lib/schemas/quote";

export function CallbackForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<CallbackInput>({
    resolver: zodResolver(callbackSchema),
    defaultValues: {
      consent: false
    }
  });

  async function onSubmit(data: CallbackInput) {
    setSent(false);
    const response = await fetch("/api/callback", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      trackEvent("submit_callback");
      setSent(true);
      reset({ consent: false });
    }
  }

  return (
    <form className="rounded-md border bg-card p-5 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <div>
          <Label>Namn</Label>
          <Input className="mt-2" {...register("name")} />
          {errors.name?.message ? (
            <p className="mt-2 text-sm font-medium text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <Label>Telefon</Label>
          <Input className="mt-2" inputMode="tel" {...register("phone")} />
          {errors.phone?.message ? (
            <p className="mt-2 text-sm font-medium text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>
        <div>
          <Label>När passar det bäst?</Label>
          <Input className="mt-2" placeholder="T.ex. vardag efter 15" {...register("preferredTime")} />
        </div>
        <label className="flex cursor-pointer gap-3 rounded-md border border-transparent p-2 text-sm leading-6 text-muted-foreground transition-colors hover:border-border hover:bg-muted/60">
          <input
            className="mt-0.5 h-6 w-6 shrink-0 accent-primary"
            type="checkbox"
            {...register("consent")}
          />
          <span>Jag godkänner att Stillasten kontaktar mig om min förfrågan.</span>
        </label>
        {errors.consent?.message ? (
          <p className="text-sm font-medium text-destructive">{errors.consent.message}</p>
        ) : null}
      </div>
      <Button className="mt-5 w-full" disabled={isSubmitting} type="submit">
        {isSubmitting ? (
          <>
            <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
            Skickar
          </>
        ) : (
          "Bli uppringd"
        )}
      </Button>
      {sent ? (
        <p className="mt-4 rounded-md bg-secondary p-3 text-sm">
          Tack. Vi återkommer via telefon.
        </p>
      ) : null}
    </form>
  );
}
