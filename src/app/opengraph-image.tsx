import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IAlem — Atenda mais, sem perder o jeito humano";
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
          overflow: "hidden",
        }}
      >
        {/* Radial gold glow top */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(201,164,107,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Subtle bottom glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse at center, rgba(201,164,107,0.06) 0%, transparent 70%)",
          }}
        />

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
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "#C9A46B",
            }}
          />
          Leve seu atendimento além
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 300,
            color: "#EDECE7",
            letterSpacing: "-3px",
            lineHeight: 1.05,
            textAlign: "center",
            fontFamily: "Georgia, serif",
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          Atenda{" "}
          <span style={{ fontStyle: "italic", color: "#C9A46B" }}>mais</span>.
          <br />
          Sem perder o{" "}
          <span style={{ fontStyle: "italic", color: "#C9A46B" }}>
            jeito humano
          </span>
          .
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "#A8A6A0",
            textAlign: "center",
            maxWidth: "620px",
            lineHeight: 1.5,
            fontFamily: "system-ui, sans-serif",
            marginBottom: "36px",
          }}
        >
          Agentes de IA sob medida para sua operação — atendem, qualificam e
          vendem 24/7, na voz da sua marca.
        </div>

        {/* CTA Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 32px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #C9A46B 0%, #A78655 100%)",
            color: "#0E0E0F",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "system-ui, sans-serif",
            boxShadow: "0 0 40px rgba(201,164,107,0.25)",
          }}
        >
          Testar na Prática
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "13px",
            color: "#6E6C68",
            fontFamily: "monospace",
            letterSpacing: "2px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#C9A46B",
              boxShadow: "0 0 12px #C9A46B",
            }}
          />
          ialem.com.br
        </div>
      </div>
    ),
    { ...size }
  );
}
