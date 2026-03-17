/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "baloo-thambi": ['"Baloo Thambi 2"', "system-ui"],
      },
    },
  },
  plugins: [],
};
