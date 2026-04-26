"use client";

import { useState, useEffect, useCallback } from "react";

interface AppMockupProps {
  src: string;
  alt: string;
  label: string;
  desc: string;
  /** classe extra de reveal (ex.: "reveal d2") */
  reveal?: string;
  /** Faz o card ocupar a linha inteira do grid (full width). */
  fullWidth?: boolean;
  /** style adicional aplicado no wrapper */
  style?: React.CSSProperties;
}

export default function AppMockup({
  src,
  alt,
  label,
  desc,
  reveal,
  fullWidth = false,
  style,
}: AppMockupProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // ESC fecha
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  // Lock scroll
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const className = [
    "app-mockup",
    "is-clickable",
    fullWidth ? "is-full" : "",
    reveal ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => setOpen(true)}
        aria-label={`Ampliar ${label}`}
      >
        <div
          className="app-stage"
          style={{ padding: 0, overflow: "hidden", borderRadius: "var(--r-card)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: fullWidth ? "auto" : "100%",
              objectFit: "cover",
              display: "block",
            }}
            loading="lazy"
          />
          <span className="app-mockup-zoom">↗ Ampliar</span>
        </div>
        <div className="app-meta">
          <div className="app-label">{label}</div>
          <div className="app-desc">{desc}</div>
        </div>
      </button>

      {open && (
        <div
          className="app-mockup-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Aplicação · ${label}`}
          onClick={close}
        >
          <button
            type="button"
            className="app-mockup-modal-close"
            onClick={close}
            aria-label="Fechar"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="app-mockup-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
