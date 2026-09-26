import { gravatarUrl } from "@/content/site";

// Exported as a real avatar.png file: the Gravatar is fetched once at build
// time and self-hosted, so visitors' browsers never contact gravatar.com.
export const dynamic = "force-static";

export async function GET() {
  const response = await fetch(gravatarUrl(600));
  if (!response.ok) {
    throw new Error(`Gravatar request failed: ${response.status}`);
  }
  return new Response(await response.arrayBuffer(), {
    headers: {
      "Content-Type": response.headers.get("content-type") ?? "image/png",
    },
  });
}
