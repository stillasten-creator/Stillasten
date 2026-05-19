import { NextResponse } from "next/server";

import { sendQuoteNotification } from "@/lib/resend";
import { quoteSchema } from "@/lib/schemas/quote";
import { saveQuoteLead, uploadQuoteAttachment } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const allowedFileTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf"
]);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const parsed = quoteSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      model: formData.get("model"),
      material: formData.get("material"),
      cemetery: formData.get("cemetery"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on" || formData.get("consent") === "true",
      sourcePath: formData.get("sourcePath")
    });

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const attachment = formData.get("attachment");
    let attachmentPath: string | null = null;

    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { ok: false, message: "Filen får vara max 10 MB." },
          { status: 400 }
        );
      }

      if (!allowedFileTypes.has(attachment.type)) {
        return NextResponse.json(
          { ok: false, message: "Filtypen stöds inte." },
          { status: 400 }
        );
      }

      attachmentPath = await uploadQuoteAttachment(attachment);
    }

    await saveQuoteLead({ ...parsed.data, attachmentPath });
    await sendQuoteNotification({ ...parsed.data, attachmentPath });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "Quote submission failed." },
      { status: 500 }
    );
  }
}
