const HeadsetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 1 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
  </svg>
);

const HeartHandshakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" />
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.15.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
    <path d="m18 15-2-2" />
    <path d="m15 18-2-2" />
  </svg>
);

const WorkflowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <path d="M6 9v3a1 1 0 0 0 1 1h2" />
    <path d="M18 9v3a1 1 0 0 1-1 1h-2" />
    <path d="M12 12v3" />
  </svg>
);

export default function UseCases() {
  const cases = [
    {
      icon: <HeadsetIcon />,
      title: "Pré-atendimento",
      desc: "Qualifica o lead antes de chegar no time comercial.",
    },
    {
      icon: <CalendarIcon />,
      title: "Agendamento",
      desc: "Marca reuniões, visitas e consultas sem fricção.",
    },
    {
      icon: <HeartHandshakeIcon />,
      title: "Pós-venda",
      desc: "NPS, recompra e renovação com naturalidade.",
    },
    {
      icon: <WorkflowIcon />,
      title: "Operação interna",
      desc: "Fluxos entre times, sistemas e documentos.",
    },
  ];

  return (
    <section
      id="casos"
      className="cases-section"
      style={{
        background: "var(--surface)",
        paddingBottom: 0,
      }}
    >
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Casos de uso</span>
          <h2>
            Onde a IAlem <em>entra</em>.
          </h2>
          <p>
            Escolha um cenário abaixo e veja como funciona na prática.
          </p>
        </div>
        <div className="cases">
          {cases.map((c, i) => (
            <div className="case reveal-child" key={i}>
              <div className="case-ic">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
