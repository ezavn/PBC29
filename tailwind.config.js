/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opens: ["Open Sans", "sans-serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        black2: "#010101",
        blue: "#023278",
        lightBlue: "#003993",
        cyan: "#00FFFF",
        orange: "#FD4E33",
        green: "#AAD604",
        darkYellow: "#FAD225",
        lightYellow: "#F5F84A",
        purple: "#8D1BFF",
        pink: "#F84978",
        red: "#DD0B0B",
      },
      margin: {
        section: "70px",
        sectionMB: "50px",
      },
      spacing: {
        section: "70px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
