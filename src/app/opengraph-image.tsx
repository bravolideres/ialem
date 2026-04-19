import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E0E0F",
          position: "relative",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px",
            fontSize: "14px",
            color: "#C9A46B",
            letterSpacing: "4px",
          }}
        >
          <div style={{ width: "24px", height: "1px", background: "#C9A46B" }} />
          LEVE SEU ATENDIMENTO ALÉM
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "68px",
            fontWeight: 300,
            color: "#EDECE7",
            letterSpacing: "-3px",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>Atenda&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#C9A46B" }}>mais</span>
            <span>.</span>
          </div>
          <div style={{ display: "flex" }}>
            <span>Sem perder o&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#C9A46B" }}>jeito humano</span>
            <span>.</span>
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "#A8A6A0",
            textAlign: "center",
            maxWidth: "620px",
            lineHeight: 1.5,
            marginTop: "24px",
            marginBottom: "36px",
          }}
        >
          Agentes de IA sob medida para sua operação — atendem, qualificam e vendem 24/7, na voz da sua marca.
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "14px 32px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #C9A46B 0%, #A78655 100%)",
            color: "#0E0E0F",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Testar na Prática
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "13px",
            color: "#6E6C68",
            letterSpacing: "2px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#C9A46B",
            }}
          />
          ialem.com.br
        </div>
      </div>
    ),
    { ...size }
  );
}
