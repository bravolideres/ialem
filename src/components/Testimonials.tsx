"use client";

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
            <div className="testimonial-card reveal-child" key={i}>
              <div>
                <div className="testimonial-metric">{t.metric}</div>
                <blockquote>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
              </div>
              <div className="testimonial-author">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={t.name}
                  className="testimonial-photo"
                />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
