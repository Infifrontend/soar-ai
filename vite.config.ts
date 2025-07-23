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
      "19a10406-4350-4094-84fe-e116392a58cd-00-2aq03di0u8ry4.pike.replit.dev",
      "localhost",
    ],
  },
});
