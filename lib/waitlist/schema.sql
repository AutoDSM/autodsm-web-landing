-- Run once in Supabase → SQL Editor. Then view leads: Table Editor → public → waitlist_signups
-- Full checklist: lib/waitlist/SUPABASE_DASHBOARD.md
-- Inserts use SUPABASE_SERVICE_ROLE_KEY from your host (never the publishable key in the browser).

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  constraint waitlist_signups_email_key unique (email)
);

create index if not exists waitlist_signups_created_at_idx
  on public.waitlist_signups (created_at desc);

comment on table public.waitlist_signups is 'Landing page waitlist signups (from /api/waitlist).';

alter table public.waitlist_signups enable row level security;

-- No RLS policies: anon cannot read/write. Service role (server API) bypasses RLS for inserts.

-- Verify after run:
-- select count(*) from public.waitlist_signups;
-- select * from public.waitlist_signups order by created_at desc limit 20;
