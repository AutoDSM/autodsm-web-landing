"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AUTODSM_DEMO_URL } from "@/lib/siteUrls";

const MOBILE_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
] as const;

const FOCUSABLE = "a[href]";

function getTrapElements(
  toggle: HTMLElement | null,
  panel: HTMLElement | null,
): HTMLElement[] {
  const fromPanel = panel
    ? (Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)) as HTMLElement[])
    : [];
  if (toggle) return [toggle, ...fromPanel];
  return fromPanel;
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="mobile-nav-icon" aria-hidden="true" data-open={open}>
      <span className="mobile-nav-bun" />
      <span className="mobile-nav-bun" />
      <span className="mobile-nav-bun" />
    </span>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) {
      lastActiveRef.current?.focus();
      return;
    }
    lastActiveRef.current = document.activeElement as HTMLElement | null;
    const t = requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    });
    return () => cancelAnimationFrame(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const list = getTrapElements(
        toggleRef.current,
        panelRef.current,
      ) as unknown as HTMLElement[];
      if (list.length < 2) return;
      const active = document.activeElement;
      if (!active) return;
      const i = list.indexOf(active as HTMLElement);
      if (i < 0) return;
      if (e.shiftKey) {
        if (i === 0) {
          e.preventDefault();
          list[list.length - 1]?.focus();
        }
      } else if (i === list.length - 1) {
        e.preventDefault();
        list[0]?.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [open]);

  const onBackdropPointer = (e: React.PointerEvent) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <div className="mobile-nav" data-nav-open={open || undefined}>
      <button
        ref={toggleRef}
        type="button"
        className="mobile-nav__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-haspopup="dialog"
      >
        <MenuIcon open={open} />
      </button>

      <div className="mobile-nav__layer" hidden={!open} aria-hidden={!open}>
        {open && (
          <>
            <div
              className="mobile-nav__backdrop"
              onPointerDown={onBackdropPointer}
            />
            <div
              ref={panelRef}
              id={panelId}
              className="mobile-nav__panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <p id={titleId} className="sr-only">
                Site sections
              </p>
              <a
                href="#product"
                className="wordmark mobile-nav__brand"
                aria-label="AutoDSM home"
                onClick={close}
              >
                <Image
                  src="/brand/Logo-Light-Text.svg"
                  alt=""
                  width={184}
                  height={64}
                  className="logo-on-light"
                  aria-hidden
                />
                <Image
                  src="/brand/Logo-Dark-Text.svg.svg"
                  alt=""
                  width={184}
                  height={64}
                  className="logo-on-dark"
                  aria-hidden
                />
              </a>
              <nav
                className="mobile-nav__list"
                aria-label="Primary navigation"
              >
                <a
                  href={AUTODSM_DEMO_URL}
                  className="mobile-nav__cta btn primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  aria-label="View product demo (opens in new tab)"
                >
                  View demo
                </a>
                {MOBILE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="mobile-nav__link"
                    onClick={close}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
