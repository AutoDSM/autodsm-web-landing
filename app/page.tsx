"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeModeSwitch } from "@/components/ThemeModeSwitch";
import { WaitlistSignup } from "@/components/WaitlistSignup";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    setIsDark(t === "dark");
  }, []);

  function onToggleTheme() {
    const next = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("autodsm-theme", next);
    } catch {
      // ignore write failures (privacy mode)
    }
    setIsDark(next === "dark");
  }

  return (
    <div className="page-shell">
      <main>
        {/* ─────────────── Hero Section (Figma: AutoDSM - Landing - Hero / Dark) ─────────────── */}
        <section className="hero-shell hero-shell--fullbleed">
          <div className="figma-hero-panel">
            <div className="figma-hero-inner">
              <div className="figma-hero-content">
                <div className="figma-hero-topbar hero-entrance" aria-label="AutoDSM header">
                  <div aria-hidden="true" />
                  <div className="figma-hero-brand" aria-label="AutoDSM">
                    <Image
                      src="/brand/Logo-Icon.svg"
                      alt=""
                      width={34}
                      height={34}
                      priority
                      className="figma-hero-mark"
                    />
                    <span className="figma-hero-wordmark">autoDSM</span>
                  </div>
                  <ThemeModeSwitch isDark={isDark} onToggle={onToggleTheme} />
                </div>

                <div className="hero">
                  <div className="hero-lead">
                    <div className="hero-heading">
                      <h1 className="hero-entrance figma-hero-title">
                        Build and maintain your design system with ease.
                      </h1>
                    </div>
                    <p className="hero-sub hero-entrance figma-hero-subtitle">
                      AutoDSM is the first ever design systems IDE built to empower product designers
                    </p>
                  </div>

                  <WaitlistSignup
                    variant="figma-hero"
                    placeholder="Sign up for waitlist"
                    submitAriaLabel="Join waitlist"
                  />
                </div>
              </div>

              <section className="hero-figma-frame hero-entrance" aria-label="Pastel sunset lake background">
                <div className="hero-figma-media hero-figma-background">
                  <Image
                    src="/visuals/landing/hero-background.png"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 1024px"
                    className="hero-figma-background-image"
                  />
                </div>
                <div className="hero-figma-media hero-figma-foreground" aria-hidden="true">
                  <div className="hero-figma-foreground-inner">
                    <Image
                      src="/visuals/landing/AutoDSM%20-%20Components.svg"
                      alt=""
                      width={900}
                      height={600}
                      priority
                      unoptimized
                      sizes="(max-width: 520px) calc(90vw - 64px), (max-width: 1024px) calc(90vw - 128px), 860px"
                      className="hero-figma-product-preview"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
