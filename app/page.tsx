"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { ThemeModeSwitch } from "@/components/ThemeModeSwitch";

type ThemeMode = "dark" | "light";

const proofPoints = [
  "Zero configuration",
  "Code is the source of truth",
  "No stories required",
  "PR-based remediation",
];

const steps = [
  {
    number: "01",
    title: "Connect the repo",
    body: "AutoDSM scans the codebase and finds the design system where it already lives.",
  },
  {
    number: "02",
    title: "Generate the system",
    body: "It renders components, assembles the living brand book, and exposes tokens and assets automatically.",
  },
  {
    number: "03",
    title: "Detect and fix drift",
    body: "Checks run across the system and fixable issues become reviewable pull requests.",
  },
];

const platformCards = [
  {
    eyebrow: "Platform",
    title: "A living brand book from source code.",
    body: "Get components, tokens, typography, spacing, and assets generated directly from your repo instead of maintained by hand.",
    items: ["Live rendering", "Shareable galleries", "Real components", "Always synced to code"],
  },
  {
    eyebrow: "AI Context",
    title: "Make AI coding tools system-aware.",
    body: "The free CLI generates components.txt and design-system context so Cursor, Claude Code, Copilot, and Codex build with what already exists.",
    items: ["components.txt", "Cursor rules", "CLAUDE.md additions", "Codex instructions"],
  },
];

const faqs = [
  {
    question: "How is this different from Storybook?",
    answer:
      "Storybook depends on authored stories. AutoDSM reads source code directly, generates the living system, and can open pull requests to resolve drift.",
  },
  {
    question: "Can it work with AI coding tools?",
    answer:
      "Yes. The free CLI generates structured context files and components.txt so Cursor, Claude Code, Copilot, and Codex can build with the real system.",
  },
  {
    question: "Does it actually fix issues or just report them?",
    answer:
      "It does both. AutoDSM detects issues, proposes scoped fixes, validates results, and opens PRs for human review.",
  },
];

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
              <h1 className="hero-entrance">Transform your codebase into a living design system</h1>
              <p className="hero-sub hero-entrance">
                AutoDSM is the design system manager built for the agentic era. Connect it with your
                codebase, visualize your designs, and send agents to resolve UI issues.
              </p>
            </div>
            <div className="hero-actions hero-entrance">
              <a className="btn primary" href="#final-cta">
                Get Started
              </a>
              <a className="btn ghost" href="#product">
                View sample system
              </a>
            </div>
          </div>

          <div className="hero-dashboard-frame hero-entrance">
            <Image
              src="/visuals/landing/hero-dashboard-layout.svg"
              alt="AutoDSM dashboard preview showing component gallery, tokens, and health metrics"
              width={1007}
              height={647}
              className="hero-dashboard-image"
              priority
            />
          </div>

          <div className="proof-strip hero-entrance">
            {proofPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        {/* ─────────────── Brand Foundations ─────────────── */}
        <section className="section container reveal" id="product">
          <div className="section-head wide">
            <h2>
              Build your product, build your brand.
              <span> AutoDSM gives teams a precise system to build from instead of a stale approximation.</span>
            </h2>
          </div>
          <div className="replica-cards-row">
            <Image
              src="/visuals/landing/card-typography.svg"
              alt="Typography system card showing font families and scales"
              width={312}
              height={225}
              className="replica-card-image"
            />
            <Image
              src="/visuals/landing/card-logo.svg"
              alt="Logo assets card with brand marks"
              width={312}
              height={225}
              className="replica-card-image"
            />
            <Image
              src="/visuals/landing/card-color.svg"
              alt="Color palette card with design tokens"
              width={312}
              height={225}
              className="replica-card-image"
            />
          </div>
          <div className="intro-band">
            <p>
              Your codebase already knows the design system. AutoDSM reads the code directly,
              assembles the system automatically, and gives your team one place to see it, share it,
              and improve it.
            </p>
          </div>
        </section>

        {/* ─────────────── How It Works ─────────────── */}
        <section className="section container reveal" id="how-it-works">
          <div className="section-head">
            <h2>Connect a repo. Get the system. Fix the drift.</h2>
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
        <section className="section section-muted reveal">
          <div className="container">
            <div className="grid feature-grid">
              {platformCards.map((card) => (
                <article className="card feature-card" key={card.title}>
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <ul className="clean-list">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section className="section container reveal">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
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
            <h2>Stop maintaining your design system by hand.</h2>
            <p>
              Connect your repo, render the truth, and let AutoDSM handle the work between design
              and code.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#product">
                Get Started
              </a>
              <a className="btn ghost" href="#product">
                View sample system
              </a>
            </div>
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
          </div>
          <span>Code is the source of truth.</span>
          <ThemeModeSwitch isDark={theme === "dark"} onToggle={toggleTheme} />
        </div>
      </footer>
    </div>
  );
}
