/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        secondary: "#191E1E",
        light_blue: "#61DAFB",
        grey: "#2B2B2B"
      },
    },
  },
  plugins: [],
}

