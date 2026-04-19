const pairs = [
  {
    hoje: "Lead chega fora do horário comercial e esfria até alguém responder no dia seguinte.",
    ialem: "Agente responde na hora, em qualquer horário, qualifica e já agenda com o vendedor certo.",
  },
  {
    hoje: "Time comercial gasta horas triando contato ruim e perde foco em quem está pronto para fechar.",
    ialem: "Triagem automática na porta. Seu vendedor só recebe quem já tem interesse real e contexto.",
  },
  {
    hoje: "No-show em agendamento consome agenda, receita e moral do time.",
    ialem: "Lembrete e confirmação ativa na voz da marca, com reagendamento em dois cliques se precisar.",
  },
  {
    hoje: "Depois da assinatura ou da compra, o cliente some. Ninguém tem tempo de acompanhar pós-venda.",
    ialem: "Relacionamento contínuo e natural — NPS, recompra, renovação — sem parecer automação.",
  },
  {
    hoje: "Informação espalhada em CRM, planilha, WhatsApp e e-mail. O atendente perde contexto a cada troca.",
    ialem: "Agente integrado aos seus sistemas, com memória do histórico do cliente desde a primeira conversa.",
  },
];

export default function Solution() {
  return (
    <section id="solucao">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Realidade operacional</span>
          <h2>
            O que muda com a <em>IAlem</em>.
          </h2>
          <p>
            Sem promessa milagrosa. Só o que a gente vê todo dia entrando em operação com clientes como você.
          </p>
        </div>

        <div className="pairs">
          {pairs.map((p, i) => (
            <div className="pair" key={i}>
              <div className="pair-cell pair-l hoje">
                <span className="tag">Problema</span>
                <div className="pair-txt">{p.hoje}</div>
              </div>
              <div className="pair-arrow">→</div>
              <div className="pair-cell destrava">
                <span className="tag">Com a IAlem</span>
                <div className="pair-txt">{p.ialem}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
