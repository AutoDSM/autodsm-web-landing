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
  // Light-only landing: keep the browser/system chrome white regardless of OS theme.
  themeColor: "#ffffff",
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AutoDSM | The design system manager for product designers",
    template: "%s | AutoDSM",
  },
  description:
    "AutoDSM is the design system manager built to empower product designers to do their best work—design, build, publish, and maintain your design system in one place.",
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
    title: "Design, build, publish, and maintain your design system",
    description:
      "AutoDSM is the design system manager built to empower product designers to do their best work—design, build, publish, and maintain your design system in one place.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AutoDSM",
    images: [
      {
        url: "/og.png",
        width: 1024,
        height: 537,
        alt: "AutoDSM — the design system manager for product designers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design, build, publish, and maintain your design system",
    description:
      "The design system manager built to empower product designers to do their best work.",
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
          {`(function(){try{document.documentElement.dataset.theme="light";}catch(e){}})();`}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
