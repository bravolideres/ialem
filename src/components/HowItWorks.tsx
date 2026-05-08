import { RevealItem } from "@/components/Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico",
      desc: "Um gerente de conta mergulha no seu fluxo, CRM, canais e entende onde está o gargalo real. Sem template, sem questionário genérico.",
    },
    {
      num: "02",
      title: "Construção",
      desc: "Desenhamos o agente, treinamos na voz da sua marca e integramos aos seus sistemas. Você acompanha cada etapa pelo mesmo ponto de contato — sem virar cliente de suporte.",
    },
    {
      num: "03",
      title: "Operação",
      desc: "O time continua com você: ajustes baseados em dados reais, evolução mês a mês e um canal direto para pedir o próximo fluxo.",
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
          <p>Três passos, um ponto de contato, acompanhamento contínuo.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <RevealItem key={s.num} delay={i * 0.15} className="step">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </RevealItem>
          ))}
        </div>
        <div className="section-cta">
          <a href={`${WHATSAPP_LINK}?text=Oi!%20Quero%20agendar%20um%20diagnóstico%20gratuito%20para%20minha%20empresa`} target="_blank" className="btn btn-primary">
            Quero automatizar meu atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
