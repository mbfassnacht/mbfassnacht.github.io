import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (writes to ./out).
  output: "export",
  // /projects/ -> projects/index.html, which GitHub Pages serves reliably.
  trailingSlash: true,
  // Image optimization needs a server; images are pre-sized in public/.
  images: { unoptimized: true },
};

export default nextConfig;
