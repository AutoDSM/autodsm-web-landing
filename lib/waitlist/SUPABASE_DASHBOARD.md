# Supabase dashboard: waitlist leads

## Local dev: `POST /api/waitlist` returns 503

This repo **defaults the public Supabase URL** in `next.config.ts`. You still need **`SUPABASE_SERVICE_ROLE_KEY`** in `.env.local` (or **Resend** for email-only).

1. `cp env.local.template .env.local`
2. Paste **service_role** from **Dashboard → Project Settings → API** into `SUPABASE_SERVICE_ROLE_KEY=`
3. **Restart** `npm run dev` after any `.env.local` change.

If both Supabase persistence and Resend are missing, you get “Waitlist is temporarily unavailable”.

---

Do these steps once per project (e.g. `qihitweosezlsjgyytdd`). Your app code expects table **`public.waitlist_signups`** and env vars from **Project Settings → API**.

## 1. Create the table

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. **SQL Editor** → **New query**.
3. Paste the full contents of `lib/waitlist/schema.sql` and click **Run**.
4. Confirm **Success** (no errors). If the table already existed, the script is idempotent (`IF NOT EXISTS`).

## 2. Confirm the table exists

1. **Table Editor** (left sidebar).
2. Schema **public** → open **`waitlist_signups`**.
3. You should see columns **`id`**, **`email`**, **`created_at`**.

## 3. API keys (for Vercel / `.env.local`)

1. **Project Settings** (gear) → **API**.
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** or **publishable** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY` or `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (middleware / future client use only).
   - **service_role** (secret) → `SUPABASE_SERVICE_ROLE_KEY` — **server only**; used by `POST /api/waitlist` to insert rows. Never put this in client-side code or `NEXT_PUBLIC_*`.

Redeploy or restart dev after changing env vars.

## 4. Smoke test

1. Submit the waitlist form on the deployed site (or `localhost` with env loaded).
2. In **Table Editor → `waitlist_signups`**, click **Refresh** (or re-open the table). You should see a new row.
3. Submit the **same** email again → the app should return “already on the list”; no second row (unique on `email`).

## 5. View and export all signups

- **Table Editor**: sort by **`created_at`** descending; use filters/search as needed.
- **Export**: in Table Editor, use the table menu (**…**) → export options (e.g. CSV), if available for your plan/UI.

For ad-hoc reports, use **SQL Editor**:

```sql
select id, email, created_at
from public.waitlist_signups
order by created_at desc;
```

## 6. Optional: saved query in SQL Editor

Save the query above as **“Waitlist — all signups”** for one-click refresh from the dashboard.

## Troubleshooting

| Issue | What to check |
|--------|----------------|
| No rows after signup | Vercel/host env: `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` set; redeploy; browser Network tab on `POST /api/waitlist` → 201 vs 503. |
| 503 from API | Missing or wrong `SUPABASE_SERVICE_ROLE_KEY`, or table name mismatch (`waitlist_signups`). |
| SQL Editor error on run | Permissions: run as project owner; read the error (e.g. typo in table name). |
| Duplicate not rejected | Unique constraint `waitlist_signups_email_key` must exist — re-run `schema.sql` or add constraint manually. |

RLS is **on** with **no** policies on purpose: only the **service role** (your server) inserts; the dashboard still shows data because it uses privileged access. Do **not** expose `service_role` to the browser.
