export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico",
      desc: "Entendemos seu fluxo, CRM, canais e onde está o gargalo real. Sem template, sem questionário genérico.",
    },
    {
      num: "02",
      title: "Construção",
      desc: "Desenhamos o agente, treinamos na voz da sua marca e integramos aos seus sistemas.",
    },
    {
      num: "03",
      title: "Operação",
      desc: "Acompanhamento contínuo, ajustes baseados em dados reais e evolução mês a mês.",
    },
  ];

  return (
    <section id="funciona">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Como funciona</span>
          <h2>
            Do diagnóstico ao agente em <em>produção</em>.
          </h2>
          <p>Três passos, um time dedicado, acompanhamento contínuo.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <a href="https://wa.me/5500000000000?text=Oi!%20Quero%20agendar%20um%20diagnóstico%20gratuito%20para%20minha%20empresa" target="_blank" className="btn btn-ghost btn-sm">
            Agendar meu diagnóstico gratuito →
          </a>
        </div>
      </div>
    </section>
  );
}
