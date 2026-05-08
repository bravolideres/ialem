"use client";

import { useState, useEffect } from "react";
import IAlemLogo from "./IAlemLogo";
import { WHATSAPP_LINK } from "@/lib/constants";

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
    { href: "#casos", label: "Cenários" },
    { href: "#demo", label: "Demo" },
    { href: "#integracoes", label: "Integrações" },
    { href: "#faq", label: "FAQ" },
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
      <a href={`${WHATSAPP_LINK}?text=Oi!%20Vim%20pelo%20site%20e%20quero%20fazer%20um%20teste%20da%20IAlem%20na%20prática`} target="_blank" className="btn btn-primary btn-sm">
        Testar na Prática
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
