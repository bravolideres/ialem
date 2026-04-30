import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

export type OgCardProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

async function loadGoogleFont(family: string, weight: number, italic = false) {
  const style = italic ? "ital,wght@1," : "wght@";
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:${style}${weight}&display=swap`;
  const css = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0" },
  }).then((r) => r.text());
  const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!fontUrl) throw new Error(`Font URL not found for ${family} ${weight}`);
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export async function renderOgCard({ eyebrow, title, subtitle }: OgCardProps) {
  const [iconSvg, fraunces, interTight] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/ialem-icon-gold.svg"), "utf-8"),
    loadGoogleFont("Fraunces", 500),
    loadGoogleFont("Inter Tight", 400),
  ]);

  const iconDataUrl = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "84px 88px",
          background:
            "radial-gradient(circle at 16% 14%, rgba(201,164,107,0.20) 0%, rgba(14,14,15,0) 55%), #0E0E0F",
          color: "#EDECE7",
          fontFamily: "Inter Tight",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 96,
          }}
        >
          <img src={iconDataUrl} width={56} height={36} alt="" />
          <span
            style={{
              fontFamily: "Fraunces",
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            IAlem
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span
            style={{
              fontSize: 18,
              color: "#C9A46B",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              fontWeight: 400,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                display: "flex",
                width: 32,
                height: 1,
                background: "#C9A46B",
              }}
            />
            <span style={{ display: "flex" }}>{eyebrow}</span>
          </span>
          <span
            style={{
              fontFamily: "Fraunces",
              fontSize: 84,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {title}
          </span>
          {subtitle ? (
            <span
              style={{
                fontSize: 28,
                color: "#A8A6A0",
                lineHeight: 1.35,
                maxWidth: 880,
                display: "flex",
                fontWeight: 400,
                marginTop: 8,
              }}
            >
              {subtitle}
            </span>
          ) : null}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Inter Tight", data: interTight, style: "normal", weight: 400 },
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
      ],
    },
  );
}
