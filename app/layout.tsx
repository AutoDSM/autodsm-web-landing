import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "AutoDSM | Design System Work, Delegated",
  description:
    "AutoDSM connects to your repo, builds a living brand book from source code, detects design-system drift, and opens pull requests to fix it.",
  keywords: [
    "design system",
    "design tokens",
    "component library",
    "brand book",
    "design ops",
    "automation",
    "AI",
    "developer tools",
  ],
  authors: [{ name: "AutoDSM" }],
  openGraph: {
    title: "AutoDSM | Design System Work, Delegated",
    description:
      "Turn your repo into a living design system. AutoDSM reads your codebase, renders real components, and opens PRs to fix drift.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoDSM | Design System Work, Delegated",
    description:
      "Turn your repo into a living design system. No stories, no manual docs, no maintenance tax.",
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
        <Script id="autodsm-theme-init" strategy="beforeInteractive">
          {`(function(){try{var k="autodsm-theme",s=localStorage.getItem(k);var t=s==="light"||s==="dark"?s:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t;}catch(e){}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
