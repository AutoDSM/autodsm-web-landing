/**
 * Waitlist persistence: optional Supabase table + optional Resend inbox copy.
 * Supabase: NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (see .env.example).
 */
import { persistWaitlistSignupSupabase } from "@/lib/waitlist/persistSupabaseWaitlist";
import { sendWaitlistNotifyEmail } from "@/lib/waitlist/sendWaitlistNotifyEmail";
import { getSupabaseUrl } from "@/utils/supabase/env";

export type WaitlistSaveResult =
  | { ok: true; id: string }
  | { ok: false; code: "duplicate" }
  | { ok: false; code: "unavailable"; reason: string };

function describeSupabaseEnvGap(): string {
  const url = getSupabaseUrl();
  const key = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY?.trim());
  if (!url && !key) {
    return "Supabase is not configured: add SUPABASE_SERVICE_ROLE_KEY to .env.local (see env.local.template), or set RESEND_API_KEY for email-only mode. Restart the dev server after saving .env.local.";
  }
  if (!url) {
    return "Missing project URL: set NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL), or rely on the default in next.config.ts.";
  }
  if (!key) {
    return "Add SUPABASE_SERVICE_ROLE_KEY to .env.local (Supabase Dashboard → Project Settings → API → service_role). Run: cp env.local.template .env.local then paste the key. Restart npm run dev.";
  }
  return "Supabase persistence was skipped (unexpected); check env and restart the dev server.";
}

/**
 * @param email — already validated (non-empty, looks like an email) by the API route
 */
export async function saveWaitlistEntry(email: string): Promise<WaitlistSaveResult> {
  const normalized = email.trim().toLowerCase();

  const db = await persistWaitlistSignupSupabase(normalized);
  if (db.kind === "duplicate") {
    return { ok: false, code: "duplicate" };
  }
  if (db.kind === "error") {
    return {
      ok: false,
      code: "unavailable",
      reason:
        "Supabase insert failed. Run lib/waitlist/schema.sql in the SQL Editor, confirm SUPABASE_SERVICE_ROLE_KEY is the service_role JWT for this project, and read the [waitlist] Supabase log line above.",
    };
  }

  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
  const usedDb = db.kind === "inserted";

  if (hasResend) {
    const sent = await sendWaitlistNotifyEmail(normalized);
    if (!sent.ok) {
      if (usedDb) {
        console.error(
          "[waitlist] Stored in database but notification email failed; signup is still saved.",
        );
        return { ok: true, id: db.id };
      }
      const reason =
        "Resend email failed and no database row was stored. Check RESEND_API_KEY, RESEND_FROM, and domain verification, or configure Supabase.";
      console.error("[waitlist]", reason, sent.error);
      return { ok: false, code: "unavailable", reason };
    }
    return { ok: true, id: usedDb ? db.id : sent.id };
  }

  if (usedDb) {
    return { ok: true, id: db.id };
  }

  const reason = describeSupabaseEnvGap();
  console.warn("[waitlist] Unavailable:", reason);
  return { ok: false, code: "unavailable", reason };
}
