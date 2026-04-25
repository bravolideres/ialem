"use client";

import { useEffect } from "react";

export default function ApresentacaoPage() {
  useEffect(() => {
    const nav = document.getElementById("apNav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="ap-nav" id="apNav">
        <div className="inner">
          <a className="brand-link" href="#top" aria-label="IAlem">
            <img src="/brand/ialem-logo-gold.svg" alt="IAlem" />
          </a>
          <div className="links">
            <a href="#slide-02">Quem somos</a>
            <a href="#slide-04">O que fazemos</a>
            <a href="#slide-05">Processo</a>
            <a href="#slide-07">Cases</a>
            <a href="#slide-10">Investimento</a>
            <a href="#slide-12">Próximos passos</a>
          </div>
          <select
            className="doc-switcher"
            defaultValue="/apresentacao"
            onChange={(e) => { window.location.href = e.target.value; }}
          >
            <option value="/marca">Marca</option>
            <option value="/playbook">Playbook</option>
            <option value="/apresentacao">Apresentação</option>
          </select>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════
         01 · CAPA
         ════════════════════════════════════════════════════════════ */}
      <section className="slide slide-capa" id="top">
        <div className="wrap">
          <div className="logo-hero">
            <img src="/brand/ialem-logo-gold.svg" alt="IAlem" />
          </div>
          <div className="descritor">Agência de Automação Inteligente</div>
          <h1>
            Proposta para{" "}
            <em>[Nome da Empresa]</em>.
          </h1>
          <div className="sub">[Segmento] · [Cidade/Estado]</div>
          <div className="rodape">[Data] · ialem.ai</div>
          <div className="nota-designer" style={{ maxWidth: 640, margin: "48px auto 0" }}>
            <strong>Designer</strong>
            Placeholder "[Nome da Empresa]" entra em italic dourado. Layout respira: wordmark alto, descritor acima do H1, rodapé discreto no fim do slide.
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         02 · IA NO SEU NEGÓCIO
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-02">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">02</span>
            <span>Quem somos</span>
            <span className="bar" />
          </div>
          <div className="hero-slide">
            <h1>
              IA no seu <em>negócio</em>.<br />
              Sem perder o <em>jeito humano</em>.
            </h1>
          </div>
          <p className="lead" style={{ marginTop: 36, maxWidth: "58ch" }}>
            A IAlem é uma <strong>agência de automação inteligente</strong>. A gente desenha, treina e opera agentes de IA sob medida pra cada gargalo do seu negócio — do atendimento à operação.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 40 }}>
            {[
              "Do atendimento à operação",
              "Time consultivo · ponto de contato único",
              "Sob medida · não é ferramenta de prateleira",
            ].map((t) => (
              <div key={t} style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".22em",
                textTransform: "uppercase", color: "var(--gold)",
                padding: "8px 16px", border: "1px solid rgba(201,164,107,.35)",
                borderRadius: 999,
              }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         03 · ESPELHO DA REALIDADE · VARIÁVEL
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-03">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">03</span>
            <span>Espelho da realidade</span>
            <span className="variavel">Variável</span>
            <span className="bar" />
          </div>
          <h2>
            Hoje, na sua <em>operação</em>…
          </h2>
          <div className="dor-lista">
            <div className="dor-item">Leads chegam à noite e esperam horas por resposta.</div>
            <div className="dor-item">Seu time gasta 3h/dia confirmando agendamento na mão.</div>
            <div className="dor-item">Cobrança virou "quando der tempo de olhar".</div>
            <div className="dor-item">Cada novo cliente custa mais gente contratada.</div>
            <div className="dor-item">Oportunidades morrem no fim de semana.</div>
            <div className="dor-item">Cliente liga pra confirmar o que o sistema já sabe.</div>
          </div>
          <div className="dor-fechamento">
            Não é falta de vontade do time. É falta de escala.
          </div>
          <div className="nota-designer">
            <strong>Designer</strong>
            Slide-template. Na hora de apresentar pra cliente, editar e deixar só as <strong>3 a 4 dores mais relevantes</strong> pro caso dele. Concessionária puxa lead/venda; clínica puxa no-show/confirmação; cooperativa puxa volume de atendimento/cobrança. É o slide que faz o cliente pensar &ldquo;esse cara entendeu meu problema&rdquo;.
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         04 · SEIS FRENTES
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-04">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">04</span>
            <span>Onde a IA entra</span>
            <span className="bar" />
          </div>
          <h2>
            Seis frentes em que a IA <em>trabalha pra você</em>.
          </h2>
          <p className="lead">Do primeiro contato ao processo interno — em qualquer ponto onde hoje o seu time perde tempo.</p>
          <div className="frentes-grid">
            {[
              { n: "01 · Atendimento & Vendas", h: "Conversas que entendem contexto — na voz da sua empresa.", p: "Primeiro contato, qualificação, fechamento. O agente atende, dá preço, responde objeção e encaminha pro humano quando importa." },
              { n: "02 · Cobrança", h: "Régua que negocia com educação.", p: "Lembrete, renegociação, confirmação — firmeza sem constrangimento, na hora certa." },
              { n: "03 · Lembrete", h: "Mensagem antes do cliente esquecer.", p: "Vencimento, consulta, entrega, retorno. O time não precisa lembrar de lembrar." },
              { n: "04 · Agendamento", h: "Marcação, remarcação, confirmação — sem loop humano.", p: "Agenda que conversa com o cliente direto. Atualiza, confirma, libera horário quando cancela." },
              { n: "05 · Lançamentos", h: "Campanha com escala e tom.", p: "Chegar em milhares de clientes como se fosse uma conversa. Nunca como broadcast genérico." },
              { n: "06 · Organização", h: "O que ia num caderno, agora roda sozinho.", p: "Triagem, classificação, priorização, registro. Processos que a operação sempre teve na cabeça." },
            ].map((f) => (
              <div key={f.n} className="frente">
                <div className="num">{f.n}</div>
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
          <div className="nota-designer">
            <strong>Designer</strong>
            Na hora de apresentar, destacar (italic dourado / borda gold) as 2 ou 3 frentes mais relevantes pro cliente. Ex.: concessionária → 01 e 03. Clínica → 01, 03, 04.
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         05 · PROCESSO
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-05">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">05</span>
            <span>Como o projeto roda</span>
            <span className="bar" />
          </div>
          <h2>
            Do <em>diagnóstico</em> à operação.<br />
            Quatro etapas. Um ponto de contato.
          </h2>
          <div className="processo-timeline">
            {[
              { n: "01", t: "1 semana", h: "Diagnóstico", p: "Mergulhamos no seu fluxo, CRM, canais. Mapeamos o gargalo real." },
              { n: "02", t: "2–4 semanas", h: "Construção", p: "Desenhamos o agente, treinamos na sua voz, integramos aos seus sistemas." },
              { n: "03", t: "1 semana", h: "Implantação", p: "Liga. Acompanhamento em tempo real." },
              { n: "04", t: "Contínuo", h: "Operação", p: "Ajustes com base em dados, evolução mensal, novos fluxos sob demanda." },
            ].map((s) => (
              <div key={s.n} className="step">
                <div className="num-big">{s.n}</div>
                <div className="step-tempo">{s.t}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          <p className="processo-rodape">
            Você fala com <strong>um ponto de contato do começo ao fim</strong>. Não com suporte por ticket.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         06 · AGÊNCIA ≠ FERRAMENTA
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-06">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">06</span>
            <span>Por que não um SaaS pronto</span>
            <span className="bar" />
          </div>
          <h2>
            Agência <em>≠</em> ferramenta de prateleira.
          </h2>
          <p className="lead">Se fosse um produto empacotado, custaria R$ 500/mês. Não é. É um projeto.</p>
          <div className="comp-grid">
            <div className="comp-col outros">
              <h4>Ferramenta pronta</h4>
              <ul>
                <li>Você assina e configura sozinho</li>
                <li>Seu negócio se adapta ao que ela faz</li>
                <li>Suporte por ticket, fila, chatbot</li>
                <li>Integração que você resolve</li>
                <li>Preço baixo, escopo genérico</li>
              </ul>
            </div>
            <div className="comp-col ialem">
              <h4>Agência IAlem</h4>
              <ul>
                <li>A gente desenha e constrói no seu fluxo</li>
                <li>O agente se adapta ao que seu negócio faz</li>
                <li>Um ponto de contato. Seu nome. Seu número.</li>
                <li>Integração com os sistemas que você já usa</li>
                <li>Investimento sob medida, escopo personalizado</li>
              </ul>
            </div>
          </div>
          <p className="comp-footnote">
            <em>Não é caro. É completo.</em>
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         07 · CASE · REDE DE CONCESSIONÁRIAS
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-07">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">07</span>
            <span>Caso real · Rede de concessionárias</span>
            <span className="bar" />
          </div>
          <h2>
            A <em>Bela</em> vendeu um carro.<br />
            O cliente não sabia que era IA.
          </h2>
          <div className="case-card">
            <div>
              <div className="case-numero">+40%</div>
              <div className="case-numero-sub">de leads atendidos</div>
            </div>
            <div className="case-body">
              <dl>
                <dt>Cliente</dt>
                <dd>Rede com 3 lojas, 42 vendedores</dd>
                <dt>Problema</dt>
                <dd>300+ leads/mês, só 60% respondidos no mesmo dia. O resto ia pra concorrência.</dd>
                <dt>Solução</dt>
                <dd>Agente &ldquo;Bela&rdquo; em atendimento inicial, qualificação e encaminhamento pro vendedor certo.</dd>
              </dl>
              <ul>
                <li>100% dos leads respondidos em <strong>menos de 1 minuto</strong></li>
                <li>Qualificação automática antes do vendedor</li>
                <li><strong>+40% de atendimentos</strong> sem nenhuma contratação</li>
              </ul>
              <div className="case-quote">
                &ldquo;O cliente elogiou a Bela sem saber que era uma inteligência artificial.&rdquo;
                <cite>— Gestora regional</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         08 · CASE · CLÍNICA
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-08">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">08</span>
            <span>Caso real · Clínica multidisciplinar</span>
            <span className="bar" />
          </div>
          <h2>
            No-show caiu <em>60%</em>.<br />
            A recepção ganhou 15h por semana.
          </h2>
          <div className="case-card">
            <div>
              <div className="case-numero">−60%</div>
              <div className="case-numero-sub">de no-show em 3 semanas</div>
            </div>
            <div className="case-body">
              <dl>
                <dt>Cliente</dt>
                <dd>Clínica com 8 profissionais, 200 agendamentos/semana</dd>
                <dt>Problema</dt>
                <dd>Recepção gastava 3h/dia em confirmação manual. 28% de no-show.</dd>
                <dt>Solução</dt>
                <dd>Agente de confirmação e reagendamento automático via WhatsApp, com tom humanizado.</dd>
              </dl>
              <ul>
                <li>Confirmação automática com tom humanizado</li>
                <li>Reagendamento instantâneo</li>
                <li>No-show de <strong>28% para 11%</strong> em 3 semanas</li>
                <li>Recepção recuperou <strong>15 horas/semana</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         09 · PROPOSTA · VARIÁVEL
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-09">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">09</span>
            <span>A proposta para [Empresa]</span>
            <span className="variavel">Variável</span>
            <span className="bar" />
          </div>
          <h2>
            O que vamos <em>construir</em> com você.
          </h2>
          <div className="proposta-grid">
            <div className="proposta-bloco">
              <h4>Escopo</h4>
              <ul>
                <li><strong>Frentes de atuação:</strong> <span className="placeholder">[Atendimento & Vendas + Agendamento]</span></li>
                <li><strong>Canais:</strong> <span className="placeholder">[WhatsApp Business, Instagram Direct]</span></li>
                <li><strong>Integrações:</strong> <span className="placeholder">[HubSpot, Google Calendar]</span></li>
                <li><strong>Volume estimado:</strong> <span className="placeholder">[X mensagens/mês · Y leads/mês]</span></li>
              </ul>
            </div>
            <div className="proposta-bloco">
              <h4>Cronograma</h4>
              <ul>
                <li><strong>Semana 1:</strong> diagnóstico</li>
                <li><strong>Semanas 2–4:</strong> construção e treinamento</li>
                <li><strong>Semana 5:</strong> implantação (go-live)</li>
                <li><strong>A partir do mês 2:</strong> operação e evolução</li>
              </ul>
            </div>
            <div className="proposta-bloco">
              <h4>Entregáveis</h4>
              <ul>
                <li>Agente de IA treinado na voz da <span className="placeholder">[Empresa]</span></li>
                <li>Integrações ativas</li>
                <li>Dashboard de acompanhamento</li>
                <li>Ponto de contato dedicado</li>
                <li>Suporte operacional contínuo</li>
              </ul>
            </div>
          </div>
          <div className="nota-designer">
            <strong>Designer</strong>
            Todos os campos em <span style={{ fontFamily: "var(--font-mono)", color: "#E8A96B" }}>[colchetes]</span> são placeholders editáveis. Cada proposta preenche com dados reais do cliente depois da 1ª conversa.
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         10 · INVESTIMENTO · VARIÁVEL
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-10">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">10</span>
            <span>Investimento</span>
            <span className="variavel">Variável</span>
            <span className="bar" />
          </div>
          <h2>
            Transparente. <em>Sem letra miúda</em>.
          </h2>
          <div className="invest-grid">
            <div className="invest-bloco">
              <h4>Implantação · única vez</h4>
              <div className="invest-tipo">Projeto completo</div>
              <div className="invest-valor">
                R$ <span className="placeholder">X.XXX</span>
              </div>
              <div className="invest-sub">Pagamento único</div>
              <ul>
                <li>Diagnóstico e descoberta</li>
                <li>Desenho e construção do agente</li>
                <li>Treinamento e testes</li>
                <li>Integrações</li>
                <li>Implantação acompanhada</li>
              </ul>
            </div>
            <div className="invest-bloco">
              <h4>Operação · recorrente</h4>
              <div className="invest-tipo">Mensalidade</div>
              <div className="invest-valor">
                R$ <span className="placeholder">X.XXX</span>
                <span style={{ fontSize: 22, color: "var(--text-dim)", fontStyle: "italic" }}> /mês</span>
              </div>
              <div className="invest-sub">A partir do go-live</div>
              <ul>
                <li>Monitoramento contínuo</li>
                <li>Ajustes com base em dados</li>
                <li>Novos fluxos sob demanda</li>
                <li>Ponto de contato dedicado</li>
              </ul>
            </div>
          </div>
          <div className="invest-rodape">
            Validade da proposta · 15 dias · a partir de [data]
          </div>
          <div className="nota-designer">
            <strong>Designer</strong>
            Valores são placeholders. Manter números cheios (ex. R$ 12.000, não R$ 11.987) pra não parecer &ldquo;negociado por algoritmo&rdquo;. Faixas típicas de referência: implantação R$ 8k–20k; operação R$ 1k–5k/mês.
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         11 · COMPROMISSO
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-11">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">11</span>
            <span>Nosso compromisso</span>
            <span className="bar" />
          </div>
          <h2>
            Agência dedicada. <em>Não uma caixa</em>.
          </h2>
          <p className="lead">
            Você não contrata uma ferramenta. Contrata um projeto com começo, meio e operação contínua — e um jeito de trabalhar que se compromete com resultado.
          </p>
          <div className="compromisso-grid">
            {[
              { m: "01", h: "Sob medida, sempre.", p: "Nenhum projeto sai de template. Entendemos a operação antes de escrever a primeira linha." },
              { m: "02", h: "Um ponto de contato.", p: "Do diagnóstico à operação, você fala com a mesma pessoa. Sem ticket. Sem fila." },
              { m: "03", h: "Na sua infra, não na nossa.", p: "Integramos com o CRM, o ERP e os canais que você já usa. Zero migração forçada." },
              { m: "04", h: "Evolução com dado, não achismo.", p: "A operação não estaciona. Mês a mês, ajustamos com base em conversa real, não opinião." },
            ].map((c) => (
              <div key={c.m} className="compromisso-item">
                <div className="mark">{c.m}</div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         12 · PRÓXIMOS PASSOS + CTA FINAL
         ════════════════════════════════════════════════════════════ */}
      <section className="slide" id="slide-12">
        <div className="wrap">
          <div className="slide-label">
            <span className="num">12</span>
            <span>Próximos passos</span>
            <span className="bar" />
          </div>
          <h2>
            Se fizer sentido, <em>começamos semana que vem</em>.
          </h2>
          <div className="passos-timeline">
            {[
              { n: "01", h: "Aprovação", p: "Você confirma o escopo e o investimento." },
              { n: "02", h: "Onboarding", p: "Agenda inicial do diagnóstico, acessos aos sistemas." },
              { n: "03", h: "Diagnóstico", p: "3 a 5 dias mergulhando na sua operação." },
              { n: "04", h: "Construção", p: "Você acompanha pelo ponto de contato único." },
            ].map((p) => (
              <div key={p.n} className="passo">
                <div className="n">{p.n}</div>
                <h4>{p.h}</h4>
                <p>{p.p}</p>
              </div>
            ))}
          </div>
          <div className="cta-final">
            <div className="cta-final-title">
              Vamos levar o seu <em>negócio</em> além?
            </div>
            <a href="https://wa.me/5500000000000?text=Oi!%20Quero%20seguir%20com%20a%20proposta%20IAlem" target="_blank" rel="noreferrer" className="cta-btn">
              Bora começar →
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         13 · OBRIGADO
         ════════════════════════════════════════════════════════════ */}
      <section className="slide slide-final" id="slide-13">
        <img src="/brand/ialem-logo-gold.svg" alt="IAlem" />
        <h2>
          Leve seu <em>negócio</em> além.
        </h2>
        <div className="contato">
          <span><a href="https://ialem.ai">ialem.ai</a></span>
          <span><a href="mailto:contato@ialem.ai">contato@ialem.ai</a></span>
          <span>WhatsApp · [número do ponto de contato]</span>
        </div>
      </section>
    </>
  );
}
