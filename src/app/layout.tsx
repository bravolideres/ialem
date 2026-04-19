import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ialem.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IAlem — Agentes de IA para Atendimento e Vendas",
    template: "%s | IAlem",
  },
  description:
    "A IAlem cria agentes inteligentes sob medida que atendem, qualificam e agendam no WhatsApp — com a voz da sua marca, 24/7, integrado ao seu CRM. Mais conversões, menos trabalho repetitivo.",
  keywords: [
    "inteligência artificial",
    "agentes de IA",
    "atendimento automatizado",
    "automação WhatsApp",
    "chatbot inteligente",
    "qualificação de leads",
    "automação comercial",
    "CRM",
    "agendamento automático",
    "atendimento 24/7",
    "IA para empresas",
    "automação de vendas",
  ],
  authors: [{ name: "IAlem", url: siteUrl }],
  creator: "IAlem",
  publisher: "IAlem",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "IAlem",
    title: "IAlem — Agentes de IA para Atendimento e Vendas",
    description:
      "Agentes inteligentes sob medida que atendem, qualificam e agendam — com a voz da sua marca, 24/7. Mais conversões, menos trabalho repetitivo.",
    images: [
      {
        url: "/images/hero-atendimento.jpg",
        width: 1200,
        height: 630,
        alt: "IAlem — Agentes de IA para atendimento e vendas",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IAlem — Agentes de IA para Atendimento e Vendas",
    description:
      "Agentes inteligentes sob medida que atendem, qualificam e agendam — com a voz da sua marca, 24/7.",
    images: ["/images/hero-atendimento.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
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
