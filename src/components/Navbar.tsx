"use client";

import { useState, useEffect } from "react";
import IAlemLogo from "./IAlemLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#solucao", label: "Solução" },
    { href: "#demo", label: "Demo ao vivo" },
    { href: "#funciona", label: "Como funciona" },
    { href: "#integracoes", label: "Integrações" },
    { href: "#casos", label: "Casos" },
  ];

  return (
    <nav className={`top${scrolled ? " scrolled" : ""}`}>
      <a href="#" className="logo" style={{ color: "var(--gold)" }}>
        <IAlemLogo height={24} />
      </a>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <button
        className="nav-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>
      <a href="#cta" className="btn btn-primary btn-sm">
        Diagnóstico gratuito →
      </a>

      <div className={`nav-links-mobile${mobileOpen ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
