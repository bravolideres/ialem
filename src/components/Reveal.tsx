"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/* ---- Easing & Spring configs ---- */
const smoothEase = [0.22, 1, 0.36, 1] as const;

/* ---- Section-level reveal (wraps entire sections) ---- */
export function Reveal({
  children,
  className,
  width = "100%",
}: {
  children: ReactNode;
  className?: string;
  width?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: smoothEase }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}

/* ---- Individual item reveal (cards, pairs, cells) ---- */
export function RevealItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: smoothEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---- Hero entrance (staggered children, plays on mount) ---- */
const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

export function HeroReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={heroContainer}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroChild({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={heroChild} className={className}>
      {children}
    </motion.div>
  );
}
