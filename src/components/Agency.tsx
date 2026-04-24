import { RevealItem } from "@/components/Reveal";

const pillars = [
  {
    num: "a",
    title: "Personalização profunda",
    desc: "Nada de prateleira. Cada agente é desenhado no seu fluxo, na sua voz, com as suas regras — integrado ao que você já usa.",
  },
  {
    num: "b",
    title: "Um ponto de contato",
    desc: "Você fala com um gerente de conta que conhece o seu projeto de ponta a ponta — do diagnóstico à operação. Sem ticket, sem fila, sem repetir a história.",
  },
  {
    num: "c",
    title: "Sem sopa de letrinhas",
    desc: "N8N, RAG, LLM, webhooks — a engenharia por trás é problema nosso. Você conversa sobre o seu negócio; a gente traduz em tecnologia que funciona.",
  },
];

export default function Agency() {
  return (
    <section id="agencia">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Agência, não produto</span>
          <h2>
            Você contrata um <em>time</em>.<br />Não uma ferramenta.
          </h2>
          <p>
            A IAlem não vende uma licença de R$ 500/mês que você configura sozinho.
            A gente entra junto, entende a operação e constrói o que a sua empresa precisa —
            para depois operar junto com você.
          </p>
        </div>
        <div className="steps">
          {pillars.map((p, i) => (
            <RevealItem key={p.num} delay={i * 0.15} className="step">
              <div className="step-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
