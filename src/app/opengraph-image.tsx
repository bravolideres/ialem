import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "IAlem — Leve seu negócio além com IA, sem perder o jeito humano";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Agência de Automação Inteligente",
    title: "Leve sua empresa além com IA.",
    subtitle: "Sem perder o jeito humano.",
  });
}
