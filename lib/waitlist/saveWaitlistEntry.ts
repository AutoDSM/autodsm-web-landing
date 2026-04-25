/**
 * Waitlist — inbox notification via Resend. Swap to a proper DB (duplicate checks,
 * exports) when you are ready; the API route only calls this function.
 */
import { Resend } from "resend";

export type WaitlistSaveResult =
  | { ok: true; id: string }
  | { ok: false; code: "duplicate" | "unavailable" };

const DEFAULT_INBOX = "contact@sebastianmendo.design";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

/**
 * @param email — already validated (non-empty, looks like an email) by the API route
 */
export async function saveWaitlistEntry(email: string): Promise<WaitlistSaveResult> {
  const normalized = normalizeEmail(email);
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, code: "unavailable" };
  }

  const to = (process.env.WAITLIST_NOTIFY_EMAIL ?? DEFAULT_INBOX).trim();
  const from = (process.env.RESEND_FROM ?? `AutoDSM <onboarding@resend.dev>`).trim();

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject: `AutoDSM waitlist: ${normalized}`,
    text: [
      "New waitlist signup on the landing page.",
      "",
      `Email: ${normalized}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n"),
  });

  if (error) {
    console.error("[waitlist] Resend:", error);
    return { ok: false, code: "unavailable" };
  }

  return { ok: true, id: data?.id ?? `inbox_${Date.now()}` };
}
