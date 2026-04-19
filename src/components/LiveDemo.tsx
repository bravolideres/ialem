"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface Turn {
  who: "ai" | "user";
  text: string;
}

interface Scenario {
  name: string;
  icon: string;
  title: string;
  subtitle: string;
  turns: Turn[];
}

const SCENARIOS: Scenario[] = [
  {
    name: "IAlem · Concessionária",
    icon: "🚗",
    title: "Concessionária",
    subtitle: "Test drive + pré-aprovação",
    turns: [
      { who: "ai", text: "Oi Maria! Tudo bem? Vi aqui que você tem interesse no novo SUV. Quer agendar um test drive essa semana?" },
      { who: "user", text: "Oi! Pode ser sim. Tem horário na quinta de manhã?" },
      { who: "ai", text: "Tem sim. Te encaixei às 10h com o Rodrigo, que é o consultor que atendeu seu colega Pedro." },
      { who: "ai", text: "Aproveitei e já rodei a pré-aprovação do financiamento — saiu aprovada. :) Te mando o resumo agora?" },
      { who: "user", text: "Uau, que eficiência! Pode mandar." },
      { who: "ai", text: "Pronto. Qualquer coisa até lá, é só me chamar aqui. Até quinta, Maria!" },
    ],
  },
  {
    name: "IAlem · Clínica Odontológica",
    icon: "🦷",
    title: "Clínica odontológica",
    subtitle: "Agendamento e redução de no-show",
    turns: [
      { who: "ai", text: "Oi, Camila! Passando pra confirmar seu atendimento amanhã, 14h, com a Dra. Juliana. Posso confirmar?" },
      { who: "user", text: "Vou precisar remarcar :( surgiu uma reunião." },
      { who: "ai", text: "Imagina, acontece. Tenho quinta 9h ou sexta 15h com a Dra. Juliana. O que encaixa melhor?" },
      { who: "user", text: "Sexta 15h." },
      { who: "ai", text: "Remarcado. Vou te mandar um lembrete na véspera e 2h antes, combinado? Qualquer coisa, é só me chamar." },
    ],
  },
  {
    name: "IAlem · Cooperativa de Crédito",
    icon: "🤝",
    title: "Cooperativa",
    subtitle: "Oferta proativa de consórcio",
    turns: [
      { who: "ai", text: "Oi, Sr. Antônio! Tudo bem? Aqui é a IAlem da CooperaVale. Temos uma condição exclusiva de consórcio imobiliário esse mês — taxa administrativa a partir de 12%. Posso te contar mais?" },
      { who: "user", text: "Opa, me interessa sim. É pra imóvel residencial?" },
      { who: "ai", text: "Isso! Residencial e comercial, com cartas de R$ 200 mil a R$ 800 mil. Parcelas a partir de R$ 1.290. Quer que eu simule um valor pra você?" },
      { who: "user", text: "Simula pra R$ 350 mil, por favor." },
      { who: "ai", text: "Feito. Parcela ficaria em R$ 1.680/mês, 180 meses. Quer agendar com o gerente Carlos pra finalizar? Consigo encaixar amanhã às 14h ou quinta às 10h." },
    ],
  },
  {
    name: "IAlem · Imobiliária",
    icon: "🏢",
    title: "Imobiliária",
    subtitle: "Captação de interesse por localização",
    turns: [
      { who: "user", text: "Oi! Estou na frente de um prédio na Rua das Palmeiras, 450 e vi que tem unidades à venda. Tem mais informações?" },
      { who: "ai", text: "Oi Ricardo! Sim, é o Residencial Jardim Europa. Que bom que parou aí! Temos 3 unidades disponíveis — de 72 a 110m². Tá procurando pra morar ou investir?" },
      { who: "user", text: "Pra morar. Preciso de 3 quartos." },
      { who: "ai", text: "Perfeito. A unidade 802 tem 3 quartos, suíte, 95m² — R$ 620 mil. Tá financiando ou seria à vista?" },
      { who: "user", text: "Financiada. Já tenho carta de crédito." },
      { who: "ai", text: "Ótimo, isso acelera muito! Agendei uma visita com a Fernanda pra sábado 10h. Te mando a localização certinha 1h antes. Boa escolha! :)" },
    ],
  },
  {
    name: "IAlem · Clínica Estética",
    icon: "✨",
    title: "Clínica estética",
    subtitle: "Confirmação e fidelização",
    turns: [
      { who: "ai", text: "Oi Larissa! Lembrando: seu protocolo de skinbooster é amanhã, 16h, com a Dra. Paula. Quer manter?" },
      { who: "user", text: "Quero sim. Preciso chegar de cara lavada?" },
      { who: "ai", text: "Pode chegar normal, a Dra. faz toda a higienização. Evite só maquiagem pesada. :)" },
      { who: "user", text: "Perfeito, obrigada!" },
      { who: "ai", text: "Te vejo amanhã. Qualquer imprevisto, me chama por aqui. ✨" },
    ],
  },
];

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function LiveDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [messages, setMessages] = useState<{ who: string; text: string }[]>([]);
  const [typing, setTyping] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentWho, setCurrentWho] = useState<string | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const runIdRef = useRef(0);
  const hasAutoStarted = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  const runScenario = useCallback(
    async (idx: number) => {
      const myRun = ++runIdRef.current;
      const sc = SCENARIOS[idx];
      setMessages([]);
      setTyping(false);
      setCurrentText("");
      setCurrentWho(null);

      for (const turn of sc.turns) {
        if (myRun !== runIdRef.current) return;

        if (turn.who === "ai") {
          setTyping(true);
          scrollToBottom();
          await sleep(900 + Math.random() * 500);
          if (myRun !== runIdRef.current) return;
          setTyping(false);
        } else {
          await sleep(500);
          if (myRun !== runIdRef.current) return;
        }

        // Type the message character by character
        setCurrentWho(turn.who);
        setCurrentText("");
        const delay = turn.who === "ai" ? 20 : 32;

        for (let i = 0; i < turn.text.length; i++) {
          if (myRun !== runIdRef.current) return;
          setCurrentText(turn.text.slice(0, i + 1));
          scrollToBottom();
          await sleep(delay + Math.random() * 18);
        }

        if (myRun !== runIdRef.current) return;

        // Commit message
        setMessages((prev) => [...prev, { who: turn.who, text: turn.text }]);
        setCurrentText("");
        setCurrentWho(null);
        scrollToBottom();
        await sleep(650);
      }
    },
    [scrollToBottom]
  );

  // Auto-start on viewport intersection
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !hasAutoStarted.current) {
            hasAutoStarted.current = true;
            runScenario(0);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [runScenario]);

  const handleScenarioClick = (idx: number) => {
    setActiveIdx(idx);
    hasAutoStarted.current = true;
    runScenario(idx);
  };

  return (
    <section
      id="demo"
      ref={sectionRef}
      style={{
        background: "var(--surface)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Demo ao vivo</span>
          <h2>
            Não dá pra descrever.
            <br />
            Melhor <em>assistir</em>.
          </h2>
          <p>
            Escolha um cenário do lado esquerdo e assista à conversa acontecer, exatamente como
            chegaria ao seu cliente.
          </p>
        </div>

        <div className="demo">
          <div className="scenarios">
            {SCENARIOS.map((sc, i) => (
              <button
                key={i}
                className={`scen${i === activeIdx ? " active" : ""}`}
                onClick={() => handleScenarioClick(i)}
              >
                <span className="scen-ic">{sc.icon}</span>
                <div>
                  <div className="scen-t">{sc.title}</div>
                  <div className="scen-s">{sc.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="phone-wrap">
            <div className="phone">
              <div className="phone-head">
                <div className="phone-head-l">
                  <span className="av">IA</span>
                  <div>
                    <div className="ph-name">{SCENARIOS[activeIdx].name}</div>
                    <div className="ph-sub">
                      <span className="green">●</span> online · respondendo
                    </div>
                  </div>
                </div>
                <div style={{ color: "var(--text-muted)" }}>⋯</div>
              </div>

              <div className="phone-body" ref={bodyRef}>
                {messages.map((m, i) => (
                  <div key={i} className={`msg ${m.who === "ai" ? "ai" : "user"}`}>
                    {m.text}
                  </div>
                ))}
                {currentText && currentWho && (
                  <div className={`msg ${currentWho === "ai" ? "ai" : "user"}`}>
                    {currentText}
                    <span className="cursor"></span>
                  </div>
                )}
                {typing && (
                  <div className="typing">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                )}
              </div>

              <div className="phone-input">
                <span>escrever mensagem…</span>
                <span className="send">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </span>
              </div>
            </div>

            <div className="demo-channels-hint">
              Funciona no WhatsApp, Instagram e Web Chat da sua empresa.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
