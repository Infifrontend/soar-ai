import { defineConfig } from '@tailwindcss/vite';

export default defineConfig({
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
});