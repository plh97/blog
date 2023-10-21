/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue1: "#00b4cf",
      blue2: "#01869a",
      yellow: "#ff9a2a",
      green: "#7fbc39",

      grey0: "#fafafa",
      grey1: "#f5f5f5",
      grey2: "#eeeeee",
      grey3: "#e0e0e0",
      grey4: "#bdbdbd",
      grey5: "#9e9e9e",
      grey6: "#757575",
      grey7: "#616161",
      grey8: "#424242",
      grey9: "#212121",
      gray: colors.slate,

      lightBlue0: "#e1f5fe",
      lightBlue1: "#b3e5fc",
      lightBlue2: "#81d4fa",
      lightBlue3: "#4fc3f7",
      lightBlue4: "#29b6f6",
      lightBlue5: "#03a9f4",
      lightBlue6: "#039be5",
      lightBlue7: "#0288d1",
      lightBlue8: "#0277bd",
      lightBlue9: "#01579b",

      "gray-light": "#d3dce6",
    },
  },
  plugins: [],
};
