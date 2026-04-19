import Image from "next/image";

export default function CTA() {
  return (
    <section id="cta" style={{ padding: "60px 0 120px" }}>
      <div className="wrap">
        <div className="cta-big cta-with-image">
          <div className="cta-bg-image">
            <Image
              src="/images/cta-partnership.png"
              alt="Parceria de negócios"
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </div>
          <div className="cta-content">
            <span className="eyebrow" style={{ justifyContent: "center", marginBottom: 22 }}>
              Próximo passo
            </span>
            <h2>
              Pronto pra ver na <em>prática</em>?
            </h2>
            <p>
              Teste agora mesmo no WhatsApp ou agende um diagnóstico gratuito de 30 minutos para
              mapear as oportunidades da sua operação.
            </p>
            <div className="cta-buttons" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <a href="https://wa.me/5500000000000?text=Quero%20testar%20a%20IAlem" target="_blank" className="btn btn-primary">
                Teste na prática
              </a>
              <a href="#" className="btn btn-ghost">
                Agendar diagnóstico
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
