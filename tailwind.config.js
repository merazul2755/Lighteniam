/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
        muli: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
