/** Public product URLs shared by header / mobile nav. */
export const AUTODSM_DEMO_URL = "https://autodsm.vercel.app/demo";

const DEFAULT_PRODUCTION_URL = "https://autodsm.ai";

/**
 * Canonical site origin for metadata, sitemap, and JSON-LD.
 * On Vercel, set `NEXT_PUBLIC_SITE_URL=https://autodsm.ai` in production
 * so previews still work while the live domain is canonical.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      /* use fallbacks */
    }
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return DEFAULT_PRODUCTION_URL;
}
