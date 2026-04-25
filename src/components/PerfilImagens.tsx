"use client";

import { useState, useEffect, useCallback } from "react";

interface ImagemConfig {
  src: string;
  label: string;
  variant: "antigo" | "novo" | "compare";
  alt: string;
}

const IMAGENS: ImagemConfig[] = [
  {
    src: "/playbook/perfil/feed-antigo.png",
    label: "Antes",
    variant: "antigo",
    alt: "Feed antigo do Instagram da IAlem",
  },
  {
    src: "/playbook/perfil/feed-novo.png",
    label: "Sugerido",
    variant: "novo",
    alt: "Feed novo sugerido para o Instagram da IAlem",
  },
  {
    src: "/playbook/perfil/antes-depois.png",
    label: "Comparativo",
    variant: "compare",
    alt: "Comparativo lado a lado: feed antigo vs novo",
  },
];

export default function PerfilImagens() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);

  useEffect(() => {
    if (openIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIdx, close]);

  useEffect(() => {
    if (openIdx === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [openIdx]);

  return (
    <>
      <div className="perfil-imgs-grid">
        {IMAGENS.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`perfil-img-card ${img.variant}`}
            onClick={() => setOpenIdx(i)}
            aria-label={`Abrir ${img.label}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <span
              className={`perfil-img-label${img.variant === "antigo" ? " antigo" : ""}`}
            >
              {img.label}
            </span>
          </button>
        ))}
      </div>

      {openIdx !== null && (
        <div
          className="post-gallery-modal"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            className="post-gallery-modal-close"
            onClick={close}
            aria-label="Fechar"
          >
            ✕
          </button>
          <img
            src={IMAGENS[openIdx].src}
            alt={IMAGENS[openIdx].alt}
            className="post-gallery-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
