import { Resend } from "resend";

import type { CallbackInput, QuoteInput } from "@/lib/schemas/quote";
import { siteConfig } from "@/lib/site";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendQuoteNotification(
  input: QuoteInput & { attachmentPath?: string | null }
) {
  const resend = getResend();
  const to = process.env.QUOTE_NOTIFY_TO;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!resend || !to || !from) {
    console.info("Resend is not configured. Quote email was not sent.", input);
    return { skipped: true };
  }

  const rows = [
    ["Namn", input.name],
    ["E-post", input.email || "-"],
    ["Telefon", input.phone || "-"],
    ["Modell", input.model || "Vet ej / rådgivning"],
    ["Stensort", input.material || "Vet ej / rådgivning"],
    ["Kyrkogård / ort", input.cemetery || "-"],
    ["Källa", input.sourcePath || "-"],
    ["Bilaga", input.attachmentPath || "-"],
    ["Meddelande", input.message]
  ];

  await resend.emails.send({
    from,
    to,
    subject: `Ny offertförfrågan från ${input.name}`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    html: `
      <h1>Ny offertförfrågan</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><th align="left" style="border-bottom:1px solid #ddd;">${escapeHtml(label)}</th><td style="border-bottom:1px solid #ddd;">${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
    `
  });

  return { skipped: false };
}

export async function sendCallbackNotification(input: CallbackInput) {
  const resend = getResend();
  const to = process.env.QUOTE_NOTIFY_TO;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!resend || !to || !from) {
    console.info("Resend is not configured. Callback email was not sent.", input);
    return { skipped: true };
  }

  await resend.emails.send({
    from,
    to,
    subject: `Återuppringning: ${input.name}`,
    text: [
      `Namn: ${input.name}`,
      `Telefon: ${input.phone}`,
      `Passar bäst: ${input.preferredTime || "-"}`,
      `Sajt: ${siteConfig.url}`
    ].join("\n")
  });

  return { skipped: false };
}
