import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SUPABASE_FALLBACK_PROJECT_URL } from "./lib/supabaseDefaults";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Public URL only. Never put SUPABASE_SERVICE_ROLE_KEY in `env` — Next inlines `env` at build time
  // and an empty value can override .env.local / Vercel and break /api/waitlist.
  env: {
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
      process.env.SUPABASE_URL?.trim() ||
      SUPABASE_FALLBACK_PROJECT_URL,
  },
};

export default nextConfig;
