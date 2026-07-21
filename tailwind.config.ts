import type { Config } from "tailwindcss";

/**
 * Two design systems live in this repo:
 *   (site)     — the main multi-page site  → ink / bone / silver / pinkred, Fraunces + Manrope
 *   (waitlist) — the original landing page → black / off-white / gray, Inter + Plex Mono
 *
 * Both token sets are declared here (utilities are global), but the font
 * families resolve through CSS variables that each root layout defines, so
 * `font-mono` means JetBrains inside (site) and IBM Plex inside (waitlist)
 * without either overriding the other.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- (waitlist) palette ----
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

        // ---- (site) palette ----
        ink: {
          DEFAULT: "#0B0B0D",
          900: "#0B0B0D",
          800: "#111114",
          700: "#17171B",
          600: "#1E1E23",
        },
        bone: {
          DEFAULT: "#F5F4F2",
          muted: "rgba(245,244,242,0.56)",
          faint: "rgba(245,244,242,0.34)",
          ghost: "rgba(245,244,242,0.10)",
        },
        silver: {
          DEFAULT: "#C3C7CE",
          bright: "#E7E9ED",
          dim: "#8B9098",
          line: "rgba(195,199,206,0.22)",
        },
        pinkred: {
          DEFAULT: "#FF3D68",
          bright: "#FF6386",
          deep: "#E11D48",
        },
      },
      borderColor: {
        "line-dark": "rgba(255,255,255,0.14)",
        "line-light": "rgba(0,0,0,0.10)",
      },
      fontFamily: {
        // resolved per root layout
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
        body: [
          "var(--font-body)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      letterSpacing: {
        label: "0.22em",
        eyebrow: "0.32em",
      },
      maxWidth: {
        readable: "62ch",
        content: "1180px",
        prose: "820px",
      },
      borderRadius: {
        card: "24px",
        input: "12px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        signature: "cubic-bezier(.22,1,.36,1)",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 60px -20px rgba(0,0,0,0.7)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "cue-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "cue-bounce": "cue-bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
