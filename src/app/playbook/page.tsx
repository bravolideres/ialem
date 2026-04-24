"use client";

import { useEffect } from "react";

export default function PlaybookPage() {
  useEffect(() => {
    const nav = document.getElementById("pbNav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

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
      <nav className="pb-nav" id="pbNav">
        <div className="inner">
          <a className="brand-link" href="#top" aria-label="IAlem">
            <img src="/brand/ialem-logo-gold.svg" alt="IAlem" />
          </a>
          <div className="links">
            <a href="#personas">Personas</a>
            <a href="#pilares">Pilares</a>
            <a href="#funil">Funil</a>
            <a href="#voz">Voz</a>
            <a href="#perfil">Perfil</a>
            <a href="#12posts">12 Posts</a>
            <a href="#trafego">Tráfego</a>
            <a href="#metricas">Métricas</a>
          </div>
          <select
            className="doc-switcher"
            defaultValue="/playbook"
            onChange={(e) => { window.location.href = e.target.value; }}
          >
            <option value="/playbook">Playbook</option>
            <option value="/marca">Marca</option>
          </select>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════
         HERO
         ════════════════════════════════════════════════════════════ */}
      <section className="pb-hero" id="top">
        <div className="hero-content">
          <div className="eyebrow-kicker reveal">
            <span className="dot" />
            Playbook de conteúdo · Abril 2026
          </div>
          <img
            src="/brand/ialem-logo-gold.svg"
            alt="IAlem"
            className="hero-logo reveal d1"
          />
          <h1 className="reveal d2">
            Conteúdo que leva <em>além</em>.
          </h1>
          <div className="hero-sub reveal d3">
            Como a IAlem se apresenta, conversa e conquista espaço no Instagram — do primeiro post à campanha paga.
          </div>
          <div className="attribution-by reveal d4">
            <span>Produzido por</span>
            <img src="/brand/bravo-logo-white.svg" alt="Bravo Marketing" className="attr-bravo-logo" />
          </div>
        </div>
        <div className="scroll-hint">Role para ver</div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         00 · PROPÓSITO
         ════════════════════════════════════════════════════════════ */}
      <section id="proposito" style={{ padding: "140px 0 80px" }}>
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">00</span>
            <span>Propósito deste documento</span>
            <span className="bar" />
          </div>

          <div className="proposito-grid reveal d1">
            <div>
              <h2 style={{ maxWidth: "14ch" }}>
                O manual diz como a marca <em>se parece</em>. Este diz como ela <em>se comporta</em>.
              </h2>
            </div>
            <div>
              <p style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.65, maxWidth: "48ch" }}>
                O Playbook de Conteúdo & Presença Digital é o documento de execução da IAlem no Instagram. Ele traduz a identidade visual, o tom de voz e o posicionamento definidos no Manual da Marca em ações concretas: o que postar, como falar, com quem falar e como medir.
              </p>
              <p style={{ color: "var(--text-dim)", fontSize: 15.5, lineHeight: 1.65, marginTop: 16, maxWidth: "48ch" }}>
                Não é teórico. É operacional — serve pra quem vai abrir o Canva, escrever a caption ou configurar o Meta Ads. Cada decisão aqui tem raiz no Manual da Marca e foco em resultado.
              </p>

              <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
                {[
                  { label: "Instagram", tag: "@ialemautomacao" },
                  { label: "Site", tag: "ialem.ai" },
                  { label: "Foco inicial", tag: "12 posts + tráfego pago" },
                ].map((c) => (
                  <div key={c.label} className="channel-chip">
                    <span className="channel-chip-label">{c.label}</span>
                    <span className="channel-chip-value">{c.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         01 · PERSONAS
         ════════════════════════════════════════════════════════════ */}
      <section id="personas">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">01</span>
            <span>Personas</span>
            <span className="bar" />
          </div>

          <div className="persona-grid">
            <div className="persona-intro reveal d1">
              <div>
                <h2 style={{ maxWidth: "16ch" }}>
                  Pra quem a IAlem <em>conversa</em>.
                </h2>
              </div>
              <div>
                <p style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.65, maxWidth: "48ch" }}>
                  Três arquétipos — volume, experiência e escala. Cada um tem um nome, uma rotina e uma frustração específica que a IAlem resolve.
                </p>
                <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.6, marginTop: 16, maxWidth: "48ch", fontStyle: "italic" }}>
                  E dentro de cada um mora um cético. Ele aparece na hora da decisão — por isso existe a seção de <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Objeções recorrentes</em> abaixo.
                </p>
              </div>
            </div>

            <div className="persona-cards-list">
              {/* Persona 1: Carlos */}
              <div className="persona-card reveal d1">
                <div className="persona-photo">
                  <img
                    src="/images/persona-carlos.png"
                    alt="Carlos — dono de concessionária"
                    style={{ objectPosition: "80% center" }}
                  />
                </div>
                <div className="persona-content">
                  <div className="persona-header">
                    <div className="persona-name">Carlos</div>
                    <div className="persona-role">Dono de concessionária em Goiânia</div>
                  </div>
                  <div className="persona-body">
                    <p className="persona-bio">
                      Carlos tem 3 lojas, 42 vendedores e um problema: 60% dos leads que chegam pelo Instagram são respondidos depois de 2 horas. Ele sabe que o WhatsApp é o canal mais forte da operação, mas depende de gente pra responder — e gente almoça, falta e esquece. Já tentou chatbot em 2023, mas era tão robótico que os clientes chamavam o vendedor pelo nome pra fugir do bot.
                    </p>
                    <div className="persona-section-label">O que faz ele parar o scroll</div>
                    <ul className="persona-list">
                      <li>Case real de concessionária ou empresa do porte dele</li>
                      <li>Número concreto: &ldquo;40% mais leads atendidos em 3 semanas&rdquo;</li>
                      <li>Comparação antes/depois que ele se enxerga</li>
                    </ul>
                    <div className="persona-section-label">O que faz ele agir</div>
                    <p className="persona-trigger">
                      Teste grátis. Carlos não compra proposta — compra demonstração. Se ele puder testar no WhatsApp dele em 15 minutos, ele decide na hora.
                    </p>
                  </div>
                </div>
              </div>

              {/* Persona 2: Dra. Patrícia */}
              <div className="persona-card reveal d2">
                <div className="persona-photo">
                  <img
                    src="/images/persona-patricia.png"
                    alt="Dra. Patrícia — sócia de clínica"
                    style={{ objectPosition: "60% center" }}
                  />
                </div>
                <div className="persona-content">
                  <div className="persona-header">
                    <div className="persona-name">Dra. Patrícia</div>
                    <div className="persona-role">Sócia de clínica multidisciplinar</div>
                  </div>
                  <div className="persona-body">
                    <p className="persona-bio">
                      Patrícia dirige uma clínica com 8 profissionais de saúde. Tem 2 recepcionistas e 200 agendamentos por semana. O no-show está em 28% e a recepção gasta 3 horas por dia mandando mensagens de confirmação. Patrícia é exigente com experiência do paciente — ela não vai colocar um bot frio pra falar com quem acabou de agendar uma consulta.
                    </p>
                    <div className="persona-section-label">O que faz ela parar o scroll</div>
                    <ul className="persona-list">
                      <li>Case de clínica com redução de no-show</li>
                      <li>Conteúdo sobre personalização: &ldquo;fala como se fosse da equipe&rdquo;</li>
                      <li>Dados sobre tempo de resposta e impacto na satisfação</li>
                    </ul>
                    <div className="persona-section-label">O que faz ela agir</div>
                    <p className="persona-trigger">
                      Diagnóstico gratuito mostrando quanto ela perde por mês com no-show e demora. Patrícia responde a dados, não a promessa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Persona 3: Roberto */}
              <div className="persona-card reveal d3">
                <div className="persona-photo">
                  <img
                    src="/images/persona-rafael.png"
                    alt="Roberto — diretor executivo de cooperativa"
                  />
                </div>
                <div className="persona-content">
                  <div className="persona-header">
                    <div className="persona-name">Roberto</div>
                    <div className="persona-role">Diretor executivo de cooperativa de crédito</div>
                  </div>
                  <div className="persona-body">
                    <p className="persona-bio">
                      Roberto dirige uma cooperativa com 14 mil cooperados e 6 postos de atendimento. O time de relacionamento não dá conta de responder dúvidas sobre crédito, cobrança e produtos — o WhatsApp acumula 400+ mensagens por dia e a maioria espera horas. Ele sabe que precisa de escala sem perder o tom humano que diferencia cooperativa de banco.
                    </p>
                    <div className="persona-section-label">O que faz ele parar o scroll</div>
                    <ul className="persona-list">
                      <li>Case de instituição financeira ou cooperativa com volume alto</li>
                      <li>Comparação: custo de atendente vs. agente de IA por cooperado</li>
                      <li>Resultado em NPS: &ldquo;satisfação subiu 22 pontos em 2 meses&rdquo;</li>
                    </ul>
                    <div className="persona-section-label">O que faz ele agir</div>
                    <p className="persona-trigger">
                      Apresentação executiva com ROI projetado. Roberto convence o conselho com número e compliance — se o material trouxer segurança regulatória e economia mensal, ele agenda reunião na semana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Objeções recorrentes */}
          <div className="objecoes-box reveal d4">
            <div className="objecoes-header">
              <div className="info-eyebrow">Objeções recorrentes</div>
              <h3>O cético mora dentro <em>de todos</em>.</h3>
              <p>
                Carlos, Patrícia e Roberto são pragmáticos — cada um trava na decisão por um medo diferente. Os quatro bloqueios que mais aparecem em DM, e o contraponto direto.
              </p>
            </div>
            <div className="objecoes-grid">
              {[
                { q: "Vai substituir meus vendedores?", a: "Não. O agente tira a repetição do dia — libera o vendedor pra vender o que é complexo." },
                { q: "É caro pra minha operação?", a: "Custa menos que um atendente júnior — e trabalha 24/7, sem falta, sem turnover." },
                { q: "Meu cliente vai perceber?", a: "Se a experiência for boa, não importa. Ele quer resposta rápida, não rótulo de IA." },
                { q: "E se a IA falar bobagem?", a: "A gente trava alucinação no treinamento. O agente só responde o que foi autorizado." },
              ].map((o) => (
                <div key={o.q} className="objecao-item">
                  <div className="objecao-q">&ldquo;{o.q}&rdquo;</div>
                  <div className="objecao-a">{o.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         02 · PROPOSTA DE VALOR & MENSAGENS
         ════════════════════════════════════════════════════════════ */}
      <section id="mensagens">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">02</span>
            <span>Proposta de valor & Mensagens-chave</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "18ch" }}>
            Uma promessa, <em>várias vozes</em>.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            A proposta de valor central não muda. O que muda é como ela é contada — dependendo de quem ouve e em que estágio do funil está.
          </p>

          {/* Value prop */}
          <div className="info-card reveal d2" style={{ textAlign: "center", padding: "56px 48px", marginBottom: 32 }}>
            <div className="info-eyebrow" style={{ textAlign: "center" }}>Proposta de valor central</div>
            <div style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05,
              letterSpacing: "-.03em", maxWidth: "18ch", margin: "0 auto",
            }}>
              IA no seu <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>negócio</em>.<br />
              Sem perder o <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>jeito humano</em>.
            </div>
          </div>

          <div className="msg-grid reveal d3">
            <div className="msg-card">
              <div className="msg-eyebrow">Topo de funil · Curiosidade</div>
              <div className="msg-quote">Seu próximo cliente <em>não vai esperar</em>.</div>
              <div className="msg-context">Gatilho de urgência. Posts de atração, carrosséis educativos. Tom direto.</div>
            </div>
            <div className="msg-card">
              <div className="msg-eyebrow">Meio de funil · Confiança</div>
              <div className="msg-quote">Uma clínica reduziu 60% de no-show em <em>3 semanas</em>.</div>
              <div className="msg-context">Prova social. Cases, depoimentos, números reais. Tom editorial.</div>
            </div>
            <div className="msg-card">
              <div className="msg-eyebrow">Fundo de funil · Ação</div>
              <div className="msg-quote">Teste <em>agora</em> — na prática, no seu WhatsApp.</div>
              <div className="msg-context">CTA direto para teste gratuito ou diagnóstico. Sem rodeio.</div>
            </div>
            <div className="msg-card">
              <div className="msg-eyebrow">Diferenciação</div>
              <div className="msg-quote">Não é ferramenta. É <em>agência</em> que constrói, treina e opera com você.</div>
              <div className="msg-context">Separação da concorrência — tanto da tecnologia (bots genéricos) quanto do modelo (SaaS de prateleira). Quando o lead compara preço com licença mensal barata.</div>
            </div>
          </div>

          {/* Frases proibidas */}
          <div className="reveal d4" style={{ marginTop: 48 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--danger)", marginBottom: 16 }}>
              ✕ Frases que a IAlem nunca usa
            </div>
            <div className="forbidden-grid">
              {["Solução disruptiva", "IA de ponta", "Revolucione seu negócio", "Tecnologia de última geração", "O futuro é agora", "Robô inteligente", "Chatbot avançado", "Transformação digital", "Automatize tudo", "Substitua seu time"].map((phrase) => (
                <div key={phrase} className="forbidden-item">
                  <div className="forbidden-icon">✕</div>
                  <div className="forbidden-text">{phrase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         03 · PILARES DE CONTEÚDO
         ════════════════════════════════════════════════════════════ */}
      <section id="pilares">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">03</span>
            <span>Pilares de conteúdo</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "18ch" }}>
            Seis eixos que <em>organizam</em> tudo.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            Todo post se encaixa em pelo menos um pilar. Sem pilar = sem propósito = não publica.
          </p>

          <div className="pillar-grid reveal d2">
            {[
              { num: "01", title: "Resultado Real", desc: "Cases, números e transformações reais de clientes. A prova que vende.", examples: "Case clínica · Antes/depois · Depoimento com métrica" },
              { num: "02", title: "Bastidores", desc: "Como a IAlem funciona por dentro. Treino de agentes, integração, ajuste fino.", examples: "Como treinamos a IA · Dia de integração · Ajuste de tom" },
              { num: "03", title: "Educação sobre IA", desc: "Desmistificar, ensinar, tirar medo. Educa sem ser condescendente.", examples: "IA vs chatbot · Mitos sobre automação · O que IA não faz" },
              { num: "04", title: "Visão de Mercado", desc: "Tendências, dados e provocações sobre o futuro do atendimento.", examples: "Dados Gartner · Benchmarks do setor · Tendência WhatsApp" },
              { num: "05", title: "Marca & Cultura", desc: "O lado humano por trás da tecnologia. Time, valores, propósito.", examples: "Por que o dourado · Time IAlem · Nossa história" },
              { num: "06", title: "Objeções & Contrapontos", desc: "Responde aos medos que travam a decisão. Objeção + contraponto direto, sem rodeio.", examples: "Vai substituir vendedor? · É caro? · Meu cliente percebe?" },
            ].map((p) => (
              <div key={p.num} className="pillar-cell">
                <div className="pillar-num">{p.num}</div>
                <h3>{p.title}</h3>
                <div className="pillar-desc">{p.desc}</div>
                <div className="pillar-examples">{p.examples}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         04 · FUNIL DE CONTEÚDO
         ════════════════════════════════════════════════════════════ */}
      <section id="funil">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">04</span>
            <span>Funil de conteúdo</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "18ch" }}>
            De seguidor a <em>cliente</em>.<br />E <em>além</em>.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            Cinco estágios. Cada post vive em um deles. Sem clareza de estágio = post sem função.
          </p>

          <div className="funnel-visual reveal d2" style={{ marginTop: 48 }}>
            {[
              { label: "Topo", name: "Atração", desc: "Educação + provocação. Conteúdo que faz parar o scroll.", content: "Pilares: Educação sobre IA, Visão de Mercado.", objective: "Seguidores · Alcance · Salvamentos", width: 100 },
              { label: "Meio", name: "Consideração", desc: "Cases + bastidores. Conteúdo que cria confiança.", content: "Pilares: Resultado Real, Bastidores.", objective: "Engajamento · DMs · Compartilhamentos", width: 82 },
              { label: "Meio-fundo", name: "Decisão", desc: "Remove o último medo. Objeções desarmadas com dados e comparações reais.", content: "Pilares: Objeções & Contrapontos, Resultado Real.", objective: "DMs qualificadas · Cliques no link · Pedidos de demo", width: 64 },
              { label: "Fundo", name: "Conversão", desc: "CTA direto. Teste grátis, diagnóstico, agendamento.", content: "CTA: teste no WhatsApp, diagnóstico gratuito.", objective: "Mensagens · Agendamentos · Contratos", width: 48 },
              { label: "Pós-venda", name: "Advocacy", desc: "Cliente virou fã. Ativa indicação e mantém vínculo.", content: "Depoimentos em vídeo, spotlight de clientes.", objective: "Indicações · Renovações · Novos cases", width: 34 },
            ].map((s, i) => (
              <div key={s.label} className="funnel-stage" style={{ width: `${s.width}%`, marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="funnel-stage-indicator">
                  <div className="funnel-stage-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="funnel-stage-dot" />
                  {i < 4 && <div className="funnel-stage-line" />}
                </div>
                <div className="funnel-stage-body">
                  <div className="funnel-stage-left">
                    <div className="stage-label">{s.label}</div>
                    <div className="stage-name">{s.name}</div>
                    <div className="stage-desc">{s.desc}</div>
                  </div>
                  <div className="funnel-stage-right">
                    <div className="stage-content">{s.content}</div>
                    <div className="stage-objective">Objetivo → <span>{s.objective}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         05 · TOM DE VOZ APLICADO
         ════════════════════════════════════════════════════════════ */}
      <section id="voz">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">05</span>
            <span>Tom de voz no Instagram</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "16ch" }}>
            Três texturas, <em>um canal</em>.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            O Manual da Marca define três texturas de voz: Direta, Editorial e Estruturada. Cada formato do Instagram puxa uma ou duas delas.
          </p>

          <div className="voice-channel-grid reveal d2">
            <div className="voice-channel-card">
              <div className="channel-head">
                <div className="channel-icon">📸</div>
                <div>
                  <div className="channel-name">Feed (Carrosséis e Imagens)</div>
                  <div className="channel-tone">Direta + editorial</div>
                </div>
              </div>
              <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.6 }}>
                Captions curtas (máximo 3 parágrafos). Headline forte na primeira linha — ela precisa funcionar sozinha no feed. Italic dourado como destaque nos carrosséis. CTA sempre no final.
              </p>
              <div className="do-dont">
                <div className="do-col">
                  <span className="do-label">✓ Sim</span>
                  &ldquo;Seu time repete as mesmas respostas 30 vezes por dia. E se isso virasse processo?&rdquo;
                </div>
                <div className="dont-col">
                  <span className="dont-label">✕ Não</span>
                  &ldquo;Conheça nossa solução de inteligência artificial de última geração!&rdquo;
                </div>
              </div>
            </div>

            <div className="voice-channel-card">
              <div className="channel-head">
                <div className="channel-icon">🎬</div>
                <div>
                  <div className="channel-name">Reels</div>
                  <div className="channel-tone">Direta · tom rápido e visual</div>
                </div>
              </div>
              <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.6 }}>
                Máximo 30 segundos. Texto na tela em Fraunces italic dourado sobre fundo dark. Sem música genérica — áudio original ou silêncio com legenda. Hook nos 2 primeiros segundos.
              </p>
              <div className="do-dont">
                <div className="do-col">
                  <span className="do-label">✓ Sim</span>
                  Gravação de tela mostrando agente atendendo em tempo real + texto &ldquo;isso tá rodando agora&rdquo;
                </div>
                <div className="dont-col">
                  <span className="dont-label">✕ Não</span>
                  Stock footage de pessoas no computador com música corporativa
                </div>
              </div>
            </div>

            <div className="voice-channel-card">
              <div className="channel-head">
                <div className="channel-icon">⏳</div>
                <div>
                  <div className="channel-name">Stories</div>
                  <div className="channel-tone">Direta · casual + interativa</div>
                </div>
              </div>
              <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.6 }}>
                Bastidores, enquetes, caixinha de perguntas. Tom mais solto mas nunca desleixado. Fundo sempre dark, nunca branco. Stickers e textos seguem paleta gold/text.
              </p>
              <div className="do-dont">
                <div className="do-col">
                  <span className="do-label">✓ Sim</span>
                  Enquete: &ldquo;Quanto tempo seu cliente espera pra ser respondido?&rdquo; com opções
                </div>
                <div className="dont-col">
                  <span className="dont-label">✕ Não</span>
                  Repost de meme genérico sobre IA sem contexto da marca
                </div>
              </div>
            </div>

            <div className="voice-channel-card">
              <div className="channel-head">
                <div className="channel-icon">💬</div>
                <div>
                  <div className="channel-name">DM e Comentários</div>
                  <div className="channel-tone">Direta · conversacional</div>
                </div>
              </div>
              <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.6 }}>
                Responder como pessoa, não como marca. Usar nome quando possível. Sem respostas automáticas genéricas. Sempre direcionar pra ação: &ldquo;Quer que eu te mande o link do teste?&rdquo;
              </p>
              <div className="do-dont">
                <div className="do-col">
                  <span className="do-label">✓ Sim</span>
                  &ldquo;Boa pergunta! Funciona assim: [explica]. Quer testar na prática?&rdquo;
                </div>
                <div className="dont-col">
                  <span className="dont-label">✕ Não</span>
                  &ldquo;Obrigado pelo contato! Acesse nosso site para mais informações.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         06 · IDENTIDADE DO PERFIL INSTAGRAM
         ════════════════════════════════════════════════════════════ */}
      <section id="perfil">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">06</span>
            <span>Identidade do perfil · @ialemautomacao</span>
            <span className="bar" />
          </div>

          <div className="revisar-banner reveal d1" style={{ marginBottom: 28 }}>
            <div className="revisar-banner-icon">🔄</div>
            <div className="revisar-banner-body">
              <div className="revisar-banner-label">Revisão · Abril 2026</div>
              <div className="revisar-banner-text">
                O mock do feed atual exibe o <strong>nome antigo &ldquo;IAlem | Agentes de IA&rdquo;</strong> e a <strong>bio antiga</strong>. Atualizar o perfil do Instagram (e o mock) com os textos abaixo.
              </div>
            </div>
          </div>

          <div className="profile-detail-grid reveal d1">
            {/* Main profile card */}
            <div className="profile-detail-card revisar-card">
              <div className="info-eyebrow" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span>Configuração do Perfil</span>
                <span className="revisar-badge">🔄 Atualizar no IG</span>
              </div>
              <div className="profile-detail-body">
                <div>
                  <div className="profile-field-label">Foto de perfil</div>
                  <div className="profile-field-value">Símbolo AI em dourado sobre fundo dark (#0E0E0F). Nunca a wordmark — não lê em 36px.</div>
                </div>
                <div>
                  <div className="profile-field-label">Nome do perfil</div>
                  <div className="profile-field-value"><strong>IAlem | Automação Inteligente</strong></div>
                </div>
                <div>
                  <div className="profile-field-label">Bio</div>
                  <div className="profile-field-value" style={{ fontFamily: "var(--font-sans)", lineHeight: 1.8 }}>
                    Agência de Automação Inteligente<br />
                    Agentes de IA sob medida para o seu negócio<br />
                    🔗 Leve seu negócio além ↓
                  </div>
                </div>
                <div>
                  <div className="profile-field-label">Link na bio</div>
                  <div className="profile-field-value">ialem.ai ou link direto pro WhatsApp com mensagem pré-preenchida</div>
                </div>
                <div>
                  <div className="profile-field-label">Categoria</div>
                  <div className="profile-field-value">Serviço de Tecnologia da Informação</div>
                </div>
              </div>
            </div>

            {/* Highlights + Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="profile-detail-card">
                <div className="info-eyebrow">Destaques (Highlights)</div>
                <div className="persona-tags" style={{ marginTop: 12, gap: 10 }}>
                  {["🤖 Como Funciona", "📊 Cases", "❓ FAQ", "🎬 Bastidores", "✅ Teste Grátis"].map((d) => (
                    <span key={d} className="persona-tag" style={{ fontSize: 11, padding: "8px 16px" }}>{d}</span>
                  ))}
                </div>
                <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6, marginTop: 16 }}>
                  Capas dos destaques: ícone branco sobre fundo #0E0E0F com borda gold sutil. Tudo na mesma linguagem visual.
                </p>
              </div>

              <div className="profile-detail-card">
                <div className="info-eyebrow">Grid visual do feed</div>
                <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.6 }}>
                  Alternância entre carrosséis dark com tipografia e imagens/reels. O grid deve transmitir: <em style={{ color: "var(--gold)", fontStyle: "italic" }}>seriedade, tecnologia e resultado</em>. Nunca usar cores fora da paleta (rosa, azul elétrico, verde neon = proibido).
                </p>
              </div>

              <div className="profile-detail-card">
                <div className="info-eyebrow">Google Meu Negócio</div>
                <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.6, marginTop: 4 }}>
                  Criar ficha como <strong>IAlem — Automação Inteligente</strong>. Categoria: &ldquo;Serviço de tecnologia da informação&rdquo;. Descrição: versão resumida do hero do site. Adicionar fotos do time, logo, e manter posts semanais espelhando o Instagram. Link direto para ialem.ai.
                </p>
              </div>
            </div>
          </div>

          {/* Hashtags */}
          <div className="reveal d2" style={{ marginTop: 40 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
              Hashtags oficiais
            </div>
            <div className="hashtag-grid">
              {["#IAlem", "#LeveAlem", "#AgenteDeIA", "#IAlemNaPrática", "#AutomaçãoInteligente", "#AtendimentoIA", "#OperaçãoIA", "#IASobMedida", "#AtendaAlém"].map((h) => (
                <span key={h} className="hashtag">{h}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         07 · FORMATOS & TEMPLATES
         ════════════════════════════════════════════════════════════ */}
      <section id="formatos">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">07</span>
            <span>Formatos & Templates</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "16ch" }}>
            Os modelos que <em>repetem</em>.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            Oito templates que cobrem 90% do que a IAlem posta. Sem template = sem ritmo. Variedade suficiente pra não cansar o feed, repetição suficiente pra construir identidade.
          </p>

          <div className="format-grid reveal d2" style={{ marginTop: 48 }}>
            {[
              { label: "01", title: "Carrossel Educativo", desc: "5–8 slides. Fundo dark, título em Fraunces, corpo em Inter Tight. Último slide = CTA gold.", struct: "Slide 1 → Headline provocativa\nSlides 2–6 → Conteúdo educativo\nSlide 7 → Resumo / Checklist\nSlide 8 → CTA + Logo" },
              { label: "02", title: "Post de Case", desc: "Imagem com métrica grande em dourado + fundo dark. Caption conta a história do resultado.", struct: "Visual → Métrica Fraunces 72px\nCaption L1 → Gancho provocativo\nCaption L2–4 → Contexto + resultado\nCTA → 'Quer isso na sua empresa?'" },
              { label: "03", title: "Antes & Depois", desc: "Grid dividido: 'Hoje' em cinza, 'Com a IAlem' em gold. Formato dualidade do manual.", struct: "Lado esquerdo → 'Hoje' cinza\nLado direito → 'Com a IAlem' gold\nCaption → 'Qual lado é o seu?'" },
              { label: "04", title: "Quote Card", desc: "Frase de impacto em Fraunces italic + atribuição. Simples, compartilhável.", struct: "Fundo → Dark + grafismo sutil\nFrase → Fraunces 300 italic gold\nAtribuição → Nome + cargo\nRodapé → Logo 10% opacity" },
              { label: "05", title: "Reels Demo", desc: "Gravação de tela mostrando o agente em ação. Máximo 30s. Texto em Fraunces italic dourado sobre o vídeo, sem voz off.", struct: "Take 1 → Tela do WhatsApp\nTake 2 → Mensagem do cliente\nTake 3 → Resposta do agente\nCaption → 'Isso tá rodando agora'" },
              { label: "06", title: "Post de Números", desc: "Infográfico com dado de mercado. Número gigante em Fraunces, fonte no rodapé. Formato altamente compartilhável.", struct: "Visual → Número 120px gold\nLinha 2 → Contexto curto\nFonte → Inter Tight 12px cinza\nCTA → 'Dá pra mudar isso'" },
              { label: "07", title: "Story Bastidor", desc: "Série semanal de 3–5 stories sequenciais com o mesmo template. Constrói familiaridade com o time e o processo.", struct: "Story 1 → Título do tema\nStories 2–4 → Bastidor real\nStory 5 → Pergunta ou enquete\nLink → Caixinha de perguntas" },
              { label: "08", title: "Post Comentário", desc: "Reação a notícia ou evento do setor. Posiciona a marca como voz, não como vendedor. Usar só quando tiver opinião real.", struct: "Print da notícia → 20% do espaço\nComentário IAlem → 60%\nImplicação pro leitor → 20%\nCTA → debate nos comentários" },
            ].map((f) => (
              <div key={f.label} className="format-card">
                <div className="format-label">Formato {f.label}</div>
                <h3>{f.title}</h3>
                <div className="format-desc">{f.desc}</div>
                <div className="format-structure">
                  {f.struct.split("\n").map((line, i) => {
                    const [gold, rest] = line.split(" → ");
                    return <span key={i}><span className="struct-gold">{gold}</span> → {rest}<br /></span>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         08 · AS 12 POSTAGENS INICIAIS
         ════════════════════════════════════════════════════════════ */}
      <section id="12posts">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">08</span>
            <span>As 12 postagens inaugurais</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "20ch" }}>
            O primeiro mês de <em>conteúdo</em>.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            12 posts estratégicos para inaugurar o perfil com consistência. Cada um com arte, legenda e CTA definidos. 3 posts por semana, 4 semanas.
          </p>

          <div className="revisar-banner reveal d1">
            <div className="revisar-banner-icon">🔄</div>
            <div className="revisar-banner-body">
              <div className="revisar-banner-label">Revisão · Abril 2026</div>
              <div className="revisar-banner-text">
                O conceito da IAlem evoluiu para <strong>Agência de Automação Inteligente</strong> com proposta <strong>&ldquo;IA no seu negócio. Sem perder o jeito humano.&rdquo;</strong> e tagline <strong>&ldquo;Leve seu negócio além.&rdquo;</strong> Cards marcados abaixo precisam ser refeitos. Regra geral: em qualquer arte onde apareça <strong>&ldquo;LEVE SEU ATENDIMENTO ALÉM&rdquo;</strong>, trocar por <strong>&ldquo;LEVE SEU NEGÓCIO ALÉM&rdquo;</strong>.
              </div>
            </div>
          </div>

          <div className="posts-grid reveal d2">
            {[
              {
                sem: "Semana 1", num: "01", pilar: "Marca & Cultura", formato: "Carrossel",
                titulo: "Prazer, IAlem.",
                revisar: [
                  "**Capa (card 1):** adicionar a saudação **\"Prazer,\"** em Fraunces italic dourado pequeno, acima do wordmark IAlem. Sem isso o slide fica sem contexto de apresentação.",
                  "**Trocar tagline** em qualquer card onde apareça \"LEVE SEU ATENDIMENTO ALÉM\" → **\"LEVE SEU NEGÓCIO ALÉM\"**.",
                  "Reforçar no slide 4 que a IAlem é **agência**, não ferramenta — ex.: adicionar um slide antes/depois de \"Não é bot. É agente\" com \"Não é ferramenta. É agência.\"",
                ],
                arte: "Slide 1: 'Prazer,' em Fraunces italic dourado pequeno + Logo IAlem wordmark grande em dourado, fundo dark. Slide 2: 'Criamos agentes de IA sob medida'. Slide 3: 'Eles atendem, qualificam e convertem — na voz da sua marca'. Slide 4: Ícone agent + texto 'Não é bot. É agente.' Slide 5: CTA 'Teste na prática → link na bio'",
                legenda: "A IAlem nasceu de uma frustração simples: empresas perdem clientes por demora no atendimento.\n\nSó que contratar mais gente nem sempre é a resposta. E chatbot genérico espanta mais do que resolve. E ferramenta de prateleira de R$ 500/mês também não — porque ninguém automatiza um negócio com template pronto.\n\nPor isso a IAlem é uma agência de automação inteligente: a gente mergulha na sua operação, desenha o agente sob medida, integra aos seus sistemas e opera junto. Você fala com um ponto de contato do diagnóstico à operação — não com suporte por ticket.\n\nNa prática. No WhatsApp. 24/7.\n\n→ Link na bio pra testar no seu número.",
              },
              {
                sem: "Semana 1", num: "02", pilar: "Educação sobre IA", formato: "Carrossel",
                titulo: "IA vs Chatbot: qual a diferença real?",
                arte: "Slide 1: 'IA vs Chatbot' em Fraunces grande. Slide 2: 'Chatbot segue roteiro fixo'. Slide 3: 'Agente de IA entende contexto'. Slide 4: Exemplo de conversa chatbot (robótica) vs agente (natural). Slide 5: 'Qual deles seu cliente prefere?' Slide 6: CTA IAlem",
                legenda: "Chatbot: 'Para falar com vendas, digite 2.'\nAgente de IA: 'Vi que você tava olhando o apartamento do Setor Marista. Quer agendar uma visita?'\n\nEssa é a diferença.\n\nUm segue script. O outro entende contexto, histórico e intenção.\n\nQual dos dois seu cliente quer conversar?\n\n→ Salva esse post pra consultar depois.",
              },
              {
                sem: "Semana 1", num: "03", pilar: "Visão de Mercado", formato: "Imagem + caption",
                titulo: "85% das empresas terão agente de IA até 2028.",
                arte: "Fundo dark. Número '85%' em Fraunces 120px dourado centralizado. Abaixo, em Inter Tight: 'das empresas terão agentes de IA até 2028 — Gartner'. Logo IAlem pequeno no canto inferior.",
                legenda: "85% das interações com clientes serão gerenciadas por IA até 2028.\n\nIsso não é previsão de filme de ficção científica. É dado do Gartner.\n\nA pergunta não é se, é quando.\n\nE quem automatiza primeiro, atende melhor. Quem atende melhor, vende mais.\n\nSua empresa tá em qual dos 85%... ou dos 15%?\n\n→ Quer saber como se preparar? Link na bio.",
              },
              {
                sem: "Semana 2", num: "04", pilar: "Resultado Real", formato: "Post de Case",
                titulo: "Uma clínica reduziu 60% de no-show em 3 semanas.",
                arte: "Fundo dark. '−60%' em Fraunces 96px dourado. Subtítulo: 'de no-show em 3 semanas'. Detalhe visual: gráfico minimalista descendo. Logo IAlem.",
                legenda: "Uma clínica multidisciplinar com 8 profissionais e 200 agendamentos por semana tinha um problema: 28% de no-show.\n\nCada paciente que faltava era vaga perdida, receita desperdiçada e furo na agenda.\n\nA recepção gastava 3 horas por dia mandando confirmação no WhatsApp. Manualmente. Uma por uma.\n\nEm 3 semanas com o agente IAlem:\n→ Confirmação automática com tom humanizado\n→ Reagendamento instantâneo\n→ No-show caiu de 28% para 11%\n\nSem contratar. Sem mudar sistema.\n\nQuer saber quanto no-show custa pra sua operação?\n→ Diagnóstico gratuito no link da bio.",
              },
              {
                sem: "Semana 2", num: "05", pilar: "Educação sobre IA", formato: "Reels (30s)",
                titulo: "Seu cliente mandou mensagem. Quanto tempo pra responder?",
                arte: "Gravação de tela: timer contando no canto. Simulação de lead mandando mensagem no WhatsApp. Mostra demora de empresa comum (mais de 2h) vs. resposta do agente IAlem (em menos de 1 minuto). Texto na tela em Fraunces italic. Fecha com 'E se responder rápido fosse o padrão?' + CTA.",
                legenda: "A maioria das empresas demora mais de 2 horas pra responder um lead.\n\nO agente IAlem responde em menos de 1 minuto — com contexto, nome e próximo passo.\n\nNão é automação. É atendimento que não dorme.\n\n→ Teste na prática. Link na bio.",
              },
              {
                sem: "Semana 2", num: "06", pilar: "Bastidores", formato: "Carrossel",
                titulo: "Como treinamos um agente de IA pra falar como sua marca.",
                arte: "Slide 1: 'Como treinamos um agente de IA' em Fraunces. Slide 2: 'Passo 1 — Entendemos seu tom de voz'. Slide 3: 'Passo 2 — Alimentamos com contexto real'. Slide 4: 'Passo 3 — Testamos com conversas simuladas'. Slide 5: 'Passo 4 — Ajustamos até parecer da equipe'. Slide 6: CTA",
                legenda: "Não jogamos sua empresa dentro de um prompt genérico. Não entregamos uma licença pra você virar programador.\n\nA IAlem é agência: a gente senta junto, entende a operação e constrói o agente sob medida. O processo de treinamento envolve:\n\n1. Imersão no tom de voz da sua marca\n2. Mapeamento de perguntas frequentes reais\n3. Simulações com cenários do seu setor\n4. Ajuste fino até o agente parecer da equipe\n\nVocê acompanha tudo pelo mesmo ponto de contato — do diagnóstico à operação.\n\nO resultado? Um agente que seu cliente não percebe que é IA. E se perceber, vai gostar da experiência mesmo assim.\n\n→ Quer ver o processo na prática? Link na bio.",
              },
              {
                sem: "Semana 3", num: "07", pilar: "Resultado Real", formato: "Antes & Depois",
                titulo: "Antes da IAlem vs. Depois da IAlem.",
                arte: "Grid dividido ao meio. Lado esquerdo (cinza): 'Antes — Leads esperando 2h · Recepção sobrecarregada · Clientes ligando pra confirmar · Oportunidades perdidas à noite'. Lado direito (gold): 'Com a IAlem — Resposta em 12 segundos · Time focado no que importa · Confirmação automática · Atendimento 24/7'.",
                legenda: "Coluna da esquerda: a rotina da maioria das empresas.\nColuna da direita: a rotina de quem automatizou com a IAlem.\n\nAqui o exemplo é atendimento — mas a mesma lógica vale pra cobrança, lembrete, agendamento, organização. Do atendimento à operação.\n\nNão precisa trocar de sistema.\nNão precisa contratar.\nNão precisa ser expert em IA.\n\nQual coluna é a sua?\n\n→ Descubra em 2 minutos. Link na bio.",
              },
              {
                sem: "Semana 3", num: "08", pilar: "Educação sobre IA", formato: "Carrossel",
                titulo: "Teste rápido: sua empresa tá pronta pra automatizar?",
                arte: "Slide 1: 'Teste rápido' em Fraunces grande + subtítulo 'Responde sim ou não às 5 perguntas'. Slides 2–6: uma pergunta por slide em Fraunces, com dois botões visuais 'SIM / NÃO' em gold e cinza. Slide 7: 'Marcou 3 ou mais SIM? Tá na hora.' Slide 8: CTA gold com link de diagnóstico.",
                legenda: "Responde rápido — sim ou não:\n\n1. Seu time repete as mesmas respostas todo dia?\n2. Leads chegam à noite e ninguém responde?\n3. Confirmação de agendamento é feita na mão?\n4. Cliente espera mais de 1 hora pra ser atendido?\n5. Você já tentou chatbot e não funcionou?\n\n3 ou mais SIM = automação deixa de ser opção e vira prioridade.\n\n→ Diagnóstico gratuito no link da bio.",
              },
              {
                sem: "Semana 3", num: "09", pilar: "Visão de Mercado", formato: "Quote Card",
                titulo: "Quem responde primeiro, vende mais.",
                arte: "Fundo dark com grafismo sutil do ícone IAlem. Frase 'Quem responde primeiro, vende mais.' em Fraunces 300 italic dourado. Abaixo: 'Harvard Business Review' em mono. Logo IAlem 10% no canto.",
                legenda: "Empresas que respondem em até 5 minutos têm 21× mais chance de qualificar um lead. — Harvard Business Review\n\n21 vezes.\n\nA maioria das empresas brasileiras? Mais de 1 hora.\n\nUm agente de IA não precisa de café pra responder às 23h.\n\n→ Teste a velocidade na prática. Link na bio.",
              },
              {
                sem: "Semana 4", num: "10", pilar: "Resultado Real", formato: "Post de Case",
                titulo: "+40% de leads atendidos em uma rede de concessionárias.",
                arte: "Fundo dark. '+40%' em Fraunces 96px dourado. Subtítulo: 'de leads atendidos — rede com 3 lojas'. Logo IAlem.",
                legenda: "Uma rede de concessionárias com 3 lojas e 42 vendedores recebia 300+ leads por mês entre Instagram, portais e tráfego pago.\n\nO problema: só 60% eram respondidos no mesmo dia. O restante esperava — e ia pra concorrência.\n\nCom o agente IAlem:\n→ 100% dos leads respondidos em até 1 minuto\n→ Qualificação automática antes de chegar no vendedor\n→ +40% de atendimentos sem nenhum custo de contratação\n\nO vendedor parou de gastar tempo com curioso. E começou a fechar mais.\n\n→ Diagnóstico gratuito no link da bio.",
              },
              {
                sem: "Semana 4", num: "11", pilar: "Objeções & Contrapontos", formato: "Reels (30s)",
                titulo: "O que um agente de IA NÃO faz.",
                arte: "Vídeo com texto na tela em estilo lista. 'Um agente de IA não substitui seu time. Não inventa respostas. Não funciona sem treinamento. Não é chatbot de farmácia.' Pausa. 'O que ele faz? Responde rápido, qualifica com contexto e nunca tira férias.' CTA final.",
                legenda: "Plot twist: IA não resolve tudo.\n\nUm agente de IA não substitui seu time.\nNão inventa informação.\nNão funciona sem treinamento.\n\nMas ele responde em menos de 1 minuto.\nQualifica com contexto.\nE nunca tira férias.\n\nÉ ferramenta, não milagre. E a ferramenta certa faz diferença.\n\n→ Quer ver como? Link na bio.",
              },
              {
                sem: "Semana 4", num: "12", pilar: "Marca & Cultura", formato: "Carrossel",
                titulo: "Por que 'além'.",
                revisar: [
                  "**Card 1 (capa) e Card 6 (fechamento):** trocar tagline \"LEVE SEU ATENDIMENTO ALÉM\" → **\"LEVE SEU NEGÓCIO ALÉM\"**.",
                  "**Slide 5:** trocar \"Além da tecnologia — resultado\" por **\"Além do que consome seu time.\"** — nomeia a dor interna do empresário (tempo do time em coisa que devia rodar sozinha).",
                ],
                arte: "Slide 1: 'Por que além.' em Fraunces italic. Slide 2: 'Além do chatbot.' Slide 3: 'Além do horário comercial.' Slide 4: 'Além da resposta padrão.' Slide 5: 'Além do que consome seu time.' Slide 6: Logo IAlem + tagline 'Leve seu negócio além.' + CTA.",
                legenda: "Quando escolhemos o nome, queríamos algo que dissesse o que fazemos sem explicar demais.\n\nAlém do chatbot genérico.\nAlém do horário comercial.\nAlém da resposta padrão.\nAlém do que consome seu time.\n\nSe o seu negócio tá aquém, a gente leva além.\n\nÉ simples assim.\n\n→ ialem.ai",
              },
            ].map((post) => {
              const p = post as typeof post & { revisar?: string[] };
              const needsRevision = Array.isArray(p.revisar) && p.revisar.length > 0;
              return (
                <div key={post.num} className={`post-card${needsRevision ? " revisar-card" : ""}`}>
                  <div className="post-header">
                    <div className="post-num">{post.num}</div>
                    <div className="post-meta">
                      <div className="post-sem">{post.sem}</div>
                      <div className="post-pilar-tag">{post.pilar}</div>
                    </div>
                    {needsRevision ? (
                      <span className="revisar-badge">🔄 Revisar</span>
                    ) : (
                      <div className="post-formato-tag">{post.formato}</div>
                    )}
                  </div>
                  <h3 className="post-titulo">{post.titulo}</h3>
                  {needsRevision && (
                    <div className="revisar-nota">
                      <div className="revisar-nota-label">
                        <span>🔄 Ajustes pedidos à designer</span>
                      </div>
                      <ul>
                        {p.revisar!.map((n, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: n.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="post-section">
                    <div className="post-section-label">Direção de arte</div>
                    <p className="post-content">{post.arte}</p>
                  </div>
                  <div className="post-section">
                    <div className="post-section-label">Legenda</div>
                    <p className="post-content post-legenda">{post.legenda}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         09 · TRÁFEGO PAGO
         ════════════════════════════════════════════════════════════ */}
      <section id="trafego">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">09</span>
            <span>Estratégia de tráfego pago</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "18ch" }}>
            12 posts orgânicos primeiro. Pago <em>depois</em>.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            A estratégia é consolidar as 12 postagens orgânicas, identificar quais performaram melhor, e escalar essas com tráfego pago. Nunca criar conteúdo do zero para anúncio — escalar o que já provou que funciona.
          </p>

          {/* Orçamento faseado */}
          <div className="traffic-section reveal d2" style={{ marginBottom: 32 }}>
            <div className="info-card">
              <div className="info-eyebrow">Orçamento faseado · 90 dias</div>
              <h3>Investimento que <em>cresce com a prova</em>.</h3>
              <p>
                Queimar verba em criativo não validado é o erro mais comum. Aqui o orçamento acompanha o que o orgânico já testou — escala o que tá funcionando, não o que a agência acha bonito.
              </p>
              <div className="budget-grid">
                {[
                  { label: "Fase 01 · Mês 1", value: "R$ 0", desc: "Só orgânico. Publica os 12 posts e observa quais performam acima da média em alcance, salvamentos e comentários." },
                  { label: "Fase 02 · Mês 2", value: "R$ 1.500", desc: "Impulsiona os 3 melhores posts em Meta Ads. Uma campanha de awareness, uma de leads. Aprende com dado real." },
                  { label: "Fase 03 · Mês 3+", value: "R$ 2.500+", desc: "Meta continua ativo + Google Ads entra com palavras-chave de demanda ativa. Retargeting em 3 camadas." },
                ].map((b) => (
                  <div key={b.label} className="budget-phase">
                    <div className="budget-phase-label">{b.label}</div>
                    <div className="budget-phase-value">{b.value}</div>
                    <div className="budget-phase-desc">{b.desc}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13.5, marginTop: 24, fontStyle: "italic", color: "var(--text-muted)", maxWidth: "62ch" }}>
                Critério pra escalar verba: CPL ≤ R$ 30 e ≥ 40% dos leads chegando qualificados. Abaixo disso, otimiza criativo antes de dobrar o investimento.
              </p>
            </div>
          </div>

          {/* Meta Ads */}
          <div className="traffic-section reveal d2">
            <div className="info-card" style={{ marginBottom: 20 }}>
              <div className="info-eyebrow">Meta Ads · Instagram</div>
              <h3>De post orgânico a <em>anúncio</em>.</h3>
              <p>
                Os melhores posts orgânicos viram anúncios. O algoritmo já validou o conteúdo — só falta amplificar. Dois tipos de campanha:
              </p>
            </div>

            <div className="traffic-grid">
              <div className="traffic-card">
                <div className="traffic-label">Campanha 01</div>
                <h3>Awareness + <em>Engajamento</em></h3>
                <div className="traffic-desc">
                  Objetivo: alcance e reconhecimento. Impulsionar carrosséis educativos e reels que já tiveram engajamento acima da média. Público frio (interesses + lookalike).
                </div>
                <div style={{ marginTop: "auto" }}>
                  <div className="persona-section-label" style={{ paddingTop: 16 }}>Público-alvo</div>
                  <ul className="persona-list" style={{ marginTop: 8 }}>
                    <li>Empresários e gestores (interesses: gestão empresarial, automação, empreendedorismo)</li>
                    <li>Setores: saúde, automotivo, imobiliário, serviços B2B</li>
                    <li>Idade: 28–60 anos</li>
                    <li>Localização: nível Brasil (foco inicial nas praças com presença IAlem)</li>
                  </ul>
                </div>
              </div>

              <div className="traffic-card">
                <div className="traffic-label">Campanha 02</div>
                <h3>Geração de <em>Leads</em></h3>
                <div className="traffic-desc">
                  Objetivo: mensagens no WhatsApp. Cases com resultado (posts 04 e 10) viram anúncios de conversão. CTA direto: &ldquo;Teste na prática&rdquo;. Público quente (engajou com perfil) + retargeting (visitou site).
                </div>
                <div style={{ marginTop: "auto" }}>
                  <div className="persona-section-label" style={{ paddingTop: 16 }}>Criativos sugeridos</div>
                  <ul className="persona-list" style={{ marginTop: 8 }}>
                    <li>Imagem estática com métrica grande (−60% no-show, +40% leads)</li>
                    <li>Reels de demonstração com gravação de tela real</li>
                    <li>Carrossel antes/depois com CTA no último slide</li>
                  </ul>
                </div>
              </div>

              <div className="traffic-card">
                <div className="traffic-label">Retargeting</div>
                <h3>Quem viu → quem <em>converteu</em></h3>
                <div className="traffic-desc">
                  Régua de retargeting em 3 camadas: visitou o site → mostra case. Engajou no Instagram → oferta de diagnóstico. Iniciou conversa no WhatsApp → follow-up com depoimento.
                </div>
                <div style={{ marginTop: "auto" }}>
                  <div className="persona-section-label" style={{ paddingTop: 16 }}>KPIs de tráfego pago</div>
                  <div className="traffic-kpis" style={{ marginTop: 8 }}>
                    <span className="traffic-kpi-tag">CPM</span>
                    <span className="traffic-kpi-tag">CTR</span>
                    <span className="traffic-kpi-tag">CPL</span>
                    <span className="traffic-kpi-tag">CPA</span>
                    <span className="traffic-kpi-tag">ROAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Ads */}
          <div className="traffic-section reveal d3" style={{ marginTop: 48 }}>
            <div className="info-card" style={{ marginBottom: 20 }}>
              <div className="info-eyebrow">Google Ads · Demanda ativa</div>
              <h3>Quem já está <em>buscando</em>.</h3>
              <p>
                Captura quem já tem intenção. Diferente do Meta (que interrompe), o Google pega quem está ativamente pesquisando soluções. Landing page dedicada com CTA para diagnóstico.
              </p>
            </div>

            <div className="msg-grid">
              <div className="msg-card">
                <div className="msg-eyebrow">Palavras-chave</div>
                <div className="msg-quote" style={{ fontSize: 16, lineHeight: 1.6 }}>
                  agente de IA para atendimento · automação WhatsApp empresa · chatbot inteligente para empresas · atendimento automático WhatsApp · IA para qualificação de leads
                </div>
              </div>
              <div className="msg-card">
                <div className="msg-eyebrow">Segmentação</div>
                <div className="msg-quote" style={{ fontSize: 16, lineHeight: 1.6 }}>
                  Localização: nível Brasil · Idade: 28–60 anos · Dispositivo: prioridade mobile · Horário: comercial (8h–20h) · Exclusão: &ldquo;grátis&rdquo;, &ldquo;curso&rdquo;, &ldquo;como fazer&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         10 · MÉTRICAS & KPIs
         ════════════════════════════════════════════════════════════ */}
      <section id="metricas">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">10</span>
            <span>Métricas & KPIs</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "18ch" }}>O que <em>medir</em> de verdade.</h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            Curtida é vaidade. Lead é resultado. O dashboard acompanha os dois — mas só os segundos guiam decisão.
          </p>

          <div className="metrics-grid reveal d2">
            {[
              { name: "Seguidores", value: "Meta: +15%/mês nos 3 primeiros meses" },
              { name: "Engajamento", value: "Taxa por post — meta: >3%" },
              { name: "Salvamentos", value: "Indicador de conteúdo útil — meta: >2% dos alcances" },
              { name: "Tempo de resposta DM", value: "Meta: <5 min. É o primeiro teste que o prospect faz — coerência da marca depende disso" },
              { name: "Leads", value: "Mensagens via link — meta: 20/mês" },
              { name: "Qualidade do lead", value: "% de leads que viram agendamento — meta: >40%" },
              { name: "CPL", value: "Custo por lead via tráfego pago" },
              { name: "Agendamentos", value: "Diagnósticos agendados — meta: 8–12/mês" },
              { name: "Conversão", value: "Lead → diagnóstico → cliente" },
              { name: "CAC", value: "Custo total por cliente fechado" },
            ].map((m) => (
              <div key={m.name} className="metric-card">
                <div className="metric-name">{m.name}</div>
                <div className="metric-value">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         11 · CHECKLIST
         ════════════════════════════════════════════════════════════ */}
      <section id="checklist">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">11</span>
            <span>Checklist de publicação</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "16ch", margin: "0 auto", textAlign: "center" }}>
            Antes de <em>publicar</em>.
          </h2>

          <div className="checklist-wrap reveal d2" style={{ marginTop: 48 }}>
            <ul className="checklist">
              {[
                "Está alinhado com pelo menos 1 pilar de conteúdo?",
                "O tom segue as 3 texturas da marca?",
                "O dourado está usado com parcimônia? (regra 85/10)",
                "A primeira linha da caption funciona sozinha no feed?",
                "O CTA está claro e leva pra onde deveria?",
                "Ortografia e gramática revisadas?",
                "Imagem/vídeo em alta resolução? (mín. 1080×1080)",
                "Visual segue identidade dark + gold? (sem cores aleatórias)",
                "Hashtags no primeiro comentário (nunca na caption)?",
                "Alt text preenchido?",
              ].map((item, i) => (
                <li key={i}>
                  <span className="check-box">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── OPERAÇÃO ── */}
      <section style={{ padding: "80px 0 60px" }}>
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">12</span>
            <span>Fluxo de operação</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "16ch", textAlign: "center", margin: "0 auto" }}>
            Do briefing ao <em>post</em>.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", textAlign: "center", margin: "24px auto 48px" }}>
            Ciclo semanal claro: quem faz o quê, quando entrega, quem aprova.
          </p>

          <div className="op-flow reveal d2">
            {[
              { step: "01", title: "Briefing", who: "Bravo", desc: "Define pauta da semana com base no calendário e pilares de conteúdo." },
              { step: "02", title: "Produção", who: "Bravo", desc: "Arte + legenda + CTA produzidos seguindo identidade visual e tom do manual." },
              { step: "03", title: "Revisão interna", who: "Bravo", desc: "QA interno: checa tom, ortografia, alinhamento com pilares e checklist." },
              { step: "04", title: "Aprovação", who: "Junior & Ana", desc: "Conteúdo final enviado para aprovação. Só vai ao ar com ok dos sócios." },
              { step: "05", title: "Publicação", who: "Bravo", desc: "Post sobe no horário definido. Hashtags no 1º comentário. Alt text preenchido." },
              { step: "06", title: "Monitoramento", who: "Ambos", desc: "Relatório mensal com métricas, insights e próximos passos." },
            ].map((s, i) => (
              <div key={s.step} className="op-step">
                <div className="op-step-num">{s.step}</div>
                <div className="op-step-content">
                  <div className="op-step-title">{s.title}</div>
                  <div className="op-step-who">{s.who}</div>
                  <div className="op-step-desc">{s.desc}</div>
                </div>
                {i < 5 && <div className="op-step-arrow">→</div>}
              </div>
            ))}
          </div>

          <div className="operacao-note reveal d3" style={{ marginTop: 32 }}>
            <div className="operacao-label">Cadência</div>
            <div className="operacao-text">
              <strong>3 posts por semana</strong> · <strong>4 semanas por bloco</strong> · Bravo <em>produz</em>, IAlem <em>aprova</em>.
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="pb-footer">
        <div className="footer-logos">
          <img src="/brand/ialem-logo-gold.svg" alt="IAlem" className="logo-ialem" />
          <div className="logo-sep" />
          <img src="/brand/bravo-logo-white.svg" alt="Bravo" className="logo-bravo" />
        </div>
        <div className="foot-line">Playbook de Conteúdo & Presença Digital</div>
        <div className="foot-line">IAlem Automação Inteligente LTDA · Abril 2026</div>
        <div className="foot-line" style={{ marginTop: 8 }}>Produzido por Bravo Marketing</div>
      </footer>
    </>
  );
}
