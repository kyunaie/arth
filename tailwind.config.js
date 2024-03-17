/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      sans: ["Inter"
      , ...fontFamily.sans
    ],
      heading: ["calSans", ...fontFamily.sans],
    }
  },
  plugins: [],
}