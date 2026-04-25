"use client";

import Image from "next/image";

function HeaderContent() {
  return (
    <div className="header-inner container">
      <a className="wordmark" href="#product" aria-label="AutoDSM home">
        <Image
          src="/brand/Logo-Light-Text.svg"
          alt="AutoDSM"
          width={184}
          height={64}
          className="logo-on-light"
          priority
        />
        <Image
          src="/brand/Logo-Dark-Text.svg.svg"
          alt="AutoDSM"
          width={184}
          height={64}
          className="logo-on-dark"
          priority
        />
      </a>

      <nav className="main-nav" aria-label="Primary navigation">
        <a href="#product">Product</a>
        <a href="#how-it-works">How it works</a>
      </nav>
    </div>
  );
}

export default function Header() {
  return (
    <header className="header-static">
      <HeaderContent />
    </header>
  );
}
