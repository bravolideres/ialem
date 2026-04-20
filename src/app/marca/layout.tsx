import type { Metadata } from "next";
import "./marca.css";

export const metadata: Metadata = {
  title: "IAlem — Identidade Visual",
  description:
    "Manual da marca IAlem: conceito, logo, paleta, tipografia, voz e kit completo.",
  robots: "noindex, nofollow",
};

export default function MarcaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
