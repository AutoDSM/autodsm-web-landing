import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { getSiteUrl } from "@/lib/siteUrls";
import "./globals.css";

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c10" },
  ],
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AutoDSM | Design system automation from your GitHub repo",
    template: "%s | AutoDSM",
  },
  description:
    "Connect AutoDSM to GitHub to generate a living brand book from code, catch design-token and component drift, and open pull requests with fixes. Built for teams using AI coding agents.",
  keywords: [
    "design system",
    "design system automation",
    "design tokens",
    "design system drift",
    "component library",
    "GitHub",
    "pull request",
    "brand book",
    "design ops",
    "Cursor",
    "Claude Code",
    "GitHub Copilot",
    "AI coding agents",
    "developer tools",
  ],
  applicationName: "AutoDSM",
  authors: [{ name: "AutoDSM", url: siteUrl }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AutoDSM | Design system automation from your GitHub repo",
    description:
      "Turn your repo into a living design system. Real components, real tokens, and pull requests when drift appears—without maintaining Storybook by hand.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AutoDSM",
    images: [
      {
        url: "/og.png",
        width: 1024,
        height: 537,
        alt: "autoDSM — Design systems for the agentic era",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoDSM | Design system automation from your GitHub repo",
    description:
      "Living brand books, agent-ready context, and pull requests when design-system drift shows up.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
      >
        <SeoJsonLd />
        <Script id="autodsm-theme-init" strategy="beforeInteractive">
          {`(function(){try{var k="autodsm-theme",s=localStorage.getItem(k);var t=s==="light"||s==="dark"?s:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t;}catch(e){}})();`}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
