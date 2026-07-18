import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0A0A0A",
          2: "#141414",
        },
        "off-white": "#FAFAF8",
        white: "#FFFFFF",
        gray: {
          DEFAULT: "#8A8A8A",
          dim: "#4A4A4A",
        },
      },
      borderColor: {
        "line-dark": "rgba(255,255,255,0.14)",
        "line-light": "rgba(0,0,0,0.10)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
        serif: ["var(--font-fraunces)", "serif"],
      },
      borderRadius: {
        card: "24px",
        input: "12px",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [],
};
export default config;
