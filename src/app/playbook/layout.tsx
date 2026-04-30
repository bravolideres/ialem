import type { Metadata } from "next";
import "./playbook.css";

export const metadata: Metadata = {
  title: "Playbook de Conteúdo",
  description:
    "Estratégia completa de conteúdo e presença digital da IAlem: personas, pilares editoriais, calendário de publicações, templates e diretrizes de tráfego pago.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "IAlem — Playbook de Conteúdo & Presença Digital",
    description:
      "Estratégia completa de conteúdo e presença digital da IAlem: personas, pilares editoriais, calendário de publicações, templates e diretrizes de tráfego pago.",
  },
  twitter: {
    title: "IAlem — Playbook de Conteúdo & Presença Digital",
    description:
      "Estratégia completa de conteúdo e presença digital da IAlem: personas, pilares editoriais, calendário de publicações, templates e diretrizes de tráfego pago.",
  },
  alternates: {
    canonical: "/playbook",
  },
};

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
