"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: string; type: "bot" | "cta"; text: string }>>([]);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Simulate bot response with typing
      const timer = setTimeout(() => {
        setMessages([
          {
            id: "1",
            type: "bot",
            text: "Oi! 👋 Somos a IAlem. Quer ver como a IA pode automatizar seu atendimento e operação?",
          },
        ]);

        const ctaTimer = setTimeout(() => {
          setShowCTA(true);
        }, 2500);

        return () => clearTimeout(ctaTimer);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    const handleScroll = () => {
      // Find FAQ section by id
      const faqSection = document.getElementById("faq");
      if (!faqSection) return;

      const faqRect = faqSection.getBoundingClientRect();
      const faqBottom = faqRect.bottom;
      const windowHeight = window.innerHeight;

      // Open chat when user scrolls to the FAQ section (bottom of FAQ near top of viewport)
      if (faqBottom < windowHeight * 0.4 && !isOpen) {
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleWhatsApp = () => {
    const text = "Oi! Vim pelo site e quero fazer um teste da IAlem na prática";
    const encodedText = encodeURIComponent(text);
    window.open(
      `${WHATSAPP_LINK}?text=${encodedText}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-chat-btn"
        aria-label="Abrir chat com IAlem"
        title="Abrir chat"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="floating-chat-container">
          <div className="floating-chat-header">
            <div className="floating-chat-title">
              <img
                src="/brand/ialem-icon-gold.svg"
                alt="IAlem"
                className="floating-chat-avatar"
              />
              <div className="floating-chat-title-text">
                <span className="floating-chat-name">IAlem</span>
                <div className="floating-chat-status">
                  <div className="online-dot" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setMessages([]);
                setShowCTA(false);
              }}
              className="floating-chat-close"
              aria-label="Fechar chat"
            >
              ✕
            </button>
          </div>

          <div className="floating-chat-content">
            {messages.map((msg) => (
              <div key={msg.id} className={`floating-chat-msg floating-chat-msg-${msg.type}`}>
                {msg.type === "bot" ? (
                  <div className="floating-chat-bubble">
                    <span className="typing-animation">{msg.text}</span>
                  </div>
                ) : null}
              </div>
            ))}

            {showCTA && (
              <div className="floating-chat-cta">
                <button onClick={handleWhatsApp} className="floating-chat-action">
                  Ver na prática
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
