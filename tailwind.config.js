/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import { nextui } from "@nextui-org/react";

export default {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

