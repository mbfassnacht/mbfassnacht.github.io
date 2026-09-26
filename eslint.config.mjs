import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Static export ships images unoptimized, so next/image adds nothing here.
      "@next/next/no-img-element": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
]);
