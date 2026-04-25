/**
 * Persist waitlist signups via Supabase (server-only service role).
 *
 * Env: NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL) + SUPABASE_SERVICE_ROLE_KEY
 * Table: lib/waitlist/schema.sql → public.waitlist_signups
 */
import { createClient } from "@supabase/supabase-js";
import { getSupabaseUrl } from "@/utils/supabase/env";

export type SupabasePersistResult =
  | { kind: "skip" }
  | { kind: "inserted"; id: string }
  | { kind: "duplicate" }
  | { kind: "error" };

export async function persistWaitlistSignupSupabase(email: string): Promise<SupabasePersistResult> {
  const url = getSupabaseUrl();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !serviceKey) {
    return { kind: "skip" };
  }

  const supabase = createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data, error } = await supabase
    .from("waitlist_signups")
    .insert({ email })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return { kind: "duplicate" };
    }
    console.error("[waitlist] Supabase insert failed:", error.code, error.message);
    return { kind: "error" };
  }

  if (data?.id) {
    return { kind: "inserted", id: data.id };
  }

  console.error("[waitlist] Supabase insert returned no row");
  return { kind: "error" };
}
