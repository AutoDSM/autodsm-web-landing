/**
 * Waitlist persistence: optional Supabase table + optional Resend inbox copy.
 * Supabase: NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (see .env.example).
 */
import { persistWaitlistSignupSupabase } from "@/lib/waitlist/persistSupabaseWaitlist";
import { sendWaitlistNotifyEmail } from "@/lib/waitlist/sendWaitlistNotifyEmail";

export type WaitlistSaveResult =
  | { ok: true; id: string }
  | { ok: false; code: "duplicate" | "unavailable" };

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
    return { ok: false, code: "unavailable" };
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
      return { ok: false, code: "unavailable" };
    }
    return { ok: true, id: usedDb ? db.id : sent.id };
  }

  if (usedDb) {
    return { ok: true, id: db.id };
  }

  return { ok: false, code: "unavailable" };
}
