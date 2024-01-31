/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#131118",
        "light-grey": "#A4A1AA",
        "white-color": "#fff",
      },
      screens: {
        'xs': '450px', // Extra small breakpoint
      },
    },
  },
  plugins: [],
};
