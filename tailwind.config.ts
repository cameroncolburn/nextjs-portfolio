import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Tahoma", "sans-serif"],
    },
    extend: {
      colors: {
        color1: "var(--color-1)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
        color4: "var(--color-4)",
        color5: "var(--color-5)",
        color6: "var(--color-6)",
        color7: "var(--color-7)",
        color8: "var(--color-8)",
        color9: "var(--color-9)",
        color10: "var(--color-10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
