"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { ThemeModeSwitch } from "@/components/ThemeModeSwitch";
import { WaitlistSignup } from "@/components/WaitlistSignup";
import { LANDING_FAQS } from "@/data/faqs";

type ThemeMode = "dark" | "light";

const steps = [
  {
    number: "01",
    title: "Point it at your repo",
    body: "AutoDSM connects to your GitHub repository and scans for components, tokens, typography, colors, and assets—no configuration files, no manual tagging.",
  },
  {
    number: "02",
    title: "Watch the system appear",
    body: "Components render live. Tokens get extracted. Typography scales, color palettes, and spacing systems assemble into a shareable brand book—all generated, not maintained.",
  },
  {
    number: "03",
    title: "Let agents fix the drift",
    body: "When inconsistencies appear—hardcoded colors, orphaned components, broken tokens—AutoDSM opens scoped pull requests with validated fixes ready for review.",
  },
];

const replicaCards: { light: string; dark: string; alt: string }[] = [
  {
    light: "/visuals/landing/card-typography-light.svg",
    dark: "/visuals/landing/card-typography-dark.svg",
    alt: "Typography system card showing font families and scales",
  },
  {
    light: "/visuals/landing/card-logo-light.svg",
    dark: "/visuals/landing/card-logo-dark.svg",
    alt: "Logo assets card with brand marks",
  },
  {
    light: "/visuals/landing/card-color-light.svg",
    dark: "/visuals/landing/card-color-dark.svg",
    alt: "Color palette card with design tokens",
  },
];

const platformCards = [
  {
    title: "Your brand book, generated from code.",
    body: "Components render live. Tokens stay current. Typography, colors, spacing, and assets update automatically as your codebase evolves.",
    icon: "palette",
  },
  {
    title: "Give coding agents system awareness.",
    body: "The CLI generates context files that let Cursor, Claude Code, Copilot, and Codex build with your real components instead of guessing.",
    icon: "sparkles",
  },
  {
    title: "Detect issues. Ship fixes. Automatically.",
    body: "AutoDSM continuously scans for hardcoded values, orphaned components, and token misuse—then opens pull requests with validated fixes.",
    icon: "shield-check",
  },
];

const FeatureIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    palette: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="8" r="1.5" fill="currentColor" />
        <circle cx="8" cy="12" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    sparkles: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414m9.9 9.9l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414m9.9-9.9l1.414-1.414" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    "shield-check": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  };
  return <span className="feature-icon">{icons[type]}</span>;
};

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("autodsm-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme: ThemeMode =
      saved === "light" || saved === "dark" ? saved : prefersDark ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (targets.length === 0) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("autodsm-theme", nextTheme);
  };

  return (
    <div className="page-shell">
      <Header />
      <main>
        {/* ─────────────── Hero Section ─────────────── */}
        <section className="hero-shell container">
          <div className="hero">
            <div className="hero-lead">
              <div className="hero-heading">
                <h1 className="hero-entrance">Transform your codebase into a living design system</h1>
              </div>
              <p className="hero-sub hero-entrance">
                AutoDSM is the design system manager built for the agentic era. Connect it with your
                codebase, visualize your designs, and send agents to resolve UI issues.
              </p>
            </div>
            <WaitlistSignup />
          </div>

          <div className="hero-dashboard-frame hero-entrance">
            <div className="hero-dashboard-media hero-dashboard-media--light">
              <Image
                src="/visuals/landing/hero-dashboard-light.svg"
                alt="AutoDSM dashboard preview in light mode: tokens, navigation, and design system overview"
                width={1208}
                height={868}
                className="hero-dashboard-image hero-dashboard-image--desktop"
                sizes="(max-width: 1232px) calc(100vw - 2.5rem), 1200px"
                priority
                unoptimized
              />
              <Image
                src="/visuals/landing/hero-dashboard-phone-light.svg"
                alt="AutoDSM mobile dashboard preview in light mode: tokens, navigation, and design system overview"
                width={400}
                height={642}
                className="hero-dashboard-image hero-dashboard-image--phone"
                sizes="(max-width: 499px) calc(100vw - 2.5rem), 400px"
                unoptimized
              />
            </div>
            <div className="hero-dashboard-media hero-dashboard-media--dark">
              <Image
                src="/visuals/landing/hero-dashboard-dark.svg"
                alt="AutoDSM dashboard preview in dark mode: tokens, navigation, and design system overview"
                width={1208}
                height={868}
                className="hero-dashboard-image hero-dashboard-image--desktop"
                sizes="(max-width: 1232px) calc(100vw - 2.5rem), 1200px"
                priority
                unoptimized
              />
              <Image
                src="/visuals/landing/hero-dashboard-phone-dark.svg"
                alt="AutoDSM mobile dashboard preview in dark mode: tokens, navigation, and design system overview"
                width={400}
                height={642}
                className="hero-dashboard-image hero-dashboard-image--phone"
                sizes="(max-width: 499px) calc(100vw - 2.5rem), 400px"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─────────────── Brand Foundations ─────────────── */}
        <section className="section container reveal" id="product">
          <div className="section-head wide">
            <h2>
              Build your product, build your brand.
              <span> AutoDSM gives teams a precise system to build from instead of a stale approximation.</span>
            </h2>
            <p className="product-definition">
              <strong>AutoDSM</strong> is a design-operations product for software teams. It connects to{" "}
              <strong>GitHub</strong>, builds a <strong>living brand book</strong> from your source
              (components, design tokens, typography, and assets), and opens <strong>pull requests</strong>{" "}
              when it detects design-system drift—so agents and developers build against the real system, not
              a stale handoff.
            </p>
            <div className="replica-cards-row">
              {replicaCards.map((card) => (
                <div className="replica-card-slot" key={card.light}>
                  <div className="replica-card-media replica-card-media--light">
                    <Image
                      src={card.light}
                      alt={card.alt}
                      width={312}
                      height={225}
                      className="replica-card-image"
                      sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="replica-card-media replica-card-media--dark">
                    <Image
                      src={card.dark}
                      alt={card.alt}
                      width={312}
                      height={225}
                      className="replica-card-image"
                      sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── How It Works ─────────────── */}
        <section className="section container reveal" id="how-it-works">
          <div className="section-head section-head--wide-titles">
            <h2>
              Three steps. Zero configuration.
              <span>
                {" "}
                No stories to author. No config files to maintain. AutoDSM reads the code and handles the rest.
              </span>
            </h2>
          </div>
          <div className="process-list">
            {steps.map((step) => (
              <article className="process-item" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─────────────── Platform Features ─────────────── */}
        <section className="section section-muted reveal" id="features">
          <div className="container">
            <div className="section-head section-head--wide-titles">
              <h2>
                Everything you need to own your design system.
                <span>Live components, real tokens, and context for your agents—always tied to the repo.</span>
              </h2>
            </div>
            <div className="grid feature-grid">
              {platformCards.map((card) => (
                <article className="card feature-card" key={card.title}>
                  <FeatureIcon type={card.icon} />
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section className="section container reveal" id="faq">
          <div className="section-head section-head--wide-titles">
            <h2>
              Common questions.
              <span>How it differs from Storybook, how it pairs with AI tools, and what “fix” really means.</span>
            </h2>
          </div>
          <div className="faq-list">
            {LANDING_FAQS.map((faq, index) => (
              <article
                className="faq-item"
                key={faq.question}
                data-open={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenFaq(openFaq === index ? null : index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={openFaq === index}
              >
                <div className="faq-header">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─────────────── Final CTA ─────────────── */}
        <section className="section container reveal" id="final-cta">
          <div className="final-cta-inner">
            <div className="section-head">
              <h2>Stop maintaining your design system by hand.</h2>
            </div>
            <p>
              AutoDSM gives you a single living brand book, agent-ready context, and pull requests
              when drift shows up.
            </p>
            <WaitlistSignup idSuffix="final-cta" />
          </div>
        </section>
      </main>

      {/* ─────────────── Footer ─────────────── */}
      <footer className="site-footer">
        <div className="container footer-row">
          <div className="footer-brand">
            <div className="wordmark" aria-label="AutoDSM">
              <Image
                src="/brand/Logo-Light-Text.svg"
                alt="AutoDSM"
                width={184}
                height={64}
                className="logo-on-light"
              />
              <Image
                src="/brand/Logo-Dark-Text.svg.svg"
                alt=""
                width={184}
                height={64}
                className="logo-on-dark"
                aria-hidden
              />
            </div>
            <nav className="footer-aux" aria-label="Site and discovery">
              <a href="/llms.txt" className="footer-aux-link">
                LLM / AI context
              </a>
              <a href="/sitemap.xml" className="footer-aux-link">
                Sitemap
              </a>
            </nav>
          </div>
          <ThemeModeSwitch isDark={theme === "dark"} onToggle={toggleTheme} />
        </div>
      </footer>
    </div>
  );
}
