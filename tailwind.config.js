/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ['Rubik-Regular', 'sans-serif'],
        "rubik-bold": ['Rubik-Bold', 'sans-serif'],
        "rubik-extrabold": ['Rubik-ExtraBold', 'sans-serif'],
        "rubik-medium": ['Rubik-Medium', 'sans-serif'],
        "rubik-light": ['Rubik-Light', 'sans-serif'],
      },
      colors: {
        'primary': {
          // '50': '#eff6ff',
          // '100': '#dbeafe',
          // '200': '#bfdbfe',
          // '300': '#93c5fd',
          // '400': '#60a5fa',
          100: '#0061ff0A',
          200: '#0061ff1A',
          300: '#0061ff'
        },
        accent: {
          100: 'FBFBFD',
        },
        black: {
          DEFAULT: '#000000',
          100: "#8C8E98",
          200: "#666876",
          300: '#191D31',
        },
        danger: '#f75555'
      }
    },
  },
  plugins: [],
}

