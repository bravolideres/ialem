"use client";

import { RevealItem } from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Em 3 semanas a IAlem já estava agendando test-drives sozinha. Nosso time comercial nunca mais perdeu lead por demora no primeiro contato.",
    name: "Rafael Monteiro",
    role: "Gerente Comercial",
    company: "Concessionária Fiat",
    metric: "+40% leads atendidos",
    photo: "/images/avatar-rafael.png",
  },
  {
    quote:
      "A gente achava que IA ia deixar o atendimento frio. Foi o contrário — os pacientes elogiam a rapidez e o tom da conversa.",
    name: "Dra. Camila Esteves",
    role: "Diretora Clínica",
    company: "Dermaê",
    metric: "−60% no-show",
    photo: "/images/avatar-camila.png",
  },
  {
    quote:
      "Reduzimos 70% do tempo de triagem. O agente qualifica, agenda e entrega o contexto completo pro corretor. É outro nível.",
    name: "Lucas Braga",
    role: "Head de Operações",
    company: "Vitrale Imóveis",
    metric: "3× mais conversas",
    photo: "/images/avatar-lucas.png",
  },
];

function Stars() {
  return (
    <div className="testimonial-stars" aria-label="Avaliação 5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2.6l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.7l-5.9 3.08 1.13-6.58L2.45 9.54l6.6-.96L12 2.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Quem já usa</span>
          <h2>
            Resultados <em>reais</em>.
          </h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <RevealItem key={i} delay={i * 0.12} className="testimonial-card">
              <div className="testimonial-top">
                <div className="testimonial-author">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="testimonial-photo"
                  />
                  <div className="testimonial-author-meta">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">
                      {t.role} · {t.company}
                    </div>
                    <Stars />
                  </div>
                </div>
                <blockquote>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
              </div>
              <div className="testimonial-metric">{t.metric}</div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
