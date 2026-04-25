import { Resend } from "resend";

export type EmailNotifyResult =
  | { ok: true; id: string }
  | { ok: false; error: unknown };

const DEFAULT_NOTIFY = "contact@sebastianmendo.design";

export async function sendWaitlistNotifyEmail(normalizedEmail: string): Promise<EmailNotifyResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, error: new Error("RESEND_API_KEY missing") };
  }

  const to = (process.env.WAITLIST_NOTIFY_EMAIL ?? DEFAULT_NOTIFY).trim();
  const from = (process.env.RESEND_FROM ?? `AutoDSM <onboarding@resend.dev>`).trim();

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject: `AutoDSM waitlist: ${normalizedEmail}`,
    text: [
      "New waitlist signup on the landing page.",
      "",
      `Email: ${normalizedEmail}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n"),
  });

  if (error) {
    console.error("[waitlist] Resend:", error);
    return { ok: false, error };
  }

  return { ok: true, id: data?.id ?? `inbox_${Date.now()}` };
}
