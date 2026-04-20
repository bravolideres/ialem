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
            <a href="#voz">Voz</a>
            <a href="#perfil">Perfil</a>
            <a href="#12posts">12 Posts</a>
            <a href="#trafego">Tráfego</a>
            <a href="#metricas">Métricas</a>
          </div>
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
          <div className="attribution reveal d4">
            <span>Para Junior &amp; Ana</span>
            <span className="sep" />
            <span>Sócios · IAlem</span>
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
                  { label: "Site", tag: "ialem.digital" },
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
            <div className="reveal d1">
              <h2 style={{ maxWidth: "16ch" }}>
                Pra quem a IAlem <em>conversa</em>.
              </h2>
              <p style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.65, marginTop: 28, maxWidth: "44ch" }}>
                Não são faixas demográficas. São pessoas reais, com nome, rotina e uma frustração específica que a IAlem resolve.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Persona 1: Carlos */}
              <div className="persona-card reveal d1">
                <div className="persona-header">
                  <div className="persona-avatar">👔</div>
                  <div>
                    <div className="persona-name">Carlos</div>
                    <div className="persona-role">Dono de concessionária em Goiânia</div>
                  </div>
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

              {/* Persona 2: Dra. Patrícia */}
              <div className="persona-card reveal d2">
                <div className="persona-header">
                  <div className="persona-avatar">🩺</div>
                  <div>
                    <div className="persona-name">Dra. Patrícia</div>
                    <div className="persona-role">Sócia de clínica multidisciplinar</div>
                  </div>
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

              {/* Persona 3: Rafael */}
              <div className="persona-card reveal d3">
                <div className="persona-header">
                  <div className="persona-avatar">🏗️</div>
                  <div>
                    <div className="persona-name">Rafael</div>
                    <div className="persona-role">Diretor comercial de incorporadora</div>
                  </div>
                </div>
                <div className="persona-body">
                  <p className="persona-bio">
                    Rafael comanda um time de 12 corretores e recebe 300+ leads por mês de portais imobiliários e tráfego pago. O problema: só 25% são qualificados, e os corretores gastam tempo demais com curiosos. Ele quer um filtro inteligente que qualifique antes do humano entrar — mas sem parecer um formulário chato.
                  </p>
                  <div className="persona-section-label">O que faz ele parar o scroll</div>
                  <ul className="persona-list">
                    <li>Conteúdo sobre qualificação automática de leads</li>
                    <li>Comparação: custo de SDR vs. agente de IA</li>
                    <li>Resultado em pipeline: &ldquo;3× mais leads qualificados no CRM&rdquo;</li>
                  </ul>
                  <div className="persona-section-label">O que faz ele agir</div>
                  <p className="persona-trigger">
                    Planilha de ROI. Rafael convence a diretoria com número. Se o conteúdo der o cálculo pronto, ele compartilha no grupo do board.
                  </p>
                </div>
              </div>

              {/* Persona 4: Marcos */}
              <div className="persona-card reveal d4">
                <div className="persona-header">
                  <div className="persona-avatar">🤔</div>
                  <div>
                    <div className="persona-name">Marcos</div>
                    <div className="persona-role">Empresário cético, dono de rede de lojas</div>
                  </div>
                </div>
                <div className="persona-body">
                  <p className="persona-bio">
                    Marcos tem 54 anos, 3 lojas de varejo e zero paciência pra modinha tech. Já gastou R$ 15 mil com &ldquo;transformação digital&rdquo; em 2022 e não viu resultado. Quando ouve &ldquo;inteligência artificial&rdquo; revira os olhos. Mas nos últimos 3 meses, perdeu 2 vendedores e não conseguiu repor. A equipe encolheu e o atendimento caiu.
                  </p>
                  <div className="persona-section-label">O que faz ele parar o scroll</div>
                  <ul className="persona-list">
                    <li>Depoimento de alguém parecido com ele: empresário &ldquo;pé no chão&rdquo;</li>
                    <li>Conteúdo sem jargão: &ldquo;não é robô, é processo&rdquo;</li>
                    <li>A palavra &ldquo;teste grátis&rdquo; — remove o risco</li>
                  </ul>
                  <div className="persona-section-label">O que faz ele agir</div>
                  <p className="persona-trigger">
                    Indicação de alguém que ele confia, combinada com a possibilidade de testar sem compromisso. Marcos precisa ver antes de acreditar.
                  </p>
                </div>
              </div>
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
              Atenda <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>mais</em>.<br />
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
              <div className="msg-quote">Não é bot. É agente que entende contexto e fala como <em>sua marca</em>.</div>
              <div className="msg-context">Separação da concorrência. Quando o lead compara com chatbots genéricos.</div>
            </div>
          </div>

          {/* Frases proibidas */}
          <div className="reveal d4" style={{ marginTop: 48 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--danger)", marginBottom: 16 }}>
              ✕ Frases que a IAlem nunca usa
            </div>
            <div className="forbidden-grid">
              {["Solução disruptiva", "IA de ponta", "Revolucione seu negócio", "Tecnologia de última geração", "O futuro é agora", "Robô inteligente", "Chatbot avançado", "Transformação digital"].map((phrase) => (
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
            Cinco eixos que <em>organizam</em> tudo.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            Todo post se encaixa em pelo menos um pilar. Sem pilar = sem propósito = não publica.
          </p>

          <div className="pillar-grid reveal d2">
            {[
              { num: "01", title: "Resultado Real", desc: "Cases, números e transformações reais de clientes. A prova que vende.", examples: "Case clínica · Antes/depois · Depoimento com métrica" },
              { num: "02", title: "Bastidores", desc: "Como a IAlem funciona por dentro. Treino de agentes, integração, ajuste fino.", examples: "Como treinamos a IA · Dia de integração · Ajuste de tom" },
              { num: "03", title: "Educação sobre IA", desc: "Desmistificar, ensinar, tirar medo. Educa sem ser condescendente.", examples: "IA vs chatbot · Mitos sobre automação · O que IA não faz" },
              { num: "04", title: "Visão de Mercado", desc: "Tendências, dados e provocações sobre o futuro do atendimento.", examples: "85% até 2028 · Dados do setor · Tendência WhatsApp" },
              { num: "05", title: "Marca & Cultura", desc: "O lado humano por trás da tecnologia. Time, valores, propósito.", examples: "Por que o dourado · Time IAlem · Nossa história" },
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
         04 · TOM DE VOZ APLICADO
         ════════════════════════════════════════════════════════════ */}
      <section id="voz">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">04</span>
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
         05 · IDENTIDADE DO PERFIL INSTAGRAM
         ════════════════════════════════════════════════════════════ */}
      <section id="perfil">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">05</span>
            <span>Identidade do perfil · @ialemautomacao</span>
            <span className="bar" />
          </div>

          <div className="profile-detail-grid reveal d1">
            {/* Main profile card */}
            <div className="profile-detail-card">
              <div className="info-eyebrow">Configuração do Perfil</div>
              <div className="profile-detail-body">
                <div>
                  <div className="profile-field-label">Foto de perfil</div>
                  <div className="profile-field-value">Símbolo AI em dourado sobre fundo dark (#0E0E0F). Nunca a wordmark — não lê em 36px.</div>
                </div>
                <div>
                  <div className="profile-field-label">Nome do perfil</div>
                  <div className="profile-field-value"><strong>IAlem | Agentes de IA</strong></div>
                </div>
                <div>
                  <div className="profile-field-label">Bio</div>
                  <div className="profile-field-value" style={{ fontFamily: "var(--font-sans)", lineHeight: 1.8 }}>
                    Agentes de IA sob medida para sua operação<br />
                    Atendimento · Qualificação · Conversão<br />
                    🔗 Teste na prática ↓
                  </div>
                </div>
                <div>
                  <div className="profile-field-label">Link na bio</div>
                  <div className="profile-field-value">ialem.digital ou link direto pro WhatsApp com mensagem pré-preenchida</div>
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
                  Criar ficha como <strong>IAlem — Automação Inteligente</strong>. Categoria: &ldquo;Serviço de tecnologia da informação&rdquo;. Descrição: versão resumida do hero do site. Adicionar fotos do time, logo, e manter posts semanais espelhando o Instagram. Link direto para ialem.digital.
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
              {["#IAlem", "#LeveAlem", "#AgenteDeIA", "#IAlemNaPrática", "#AutomaçãoInteligente", "#AtendimentoIA", "#IASobMedida", "#AtendaAlém"].map((h) => (
                <span key={h} className="hashtag">{h}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         06 · FORMATOS & TEMPLATES
         ════════════════════════════════════════════════════════════ */}
      <section id="formatos">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">06</span>
            <span>Formatos & Templates</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "16ch" }}>
            Os modelos que <em>repetem</em>.
          </h2>

          <div className="format-grid reveal d2" style={{ marginTop: 48 }}>
            {[
              { label: "01", title: "Carrossel Educativo", desc: "5–8 slides. Fundo dark, título em Fraunces, corpo em Inter Tight. Último slide = CTA gold.", struct: "Slide 1 → Headline provocativa\nSlides 2–6 → Conteúdo educativo\nSlide 7 → Resumo / Checklist\nSlide 8 → CTA + Logo" },
              { label: "02", title: "Post de Case", desc: "Imagem com métrica grande em dourado + fundo dark. Caption conta a história do resultado.", struct: "Visual → Métrica Fraunces 72px\nCaption L1 → Gancho provocativo\nCaption L2–4 → Contexto + resultado\nCTA → 'Quer isso na sua empresa?'" },
              { label: "03", title: "Antes & Depois", desc: "Grid dividido: 'Hoje' em cinza, 'Com a IAlem' em gold. Formato dualidade do manual.", struct: "Lado esquerdo → 'Hoje' cinza\nLado direito → 'Com a IAlem' gold\nCaption → 'Qual lado é o seu?'" },
              { label: "04", title: "Quote Card", desc: "Frase de impacto em Fraunces italic + atribuição. Simples, compartilhável.", struct: "Fundo → Dark + grafismo sutil\nFrase → Fraunces 300 italic gold\nAtribuição → Nome + cargo\nRodapé → Logo 10% opacity" },
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
         07 · AS 12 POSTAGENS INICIAIS
         ════════════════════════════════════════════════════════════ */}
      <section id="12posts">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">07</span>
            <span>As 12 postagens inaugurais</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "20ch" }}>
            O primeiro mês de <em>conteúdo</em>.
          </h2>
          <p className="reveal d1" style={{ color: "var(--text-dim)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: "58ch", marginBottom: 48 }}>
            12 posts estratégicos para inaugurar o perfil com consistência. Cada um com arte, legenda e CTA definidos. 3 posts por semana, 4 semanas.
          </p>

          <div className="posts-grid reveal d2">
            {[
              {
                sem: "Semana 1", num: "01", pilar: "Marca & Cultura", formato: "Carrossel",
                titulo: "Prazer, IAlem.",
                arte: "Slide 1: Logo IAlem em dourado, fundo dark. Slide 2: 'Criamos agentes de IA sob medida'. Slide 3: 'Eles atendem, qualificam e convertem — na voz da sua marca'. Slide 4: Ícone agent + texto 'Não é bot. É agente.' Slide 5: CTA 'Teste na prática → link na bio'",
                legenda: "A IAlem nasceu de uma frustração simples: empresas perdem clientes por demora no atendimento.\n\nSó que contratar mais gente nem sempre é a resposta. E chatbot genérico espanta mais do que resolve.\n\nEntão criamos algo diferente: agentes de IA que aprendem o tom da sua marca, entendem contexto e atendem como se fossem da equipe.\n\nNa prática. No WhatsApp. 24/7.\n\n→ Link na bio pra testar no seu número.",
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
                legenda: "A Dra. Patrícia tinha um problema: 28% de no-show.\n\nCada paciente que faltava era vaga perdida, receita desperdiçada e furo na agenda de 8 profissionais.\n\nA recepção gastava 3 horas por dia mandando confirmação no WhatsApp. Manualmente. Uma por uma.\n\nEm 3 semanas com o agente IAlem:\n→ Confirmação automática com tom humanizado\n→ Reagendamento instantâneo\n→ No-show caiu de 28% para 11%\n\nSem contratar. Sem mudar sistema.\n\nQuer saber quanto no-show custa pra sua operação?\n→ Diagnóstico gratuito no link da bio.",
              },
              {
                sem: "Semana 2", num: "05", pilar: "Educação sobre IA", formato: "Reels (30s)",
                titulo: "Seu cliente mandou mensagem. Quanto tempo pra responder?",
                arte: "Gravação de tela: timer contando no canto. Simulação de lead mandando mensagem no WhatsApp. Mostra demora de empresa comum (2h) vs. resposta do agente IAlem (12seg). Texto na tela em Fraunces italic. Fecha com 'E se responder rápido fosse o padrão?' + CTA.",
                legenda: "A maioria das empresas demora 2 horas pra responder um lead.\n\nO agente IAlem responde em 12 segundos.\n\nE não responde qualquer coisa — responde com contexto, nome e próximo passo.\n\nIsso não é automação. É atendimento.\n\n→ Teste na prática. Link na bio.",
              },
              {
                sem: "Semana 2", num: "06", pilar: "Bastidores", formato: "Carrossel",
                titulo: "Como treinamos um agente de IA pra falar como sua marca.",
                arte: "Slide 1: 'Como treinamos um agente de IA' em Fraunces. Slide 2: 'Passo 1 — Entendemos seu tom de voz'. Slide 3: 'Passo 2 — Alimentamos com contexto real'. Slide 4: 'Passo 3 — Testamos com conversas simuladas'. Slide 5: 'Passo 4 — Ajustamos até parecer da equipe'. Slide 6: CTA",
                legenda: "Não jogamos sua empresa dentro de um prompt genérico.\n\nO processo de treinamento do agente IAlem envolve:\n\n1. Imersão no tom de voz da sua marca\n2. Mapeamento de perguntas frequentes reais\n3. Simulações com cenários do seu setor\n4. Ajuste fino até o agente parecer da equipe\n\nO resultado? Um agente que seu cliente não percebe que é IA.\n\nE se ele perceber, vai gostar da experiência mesmo assim.\n\n→ Quer ver o processo na prática? Link na bio.",
              },
              {
                sem: "Semana 3", num: "07", pilar: "Resultado Real", formato: "Antes & Depois",
                titulo: "Antes da IAlem vs. Depois da IAlem.",
                arte: "Grid dividido ao meio. Lado esquerdo (cinza): 'Antes — Leads esperando 2h · Recepção sobrecarregada · Clientes ligando pra confirmar · Oportunidades perdidas à noite'. Lado direito (gold): 'Com a IAlem — Resposta em 12 segundos · Time focado no que importa · Confirmação automática · Atendimento 24/7'.",
                legenda: "Coluna da esquerda: a rotina da maioria das empresas.\nColuna da direita: a rotina de quem automatizou com a IAlem.\n\nNão precisa trocar de sistema.\nNão precisa contratar.\nNão precisa ser expert em IA.\n\nQual coluna é a sua?\n\n→ Descubra em 2 minutos. Link na bio.",
              },
              {
                sem: "Semana 3", num: "08", pilar: "Educação sobre IA", formato: "Carrossel",
                titulo: "5 sinais de que sua empresa precisa de um agente de IA.",
                arte: "Slide 1: '5 sinais' em Fraunces grande. Slides 2–6: um sinal por slide com ícone minimalista. Slide 7: 'Marcou 3 ou mais? Tá na hora.' Slide 8: CTA gold.",
                legenda: "1. Seu time repete as mesmas respostas todo dia\n2. Leads chegam à noite e ninguém responde\n3. Agendamento é feito na mão pelo WhatsApp\n4. Atendimento demora mais de 1 hora\n5. Você já tentou chatbot e não funcionou\n\nSe marcou 3 ou mais: não é questão de se, é de quando.\n\nE o 'quando' pode ser agora — sem custo pra testar.\n\n→ Link na bio.",
              },
              {
                sem: "Semana 3", num: "09", pilar: "Visão de Mercado", formato: "Quote Card",
                titulo: "Quem responde primeiro, vende mais.",
                arte: "Fundo dark com grafismo sutil do ícone IAlem. Frase 'Quem responde primeiro, vende mais.' em Fraunces 300 italic dourado. Abaixo: 'Harvard Business Review' em mono. Logo IAlem 10% no canto.",
                legenda: "Estudo de Harvard mostrou que empresas que respondem em até 5 minutos têm 21× mais chance de qualificar um lead.\n\n21 vezes.\n\nE a maioria das empresas brasileiras demora mais de 1 hora.\n\nVelocidade virou vantagem competitiva. E um agente de IA não precisa de café pra responder às 23h.\n\n→ Teste a velocidade na prática. Link na bio.",
              },
              {
                sem: "Semana 4", num: "10", pilar: "Resultado Real", formato: "Post de Case",
                titulo: "+40% de leads atendidos sem contratar ninguém.",
                arte: "Fundo dark. '+40%' em Fraunces 96px dourado. Subtítulo: 'de leads atendidos — sem contratar'. Logo IAlem.",
                legenda: "Uma concessionária recebia 300+ leads por mês.\n\nSó 180 eram respondidos no mesmo dia. O resto esperava — e ia embora.\n\nCom o agente IAlem:\n→ 100% dos leads respondidos em até 1 minuto\n→ Qualificação automática antes de chegar no vendedor\n→ +40% de atendimentos sem nenhum custo de contratação\n\nO vendedor parou de gastar tempo com curioso. E começou a vender mais.\n\n→ Diagnóstico gratuito no link da bio.",
              },
              {
                sem: "Semana 4", num: "11", pilar: "Educação sobre IA", formato: "Reels (30s)",
                titulo: "O que um agente de IA NÃO faz.",
                arte: "Vídeo com texto na tela em estilo lista. 'Um agente de IA não substitui seu time. Não inventa respostas. Não funciona sem treinamento. Não é chatbot de farmácia.' Pausa. 'O que ele faz? Responde rápido, qualifica com contexto e nunca tira férias.' CTA final.",
                legenda: "Plot twist: IA não resolve tudo.\n\nUm agente de IA não substitui seu time.\nNão inventa informação.\nNão funciona sem treinamento.\n\nMas ele responde em 12 segundos.\nQualifica com contexto.\nE nunca tira férias.\n\nÉ ferramenta, não milagre. E a ferramenta certa faz diferença.\n\n→ Quer ver como? Link na bio.",
              },
              {
                sem: "Semana 4", num: "12", pilar: "Marca & Cultura", formato: "Carrossel",
                titulo: "Por que 'além'.",
                arte: "Slide 1: 'Por que além.' em Fraunces italic. Slide 2: 'Além do chatbot.' Slide 3: 'Além do horário comercial.' Slide 4: 'Além da resposta padrão.' Slide 5: 'Além da tecnologia — resultado.' Slide 6: Logo IAlem + tagline 'Leve Além.' + CTA.",
                legenda: "Quando escolhemos o nome, queríamos algo que dissesse o que fazemos sem explicar demais.\n\nAlém do chatbot genérico.\nAlém do horário comercial.\nAlém da resposta padrão.\n\nAlém da tecnologia — o que importa é resultado.\n\nSe seu atendimento tá aquém, a gente leva além.\n\nÉ simples assim.\n\n→ ialem.digital",
              },
            ].map((post) => (
              <div key={post.num} className="post-card reveal">
                <div className="post-header">
                  <div className="post-num">{post.num}</div>
                  <div className="post-meta">
                    <div className="post-sem">{post.sem}</div>
                    <div className="post-pilar-tag">{post.pilar}</div>
                  </div>
                  <div className="post-formato-tag">{post.formato}</div>
                </div>
                <h3 className="post-titulo">{post.titulo}</h3>
                <div className="post-section">
                  <div className="post-section-label">Direção de arte</div>
                  <p className="post-content">{post.arte}</p>
                </div>
                <div className="post-section">
                  <div className="post-section-label">Legenda</div>
                  <p className="post-content post-legenda">{post.legenda}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         08 · FUNIL DE CONTEÚDO
         ════════════════════════════════════════════════════════════ */}
      <section id="funil">
        <div className="wrap">
          <div className="pb-label reveal">
            <span className="num">08</span>
            <span>Funil de conteúdo</span>
            <span className="bar" />
          </div>

          <h2 className="reveal d1" style={{ maxWidth: "16ch" }}>De seguidor a <em>cliente</em>.</h2>

          <div className="funnel-visual reveal d2" style={{ marginTop: 48 }}>
            {[
              { label: "Topo", name: "Atração", desc: "Educação + provocação. Conteúdo que faz parar o scroll.", content: "Pilares: Educação sobre IA, Visão de Mercado.", objective: "Seguidores · Alcance · Salvamentos" },
              { label: "Meio", name: "Consideração", desc: "Cases + bastidores. Conteúdo que cria confiança.", content: "Pilares: Resultado Real, Bastidores.", objective: "Engajamento · DMs · Compartilhamentos" },
              { label: "Fundo", name: "Conversão", desc: "CTA direto. Teste grátis, diagnóstico, agendamento.", content: "CTA: teste no WhatsApp, diagnóstico gratuito.", objective: "Mensagens · Agendamentos · Contratos" },
            ].map((s) => (
              <div key={s.label} className="funnel-stage">
                <div>
                  <div className="stage-label">{s.label}</div>
                  <div className="stage-name">{s.name}</div>
                  <div className="stage-desc">{s.desc}</div>
                </div>
                <div>
                  <div className="stage-content">{s.content}</div>
                  <div className="stage-objective">Objetivo → <span>{s.objective}</span></div>
                </div>
              </div>
            ))}
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
              { name: "Leads", value: "Mensagens via link — meta: 20/mês" },
              { name: "CPL", value: "Custo por lead via tráfego pago" },
              { name: "Agendamentos", value: "Diagnósticos agendados — meta: 8-12/mês" },
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

      {/* ── FOOTER ── */}
      <footer className="pb-footer">
        <div className="footer-logos">
          <img src="/brand/ialem-logo-gold.svg" alt="IAlem" className="logo-ialem" />
          <div className="logo-sep" />
          <svg className="logo-bravo" viewBox="0 0 843.47 143.16" style={{ height: 16, opacity: 0.6 }}>
            <g fill="var(--text-dim)">
              <path d="M262.57,68c14.56-1.83,25.47-12.38,25.47-26.35,0-15.45-16.51-26.35-27.08-26.35h-80.26v3.63l10.91,3.63v94.52l-10.91,3.63v3.63h85.51c18.2,0,30.93-7.38,30.93-28.18,0-24.53-20.01-28.17-34.58-28.17h.02ZM222.55,22.59s21.74-.02,25.47-.02c7.28,0,14.63,7.37,14.63,19.08s-3.71,22.72-14.63,22.72h-25.47V22.59h0ZM251.67,117.09h-43.67v-3.63l14.56-3.63v-38.17h29.11c10.91,0,18.19,9.1,18.19,23.63s-7.28,21.8-18.19,21.8h.01-.01Z" />
              <path d="M648.23,124.35l49.03-101.79,12.66-3.63v-3.63h-28.16v3.63l7.42,3.63-32.44,67.37-38.69-67.37,8.82-3.63v-3.63h-57.51v3.63l12.99,3.63,58.46,101.79h7.42Z" />
              <path d="M416.46,88h-29.74l-6.64-5.46h22.65c14.56,0,35.57-10.9,35.57-33.62s-21.02-33.62-35.57-33.62h-80.87v3.63l10.91,3.63v94.52l-10.91,3.63v3.63h52.77v-3.63l-10.91-3.63v-34.53h1.83l50.94,41.8h36.38v-6.5l-36.38-29.88h0v.02ZM363.7,75.27V22.57h27.3c14.52,0,20.01,16.36,20.01,26.35s-5.46,26.35-20.01,26.35h-27.3Z" />
              <path d="M584.04,117.09l-58.45-101.79h-44.49v3.63l12.99,3.63,11.2,19.5-36.13,75.01-12.66,3.63v3.63h28.17v-3.63l-7.42-3.63,12.69-26.35h43.31l15.13,26.35-8.82,3.63v3.63h57.51v-3.63l-13.02-3.63v.02ZM492.99,84.37l16.68-34.66,19.89,34.66h-36.57,0Z" />
              <path d="M782.69,15.33h-12c-36.38,0-60.78,23.59-60.78,54.44s24.38,54.46,60.78,54.46h12c36.38,0,60.78-23.59,60.78-54.46s-24.38-54.44-60.78-54.44ZM806.35,87.91c0,18.17-9.1,29.12-23.65,29.12h-11.99c-14.57,0-23.65-10.95-23.65-29.12v-36.25c0-18.17,9.1-29.12,23.65-29.12h11.99c14.56,0,23.65,10.95,23.65,29.12v36.25Z" />
            </g>
            <g fill="var(--danger)" opacity="0.9">
              <path d="M52.11,132.36c-.56-.45-1.13-.92-1.71-1.4-3.89-3.26-7.71-6.83-11.38-10.63h29.13l-16.05,12.04h0Z" />
              <path d="M68.16,120.34h29.13c-3.65,3.81-7.47,7.39-11.38,10.63-.56.48-1.13.94-1.71,1.4l-16.05-12.04h0Z" />
              <path d="M136.34.01l-6.04,6.04.02,24.56-6.03,5.49h-36.1l-4,4h-8.02v-4l5.35-5.35h37.43l5.35,5.35V8.02l6.01-6.01L128.3.01h8.05-.01Z" />
              <path d="M132.31,64.18l-8.01,8.01h-60.16l-4.01-4.01,4.01-4h44.12l4,4v-14.03l4.01-4.01h-6.02v-10.5s-4.86,6.47-17.95,6.47c-12.35,0-20.14-5.64-20.14-11.02,0-6.48,9.67-11.03,20.14-11.03s15.95,3.82,15.95,3.82l8.02-7.82v-8.02l-2.01-2.01,6.02-6.02V.01H48.11l-4,4v8.02l-4.01,4V4l-4.01-4H0v28.07l16.04,16.05H0l8.02,8.01h8.02l-11.08,11.08c.68,2.27,1.44,4.53,2.27,6.78,4.37,11.99,10.63,23.59,18.59,34.53,1.93,2.64,3.95,5.24,6.05,7.76h6.23v-8.02l8.02,8.02,10.02.04-8.01-8.05v-8.01l-8.02-8.02h12.04l8.01,8.02v8.01l8.01,8.02h8.02v-8.02l8.02,8.05,16.05-.04-8.02-8.02v-8.01l-8.01-8.02h12.04l8.01,8.02v16.3c2.19-2.6,4.27-5.29,6.26-8.01,2.04-2.79,3.96-5.65,5.77-8.51v-7.79h8.01v-4l8.02-8.01v-12.04h-.04ZM56.13,14.04v-6.01h20.05l-6.02,6.01h-6.01v-4l-4.01,4h-4.01Z" />
              <path d="M84.2,132.36c-5.41,4.36-10.85,8.01-16.05,10.79-5.19-2.78-10.63-6.44-16.06-10.79h32.11Z" />
            </g>
          </svg>
        </div>
        <div className="foot-line">Playbook de Conteúdo & Presença Digital</div>
        <div className="foot-line">IAlem Automação Inteligente LTDA · Abril 2026</div>
        <div className="foot-line" style={{ marginTop: 8 }}>Produzido por Bravo Marketing</div>
      </footer>
    </>
  );
}
