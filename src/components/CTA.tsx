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
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="cta-content">
            <span className="eyebrow" style={{ justifyContent: "center", marginBottom: 22 }}>
              Próximo passo
            </span>
            <h2>
              Vamos mapear onde sua operação pode <em>crescer</em>?
            </h2>
            <p>
              Diagnóstico gratuito. 30 minutos. Sem compromisso. Você sai com um plano claro do
              que automatizar primeiro.
            </p>
            <div className="cta-buttons" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <a href="#" className="btn btn-primary">
                Solicitar diagnóstico gratuito
              </a>
              <a href="#" className="btn btn-ghost">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
