import { RevealItem } from "@/components/Reveal";

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="wrap">
        <RevealItem className="about-grid">
          <div className="about-eyebrow-col">
            <span className="eyebrow">Quem somos</span>
          </div>
          <div className="about-copy">
            <h2 className="about-h2">
              Somos uma <em>agência de automação inteligente</em>.
            </h2>
            <p className="about-lede">
              Desenhamos, treinamos e operamos agentes de IA sob medida pra cada
              gargalo do seu negócio — do <em>atendimento</em> à <em>operação</em>.
              Vendas, cobrança, lembrete, agendamento, lançamento, organização: a
              gente entra junto, entende a sua rotina e constrói o que faz sentido
              pra sua empresa.
            </p>
            <p className="about-sub">
              Você contrata um time consultivo, com um único ponto de contato do
              diagnóstico à operação. Não uma ferramenta de prateleira.
            </p>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
