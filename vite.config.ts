import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: "src",
    publicDir: "public",
    build: {
        outDir: "../dist",
        rollupOptions: {
            output: {
                // This is necessary to avoid adding a random hash in the output file names
                entryFileNames: "assets/[name].js",
                assetFileNames: "assets/[name][extname]",
            },
        },
    },
    base: "./",
});
