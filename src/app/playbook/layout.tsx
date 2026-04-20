import type { Metadata } from "next";
import "./playbook.css";

export const metadata: Metadata = {
  title: "IAlem — Playbook de Conteúdo & Presença Digital",
  description:
    "Estratégia completa de conteúdo, presença digital e tráfego pago para a IAlem. Personas, pilares, calendário editorial e templates.",
  robots: "noindex, nofollow",
};

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
