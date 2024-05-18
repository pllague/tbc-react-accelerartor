/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        secondary: "#191E1E",
        light_blue: "#61DAFB",
        grey: "#2B2B2B",
        orange: "#f97316",
      },
    },
  },
  plugins: [],
};
