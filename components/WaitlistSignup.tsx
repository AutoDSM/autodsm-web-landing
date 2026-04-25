"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export type WaitlistSignupProps = {
  /** When set, label/input use `waitlist-email-${idSuffix}` so multiple forms on a page stay valid. */
  idSuffix?: string;
};

export function WaitlistSignup({ idSuffix }: WaitlistSignupProps = {}) {
  const inputId = idSuffix ? `waitlist-email-${idSuffix}` : "waitlist-email";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    if (!email.trim()) {
      setStatus("error");
      setMessage("Enter your email to join the waitlist.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; hint?: string };
      if (res.status === 201) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch.");
        return;
      }
      if (res.status === 409) {
        setStatus("error");
        setMessage(data.error ?? "This email is already on the list.");
        return;
      }
      setStatus("error");
      {
        const base = data.error ?? "Could not join. Try again in a moment.";
        setMessage(data.hint ? `${base} ${data.hint}` : base);
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Check your connection and try again.");
    }
  }

  const disabled = status === "loading" || status === "success";
  const submitLabel =
    status === "loading" ? "Joining…" : status === "success" ? "On the list" : "Join waitlist";

  return (
    <div className="waitlist-block hero-entrance">
      <form className="waitlist-form" onSubmit={onSubmit} noValidate>
        <label htmlFor={inputId} className="sr-only">
          Email for waitlist
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className="waitlist-input"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={disabled}
          aria-invalid={status === "error" ? true : undefined}
        />
        <button type="submit" className="btn primary waitlist-submit" disabled={disabled}>
          {submitLabel}
        </button>
      </form>
      {message ? (
        <p
          className={`waitlist-feedback${status === "error" ? " is-error" : " is-ok"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
