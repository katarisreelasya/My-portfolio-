import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050A14",
        card: "#101827",
        glow: "#00BFFF",
        sky2: "#38BDF8",
        muted: "#9CA3AF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(0,191,255,.5), 0 0 30px rgba(0,191,255,.35)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(4px)" },
        },
        gridmove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 56px" },
        },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        gridmove: "gridmove 6s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
