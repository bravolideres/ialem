import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IAlem — Leve seu atendimento além.",
  description:
    "A IAlem cria agentes inteligentes que atendem, qualificam e agendam no WhatsApp — com a voz da sua marca, 24/7, integrado ao seu CRM.",
  keywords: [
    "inteligência artificial",
    "atendimento automatizado",
    "WhatsApp",
    "agentes IA",
    "automação comercial",
    "CRM",
    "chatbot inteligente",
  ],
  openGraph: {
    title: "IAlem — Leve seu atendimento além.",
    description:
      "Agentes inteligentes que atendem, qualificam e agendam — com a voz da sua marca.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
