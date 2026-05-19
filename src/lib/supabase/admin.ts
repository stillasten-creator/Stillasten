import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export async function uploadQuoteAttachment(file: File) {
  const supabase = getSupabaseAdmin();

  if (!supabase || file.size === 0) {
    return null;
  }

  const bucket = process.env.SUPABASE_QUOTE_ATTACHMENTS_BUCKET ?? "quote-attachments";
  const safeName = file.name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]+/g, "-")
    .replace(/-+/g, "-");
  const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(bucket).upload(path, buffer, {
    contentType: file.type || "application/octet-stream",
    upsert: false
  });

  if (error) {
    throw error;
  }

  return path;
}

export async function saveQuoteLead(input: {
  name: string;
  email?: string;
  phone?: string;
  model?: string;
  material?: string;
  cemetery?: string;
  message: string;
  attachmentPath?: string | null;
  sourcePath?: string;
}) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    console.info("Supabase is not configured. Quote lead was not persisted.", input);
    return { skipped: true };
  }

  const { error } = await supabase.from("quote_leads").insert({
    name: input.name,
    email: input.email || null,
    phone: input.phone || null,
    model_slug: input.model || null,
    material_slug: input.material || null,
    cemetery: input.cemetery || null,
    message: input.message,
    attachment_path: input.attachmentPath || null,
    source_path: input.sourcePath || null,
    status: "ny"
  });

  if (error) {
    throw error;
  }

  return { skipped: false };
}
