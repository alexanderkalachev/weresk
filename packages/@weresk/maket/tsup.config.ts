import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: {
            index: "./src/index.ts",
            tailwindcss: "./src/tailwindcss/index.js",
            client: "./src/client/index.ts"
        },
        format: ["esm", "cjs"],
        target: "es2022",
        outDir: "dist",
        dts: true,
        splitting: false,
        treeshake: false,
        sourcemap: true,
        clean: true,
        external: ["@sanity/icons", "react-hotkeys-hook", "react", "react-dom", "next"],
        loader: {
            ".css": "css"
        }
    }
]);
