"use client";

import { RevealItem } from "@/components/Reveal";

const items = [
  {
    src: "/brand/images/sala-reunioes.jpeg",
    label: "Sala",
    text: "Onde a estratégia ganha forma — diagnóstico, mapa de gargalos e desenho do agente.",
    alt: "Sala de reuniões executiva da IAlem com letreiro dourado e mesa com laptops",
  },
  {
    src: "/brand/images/desk-stationery.jpeg",
    label: "Mesa",
    text: "Onde a execução acontece — papelaria, caderno, anotação à mão. Trabalho artesanal.",
    alt: "Desk set da IAlem com caderno, caneta, cartões e celular",
  },
  {
    src: "/brand/images/dashboard-laptop.jpeg",
    label: "Tela",
    text: "Onde o agente roda — dashboard, métricas em tempo real, supervisão humana ativa.",
    alt: "Laptop rodando o dashboard de Automação Inteligente da IAlem",
  },
  {
    src: "/brand/images/proposta-comercial.jpeg",
    label: "Entrega",
    text: "Onde o trabalho chega no cliente — proposta impressa, contrato, cartão na mão.",
    alt: "Proposta comercial impressa da IAlem com hot stamping dourado",
  },
];

export default function Bastidor() {
  return (
    <section id="bastidor">
      <div className="wrap">
        <div className="bastidor-head">
          <div className="bastidor-head-left">
            <span className="eyebrow">Por dentro</span>
            <h2>
              Não é SaaS. É <em>gente fazendo</em>.
            </h2>
          </div>
          <p className="bastidor-lede">
            Cada projeto passa por uma mesa, vira proposta, vira agente em
            produção e segue sob supervisão humana. A IAlem é tangível —
            papel, sala, código, time. Você contrata pessoas, não um
            login.
          </p>
        </div>

        <div className="bastidor-grid">
          {items.map((it, i) => (
            <RevealItem key={it.label} delay={i * 0.1} className="bastidor-card">
              <div className="bastidor-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.alt} loading="lazy" />
              </div>
              <div className="bastidor-meta">
                <span className="bastidor-label">{it.label}</span>
                <p className="bastidor-text">{it.text}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
