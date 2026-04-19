import Image from "next/image";

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="wrap">
        <span className="eyebrow hero-eyebrow">Leve seu atendimento além.</span>
        <h1>
          Atenda <em>mais</em>.<br />Sem perder o <em>jeito humano</em>.
        </h1>
        <p>
          A IAlem cria agentes de IA sob medida para sua operação. Desenhamos, treinamos e
          operamos a inteligência que atende, qualifica e converte — seja no atendimento ao
          cliente ou na comunicação da sua equipe interna.
        </p>
        <div className="hero-cta">
          <a href="https://wa.me/5500000000000?text=Oi!%20Vim%20pelo%20site%20e%20quero%20fazer%20um%20teste%20da%20IAlem%20na%20prática" target="_blank" className="btn btn-primary">
            Testar na Prática
          </a>
          <a href="https://wa.me/5500000000000?text=Oi!%20Quero%20agendar%20um%20diagnóstico%20gratuito%20para%20minha%20empresa" target="_blank" className="btn btn-ghost">
            Agendar diagnóstico
          </a>
        </div>

        <div className="hero-visual">
          <Image
            src="/images/hero-atendimento.png"
            alt="Profissional satisfeita com atendimento automatizado da IAlem"
            width={780}
            height={440}
            priority
            style={{ width: "100%", height: "100%" }}
          />
          <div className="hero-visual-overlay">
            <h2 className="hero-visual-headline">
              Seu próximo cliente<br /><em>não vai esperar.</em>
            </h2>
          </div>
          <div className="hero-visual-badge">
            <span className="dot"></span>online agora · atendendo seus clientes
          </div>
        </div>
      </div>
    </header>
  );
}
