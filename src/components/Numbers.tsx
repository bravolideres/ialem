export default function Numbers() {
  const stats = [
    { value: "3", unit: "×", label: "mais conversas tratadas" },
    { value: "−70", unit: "%", label: "tempo de primeira resposta" },
    { value: "+40", unit: "%", label: "conversão de lead em reunião" },
    { value: "24", unit: "/7", label: "presença sem pausa" },
  ];

  return (
    <section style={{ padding: "80px 0 120px" }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Resultado</span>
          <h2>
            Números que <em>falam</em>.
          </h2>
          <p>
            Médias de operações ativas. Variam por setor e ponto de partida
            — falamos disso no diagnóstico.
          </p>
        </div>
        <div className="numbers">
          {stats.map((s, i) => (
            <div className="num-cell reveal-child" key={i}>
              <div className="num-big">
                {s.value}
                <em>{s.unit}</em>
              </div>
              <div className="num-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
