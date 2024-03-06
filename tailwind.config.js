/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1728px",
      },
      colors: {
        primary: {
          DEFAULT: "#3E6DF9",
          50: "#F0F4FF",
          100: "#DCE5FE",
          200: "#B5C7FD",
          300: "#8DA9FB",
          400: "#668BFA",
          500: "#3E6DF9",
          600: "#0844F7",
          700: "#0635C1",
          800: "#04268A",
          850: "#2596BE",
          900: "#031754",
          950: "#021039",
        },
        secondary: {
          DEFAULT: "#1D3075",
          50: "#6E86DB",
          100: "#5E78D7",
          200: "#3D5DCF",
          300: "#2D4BB6",
          400: "#253D96",
          500: "#1D3075",
          600: "#121E48",
          700: "#070B1B",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        warning: "#FF0000",
        success: {
          50: "#C8EAC6",
          100: "#BAE4B7",
          200: "#9ED999",
          300: "#81CE7B",
          400: "#65C35E",
          500: "#4BB543",
          600: "#3A8C34",
          700: "#296325",
          800: "#183A16",
          900: "#071106",
          950: "#000000",
        },
        tertiary: {
          10: "#696969",
          50: "#F6F6F6",
          100: "#656565",
          150: "#EEEEEE",
          200: "#96F474",
          250: "#6D6D6D",
          300: "#CCCCCC",
          350: "#0000004F",
          500: "#757575",
          400: "#AFAFAF",
          500: "#777777",
          550: "#17A700",
          600: "#D3D3D3",
          650: "#545454",
          700: "#474747",
          750: "#D9D9D9",
          800: "#838383",
          850: "#C4FFD8",
          900: "#169B00",
          950: "#8C8C8C",
        },

        black: "#000000",
        white: "#FFFFFF",
        text: "#3B3B3B",
        // grey: {
        //   50: "#F6F6F6",
        //   100: "#EEEEEE",
        //   200: "#6D6D6D",
        //   300: "#CCCCCC",
        //   600: "#545454",
        //   500: "#757575",
        //   400: "#AFAFAF",
        //   500: "#777777",
        //   600: "#3B3B3B",
        // },
      },
    },
  },
  plugins: [],
};
