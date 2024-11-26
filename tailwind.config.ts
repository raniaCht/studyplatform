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
        card: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        review: "rgb(0 0 0 / 14%) 0px -170px 48px -68px inset",
      },
      backgroundImage: {
        primary:
          "linear-gradient(to right top, #aff4c6, #5fe5d3, #00d1eb, #00b9fe, #0d99ff)",
        services: "url('/images/bg-services.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
