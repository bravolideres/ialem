"use client";

import { useState } from "react";
import { RevealItem } from "@/components/Reveal";

const faqs = [
  {
    q: "O agente vai saber responder sobre a minha empresa?",
    a: "Sim. Treinamos o agente com todas as informações da sua empresa — produtos, serviços, preços, políticas e tom de voz. Ele atua como um funcionário capacitado que conhece o negócio de ponta a ponta, fala como a sua marca e funciona dia e noite.",
  },
  {
    q: "Funciona com os sistemas que eu já uso?",
    a: "Sim. A IAlem se integra via API com CRMs (HubSpot, Pipedrive, RD Station, Salesforce), ERPs, planilhas e ferramentas de automação como Zapier e Make. Não precisa trocar nada — a gente encaixa no que você já tem.",
  },
  {
    q: "A IAlem substitui meu time de atendimento?",
    a: "Depende da sua operação. Se você tem um time, a IAlem cuida do primeiro contato, triagem e follow-up — liberando seu time para fechar negócio. Se você não tem equipe dedicada, a IAlem pode conduzir o atendimento completo de ponta a ponta, do primeiro contato ao agendamento. Ela se adapta ao tamanho e à realidade da sua empresa.",
  },
  {
    q: "Funciona só para vendas?",
    a: "Não. A IAlem atua em qualquer ponto de contato: agendamento, confirmação, pós-venda, NPS, mensagens transacionais, cobranças, onboarding de clientes e comunicação interna entre equipes. Onde houver conversa, a IAlem pode operar.",
  },
  {
    q: "E se o agente não souber responder algo?",
    a: "Ele escala para o time humano. Toda conversa que sai do escopo vai direto pro seu atendente, com o contexto completo do que já foi tratado. Seu cliente nunca fica sem resposta — e seu time recebe a bola com todo o histórico.",
  },
  {
    q: "Quanto tempo leva para começar a operar?",
    a: "Depende da complexidade, mas a maioria das operações entra em produção entre 1 e 3 semanas. Isso inclui treinamento da IA, integração com seus sistemas e ajuste fino do tom de voz. No diagnóstico já apresentamos o cronograma.",
  },
  {
    q: "Tem custo de implantação?",
    a: "Sim, existe um investimento inicial que varia conforme a complexidade do fluxo — número de integrações, canais e regras de negócio. No diagnóstico gratuito já apresentamos o escopo completo com valores transparentes.",
  },
  {
    q: "Funciona no meu segmento?",
    a: "Se sua operação tem atendimento, qualificação ou agendamento, a IAlem funciona. Já operamos em concessionárias, clínicas, cooperativas, imobiliárias, e-commerce e serviços B2B. No diagnóstico, avaliamos as oportunidades do seu setor.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>
            O que você precisa <em>saber</em>.
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <RevealItem key={i} delay={i * 0.06} className={`faq-item${openIdx === i ? " open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span>{f.q}</span>
                <span className="faq-icon">{openIdx === i ? "−" : "+"}</span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
