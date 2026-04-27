"use client";

import { useEffect, useRef, useState } from "react";

const CANVA_EMBED =
  "https://www.canva.com/design/DAHH302mFQE/AsQe_ynIW0DktQ9zkbcEXA/view?embed";
const CANVA_TEMPLATE = "https://canva.link/p5p4r891a1bm6bq";
const CANVA_VIEW =
  "https://www.canva.com/design/DAHH302mFQE/AsQe_ynIW0DktQ9zkbcEXA/view";

export default function ApresentacaoPage() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("apNav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
  };

  return (
    <>
      <nav className="ap-nav" id="apNav">
        <div className="inner">
          <a className="brand-link" href="/" aria-label="IAlem">
            <img src="/brand/ialem-logo-gold.svg" alt="IAlem" />
          </a>
          <div className="ap-nav-actions">
            <button type="button" className="ap-btn ap-btn-ghost" onClick={goFullscreen}>
              Tela cheia
            </button>
            <a
              className="ap-btn ap-btn-ghost"
              href={CANVA_VIEW}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Canva
            </a>
            <a
              className="ap-btn ap-btn-primary"
              href={CANVA_TEMPLATE}
              target="_blank"
              rel="noreferrer"
            >
              Fazer cópia
            </a>
          </div>
          <select
            className="doc-switcher"
            defaultValue="/apresentacao"
            onChange={(e) => {
              window.location.href = e.target.value;
            }}
          >
            <option value="/marca">Marca</option>
            <option value="/playbook">Playbook</option>
            <option value="/apresentacao">Apresentação</option>
          </select>
        </div>
      </nav>

      <main className="ap-main">
        <div className="ap-deck">
          <div className="ap-deck-frame">
            {!loaded && (
              <div className="ap-deck-loading" aria-hidden>
                <span className="dot" />
                Carregando apresentação…
              </div>
            )}
            <iframe
              ref={frameRef}
              src={CANVA_EMBED}
              title="Apresentação Comercial IAlem"
              loading="lazy"
              allow="fullscreen"
              allowFullScreen
              onLoad={() => setLoaded(true)}
            />
          </div>
          <p className="ap-deck-hint">
            Use as setas <kbd>←</kbd> <kbd>→</kbd> pra navegar entre os slides ·
            <kbd>F</kbd> pra tela cheia dentro do Canva
          </p>
        </div>
      </main>
    </>
  );
}
