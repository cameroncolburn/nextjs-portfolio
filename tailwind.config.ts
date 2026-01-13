import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      colors: {
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        "primary-dark": "var(--primary-dark)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        background: "var(--background)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        border: "var(--border)",
        success: "var(--success)",
        "success-dark": "var(--success-dark)",
      },
      backgroundImage: {
        "background-image": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
