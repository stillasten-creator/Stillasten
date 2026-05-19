import { NextResponse } from "next/server";

import { sendCallbackNotification } from "@/lib/resend";
import { callbackSchema } from "@/lib/schemas/quote";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = callbackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await sendCallbackNotification(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "Callback submission failed." },
      { status: 500 }
    );
  }
}
