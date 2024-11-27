import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: {
            index: "./src/index.ts"
        },
        format: ["esm", "cjs"],
        outDir: "dist",
        dts: true, // Generates TypeScript declaration files
        splitting: false, // Disable code-splitting if you want single output files per entry
        sourcemap: true,
        clean: true,
        external: ["react", "react-dom", "next"]
    }
]);
