/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "baloo-thambi": ['"Baloo Thambi 2"', "system-ui"],
      },
    },
  },
  plugins: [],
};
