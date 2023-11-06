module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        blue_gray: { 400: "#8d8d8d" },
        gray: { 100: "#f4f4f4", 800: "#4f4f4f" },
        light_blue: { 500: "#00a3ff", "500_7f": "#00a3ff7f" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto", robotocondensed: "Roboto Condensed" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
