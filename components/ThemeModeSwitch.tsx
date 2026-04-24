"use client";

type Props = {
  isDark: boolean;
  onToggle: () => void;
};

function SunIcon() {
  return (
    <svg
      className="theme-switch-svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16V3m0 18v-1M4.22 4.22l.7.7m14.16 14.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7m14.16-14.16.7-.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="theme-switch-svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M21 14.5A7.5 7.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Light/dark control for the page (`data-theme` on `<html>` is managed in `page.tsx`).
 */
export function ThemeModeSwitch({ isDark, onToggle }: Props) {
  return (
    <button
      type="button"
      className="theme-switch"
      role="switch"
      aria-checked={isDark}
      onClick={onToggle}
      aria-label={isDark ? "Use light theme" : "Use dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-switch-track" aria-hidden>
        <span className="theme-switch-knob" />
        <span className={`theme-switch-slice${!isDark ? " theme-switch-slice--on" : ""}`}>
          <SunIcon />
        </span>
        <span className={`theme-switch-slice${isDark ? " theme-switch-slice--on" : ""}`}>
          <MoonIcon />
        </span>
      </span>
    </button>
  );
}
