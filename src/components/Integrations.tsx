const integrations = [
  { name: "WhatsApp", icon: "/images/ic-whatsapp.svg" },
  { name: "HubSpot", icon: "https://cdn.brandfetch.io/idRt0LuzRf/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1761193635069" },
  { name: "Salesforce", icon: "https://cdn.brandfetch.io/idVE84WdIN/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667559911541" },
  { name: "RD Station", icon: "https://cdn.brandfetch.io/idh5VzpTAM/idLhSKz_1O.svg?c=1bxid64Mup7aczewSAYMX&t=1668014040889" },
  { name: "Pipedrive", icon: "https://cdn.brandfetch.io/idZG_U1qqs/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668070866511" },
  { name: "Zapier", icon: "https://cdn.brandfetch.io/idNMs_nMA0/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667563370395" },
  { name: "Make", icon: "https://cdn.brandfetch.io/idVHU5hl7_/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1690469460472" },
  { name: "E muito mais", icon: null },
];

export default function Integrations() {
  return (
    <section
      id="integracoes"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div className="integrations">
          <div className="int-left">
            <span className="eyebrow" style={{ marginBottom: 18 }}>
              Integrações
            </span>
            <h3>
              Sem trocar nada.<br /><em>A IAlem se integra e automatiza seus sistemas.</em>
            </h3>
            <p>
              WhatsApp, CRMs, ERPs, planilhas, APIs. A IAlem se integra às ferramentas que sua
              operação já usa — sem migração, sem dor de cabeça.
            </p>
            <p className="int-note">
              * Integrações via API. Consulte disponibilidade no diagnóstico.
            </p>
          </div>
          <div className="int-grid">
            {integrations.map((t) =>
              t.icon ? (
                <div className="int" key={t.name}>
                  <span className="int-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.icon} alt={t.name} width={28} height={28} />
                  </span>
                  <span className="int-name">{t.name}</span>
                </div>
              ) : (
                <a
                  key={t.name}
                  className="int int-cta"
                  href="https://wa.me/5500000000000?text=Oi!%20Estou%20interessado%20na%20IAlem%20e%20gostaria%20de%20saber%20se%20integra%20com%20meus%20sistemas"
                  target="_blank"
                >
                  <span className="int-logo">
                    <span style={{ fontSize: 22, color: "var(--gold)" }}>+</span>
                  </span>
                  <span className="int-name">{t.name}</span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
