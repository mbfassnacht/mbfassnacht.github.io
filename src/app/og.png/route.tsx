import { ImageResponse } from "next/og";
import { gravatarUrl, ogImage, person } from "@/content/site";

// Exported as a real og.png file so GitHub Pages serves it as image/png.
export const dynamic = "force-static";

export async function GET() {
  const avatarSrc = await fetchGravatarDataUrl();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 80px",
        background: "#f8fafc",
        color: "#1e293b",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={avatarSrc}
        width={240}
        height={240}
        alt=""
        style={{ borderRadius: 120, border: "6px solid #e2e8f0" }}
      />
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 60 }}>
        <div style={{ fontSize: 72, fontWeight: 700 }}>{person.name}</div>
        <div
          style={{
            width: 80,
            height: 6,
            background: "#6b7280",
            borderRadius: 3,
            margin: "24px 0",
          }}
        />
        <div style={{ fontSize: 30, color: "#64748b" }}>
          Engineering Manager · Staff Software Engineer
        </div>
        <div style={{ fontSize: 26, color: "#94a3b8", marginTop: 16 }}>
          TypeScript · Node.js · Go · React · AWS · AI / LLMs
        </div>
      </div>
    </div>,
    { width: ogImage.width, height: ogImage.height },
  );
}

async function fetchGravatarDataUrl() {
  const response = await fetch(gravatarUrl(480));
  if (!response.ok) {
    throw new Error(`Gravatar request failed: ${response.status}`);
  }
  const type = response.headers.get("content-type") ?? "image/png";
  const data = Buffer.from(await response.arrayBuffer()).toString("base64");
  return `data:${type};base64,${data}`;
}
