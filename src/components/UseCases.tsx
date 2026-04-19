export default function UseCases() {
  const cases = [
    {
      icon: "◐",
      title: "Pré-atendimento",
      desc: "Qualifica o lead antes de chegar no time comercial.",
    },
    {
      icon: "◇",
      title: "Agendamento",
      desc: "Marca reuniões, visitas e consultas sem fricção.",
    },
    {
      icon: "○",
      title: "Pós-venda",
      desc: "NPS, recompra e renovação com naturalidade.",
    },
    {
      icon: "◈",
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
            <div className="case" key={i}>
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
