import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "IAlem — Apresentação Comercial";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Apresentação Comercial",
    title: "Leve sua empresa além com IA.",
    subtitle: "Sem perder o jeito humano.",
  });
}
