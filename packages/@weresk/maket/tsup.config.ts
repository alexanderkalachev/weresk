import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: {
            index: "./src/index.ts",
            tailwindcss: "./src/tailwindcss/index.js"
        },
        format: ["esm", "cjs"],
        outDir: "dist",
        dts: true,
        splitting: false,
        treeshake: false,
        sourcemap: true,
        clean: true,
        external: ["@sanity/icons", "react-hotkeys-hook", "react", "react-dom", "next"]
    }
]);
