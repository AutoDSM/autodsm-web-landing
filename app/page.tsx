"use client";

import Image from "next/image";

const MACOS_DOWNLOAD_URL =
  "https://github.com/AutoDSM/autodsm-app-t3code/releases/download/v0.0.27/AutoDSM-0.0.27-arm64.dmg";

function AppleIcon() {
  return (
    <svg
      className="hero-download-btn-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.04.28.04.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <main>
        {/* ─────────────── Hero Section (Figma: AutoDSM - Landing - Hero / Light) ─────────────── */}
        <section className="hero-shell hero-shell--fullbleed">
          <div className="figma-hero-panel">
            <div className="figma-hero-inner">
              <div className="figma-hero-content">
                <div className="figma-hero-topbar hero-entrance" aria-label="AutoDSM header">
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
                </div>

                <div className="hero">
                  <div className="hero-lead">
                    <div className="hero-heading">
                      <h1 className="hero-entrance figma-hero-title">
                        Design, build, publish, and maintain your design system
                      </h1>
                    </div>
                    <p className="hero-sub hero-entrance figma-hero-subtitle">
                      AutoDSM is the design system manager built for empowering product designers to do their best work.
                    </p>
                  </div>

                  <div className="hero-download hero-entrance">
                    <button
                      type="button"
                      className="hero-download-btn"
                      onClick={() => {
                        window.location.href = MACOS_DOWNLOAD_URL;
                      }}
                    >
                      <AppleIcon />
                      <span>Download for MacOS</span>
                    </button>
                  </div>
                </div>
              </div>

              <section className="hero-figma-frame hero-entrance" aria-label="AutoDSM app preview">
                <div className="hero-figma-media hero-figma-background">
                  <Image
                    src="/visuals/landing/hero-background.png"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="hero-figma-background-image"
                  />
                  <div className="hero-figma-fade" aria-hidden="true" />
                </div>
                <div className="hero-figma-media hero-figma-foreground" aria-hidden="true">
                  <div className="hero-figma-foreground-inner">
                    <Image
                      src="/visuals/landing/AutoDSM-preview.svg"
                      alt=""
                      width={1200}
                      height={850}
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) calc(100vw - 48px), 1000px"
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
