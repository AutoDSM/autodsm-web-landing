import { saveWaitlistEntry } from "@/lib/waitlist/saveWaitlistEntry";
import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid JSON", 400);
  }

  if (typeof body !== "object" || body === null || !("email" in body)) {
    return jsonError("Expected { email: string }", 400);
  }

  const email = (body as { email: unknown }).email;
  if (typeof email !== "string") {
    return jsonError("Email must be a string", 400);
  }

  const trimmed = email.trim();
  if (trimmed.length === 0) {
    return jsonError("Email is required", 400);
  }
  if (trimmed.length > 320 || !EMAIL.test(trimmed)) {
    return jsonError("Enter a valid email address", 400);
  }

  try {
    const result = await saveWaitlistEntry(trimmed);
    if (!result.ok) {
      if (result.code === "duplicate") {
        return jsonError("This email is already on the list", 409);
      }
      const payload: { error: string; hint?: string } = {
        error: "Waitlist is temporarily unavailable",
      };
      if (process.env.NODE_ENV === "development") {
        payload.hint = result.reason;
      }
      return NextResponse.json(payload, { status: 503 });
    }
    return NextResponse.json({ id: result.id }, { status: 201 });
  } catch {
    return jsonError("Something went wrong. Try again soon.", 500);
  }
}
