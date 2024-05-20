import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      text: "var(--text)",
      primaryLight: "var(--primary-light)",
      highlight: "var(--highlight)",
      bg: "var(--bg)",
      black: "var(--black)",
      white: "var(--white)"
    },
    fontFamily: {
      primary: ['var(--font-primary)'],
      headline: ['var(--font-headline)'],
    },
  },
  plugins: [],
};
export default config;
