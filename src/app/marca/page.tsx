"use client";

import { useEffect } from "react";

/* ── inline SVG path (icon symbol) ── */
const ICON_D =
  "M83.7 14.1c-3.6 7.4-14.2 29.4-23.7 48.9-30.2 62.1-35.9 74-48.1 99.3-6.6 13.6-11.7 25.2-11.4 25.7 1 1.6 32 1.3 33.3-0.3 1-1.2 37.9-77.2 59-121.2 25.3-53.1 30.3-63.8 29.7-64.3-0.3-0.3-7.7-0.7-16.5-1l-16-0.5-6.3 13.4z M176.6 3.7c-2.9 5.8-71.3 144.7-80.2 163.1-5.2 10.6-9.4 20-9.4 20.7 0 1.3 2.9 1.5 17.8 1.5l17.7 0 43-28.1c23.7-15.4 49.1-32 56.5-36.8 7.4-4.9 18.8-12.3 25.3-16.5 6.4-4.2 11.7-8.1 11.7-8.8 0-1.6-37.8-78.9-40.1-81.9-1.6-2.2-1.8-2-9.3 13.2-4.2 8.5-7.6 16.4-7.6 17.6 0 2.4 4.3 12.5 14.5 33.8 3.7 7.7 7.1 15 7.6 16.2 0.9 2.5 1.2 2.3-49.1 29.6-26.9 14.5-33 17.5-33 16.3 0-0.4 37.2-76.5 63.4-129.6l5.7-11.5-5.8-0.6c-3.2-0.4-10.6-0.7-16.5-0.8l-10.7-0.1-1.5 2.7z M251.6 117c-6 3.8-11.5 7.5-12.3 8.2-1 1.1 0.4 5 8.6 22.3 14.2 30.4 18.8 39.3 21 40.5 2.3 1.2 32.7 1.4 33.5 0.2 0.5-0.9-31.9-67.8-36.1-74.5-1.3-2-2.7-3.7-3.1-3.6-0.4 0-5.6 3.1-11.6 6.9z";

function InlineIcon({
  opacity = 1,
  fill = "#C9A46B",
  style,
}: {
  opacity?: number;
  fill?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="-2 -2 308 196" style={{ opacity, ...style }}>
      <path fill={fill} fillRule="evenodd" d={ICON_D} />
    </svg>
  );
}

/* ── Agent avatar component ── */
function AgentAvatar({
  size,
  style,
}: {
  size: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="agent-avatar"
      style={{ width: size, height: size, ...style }}
    >
      <img src="/brand/ialem-icon-gold.svg" alt="" />
    </div>
  );
}

export default function MarcaPage() {
  useEffect(() => {
    /* Nav scroll */
    const nav = document.getElementById("brandNav");
    const onScroll = () =>
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    /* Reveal on scroll */
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="brand-nav" id="brandNav">
        <div className="inner">
          <a className="brand-link" href="#top" aria-label="IAlem">
            <img src="/brand/ialem-logo-gold.svg" alt="IAlem" />
          </a>
          <div className="links">
            <a href="#publico">Público</a>
            <a href="#conceito">Conceito</a>
            <a href="#logo">Logo</a>
            <a href="#paleta">Paleta</a>
            <a href="#tipografia">Tipografia</a>
            <a href="#voz">Voz</a>
            <a href="#aplicacoes">Aplicações</a>
            <a href="#kit">Kit</a>
          </div>
          <select
            className="doc-switcher"
            defaultValue="/marca"
            onChange={(e) => { window.location.href = e.target.value; }}
          >
            <option value="/marca">Marca</option>
            <option value="/playbook">Playbook</option>
            <option value="/apresentacao">Apresentação</option>
          </select>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════
         1. HERO
         ════════════════════════════════════════════════════════════ */}
      <section className="brand-hero" id="top">
        <div className="hero-content">
          <div className="eyebrow-kicker reveal">
            <span className="dot" />
            Manual da marca · Abril 2026
          </div>
          <img
            src="/brand/ialem-logo-gold.svg"
            alt="IAlem"
            className="hero-logo reveal d1"
          />
          <div
            className="reveal d1"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginTop: 20,
              marginBottom: 36,
            }}
          >
            Agência de Automação Inteligente
          </div>
          <h1 className="reveal d2">
            Leve seu <em>negócio</em> além.
          </h1>
          <div className="attribution reveal d3">
            <span>Produzido por</span>
            <img src="/brand/bravo-logo-white.svg" alt="Bravo Marketing" style={{ height: 16, display: 'inline-block', verticalAlign: 'middle', marginLeft: 8 }} />
          </div>
        </div>
        <div className="scroll-hint">Role para ver</div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         00. O NOME
         ════════════════════════════════════════════════════════════ */}
      <section id="nome" style={{ padding: "140px 0 80px" }}>
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">00</span>
            <span>O nome</span>
            <span className="bar" />
          </div>

          <div
            className="name-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div className="reveal d1">
              <h2 style={{ maxWidth: "13ch" }}>
                Duas leituras para a <em>mesma palavra</em>.
              </h2>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: 17,
                  lineHeight: 1.6,
                  marginTop: 28,
                  maxWidth: "44ch",
                }}
              >
                O nome{" "}
                <strong style={{ color: "var(--text)" }}>IAlem</strong>{" "}
                começa com IA — a tecnologia — e termina em{" "}
                <em
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--gold)",
                    fontStyle: "italic",
                  }}
                >
                  lem
                </em>
                , o pedaço que carrega a promessa. Junta como uma coisa só
                porque a promessa e a tecnologia são a mesma coisa.
              </p>
            </div>

            <div
              className="reveal d2"
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {/* Leitura 01 */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-card-lg)",
                  padding: "40px 36px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 18,
                  }}
                >
                  Leitura 01 · A tecnologia
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontSize: "clamp(26px,3.2vw,34px)",
                    lineHeight: 1.25,
                    letterSpacing: "-.015em",
                    color: "var(--text)",
                  }}
                >
                  Uma IA que vai{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--gold)",
                      fontWeight: 300,
                    }}
                  >
                    além
                  </em>{" "}
                  do que se espera de um bot.
                </div>
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    marginTop: 18,
                  }}
                >
                  Não é menu numerado. Não é árvore de decisão engessada.
                  É agente que entende contexto, lembra da conversa e
                  resolve — na voz da marca do cliente.
                </p>
              </div>

              {/* Leitura 02 */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-card-lg)",
                  padding: "40px 36px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 18,
                  }}
                >
                  Leitura 02 · A empresa do cliente
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontSize: "clamp(26px,3.2vw,34px)",
                    lineHeight: 1.25,
                    letterSpacing: "-.015em",
                    color: "var(--text)",
                  }}
                >
                  Sua empresa vai{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--gold)",
                      fontWeight: 300,
                    }}
                  >
                    além
                  </em>{" "}
                  com a IAlem.
                </div>
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    marginTop: 18,
                  }}
                >
                  Além do horário comercial. Além da capacidade do time
                  atual. Além do que a operação conseguia entregar antes.
                  A IA puxa o negócio junto.
                </p>
              </div>

              <div
                style={{
                  padding: "24px 0 0",
                  borderTop: "1px dashed var(--line)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: 20,
                  lineHeight: 1.4,
                  color: "var(--text-dim)",
                  maxWidth: "56ch",
                }}
              >
                A marca é a tecnologia e a promessa na mesma palavra. Por
                isso se escreve junto:{" "}
                <span style={{ color: "var(--text)" }}>IAlem</span>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         00. PRA QUEM
         ════════════════════════════════════════════════════════════ */}
      <section id="publico" style={{ padding: "80px 0 100px" }}>
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">01</span>
            <span>Pra quem essa marca fala</span>
            <span className="bar" />
          </div>

          <div
            className="audience-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.15fr",
              gap: 72,
              alignItems: "start",
            }}
          >
            <div className="reveal d1">
              <h2 style={{ maxWidth: "16ch" }}>
                Para quem quer <em>potencializar</em> a operação.
              </h2>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: 17,
                  lineHeight: 1.65,
                  marginTop: 28,
                  maxWidth: "48ch",
                }}
              >
                A IAlem é uma <strong style={{ color: "var(--text)" }}>agência de automação inteligente</strong> —
                parceria de quem já tem operação rodando e quer que ela vá{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold)",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  além
                </em>
                . Mas também acolhe quem está montando a operação agora e
                quer começar com base sólida.
              </p>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  marginTop: 16,
                  maxWidth: "48ch",
                }}
              >
                A gente não é ferramenta de prateleira nem licença que você
                configura sozinho. É um time consultivo que desenha, constrói
                e opera a automação com você — atendimento, vendas, cobrança,
                lembrete, agendamento, lançamento, organização.
              </p>
            </div>

            <div
              className="reveal d2"
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {[
                {
                  num: "01",
                  title: "Empresário · sócio",
                  desc: "Quer crescer sem inflar folha — e sabe que a operação atual não aguenta o próximo degrau sem ajuda.",
                },
                {
                  num: "02",
                  title: "Diretor · C-level",
                  desc: "Quer eficiência operacional com experiência de cliente intacta — não um bot que piora o NPS.",
                },
                {
                  num: "03",
                  title: "Gerente de operação",
                  desc: "Vê dia a dia demandas repetitivas — mensagem, cobrança, agenda — consumindo o tempo do time que deveria estar resolvendo o que é humano.",
                },
              ].map((p) => (
                <div
                  key={p.num}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-card)",
                    padding: "28px 32px",
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: 24,
                    alignItems: "baseline",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {p.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 400,
                        fontSize: 20,
                        letterSpacing: "-.01em",
                        color: "var(--text)",
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        color: "var(--text-dim)",
                        fontSize: 14.5,
                        lineHeight: 1.55,
                        marginTop: 6,
                      }}
                    >
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* O que a IAlem potencializa */}
          <div style={{ marginTop: 64 }} className="reveal d3">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                O que a IAlem potencializa
              </div>
              <div
                style={{ flex: 1, height: 1, background: "var(--line)" }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  letterSpacing: ".2em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                06 frentes
              </div>
            </div>

            <div
              className="potencializa-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                background: "var(--line)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-card-lg)",
                overflow: "hidden",
              }}
            >
              {[
                {
                  n: "01 · Atendimento & Vendas",
                  h: "Conversas que entendem contexto — na voz da sua empresa.",
                  p: "Primeiro contato, qualificação, fechamento. O agente atende, dá preço, responde objeção e encaminha pro humano quando importa.",
                },
                {
                  n: "02 · Cobrança",
                  h: "Régua de cobrança que negocia com educação.",
                  p: "Lembrete, renegociação, confirmação — firmeza sem constrangimento, na hora certa.",
                },
                {
                  n: "03 · Lembrete",
                  h: "Toda mensagem que cai antes do cliente esquecer.",
                  p: "Vencimento, consulta, entrega, retorno. O time não precisa lembrar de lembrar.",
                },
                {
                  n: "04 · Agendamento",
                  h: "Marcação, remarcação, confirmação — sem loop humano.",
                  p: "Agenda que conversa com o cliente direto. Atualiza, confirma, libera horário quando cancela.",
                },
                {
                  n: "05 · Lançamentos",
                  h: "Campanha, aviso, comunicado — com escala e tom.",
                  p: "Chegar em milhares de clientes como se fosse uma conversa. Nunca como broadcast genérico.",
                },
                {
                  n: "06 · Organização",
                  h: "Processos que a operação sempre teve na cabeça, agora rodando no automático.",
                  p: "Triagem, classificação, priorização, registro. O que ia num caderno, agora roda sozinho.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    background: "var(--surface)",
                    padding: "32px 28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11.5,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 14,
                    }}
                  >
                    {item.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 300,
                      fontSize: 19,
                      lineHeight: 1.35,
                      letterSpacing: "-.01em",
                      color: "var(--text)",
                    }}
                  >
                    {item.h}
                  </div>
                  <p
                    style={{
                      color: "var(--text-dim)",
                      fontSize: 14,
                      lineHeight: 1.55,
                      marginTop: 12,
                    }}
                  >
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hoje / Com a IAlem */}
          <div
            className="audience-duality reveal d4"
            style={{
              marginTop: 56,
              background: "var(--surface-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-card-lg)",
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                paddingRight: 32,
                borderRight: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 18,
                }}
              >
                Hoje
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  fontSize: 22,
                  lineHeight: 1.4,
                  color: "var(--text-dim)",
                }}
              >
                Uma operação que já funciona — mas cresce com atrito. Cada
                novo cliente custa tempo, cada escala pede mais gente.
              </div>
            </div>
            <div style={{ paddingLeft: 32 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 18,
                }}
              >
                Com a IAlem
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  fontSize: 22,
                  lineHeight: 1.4,
                  color: "var(--text)",
                }}
              >
                A mesma operação, agora{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold)",
                    fontWeight: 300,
                  }}
                >
                  potencializada
                </em>
                . Processos repetitivos viram estrutura. Time humano foca
                no que é humano.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         01. POR QUE EXISTE
         ════════════════════════════════════════════════════════════ */}
      <section id="mercado">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">02</span>
            <span>Por que essa marca existe</span>
            <span className="bar" />
          </div>
          <div className="market-grid">
            <div className="reveal d1">
              <h2>
                Enquanto o mercado é <em>azul</em>, a IAlem é{" "}
                <em>dourada</em>.
              </h2>
              <p>
                Automação de atendimento no Brasil tem um visual de
                categoria previsível: azul cobalto, verde WhatsApp,
                gradientes saturados, mascotes robô. Todo mundo se parece
                com todo mundo.
              </p>
              <p>
                A IAlem se recusa. Ocupa um território que ninguém do
                mercado ocupou ainda:{" "}
                <em
                  style={{
                    color: "var(--gold)",
                    fontStyle: "italic",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  dark premium editorial
                </em>{" "}
                — mais próximo de um estúdio de arquitetura ou de uma
                marca contemporânea contida do que de uma SaaS B2B.
              </p>
            </div>
            <div className="competitor-stack reveal d2">
              <div className="competitor">
                <div className="swatch zenvia" />
                <div className="name">Zenvia</div>
                <div className="tag">Roxo · Azul</div>
              </div>
              <div className="competitor">
                <div className="swatch bot" />
                <div className="name">BotConversa</div>
                <div className="tag">Verde WhatsApp</div>
              </div>
              <div className="competitor">
                <div className="swatch fortics" />
                <div className="name">Fortics</div>
                <div className="tag">Azul saturado</div>
              </div>
              <div className="competitor us">
                <div className="swatch ialem" />
                <div className="name">IAlem</div>
                <div className="tag">Dark · Gold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         02. CONCEITO
         ════════════════════════════════════════════════════════════ */}
      <section id="conceito">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">03</span>
            <span>O conceito</span>
            <span className="bar" />
          </div>
          <div className="concept-head reveal d1">
            <h2>
              Dark premium <em>editorial</em>.
            </h2>
            <p className="lead">
              Três ideias que, juntas, explicam cada decisão visual da
              marca — do tom do preto à palavra em italic.
            </p>
          </div>
          <div className="concept-grid">
            <div className="concept-cell reveal d1">
              <span className="idx">(a)</span>
              <h3>
                Sofisticação <em>humana</em>, não luxo frio.
              </h3>
              <p className="detail">
                Pense estúdio contemporâneo, não boutique de champanhe. O
                dark é warm — tem temperatura. Fraunces dá ao sistema uma
                voz de ensaio escrito, não de briefing corporativo.
              </p>
              <div className="tension">
                <span className="arrow">↗</span>Calorosa, não distante.
              </div>
            </div>
            <div className="concept-cell reveal d2">
              <span className="idx">(b)</span>
              <h3>
                Humanização como <em>calor invisível</em>.
              </h3>
              <p className="detail">
                Nada de mascote, robô amigável ou ilustração cartoon. O
                calor está nos undertones: o dourado âmbar, o off-white
                warm, o italic estratégico em &quot;humano&quot;. A
                presença é sentida, não ilustrada.
              </p>
              <div className="tension">
                <span className="arrow">↗</span>Presença, não persona.
              </div>
            </div>
            <div className="concept-cell reveal d3">
              <span className="idx">(c)</span>
              <h3>
                Surpreendente dentro do <em>minimalista</em>.
              </h3>
              <p className="detail">
                A tensão central. A composição é quieta — 85% de neutros,
                respiração generosa — até um italic dourado aparecer e
                puxar o olho. A surpresa funciona porque vem do silêncio.
              </p>
              <div className="tension">
                <span className="arrow">↗</span>Silêncio &amp;
                microfone.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         03. LOGO
         ════════════════════════════════════════════════════════════ */}
      <section id="logo">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">04</span>
            <span>Logo — três variações</span>
            <span className="bar" />
          </div>

          <div className="logo-grid">
            <div className="logo-card reveal d1">
              <div className="stage">
                <img
                  src="/brand/ialem-logo-gold.svg"
                  alt="Wordmark IAlem em dourado"
                  className="wordmark"
                />
              </div>
              <div className="meta">
                <span className="label">Wordmark · Principal</span>
                <span className="title">
                  IAlem completo em dourado.
                </span>
                <span className="usage">
                  Uso padrão em site, apresentações, headers, propostas e
                  peças institucionais. É a forma canônica da marca.
                </span>
              </div>
            </div>

            <div className="logo-card reveal d2">
              <div className="stage">
                <img
                  src="/brand/ialem-icon-gold.svg"
                  alt="Símbolo AI"
                  className="icon-img"
                />
              </div>
              <div className="meta">
                <span className="label">Símbolo · Isolado</span>
                <span className="title">
                  O &quot;AI&quot; como elemento autônomo.
                </span>
                <span className="usage">
                  Favicon, avatar do agente em chats, profile picture no
                  LinkedIn, aplicações co-branded quando o wordmark não
                  cabe.
                </span>
              </div>
            </div>

            <div className="logo-card light reveal d3">
              <div className="stage">
                <img
                  src="/brand/ialem-logo-dark.svg"
                  alt="Wordmark IAlem em dark sobre fundo claro"
                  className="wordmark-sm"
                />
              </div>
              <div className="meta">
                <span className="label">Monocromático · Light</span>
                <span className="title">
                  Dark sobre off-white warm.
                </span>
                <span className="usage">
                  Exceção controlada: PDFs impressos, assinatura de
                  e-mail, material co-branded em contexto claro. O
                  dourado <strong>não</strong> aparece aqui.
                </span>
              </div>
            </div>
          </div>

          {/* A forma do símbolo */}
          <div
            className="symbol-read reveal d4"
            style={{
              marginTop: 56,
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-card-lg)",
              padding: "56px 48px",
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 240,
                padding: 24,
              }}
            >
              <img
                src="/brand/ialem-icon-gold.svg"
                alt="Símbolo IAlem ampliado"
                style={{
                  width: "100%",
                  maxWidth: 260,
                  filter:
                    "drop-shadow(0 0 40px rgba(201,164,107,.18))",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 18,
                }}
              >
                A forma do símbolo
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 30,
                  lineHeight: 1.2,
                  letterSpacing: "-.015em",
                  maxWidth: "18ch",
                }}
              >
                Duas letras que se{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold)",
                    fontWeight: 300,
                  }}
                >
                  tocam
                </em>
                , não que se explicam.
              </h3>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  marginTop: 20,
                  maxWidth: "52ch",
                }}
              >
                O &quot;I&quot; e o &quot;A&quot; não são justapostos —
                eles se encontram. O traço do A entra no espaço do I,
                cria um gesto de interação, não de ícone fechado. É a
                forma mais curta de desenhar &quot;diálogo entre duas
                partes&quot;: a IA e quem fala com ela.
              </p>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  marginTop: 14,
                  maxWidth: "52ch",
                }}
              >
                Sem contorno, sem caixa, sem molde. O símbolo respira —
                porque a marca não precisa pedir licença pra existir num
                layout.
              </p>
              <div
                style={{
                  marginTop: 28,
                  paddingTop: 20,
                  borderTop: "1px dashed var(--line)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Gesto · Interação · Silêncio
              </div>
            </div>
          </div>

          {/* Grafismo */}
          <div style={{ marginTop: 32 }} className="reveal d4">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                O símbolo como grafismo
              </div>
              <div
                style={{ flex: 1, height: 1, background: "var(--line)" }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  letterSpacing: ".2em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Usos além do logo
              </div>
            </div>
            <p
              style={{
                color: "var(--text-dim)",
                fontSize: 15.5,
                lineHeight: 1.65,
                maxWidth: "60ch",
                marginBottom: 28,
              }}
            >
              O símbolo AI não é só logo. É um elemento gráfico — pode
              ser cortado, ampliado, usado como textura de canto, marca
              d&apos;água sutil. Os quatro padrões abaixo são as formas
              canônicas de aplicar o símbolo como grafismo em peças da
              marca.
            </p>

            <div
              className="grafismo-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
              }}
            >
              {/* 01 Corte no canto */}
              <div
                style={{
                  aspectRatio: "1/1",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-card)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <svg
                  viewBox="0 0 300 192"
                  preserveAspectRatio="xMaxYMin slice"
                  style={{
                    position: "absolute",
                    top: "-30%",
                    right: "-40%",
                    width: "140%",
                    height: "auto",
                    opacity: 0.9,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="g-corte"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#C9A46B" />
                      <stop offset="100%" stopColor="#A78655" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#g-corte)"
                    fillRule="evenodd"
                    d={ICON_D}
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 20,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  01 · Corte no canto
                </div>
              </div>

              {/* 02 Marca d'água */}
              <div
                style={{
                  aspectRatio: "1/1",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-card)",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InlineIcon
                  opacity={0.06}
                  style={{ width: "82%", height: "auto" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 20,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  02 · Marca d&apos;água
                </div>
              </div>

              {/* 03 Padrão rítmico */}
              <div
                style={{
                  aspectRatio: "1/1",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-card)",
                  overflow: "hidden",
                  position: "relative",
                  padding: 24,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 10,
                    width: "100%",
                    height: "calc(100% - 28px)",
                  }}
                >
                  {[
                    0.25, 0.15, 0.35, 0.1, 0.2, 0.4, 0.08, 0.18,
                  ].map((op, i) => (
                    <InlineIcon
                      key={i}
                      opacity={op}
                      style={{ width: "100%", height: "auto" }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 20,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  03 · Padrão rítmico
                </div>
              </div>

              {/* 04 Escala · bleed */}
              <div
                style={{
                  aspectRatio: "1/1",
                  background: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-card)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <InlineIcon
                  opacity={0.12}
                  style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-25%",
                    width: "200%",
                    height: "auto",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    left: 24,
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    fontSize: 22,
                    letterSpacing: "-.015em",
                    color: "var(--text)",
                    lineHeight: 1.2,
                    maxWidth: "80%",
                  }}
                >
                  Atenda{" "}
                  <span style={{ color: "var(--gold)" }}>mais</span>.
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 20,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  04 · Escala · bleed
                </div>
              </div>
            </div>

            {/* Legend */}
            <div
              className="grafismo-legend"
              style={{
                marginTop: 20,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
                fontSize: 13.5,
                lineHeight: 1.55,
                color: "var(--text-dim)",
              }}
            >
              <div>
                <strong style={{ color: "var(--text)" }}>
                  Corte no canto.
                </strong>{" "}
                Símbolo grande, cortado pela borda superior-direita.
                Capas de LinkedIn, abertura de slide, hero de proposta.
              </div>
              <div>
                <strong style={{ color: "var(--text)" }}>
                  Marca d&apos;água.
                </strong>{" "}
                Símbolo centralizado em opacidade 6% — textura de fundo
                para páginas internas, blank states, e-mail
                institucional.
              </div>
              <div>
                <strong style={{ color: "var(--text)" }}>
                  Padrão rítmico.
                </strong>{" "}
                Grid com variação de opacidade — visual de
                &quot;densidade inteligente&quot;, usado em divisores
                entre seções e backgrounds de banner.
              </div>
              <div>
                <strong style={{ color: "var(--text)" }}>
                  Escala · bleed.
                </strong>{" "}
                Símbolo ampliado muito além da caixa, opacidade baixa,
                com copy editorial na frente. Para capas, hero, post
                destaque.
              </div>
            </div>

            <p
              style={{
                marginTop: 28,
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: 17,
                lineHeight: 1.5,
                color: "var(--text-dim)",
                maxWidth: "52ch",
              }}
            >
              O símbolo nunca compete com o conteúdo. Aparece como{" "}
              <em style={{ color: "var(--gold)" }}>textura</em>,{" "}
              <em style={{ color: "var(--gold)" }}>ambiente</em>,{" "}
              <em style={{ color: "var(--gold)" }}>peso</em> — nunca como
              decoração.
            </p>
          </div>

          {/* Don'ts */}
          <div className="logo-donts reveal d4" style={{ marginTop: 48 }}>
            {[
              "Não esticar, comprimir ou alterar proporção.",
              "Não recolorir fora da paleta oficial.",
              "Sem sombra, contorno, relevo ou brilho.",
              "Nunca dourado sobre fundo claro.",
            ].map((txt) => (
              <div className="dont-card" key={txt}>
                <div className="dont-icon">✕</div>
                <div className="dont-text">{txt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         04. REGRA DO ACENTO
         ════════════════════════════════════════════════════════════ */}
      <section id="acento">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">05</span>
            <span>A regra do acento</span>
            <span className="bar" />
          </div>
          <div className="accent-rule reveal d1">
            <span className="eyebrow-top">
              Regra número um · Sem exceção
            </span>
            <div className="accent-display">
              <div className="accent-token right">
                <span className="check">✓ Certo</span>
                IAlem
              </div>
              <div className="accent-token wrong">
                <span className="cross">✕ Errado</span>
                IAlém
              </div>
            </div>
            <p className="lead-statement">
              A marca se escreve <em>IAlem</em>, sem acento. A pronúncia
              continua &quot;I-A-<em>lém</em>&quot;.
            </p>
            <div className="accent-reasons">
              <div className="accent-reason">
                <div className="reason-num">(i) Visão internacional</div>
                <div className="reason-txt">
                  Acentos quebram em teclados estrangeiros. A marca
                  precisa sobreviver a quem digita fora do Brasil —
                  fornecedores, imprensa, futuros clientes em outros
                  mercados.
                </div>
              </div>
              <div className="accent-reason">
                <div className="reason-num">
                  (ii) Simplicidade digital
                </div>
                <div className="reason-txt">
                  URLs, handles, e-mails, slugs, search. IAlem sem acento
                  é limpo em qualquer um desses contextos. IAlém vira
                  %C3%A9 na barra de endereço.
                </div>
              </div>
              <div className="accent-reason">
                <div className="reason-num">(iii) Buscabilidade</div>
                <div className="reason-txt">
                  A grafia sem acento é a forma que todo mundo digita
                  primeiro. Não brigar contra isso é o caminho mais curto
                  até ser encontrado.
                </div>
              </div>
            </div>
            <div className="accent-precedent">
              <div className="prec-label">E em copy?</div>
              <div className="pair">
                <span style={{ color: "var(--text)" }}>IAlem</span>
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 18,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  ·
                </span>
                <span
                  style={{
                    color: "var(--text-dim)",
                    fontStyle: "italic",
                  }}
                >
                  leve seu atendimento{" "}
                  <em
                    style={{
                      color: "var(--gold)",
                      fontStyle: "italic",
                    }}
                  >
                    além
                  </em>
                </span>
              </div>
              <p className="note">
                Nome da marca sempre sem acento. A palavra
                &quot;além&quot; como verbo da promessa — com acento, em
                italic dourado. Uma regra, dois comportamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         05. PALETA
         ════════════════════════════════════════════════════════════ */}
      <section id="paleta">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">06</span>
            <span>Paleta</span>
            <span className="bar" />
          </div>
          <h2 className="reveal d1">
            O dourado é <em>sagrado</em>.
          </h2>
          <p className="palette-lead reveal d1">
            Fundo e neutros ocupam a maior parte de qualquer composição.
            O dourado entra como{" "}
            <em>calor humano dentro da precisão tech</em> — concentrado
            em CTAs, números e pontos que precisam puxar o olho. Nunca
            decorativo.
          </p>

          {/* Gold featured */}
          <div className="palette-featured reveal d2">
            <div className="swatch-lg">
              <div className="hex-huge">#C9A46B</div>
              <div className="big-label">Gold · o acento da marca</div>
            </div>
            <div className="info">
              <span className="token">--gold</span>
              <h3>
                Calor humano dentro da <em>precisão tech</em>.
              </h3>
              <p className="desc">
                Não é ouro luxo, não é amarelo alerta. É âmbar — a cor da
                luz quente de fim de tarde sobre uma mesa de madeira.
                Carrega temperatura humana sem quebrar a linguagem técnica
                do restante do sistema.
              </p>
              <div className="use">
                Uso: CTAs · Italics · Números · Avatar · Ativos
                selecionados
              </div>
            </div>
          </div>

          {/* Por que esse dourado / dark */}
          <div
            className="why-gold-grid reveal d3"
            style={{
              marginTop: 56,
              marginBottom: 16,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-card-lg)",
                padding: "40px 36px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 18,
                }}
              >
                Por que <em style={{ fontStyle: "normal" }}>esse</em>{" "}
                dourado
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 1.25,
                  letterSpacing: "-.01em",
                  maxWidth: "22ch",
                }}
              >
                Âmbar tem{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold)",
                    fontWeight: 300,
                  }}
                >
                  temperatura
                </em>
                . Ouro luxo é frio.
              </h3>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: 15,
                  lineHeight: 1.65,
                  marginTop: 18,
                }}
              >
                Testamos amarelos saturados (berrante demais), dourados
                metálicos (pesado, cansa o olho), bronzes escuros
                (desaparece no dark). O #C9A46B é o ponto em que a cor{" "}
                <strong style={{ color: "var(--text)" }}>
                  aquece sem ofuscar
                </strong>{" "}
                — é o tom de uma luminária acesa, não de um lingote.
              </p>
            </div>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-card-lg)",
                padding: "40px 36px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 18,
                }}
              >
                Por que <em style={{ fontStyle: "normal" }}>esse</em>{" "}
                dark
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 1.25,
                  letterSpacing: "-.01em",
                  maxWidth: "22ch",
                }}
              >
                Quase-preto{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold)",
                    fontWeight: 300,
                  }}
                >
                  warm
                </em>
                . Nunca cinza-azulado.
              </h3>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: 15,
                  lineHeight: 1.65,
                  marginTop: 18,
                }}
              >
                #0E0E0F tem um undertone levemente avermelhado —
                imperceptível em isolamento, mas é o que faz a página
                parecer{" "}
                <strong style={{ color: "var(--text)" }}>
                  acolhedora
                </strong>{" "}
                e não fria. É a diferença entre uma sala escura com
                lareira e um corredor de hospital à noite.
              </p>
            </div>
          </div>

          {/* Swatch cards */}
          <div className="palette-grid reveal d3">
            {[
              {
                bg: "#0E0E0F",
                token: "--bg",
                hex: "#0E0E0F",
                use: "Fundo global. Quase-preto warm — nunca cinza-azulado.",
              },
              {
                bg: "#141416",
                token: "--surface",
                hex: "#141416",
                use: "Cards, seções alternadas, header do phone mockup.",
              },
              {
                bg: "#1C1C1F",
                token: "--surface-2",
                hex: "#1C1C1F",
                use: "Superfície elevada · mensagens do agente no chat.",
              },
              {
                bg: "#2A2A2E",
                token: "--line",
                hex: "#2A2A2E",
                use: "Bordas de cards e divisores. 1px, sempre.",
              },
              {
                bg: "#EDECE7",
                token: "--text",
                hex: "#EDECE7",
                use: "Texto principal. Off-white warm, nunca branco puro.",
              },
              {
                bg: "#A8A6A0",
                token: "--text-dim",
                hex: "#A8A6A0",
                use: "Texto secundário · parágrafos de apoio.",
              },
            ].map((s) => (
              <div className="swatch-card" key={s.token}>
                <div className="color" style={{ background: s.bg }} />
                <div className="swatch-body">
                  <span className="token">{s.token}</span>
                  <span className="hex">{s.hex}</span>
                  <span className="swatch-use">{s.use}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Proportion */}
          <div className="proportion reveal d4">
            <div>
              <h3>
                A regra de proporção: <em>85 / 10</em>.
              </h3>
              <p className="copy">
                Se um layout passa dos 10% de dourado, está errado. O
                acento precisa do silêncio do dark pra funcionar — é o
                contraste que faz ele significar algo.
              </p>
            </div>
            <div>
              <div className="proportion-bar">
                <div className="seg-dark" />
                <div className="seg-gold" />
              </div>
              <div className="proportion-labels">
                <span>Dark &amp; neutros</span>
                <span>Gold</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         06. TIPOGRAFIA
         ════════════════════════════════════════════════════════════ */}
      <section id="tipografia">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">07</span>
            <span>Tipografia</span>
            <span className="bar" />
          </div>
          <h2 className="reveal d1">
            Três fontes, <em>três papéis</em>.
          </h2>

          <div className="typo-families" style={{ marginTop: 48 }}>
            <div className="typo-family f-fraunces reveal d1">
              <span className="family-label">Serif editorial</span>
              <div className="big-sample">IAlem</div>
              <div className="family-name">Fraunces</div>
              <div className="role">
                Títulos, números grandes, logo, italics estratégicos. A
                voz autoral da marca.
              </div>
              <div className="weights">
                <span>300 Light</span>
                <span>400 Regular</span>
                <span>500 Medium</span>
              </div>
            </div>
            <div className="typo-family f-inter reveal d2">
              <span className="family-label">Sans de interface</span>
              <div className="big-sample">IAlem</div>
              <div className="family-name">Inter Tight</div>
              <div className="role">
                Corpo, botões, navegação, inputs. A voz funcional —
                legível em qualquer contexto.
              </div>
              <div className="weights">
                <span>400 Regular</span>
                <span>500 Medium</span>
              </div>
            </div>
            <div className="typo-family f-mono reveal d3">
              <span className="family-label">Mono técnica</span>
              <div className="big-sample">IAlem</div>
              <div className="family-name">JetBrains Mono</div>
              <div className="role">
                Eyebrows, tags, timestamps, metadados. Assinatura técnica
                do sistema.
              </div>
              <div className="weights">
                <span>500 Medium</span>
              </div>
            </div>
          </div>

          {/* Por que esse trio */}
          <div
            className="why-trio reveal d2"
            style={{
              margin: "16px 0 40px",
              padding: "40px 44px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-card-lg)",
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 18,
                }}
              >
                Por que esse trio
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 26,
                  lineHeight: 1.2,
                  letterSpacing: "-.015em",
                  maxWidth: "14ch",
                }}
              >
                Cada fonte conta{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold)",
                    fontWeight: 300,
                  }}
                >
                  uma parte
                </em>{" "}
                da marca.
              </h3>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              {[
                {
                  name: "Fraunces",
                  nameStyle: {
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    fontSize: 32,
                    color: "var(--gold)",
                    fontStyle: "italic",
                    lineHeight: 1,
                  } as React.CSSProperties,
                  text: (
                    <>
                      É a{" "}
                      <strong style={{ color: "var(--text)" }}>
                        alma
                      </strong>
                      . Serif editorial dá à marca uma voz de autor —
                      alguém pensou, escreveu, editou. É o que tira a
                      IAlem do balcão de SaaS genérico e coloca numa
                      prateleira de marca contemporânea.
                    </>
                  ),
                },
                {
                  name: "Inter Tight",
                  nameStyle: {
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 26,
                    color: "var(--text)",
                    lineHeight: 1,
                  } as React.CSSProperties,
                  text: (
                    <>
                      É o{" "}
                      <strong style={{ color: "var(--text)" }}>
                        corpo
                      </strong>
                      . Sans neutra, legível, rápida de ler. Suporta
                      tudo que não é ênfase — deixa a Fraunces cantar só
                      quando precisa cantar.
                    </>
                  ),
                },
                {
                  name: "JetBrains",
                  nameStyle: {
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                    fontSize: 22,
                    color: "var(--text)",
                    lineHeight: 1,
                  } as React.CSSProperties,
                  text: (
                    <>
                      É a{" "}
                      <strong style={{ color: "var(--text)" }}>
                        assinatura técnica
                      </strong>
                      . Mono aparece em labels, tags, números — lembra o
                      leitor de que, por trás da voz editorial, tem uma
                      engenharia séria rodando.
                    </>
                  ),
                },
              ].map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 24,
                    alignItems: "baseline",
                    paddingBottom: i < 2 ? 18 : 0,
                    borderBottom:
                      i < 2
                        ? "1px solid var(--line-soft)"
                        : "none",
                  }}
                >
                  <div style={f.nameStyle}>{f.name}</div>
                  <div
                    style={{
                      color: "var(--text-dim)",
                      fontSize: 15,
                      lineHeight: 1.6,
                    }}
                  >
                    {f.text}
                  </div>
                </div>
              ))}
              <p
                style={{
                  marginTop: 8,
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: "var(--text-dim)",
                  maxWidth: "52ch",
                }}
              >
                Autoral, funcional, técnica — na ordem em que o leitor
                precisa encontrá-las.
              </p>
            </div>
          </div>

          {/* Scale */}
          <div className="typo-scale reveal d2">
            <div className="scale-row s-mono">
              <div className="scale-label">Eyebrow · 11px</div>
              <div className="sample">
                — Manual da marca · Abril 2026
              </div>
            </div>
            <div className="scale-row s-h1">
              <div className="scale-label">H1 · 88px</div>
              <div className="sample">
                IA no seu <em>negócio</em>.
              </div>
            </div>
            <div className="scale-row s-h2">
              <div className="scale-label">H2 · 56px</div>
              <div className="sample">
                Sem perder o <em>jeito humano</em>.
              </div>
            </div>
            <div className="scale-row s-h3">
              <div className="scale-label">H3 · 26px</div>
              <div className="sample">
                Atendimento imediato, 24/7, na voz da sua marca.
              </div>
            </div>
            <div className="scale-row s-body">
              <div className="scale-label">Body · 16px</div>
              <div className="sample">
                Inter Tight carrega o peso do texto corrido da marca. É
                neutra em intenção, precisa em execução — deixa a
                Fraunces cantar quando chega a hora dela cantar.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         07. VOZ
         ════════════════════════════════════════════════════════════ */}
      <section id="voz">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">08</span>
            <span>A voz da marca</span>
            <span className="bar" />
          </div>
          <h2 className="reveal d1">
            Três texturas que <em>convivem</em>.
          </h2>
          <p className="voice-intro reveal d1">
            Não são tons separados em campanhas diferentes — aparecem na
            mesma peça, no mesmo parágrafo. É o que dá ritmo à
            comunicação: direta, depois editorial, depois estruturada.
          </p>
          <div className="voice-grid">
            <div className="voice-card reveal d1">
              <div className="voice-meta">
                <span className="voice-num">01</span>
                <span>Direta</span>
              </div>
              <h3>Sem rodeio, sem adjetivo.</h3>
              <div className="quote">
                Seu próximo cliente não vai esperar.
              </div>
              <p className="footnote">
                Frases curtas. Verbos fortes no presente. Zero adjetivo
                gratuito. É a textura que gera urgência sem precisar
                gritar.
              </p>
            </div>
            <div className="voice-card reveal d2">
              <div className="voice-meta">
                <span className="voice-num">02</span>
                <span>Editorial</span>
              </div>
              <h3>
                Com <em>italic</em> estratégico.
              </h3>
              <div className="quote">
                IA no seu <em>negócio</em>. Sem perder o <em>jeito humano</em>.
              </div>
              <p className="footnote">
                Uma ou duas palavras em Fraunces italic dourado por
                frase. O italic é microfone, não grifo — carrega a
                intenção da linha.
              </p>
            </div>
            <div className="voice-card reveal d3">
              <div className="voice-meta">
                <span className="voice-num">03</span>
                <span>Estruturada</span>
              </div>
              <h3>
                Dualidade Hoje <em>→</em> Com a IAlem.
              </h3>
              <div className="duality">
                <div className="d-row hoje">
                  <span className="d-key">Hoje</span>
                  <span className="d-val">
                    Clientes esperam horas por respostas.
                  </span>
                </div>
                <div className="d-row depois">
                  <span className="d-key">C/ IAlem</span>
                  <span className="d-val">
                    Atendimento imediato, 24/7, na voz da sua marca.
                  </span>
                </div>
              </div>
              <p className="footnote">
                Formato &quot;antes/depois&quot; para mostrar
                transformação sem vender promessa vazia. Funciona porque
                o &quot;hoje&quot; é honesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         08. AVATAR
         ════════════════════════════════════════════════════════════ */}
      <section id="avatar">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">09</span>
            <span>Avatar do agente</span>
            <span className="bar" />
          </div>
          <div className="avatar-layout">
            <div className="avatar-side reveal d1">
              <h2>
                Como o agente <em>se apresenta</em>.
              </h2>
              <p>
                Toda vez que um agente IAlem aparece — em chat, demo,
                case, integração — ele chega com a mesma forma: círculo
                em <code style={{ color: "var(--text)" }}>--surface</code>
                , símbolo AI em dourado, glow sutil ao redor.
              </p>
              <p>
                Não é avatar de pessoa. Não é mascote. É a marca
                aparecendo como presença na conversa — quieta,
                competente, identificável.
              </p>
              <div className="avatar-sizes">
                {[32, 40, 48, 72].map((s) => (
                  <div className="av-item" key={s}>
                    <AgentAvatar size={s} />
                    <span className="av-label">{s}px</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat mock */}
            <div
              className="reveal d2"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-hero)",
                overflow: "hidden",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                minHeight: 440,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "20px 24px",
                  borderBottom: "1px solid var(--line-soft)",
                  background: "var(--surface-2)",
                }}
              >
                <AgentAvatar size={42} />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 14,
                      color: "var(--text)",
                    }}
                  >
                    Agente IAlem
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: 2,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: "var(--success)",
                        boxShadow: "0 0 10px var(--success)",
                      }}
                    />
                    Online agora
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  background: "var(--surface)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    marginBottom: 6,
                  }}
                >
                  — Hoje, 14:32 —
                </div>
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "14px 18px",
                    borderRadius: 18,
                    fontSize: 14.5,
                    lineHeight: 1.5,
                    background: "var(--surface-2)",
                    color: "var(--text)",
                    border: "1px solid var(--line-soft)",
                    borderBottomLeftRadius: 6,
                    alignSelf: "flex-start",
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <AgentAvatar
                    size={28}
                    style={{
                      boxShadow: "0 0 0 1px var(--line-soft)",
                    }}
                  />
                  <div>Olá, sou o agente IAlem. Como posso ajudar?</div>
                </div>
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "14px 18px",
                    borderRadius: 18,
                    fontSize: 14.5,
                    lineHeight: 1.5,
                    background: "var(--gold)",
                    color: "var(--bg)",
                    borderBottomRightRadius: 6,
                    alignSelf: "flex-end",
                    fontWeight: 500,
                  }}
                >
                  Queria ver um horário disponível pra amanhã.
                </div>
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "14px 18px",
                    borderRadius: 18,
                    fontSize: 14.5,
                    lineHeight: 1.5,
                    background: "var(--surface-2)",
                    color: "var(--text)",
                    border: "1px solid var(--line-soft)",
                    borderBottomLeftRadius: 6,
                    alignSelf: "flex-start",
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <AgentAvatar
                    size={28}
                    style={{
                      boxShadow: "0 0 0 1px var(--line-soft)",
                    }}
                  />
                  <div>
                    Claro. Tenho 10h, 14h e 16h30 livres — qual funciona
                    melhor pra você?
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 20px",
                  borderTop: "1px solid var(--line-soft)",
                  background: "var(--bg)",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-input)",
                    fontSize: 14,
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Digite sua mensagem…
                </div>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    background: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--bg)",
                    fontSize: 18,
                  }}
                >
                  →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         10. APLICAÇÕES
         ════════════════════════════════════════════════════════════ */}
      <section id="aplicacoes">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">10</span>
            <span>Aplicações</span>
            <span className="bar" />
          </div>
          <h2 className="reveal d1">
            A marca em <em>contexto</em>.
          </h2>
          <p className="apps-intro reveal d1">
            A identidade não existe no vácuo. Aqui estão as formas
            canônicas de como a IAlem aparece nos pontos de contato reais
            — do cartão ao post, da proposta ao banner.
          </p>

          <div className="apps-grid">
            {/* ── Cartão de Visita — Junior ── */}
            <div className="app-mockup reveal d1">
              <div className="app-stage" style={{ padding: 0, overflow: "hidden", borderRadius: "var(--r-card)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/images/cartao-junior.jpeg"
                  alt="Cartão de visita IAlem — D'ávila Júnior"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="app-meta">
                <div className="app-label">Cartão de visita · Frente e verso</div>
                <div className="app-desc">
                  Fundo dark com hot stamping dourado. Logo gold no topo, símbolo
                  como grafismo sutil no canto. Informação mínima — o cartão é
                  convite, não currículo.
                </div>
              </div>
            </div>

            {/* ── Cartão de Visita — Ana ── */}
            <div className="app-mockup reveal d2">
              <div className="app-stage" style={{ padding: 0, overflow: "hidden", borderRadius: "var(--r-card)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/images/cartao-ana.jpeg"
                  alt="Cartão de visita IAlem — Ana Flávia"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="app-meta">
                <div className="app-label">Cartão de visita · Variação</div>
                <div className="app-desc">
                  Mesmo sistema visual aplicado a diferentes sócios. A
                  consistência do layout reforça a marca — o nome muda, a
                  identidade permanece.
                </div>
              </div>
            </div>

            {/* ── Papelaria — Desk ── */}
            <div className="app-mockup reveal d3">
              <div className="app-stage" style={{ padding: 0, overflow: "hidden", borderRadius: "var(--r-card)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/images/desk-stationery.jpeg"
                  alt="Papelaria IAlem — caderno, celular, caneta e cartões"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="app-meta">
                <div className="app-label">Papelaria · Desk set</div>
                <div className="app-desc">
                  Caderno com símbolo em relevo, caneta com detalhe dourado,
                  porta-cartões e celular com ícone. Cada peça é dark premium —
                  nenhuma destoa.
                </div>
              </div>
            </div>

            {/* ── Fachada do Escritório ── */}
            <div className="app-mockup reveal d4">
              <div className="app-stage" style={{ padding: 0, overflow: "hidden", borderRadius: "var(--r-card)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/images/fachada-escritorio.jpeg"
                  alt="Fachada IAlem — letreiro retroiluminado em escritório"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="app-meta">
                <div className="app-label">Fachada · Sinalização</div>
                <div className="app-desc">
                  Letreiro em metal dourado com retroiluminação âmbar sobre
                  painel ripado escuro. A presença física traduz o mesmo tom
                  de sofisticação do digital.
                </div>
              </div>
            </div>
          </div>

          {/* ── Full width: Camiseta ── */}
          <div className="app-mockup reveal d4" style={{ marginTop: 24 }}>
            <div className="app-stage" style={{ padding: 0, overflow: "hidden", borderRadius: "var(--r-card)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/images/camiseta-marca.jpeg"
                alt="Camiseta IAlem — logo gold em camiseta preta"
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="app-meta">
              <div className="app-label">Vestuário · Camiseta</div>
              <div className="app-desc">
                Preta com logo gold no peito e ícone bordado na manga.
                Uniforme de time que funciona como peça de marca — casual,
                premium e reconhecível.
              </div>
            </div>
          </div>

          {/* ── Full width: Painel Aeroporto ── */}
          <div className="app-mockup reveal d4" style={{ marginTop: 24 }}>
            <div className="app-stage" style={{ padding: 0, overflow: "hidden", borderRadius: "var(--r-card)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/images/painel-aeroporto.jpeg"
                alt="Painel IAlem em sala de embarque de aeroporto"
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="app-meta">
              <div className="app-label">Mídia externa · Painel de aeroporto</div>
              <div className="app-desc">
                A marca em grande formato — dark premium em escala. Headline
                editorial com depoimento e números reais. O painel prova que
                o sistema visual funciona do digital ao físico sem perder
                identidade.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         11. KIT
         ════════════════════════════════════════════════════════════ */}
      <section id="kit">
        <div className="wrap">
          <div className="section-label reveal">
            <span className="num">11</span>
            <span>Kit da marca</span>
            <span className="bar" />
          </div>
          <div className="kit-wrap reveal d1">
            <span className="eyebrow-top">O pacote completo</span>
            <h2>
              Tudo que vocês precisam pra <em>aplicar</em> a marca.
            </h2>
            <p className="sub">
              Manual escrito, assets vetoriais em todas as variações,
              tokens CSS prontos pra codebase e templates iniciais. É a
              fundação — a marca vive daqui pra frente.
            </p>
            <div className="kit-list">
              {[
                {
                  slot: "01",
                  name: "Manual da marca",
                  desc: "Este documento em versão editável — princípios, regras e exemplos.",
                  fmt: ".md · .pdf",
                },
                {
                  slot: "02",
                  name: "Logos em todas as variações",
                  desc: "Wordmark, símbolo e monocromático — cada um em gold, white e dark.",
                  fmt: ".svg · .png",
                },
                {
                  slot: "03",
                  name: "Tokens CSS",
                  desc: "Cores, tipografia, espaçamento e sombras como variáveis prontas pra importar.",
                  fmt: ".css",
                },
                {
                  slot: "04",
                  name: "Fontes",
                  desc: "Fraunces, Inter Tight e JetBrains Mono — arquivos variáveis oficiais.",
                  fmt: ".ttf",
                },
                {
                  slot: "05",
                  name: "Templates iniciais",
                  desc: "Site institucional (Next.js), template de proposta, cover de LinkedIn.",
                  fmt: ".tsx · .pdf",
                },
              ].map((k) => (
                <div className="kit-item" key={k.slot}>
                  <span className="slot">{k.slot}</span>
                  <div className="kit-name">
                    {k.name}
                    <span className="kit-desc">{k.desc}</span>
                  </div>
                  <span className="format">{k.fmt}</span>
                </div>
              ))}
            </div>
            <button
              className="btn-primary"
              disabled
              style={{
                opacity: 0.5,
                cursor: "not-allowed",
                filter: "grayscale(0.3)",
              }}
            >
              Baixar manual completo{" "}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                  marginLeft: 4,
                }}
              >
                · Disponível em breve
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="brand-footer">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, marginBottom: 24 }}>
          <img
            src="/brand/ialem-logo-gold.svg"
            alt="IAlem"
            className="logo-mini"
            style={{ marginBottom: 0 }}
          />
          <div style={{ width: 1, height: 22, background: 'var(--line)' }} />
          <img
            src="/brand/bravo-logo-white.svg"
            alt="Bravo Marketing"
            style={{ height: 22 }}
          />
        </div>
        <div className="foot-line">
          Manual da Marca · IAlem Automação Inteligente LTDA
        </div>
        <div className="foot-line">
          Abril 2026 · Produzido por Bravo Marketing
        </div>
      </footer>
    </>
  );
}
