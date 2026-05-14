/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0d1b2f",
        steel: "#334155",
        frost: "#f8fafc",
        line: "#dbe3ef",
        signal: "#0f766e",
        amberline: "#b7791f",
        cobalt: "#1d4ed8",
        cyanline: "#0891b2",
        emeraldline: "#047857",
        platinum: "#e5e7eb",
        champagne: "#f7e7c2",
        oxblood: "#7f1d1d",
      },
      boxShadow: {
        premium: "0 22px 70px rgba(15, 23, 42, 0.10)",
        card: "0 14px 42px rgba(15, 23, 42, 0.08)",
      },
      fontFamily: {
        display: ["Aptos Display", "Aptos", "Segoe UI", "sans-serif"],
        body: ["Aptos", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
