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
    name: "Sua Empresa · Concessionária",
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
    name: "Sua Empresa · Clínica",
    icon: "⚕️",
    title: "Clínica",
    subtitle: "Agendamento e dúvidas",
    turns: [
      { who: "ai", text: "Oi, Camila! Passando pra confirmar seu atendimento amanhã, 14h, com a Dra. Juliana. Posso confirmar?" },
      { who: "user", text: "Vou precisar remarcar :( surgiu uma reunião de última hora." },
      { who: "ai", text: "Imagina, acontece. Tenho quinta 9h ou sexta 15h. O que encaixa melhor pra você?" },
      { who: "user", text: "Sexta 15h. Ah, uma dúvida, pro procedimento preciso ir de cara lavada?" },
      { who: "ai", text: "Remarcado para Sexta às 15h! Pode vir normal, a Dra. faz toda a higienização aqui. Evite apenas maquiagem muita pesada. :)" },
      { who: "user", text: "Perfeito, muito obrigada!" },
    ],
  },
  {
    name: "Sua Empresa · E-commerce",
    icon: "🛍️",
    title: "Loja Virtual",
    subtitle: "Status de pedido e pós-venda",
    turns: [
      { who: "user", text: "Oi, fiz o pedido 10443 no sábado mas não recebi o código de rastreio e preciso pra minha viagem." },
      { who: "ai", text: "Oi Rafael! Tudo bem? Deixa eu verificar isso pra você agora mesmo. Só um instante." },
      { who: "ai", text: "Achei! Seu pedido já está com a transportadora e sai para entrega amanhã de manhã." },
      { who: "ai", text: "O rastreio é BR9988223. Como você é de SP Capital, chega já na quinta-feira, a tempo da viagem! 🏖️" },
      { who: "user", text: "Ufa! Maravilha, me manda o link onde acompanho?" },
      { who: "ai", text: "Pronto, é só clicar: intelipost.com.br/10443. Assim que sair para a rua, eu te dou um toque por aqui também!" },
    ],
  },
  {
    name: "Sua Empresa · Imobiliária",
    icon: "🏢",
    title: "Imobiliária",
    subtitle: "Captação por interesse",
    turns: [
      { who: "user", text: "Oi! Estou na frente do prédio na Rua das Palmeiras, 450 e vi que tem placas de venda. Tem detalhes?" },
      { who: "ai", text: "Oi Ricardo! Sim, é o Residencial Jardim Europa. Ótimo bairro! Temos 3 unidades disponíveis — de 72 a 110m². Procurando morar ou investir?" },
      { who: "user", text: "Pra morar, família crescendo. Tem 3 quartos?" },
      { who: "ai", text: "Tem sim. A unidade 802 tem 3 dorms, suíte, 95m² — R$ 620 mil. Tá financiando ou seria à vista?" },
      { who: "user", text: "Financiada. Já tenho a carta de crédito do banco aprovada." },
      { who: "ai", text: "Ótimo, isso acelera muito! Agendei uma visita com a Fernanda para sábado às 10h. Te mando a localização no mapa na véspera. Até lá!" },
    ],
  },
  {
    name: "Sua Empresa · Serviços Financeiros",
    icon: "🏦",
    title: "Financeiro",
    subtitle: "Oferta proativa de crédito",
    turns: [
      { who: "ai", text: "Oi, Sr. Antônio! Aqui é da CooperaVale. O senhor demonstrou interesse em consórcio na nossa última assembleia e temos uma novidade: taxa administrativa reduzida para 12%. Posso te contar mais?" },
      { who: "user", text: "Opa, me interessa sim. É pra imóvel residencial?" },
      { who: "ai", text: "Isso! Residencial e comercial, cartas de R$ 200 mil a R$ 800 mil. A tabela nova tem parcelas a partir de R$ 1.290. Quer que eu simule um valor?" },
      { who: "user", text: "Faz uma simulação pra R$ 350 mil, por favor." },
      { who: "ai", text: "Feito. Parcela ficaria em R$ 1.680/mês. Quer agendar com o gerente Carlos pra ver os detalhes? Consigo te encaixar numa call amanhã às 14h." },
    ],
  },
  {
    name: "Sua Empresa · Advocacia",
    icon: "⚖️",
    title: "Advocacia",
    subtitle: "Andamento de processo",
    turns: [
      { who: "user", text: "Oi, queria ver como está o andamento daquele meu processo contra a companhia aérea. Saiu novidade?" },
      { who: "ai", text: "Olá Thiago! Acessei aqui com seu número. Quem cuida do seu caso é o Dr. Marcos." },
      { who: "ai", text: "Tivemos novidade sim no diário oficial de hoje: o juiz marcou a audiência de conciliação para o dia 15/05 às 14h." },
      { who: "user", text: "Certo. Preciso levar algum documento no dia impresso?" },
      { who: "ai", text: "A audiência será 100% online pelo seu computador, não precisa imprimir nada. O Dr. Marcos vai te ligar amanhã às 15h para te explicar todos os detalhes da audiência. Posso confirmar o horário da ligação?" },
      { who: "user", text: "Pode confirmar sim, estarei no aguardo." },
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
  const phoneWrapRef = useRef<HTMLDivElement>(null);
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

    // On mobile, scroll the phone/chat into view so the user sees the conversation
    if (phoneWrapRef.current && window.innerWidth <= 980) {
      setTimeout(() => {
        phoneWrapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
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
            Melhor do que descrever<br />é <em>ver na prática</em>.
          </h2>
          <p>
            Escolha um cenário ao lado e assista à conversa acontecer, exatamente como
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
            <span className="scenarios-more">e muito mais…</span>
          </div>

          <div className="phone-wrap" ref={phoneWrapRef}>
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

        <div className="section-cta">
          <a href="https://wa.me/5500000000000?text=Oi!%20Vim%20pelo%20site%20e%20quero%20fazer%20um%20teste%20da%20IAlem%20na%20prática" target="_blank" className="btn btn-ghost btn-sm">
            Faça você mesmo o teste na prática →
          </a>
        </div>
      </div>
    </section>
  );
}
