"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Observe each .reveal-child individually instead of the whole section */
  stagger?: boolean;
}

export default function RevealWrapper({ children, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user preference for reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("reveal-visible");
      el.querySelectorAll(".reveal-child").forEach((child) => {
        child.classList.add("reveal-child-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;

          if (target.classList.contains("reveal-child")) {
            // Individual child entered the viewport
            target.classList.add("reveal-child-visible");
          } else {
            // Section wrapper entered the viewport (heading etc.)
            target.classList.add("reveal-visible");
          }

          observer.unobserve(target);

          // Clean up will-change after animation
          setTimeout(() => {
            target.style.willChange = "auto";
          }, 900);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    // Always observe the section wrapper (for heading fade-in)
    observer.observe(el);

    // If stagger mode, observe each child individually
    if (stagger) {
      const children = el.querySelectorAll(".reveal-child");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className="reveal-section">
      {children}
    </div>
  );
}
