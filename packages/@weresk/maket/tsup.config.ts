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
        splitting: false, // Disable code-splitting if you want single output files per entry
        sourcemap: true,
        clean: true
    }
]);
