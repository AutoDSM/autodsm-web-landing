import { ImageResponse } from "next/og";

export const alt = "AutoDSM — Design system work, delegated";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0a0c10 0%, #1a1030 48%, #0a0c10 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
            color: "#c4a8ff",
            marginBottom: 20,
          }}
        >
          autodsm.ai
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
          Design system work,
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
            color: "#8F23FA",
          }}
        >
          delegated
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            fontWeight: 400,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 880,
            lineHeight: 1.35,
          }}
        >
          Living brand books from your repo, agent-ready context, and PRs when drift appears.
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
