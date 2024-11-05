/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // "2xl": "1536px", //for extra wide screens
      // xl: "1280px", //for normal desktop screens and some wider laptops
      // lg: "1024px", //for large screens like laptops
      sm: "700px", //for tablets and other smaller laptops
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar"),
  ],
};
