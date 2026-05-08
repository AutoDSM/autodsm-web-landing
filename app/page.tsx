"use client";

import Image from "next/image";
import { WaitlistSignup } from "@/components/WaitlistSignup";

export default function Home() {
  return (
    <div className="page-shell">
      <main>
        {/* ─────────────── Hero Section (Figma: AutoDSM - Landing - Hero / Dark) ─────────────── */}
        <section className="hero-shell hero-shell--fullbleed">
          <div className="figma-hero-panel">
            <div className="figma-hero-inner">
              <div className="figma-hero-brand hero-entrance" aria-label="AutoDSM">
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

              <div className="hero-figma-frame hero-entrance" aria-label="AutoDSM product preview">
                <div className="hero-figma-media">
                  <Image
                    src="/visuals/landing/hero-prototype.jpg"
                    alt="AutoDSM IDE preview: components, editor, and agent composer"
                    width={1024}
                    height={684}
                    className="hero-figma-image hero-figma-image--desktop"
                    sizes="(max-width: 1232px) calc(100vw - 2.5rem), 1200px"
                    priority
                  />
                  <Image
                    src="/visuals/landing/hero-prototype.jpg"
                    alt=""
                    width={1024}
                    height={684}
                    className="hero-figma-image hero-figma-image--phone"
                    sizes="(max-width: 499px) calc(100vw - 2.5rem), 1024px"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
