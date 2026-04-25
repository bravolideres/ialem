import type { Metadata } from "next";
import "./apresentacao.css";

export const metadata: Metadata = {
  title: "IAlem — Apresentação Comercial",
  description:
    "Estrutura base da apresentação comercial da IAlem. Referência para a designer adaptar no Canva.",
  robots: "noindex, nofollow",
};

export default function ApresentacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
