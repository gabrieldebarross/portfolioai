import { ImageResponse } from "next/og";

export const alt = "Gabriel Barros — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isPt = locale !== "en";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F1EA",
          color: "#111110",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "25%",
            width: "1px",
            background: "rgba(17,17,16,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "1px",
            background: "rgba(17,17,16,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "75%",
            width: "1px",
            background: "rgba(17,17,16,0.08)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "16px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#6c685e",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                background: "#111110",
                color: "#F4F1EA",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              GB
            </div>
            <span>Portfolio / 2026</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: "#E8501F",
              }}
            />
            {isPt ? "Disponível" : "Available"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6c685e",
            }}
          >
            Gabriel Barros
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "18px",
              fontSize: "76px",
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              maxWidth: "960px",
            }}
          >
            <span>{isPt ? "Aprendo construindo" : "I learn by building"}</span>
            <span>{isPt ? "aplicações" : "applications"}</span>
            <span style={{ color: "#E8501F", fontStyle: "italic" }}>
              {isPt ? "do front ao back." : "front to back."}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(17,17,16,0.16)",
            paddingTop: "22px",
            fontSize: "17px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6c685e",
          }}
        >
          <span>{isPt ? "Desenvolvedor full-stack" : "Full-stack developer"}</span>
          <span>gabrieldebarros.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
