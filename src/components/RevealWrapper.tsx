"use client";

import { useEffect, useRef, Children, cloneElement, isValidElement } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger child elements with cascading delay (useful for grids/lists) */
  stagger?: boolean;
  /** Base delay in ms before this element starts revealing (default: 0) */
  delay?: number;
}

export default function RevealWrapper({ children, stagger = false, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user preference for reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("reveal-visible");
      return;
    }

    // Apply base delay as CSS custom property
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    // If stagger mode, set incremental delays on direct stagger children
    if (stagger) {
      const staggerChildren = el.querySelectorAll(":scope > * > .reveal-child, :scope > .reveal-child");
      staggerChildren.forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${delay + i * 100}ms`;
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);

            // Remove will-change after animation completes for performance
            setTimeout(() => {
              (entry.target as HTMLElement).style.willChange = "auto";
            }, 1200 + delay);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  return (
    <div ref={ref} className="reveal-section">
      {children}
    </div>
  );
}
