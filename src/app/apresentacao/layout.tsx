import type { Metadata } from "next";
import "./apresentacao.css";

export const metadata: Metadata = {
  title: "Apresentação Comercial",
  description:
    "Conheça como a IAlem leva empresas além com agentes de IA sob medida — do diagnóstico à operação, com um único ponto de contato e sem perder o jeito humano.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "IAlem — Apresentação Comercial",
    description:
      "Conheça como a IAlem leva empresas além com agentes de IA sob medida — do diagnóstico à operação, com um único ponto de contato e sem perder o jeito humano.",
  },
  twitter: {
    title: "IAlem — Apresentação Comercial",
    description:
      "Conheça como a IAlem leva empresas além com agentes de IA sob medida — do diagnóstico à operação, com um único ponto de contato e sem perder o jeito humano.",
  },
  alternates: {
    canonical: "/apresentacao",
  },
};

export default function ApresentacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
