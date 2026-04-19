export default function Integrations() {
  const tools = ["WhatsApp", "HubSpot", "Salesforce", "RD Station", "Pipedrive", "ERP", "APIs"];

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
              Conecta no que <em>você já usa</em>.
            </h3>
            <p>WhatsApp, CRMs, APIs, ERPs, planilhas. Integração real — não só conector.</p>
          </div>
          <div className="int-grid">
            {tools.map((t) => (
              <div className="int" key={t}>
                {t}
              </div>
            ))}
            <div className="int more">+ todos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
