import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      tan: colors.amber,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
