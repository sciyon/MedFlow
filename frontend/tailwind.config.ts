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
        primary: "83C5BE",
        secondary: "006D77",
        warning: "FCAA62",
        danger: "EC8484",
        field: "D9D9D9",
        black: "#000000",
        background: "F3F5F1",
      },
    },
  },
  plugins: [],
} satisfies Config;
