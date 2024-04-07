/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blueWood: "url(/blueWood.jpg)",
      },
    },
  },
  plugins: [],
};