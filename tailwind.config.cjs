/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#00dbd1",
        secondry: "#003b63",
        customWhite: "#F6f6f6",
        customBlack: "#282828",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
    screens: {
      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1400px",
    },
  },
  plugins: [],
};
