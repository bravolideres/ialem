import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "IAlem — Playbook de Conteúdo";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Playbook de Conteúdo",
    title: "Estratégia de conteúdo & presença digital.",
  });
}
