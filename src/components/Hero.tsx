"use client";

import Image from "next/image";
import { HeroReveal, HeroChild } from "@/components/Reveal";

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="wrap">
        <HeroReveal>
          <HeroChild>
            <span className="eyebrow hero-eyebrow">Agência de Automação Inteligente</span>
          </HeroChild>
          <HeroChild>
            <h1>
              Leve sua empresa <em>além</em> com Inteligência Artificial!
            </h1>
          </HeroChild>
          <HeroChild>
            <p>
              Impulsione o seu negócio — da operação ao atendimento.<br />
              Sem perder o <em>jeito humano</em>.
            </p>
          </HeroChild>
          <HeroChild>
            <div className="hero-cta">
              <a href="https://wa.me/5500000000000?text=Oi!%20Vim%20pelo%20site%20e%20quero%20fazer%20um%20teste%20da%20IAlem%20na%20prática" target="_blank" className="btn btn-primary">
                Testar na Prática
              </a>
              <a href="https://wa.me/5500000000000?text=Oi!%20Quero%20agendar%20um%20diagnóstico%20gratuito%20para%20minha%20empresa" target="_blank" className="btn btn-ghost">
                Agendar diagnóstico
              </a>
            </div>
          </HeroChild>
          <HeroChild>
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
          </HeroChild>
        </HeroReveal>
      </div>
    </header>
  );
}
