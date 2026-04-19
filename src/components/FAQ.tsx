"use client";

import { useState } from "react";

const faqs = [
  {
    q: "O agente vai saber responder sobre a minha empresa?",
    a: "Sim. Antes de entrar em operação, treinamos o agente com todas as informações da sua empresa — produtos, serviços, preços, políticas, tom de voz. Ele atua como um funcionário bem treinado e capacitado, que conhece o negócio de ponta a ponta e funciona dia e noite.",
  },
  {
    q: "A IAlem substitui meu time de atendimento?",
    a: "Não. A IAlem amplifica seu time. Ela cuida do primeiro contato, triagem, qualificação e follow-up — seu time foca em fechar negócio e cuidar de casos que exigem atenção humana. Ninguém é substituído, todos rendem mais.",
  },
  {
    q: "Funciona só para vendas?",
    a: "Não. A IAlem atua em qualquer ponto de contato: pré-atendimento, agendamento, confirmação, pós-venda, NPS, mensagens transacionais, cobranças, onboarding de clientes e comunicação interna entre equipes. Onde houver conversa, a IAlem pode operar.",
  },
  {
    q: "Tem custo de implantação?",
    a: "Sim, existe um investimento inicial de implantação que varia de acordo com a complexidade do fluxo da sua empresa — número de integrações, canais e regras de negócio. No diagnóstico gratuito já apresentamos o escopo completo com valores transparentes.",
  },
  {
    q: "E se o agente não souber responder algo?",
    a: "Ele escala para o time humano. Toda conversa que sai do escopo vai direto pro seu atendente, com o contexto completo do que já foi tratado. Seu cliente nunca fica sem resposta — e seu time recebe a bola com todo o histórico.",
  },
  {
    q: "Preciso de equipe técnica para implementar?",
    a: "Não. Nossa equipe cuida de toda a integração. Você só precisa compartilhar acessos ao CRM e aos canais — nós fazemos o resto. Sem código, sem dor de cabeça técnica do seu lado.",
  },
  {
    q: "O agente realmente parece a minha marca?",
    a: "Sim. Treinamos o tom de voz, vocabulário e limites do agente com base no seu material real — site, scripts, manuais, identidade da marca. Não é um chatbot genérico: é a extensão natural do seu atendimento.",
  },
  {
    q: "Funciona no meu segmento?",
    a: "Se sua operação tem atendimento, qualificação ou agendamento, a IAlem funciona. Já operamos em concessionárias, clínicas, cooperativas, imobiliárias, e-commerce e serviços B2B. No diagnóstico, avaliamos as oportunidades específicas do seu setor.",
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
            <div
              className={`faq-item${openIdx === i ? " open" : ""}`}
              key={i}
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
