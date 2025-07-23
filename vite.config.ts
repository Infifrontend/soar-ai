import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: [
      "e3350ba6-5ad0-43a6-bd6c-db8f6b8f3e17-00-13v43jo2oq2js.pike.replit.dev",
      "localhost",
    ],
  },
});
