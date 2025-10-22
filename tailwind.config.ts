import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ajr: {
          green: "hsl(var(--ajr-green))",
          "green-light": "hsl(var(--ajr-green-light))",
          "green-pale": "hsl(var(--ajr-green-pale))",
          violet: "hsl(var(--ajr-violet))",
          orange: "hsl(var(--ajr-orange))",
          fuchsia: "hsl(var(--ajr-fuchsia))",
          lime: "hsl(var(--ajr-lime))",
          beige: "hsl(var(--ajr-beige))",
          "yellow-pale": "hsl(var(--ajr-yellow-pale))",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "sans-serif"],
      },
      fontSize: {
        "display-1": ["9rem", { lineHeight: "1", fontWeight: "800", letterSpacing: "-0.02em" }],
        "display-2": ["7rem", { lineHeight: "1", fontWeight: "800", letterSpacing: "-0.02em" }],
        "display-3": ["5rem", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.01em" }],
        "display-4": ["4rem", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
        "fade-out": "fade-out 0.8s ease-out",
        "slide-left": "slide-left 0.8s ease-out",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
