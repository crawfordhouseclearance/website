/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-brand)",
        "brand-deep": "var(--color-brand-deep)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        card: "var(--color-card)",
        "text-main": "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "border-soft": "var(--color-border)",
        cta: "var(--color-cta)",
        "cta-hover": "var(--color-cta-hover)",
        "input-surface": "var(--color-input)",
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
}