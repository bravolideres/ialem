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
          Agentes de IA que conversam com a voz da sua marca, integrados ao seu CRM, WhatsApp e processos. Resultado real — sem parecer robô.
        </p>
        <div className="hero-cta">
          <a href="#cta" className="btn btn-primary">
            Solicitar diagnóstico gratuito
          </a>
          <a href="#demo" className="btn btn-ghost">
            Ver demo ao vivo ↓
          </a>
        </div>

        <div className="hero-visual">
          <Image
            src="/images/hero-atendimento.png"
            alt="Profissional satisfeita com atendimento automatizado da IAlem"
            width={780}
            height={440}
            priority
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <div className="hero-visual-overlay">
            <p className="hero-visual-headline">
              Seu próximo cliente<br /><em>não vai esperar.</em>
            </p>
          </div>
          <div className="hero-visual-badge">
            <span className="dot"></span>online agora · atendendo seus clientes
          </div>
        </div>
      </div>
    </header>
  );
}
