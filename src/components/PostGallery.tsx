"use client";

import { useState, useEffect, useCallback } from "react";

interface PostGalleryProps {
  images: string[];
  postNum: string;
  postTitle: string;
}

export default function PostGallery({ images, postNum, postTitle }: PostGalleryProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const isCarrossel = images.length > 1;

  const closeModal = useCallback(() => setModalIdx(null), []);
  const nextModal = useCallback(
    () => setModalIdx((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prevModal = useCallback(
    () =>
      setModalIdx((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  const nextInline = useCallback(
    () => setCurrentIdx((i) => (i + 1) % images.length),
    [images.length]
  );
  const prevInline = useCallback(
    () => setCurrentIdx((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Keyboard navigation when modal open
  useEffect(() => {
    if (modalIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowRight") nextModal();
      else if (e.key === "ArrowLeft") prevModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalIdx, closeModal, nextModal, prevModal]);

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
        {/* Main image — click opens modal */}
        <div className="post-gallery-main-wrap">
          <button
            type="button"
            className="post-gallery-main"
            onClick={() => setModalIdx(currentIdx)}
            aria-label={
              isCarrossel
                ? `Abrir card ${currentIdx + 1} de ${images.length} em tela cheia · ${postTitle}`
                : `Ampliar arte · ${postTitle}`
            }
          >
            <img
              src={images[currentIdx]}
              alt={
                isCarrossel
                  ? `${postTitle} — card ${currentIdx + 1}`
                  : postTitle
              }
              loading="lazy"
            />
            <span className="post-gallery-zoom">↗ Ampliar</span>
            {isCarrossel && (
              <span className="post-gallery-counter">
                {currentIdx + 1} / {images.length}
              </span>
            )}
          </button>

          {isCarrossel && (
            <>
              <button
                type="button"
                className="post-gallery-inline-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevInline();
                }}
                aria-label="Card anterior"
              >
                ‹
              </button>
              <button
                type="button"
                className="post-gallery-inline-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextInline();
                }}
                aria-label="Próximo card"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Thumbs strip — only for carrossel */}
        {isCarrossel && (
          <div className="post-gallery-thumbs" role="tablist">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`post-gallery-thumb${i === currentIdx ? " active" : ""}`}
                onClick={() => setCurrentIdx(i)}
                aria-label={`Ir para card ${i + 1}`}
                aria-selected={i === currentIdx}
                role="tab"
              >
                <img src={src} alt="" loading="lazy" />
                <span className="post-gallery-thumb-num">{i + 1}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {modalIdx !== null && (
        <div
          className="post-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Arte do post ${postNum}`}
          onClick={closeModal}
        >
          <button
            type="button"
            className="post-gallery-modal-close"
            onClick={closeModal}
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
                  prevModal();
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
                  nextModal();
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
