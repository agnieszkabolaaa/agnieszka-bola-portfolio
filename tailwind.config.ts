import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F7FA",
        "bg-alt": "#F0F2F7",
        "bg-card": "#FFFFFF",
        ink: "#1C2433",
        editor: "#1F2633",
        "editor-line": "#313A4A",
        brown: "#36435A",
        "brown-soft": "#667188",
        accent: "#FF6A2F",
        "accent-soft": "#FF9A6E",
        cream: "#F5F7FC",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
