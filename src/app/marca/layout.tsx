import type { Metadata } from "next";
import "./marca.css";

export const metadata: Metadata = {
  title: "Identidade Visual",
  description:
    "Manual completo da marca IAlem: conceito, logo, paleta de cores, tipografia, voz e tom, e kit de assets para download.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "IAlem — Identidade Visual",
    description:
      "Manual completo da marca IAlem: conceito, logo, paleta de cores, tipografia, voz e tom, e kit de assets para download.",
  },
  twitter: {
    title: "IAlem — Identidade Visual",
    description:
      "Manual completo da marca IAlem: conceito, logo, paleta de cores, tipografia, voz e tom, e kit de assets para download.",
  },
  alternates: {
    canonical: "/marca",
  },
};

export default function MarcaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
