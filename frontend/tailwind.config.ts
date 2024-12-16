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
        primary: "#83C5BE",
        secondary: "#006D77",
        third: "#7DB7B1",
        warning: "#FCAA62",
        danger: "#EC8484",
        field: "#9F9F9F",
        black: "#000000",
        background: "#D9D9D9",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        gabarito: ['Gabarito', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
