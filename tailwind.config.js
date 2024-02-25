/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#62747D",
        secondary: "#8B9DD4",
      },
      boxShadow: {
        custom: "inset 0 0 10px 1px #62747d",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("tailwind-scrollbar-hide"),
  ],
};
