/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./**/*.{js,ts,jsx,tsx}", // Adjust as necessary based on your folder structure
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#f9fafb",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Add other color definitions as necessary
      },
    },
  },
  plugins: [],
};
