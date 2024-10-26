import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: {
            index: "./src/index.ts",
            tailwindcss: "./src/tailwindcss/index.js"
        },
        format: ["esm", "cjs"],
        outDir: "dist",
        dts: true, // Generates TypeScript declaration files
        splitting: true, // Disable code-splitting if you want single output files per entry
        treeshake: true,
        sourcemap: true,
        clean: true,
        external: ["@sanity/icons", "react-hotkeys-hook"]
    }
]);
