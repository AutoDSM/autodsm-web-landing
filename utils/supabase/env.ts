import { SUPABASE_FALLBACK_PROJECT_URL } from "@/lib/supabaseDefaults";

/** Public Supabase project URL (same in browser and server). */
export function getSupabaseUrl(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || process.env.SUPABASE_URL?.trim();
  return fromEnv || SUPABASE_FALLBACK_PROJECT_URL;
}

/** Anon / publishable key for SSR + browser (never use service role here). */
export function getSupabaseAnonKey(): string {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
    ""
  );
}
