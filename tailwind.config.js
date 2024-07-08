import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      tan: "#fef2e8",
      teal: "#DAF5F0",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      amber: colors.amber,
    },
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
      body: ["Public\\ Sans", "sans-serif"],
    },
    boxShadow: {
      sm: "2px 4px 0px 0px black",
      lg: "6px 2px 4px 0px black",
    },
    extend: {},
  },
  plugins: [],
};
