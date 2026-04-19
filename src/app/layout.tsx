import type { Metadata } from "next";
import "./globals.css";

/* Resolve metadataBase automatically from Vercel env or fallback */
const getBaseUrl = () => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "IAlem — Atenda mais, sem perder o jeito humano",
    template: "%s | IAlem",
  },
  description:
    "Agentes de IA sob medida para sua operação — atendem, qualificam e vendem 24/7, na voz da sua marca, integrados ao seu CRM.",
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
  authors: [{ name: "IAlem" }],
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
    siteName: "IAlem",
    title: "IAlem — Atenda mais, sem perder o jeito humano",
    description:
      "Criamos agentes de IA sob medida que atendem seus clientes como um funcionário dedicado — qualificando leads, agendando e vendendo 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IAlem — Atenda mais, sem perder o jeito humano",
    description:
      "Seu próximo cliente não vai esperar. Agentes de IA que atendem 24/7, na voz da sua marca.",
  },
  alternates: {
    canonical: "/",
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
