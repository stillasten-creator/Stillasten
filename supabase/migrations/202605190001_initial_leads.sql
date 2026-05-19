create extension if not exists pgcrypto;

do $$ begin
  create type lead_status as enum ('ny', 'kontaktad', 'skiss_skickad', 'avslutad');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.quote_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status lead_status not null default 'ny',
  name text not null,
  email text,
  phone text,
  model_slug text,
  material_slug text,
  cemetery text,
  message text not null,
  attachment_path text,
  source_path text,
  consent_at timestamptz not null default now()
);

alter table public.quote_leads enable row level security;

drop policy if exists "quote_leads_no_public_access" on public.quote_leads;
create policy "quote_leads_no_public_access"
on public.quote_leads
for all
using (false)
with check (false);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_quote_leads_updated_at on public.quote_leads;
create trigger set_quote_leads_updated_at
before update on public.quote_leads
for each row
execute function public.set_updated_at();

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'quote-attachments',
  'quote-attachments',
  false,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
