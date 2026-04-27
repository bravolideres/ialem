import { RevealItem } from "@/components/Reveal";

const Building2Icon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

const UserStarIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="9" cy="7" r="3.5" />
    <path d="M3 21c.4-3.3 2.7-5.5 5.5-5.5 1 0 1.9.3 2.7.7" />
    <path d="M17.8 14.4l1.4 2.8 3.1.5-2.3 2.2.5 3.1-2.7-1.4-2.8 1.4.5-3.1-2.2-2.2 3.1-.5 1.4-2.8z" />
  </svg>
);

const SparkleIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 4 13.4 9 18.5 10.5 13.4 12 12 17 10.6 12 5.5 10.5 10.6 9 12 4z" />
    <path d="M19 4v2.6M17.7 5.3h2.6" />
    <path d="M5.5 18v2.4M4.3 19.2h2.4" />
  </svg>
);

const pillars = [
  {
    icon: <Building2Icon />,
    title: "Personalização profunda",
    desc: "Nada de prateleira. Cada agente é desenhado no seu fluxo, na sua voz, com as suas regras — integrado ao que você já usa.",
  },
  {
    icon: <UserStarIcon />,
    title: "Gerente de conta",
    desc: "Você fala com um gerente de conta que conhece o seu projeto de ponta a ponta — do diagnóstico à operação. Sem ticket, sem fila, sem repetir a história.",
  },
  {
    icon: <SparkleIcon />,
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
            A IAlem não é ferramenta de prateleira que você assina e configura
            sozinho. A gente entra junto, entende a operação e constrói o que a
            sua empresa precisa — para depois operar junto com você.
          </p>
        </div>
        <div className="steps">
          {pillars.map((p, i) => (
            <RevealItem key={p.title} delay={i * 0.15} className="step">
              <div className="step-ic">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
