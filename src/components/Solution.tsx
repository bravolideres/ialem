import { RevealItem } from "@/components/Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

const pairs = [
  {
    hoje: "Clientes esperam horas — ou dias — por respostas que poderiam ser instantâneas. No WhatsApp, no e-mail, no site.",
    ialem: "Atendimento imediato, 24/7, na voz da sua marca. O agente resolve o que pode e escala para o humano certo quando precisa.",
  },
  {
    hoje: "Seu time repete as mesmas tarefas todo dia: confirmar agenda, enviar boleto, responder dúvidas básicas, copiar dados entre sistemas.",
    ialem: "Automação inteligente dos fluxos repetitivos. Seu time foca no que exige criatividade e decisão — o resto roda sozinho.",
  },
  {
    hoje: "Leads chegam fora do horário, esfriam esperando resposta, e o time comercial perde tempo com contatos que não convertem.",
    ialem: "Qualificação automática na porta. O agente responde na hora, filtra quem tem interesse real e entrega o lead pronto para fechar.",
  },
  {
    hoje: "Depois da venda, o cliente some. Ninguém tem tempo de acompanhar satisfação, recompra ou renovação.",
    ialem: "Relacionamento contínuo e natural — NPS, follow-up de recompra, renovação — sem parecer robô.",
  },
  {
    hoje: "Informação espalhada entre CRM, planilha, WhatsApp e e-mail. Cada atendente recomeça do zero.",
    ialem: "Agente integrado aos seus sistemas, com memória do histórico completo do cliente desde o primeiro contato.",
  },
];

export default function Solution() {
  return (
    <section id="solucao">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Antes e depois</span>
          <h2>
            Atendimento de qualidade.<br />
            Processos eficientes.<br />
            <em>Muito mais resultados</em>.
          </h2>
          <p>
            Atendimento lento, tarefas repetitivas, leads perdidos — não é falta de vontade do time,
            é falta de escala. A IAlem resolve isso.
          </p>
        </div>

        <div className="pairs">
          {pairs.map((p, i) => (
            <RevealItem key={i} delay={0} className="pair">
              <div className="pair-cell pair-l hoje">
                <span className="tag">Hoje</span>
                <div className="pair-txt">{p.hoje}</div>
              </div>
              <div className="pair-arrow">→</div>
              <div className="pair-cell destrava">
                <span className="tag">Com a IAlem</span>
                <div className="pair-txt">{p.ialem}</div>
              </div>
            </RevealItem>
          ))}
        </div>

        <div className="section-cta">
          <a href={`${WHATSAPP_LINK}?text=Oi!%20Quero%20agendar%20um%20diagnóstico%20gratuito%20para%20minha%20empresa`} target="_blank" className="btn btn-ghost btn-sm">
            Quero isso na minha empresa →
          </a>
        </div>
      </div>
    </section>
  );
}
