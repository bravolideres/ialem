import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "IAlem — Identidade Visual";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Identidade Visual",
    title: "A marca IAlem.",
    subtitle: "Conceito, logo, paleta, tipografia e voz.",
  });
}
