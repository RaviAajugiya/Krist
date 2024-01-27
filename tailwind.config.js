/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131118",
        "light-grey": "#A4A1AA",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
