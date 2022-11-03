/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md}",
    "./components/**/*.{js,ts,jsx,tsx,md}",
    "./src/components/**/*.{js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
