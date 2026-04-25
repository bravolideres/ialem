"use client";

import { useState, useEffect, useCallback } from "react";

interface PostGalleryProps {
  images: string[];
  postNum: string;
  postTitle: string;
}

export default function PostGallery({ images, postNum, postTitle }: PostGalleryProps) {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const isCarrossel = images.length > 1;

  const close = useCallback(() => setModalIdx(null), []);
  const next = useCallback(
    () => setModalIdx((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setModalIdx((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (modalIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalIdx, close, next, prev]);

  // Lock body scroll while modal open
  useEffect(() => {
    if (modalIdx === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [modalIdx]);

  if (images.length === 0) return null;

  return (
    <>
      <div className={`post-gallery${isCarrossel ? " is-carrossel" : ""}`}>
        {isCarrossel ? (
          <div className="post-gallery-strip" role="list">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className="post-gallery-thumb"
                onClick={() => setModalIdx(i)}
                aria-label={`Abrir card ${i + 1} de ${images.length} · ${postTitle}`}
                role="listitem"
              >
                <img src={src} alt={`${postTitle} — card ${i + 1}`} loading="lazy" />
                <span className="post-gallery-thumb-num">{i + 1}</span>
              </button>
            ))}
          </div>
        ) : (
          <button
            type="button"
            className="post-gallery-single"
            onClick={() => setModalIdx(0)}
            aria-label={`Abrir arte · ${postTitle}`}
          >
            <img src={images[0]} alt={postTitle} loading="lazy" />
            <span className="post-gallery-zoom">↗ Ampliar</span>
          </button>
        )}
      </div>

      {modalIdx !== null && (
        <div
          className="post-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Arte do post ${postNum}`}
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
          {isCarrossel && (
            <>
              <button
                type="button"
                className="post-gallery-modal-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Card anterior"
              >
                ‹
              </button>
              <button
                type="button"
                className="post-gallery-modal-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Próximo card"
              >
                ›
              </button>
              <div className="post-gallery-modal-counter">
                {modalIdx + 1} / {images.length}
              </div>
            </>
          )}
          <img
            src={images[modalIdx]}
            alt={`${postTitle} — ${isCarrossel ? `card ${modalIdx + 1}` : "arte"}`}
            className="post-gallery-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
