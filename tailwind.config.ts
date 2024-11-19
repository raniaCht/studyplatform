import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        avenir: "var(--font-avenir)",
      },
      boxShadow: {
        primary: "rgb(209 213 219 / var(--tw-text-opacity, 1)) -5px 5px",
      },
      backgroundImage: {
        primary:
          "linear-gradient(to right top, #aff4c6, #5fe5d3, #00d1eb, #00b9fe, #0d99ff)",
      },
    },
  },
  plugins: [],
} satisfies Config;
