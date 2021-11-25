const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
      },
    },
    colors: {
      red: colors.red,
      green: colors.green,
      pink: colors.pink,
      gray: colors.coolGray,
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      inter: ["Inter", "ui-sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
