/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "baloo-thambi": ['"Baloo Thambi 2"', "system-ui"],
        rubik: ['"Rubik"', "sans-serif"],
      },
      backgroundImage: {
        "dashed-border":
          'url("data:image/svg+xml,%3csvg%20width=%27100%25%27%20height=%27100%25%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3crect%20width=%27100%25%27%20height=%27100%25%27%20fill=%27none%27%20stroke=%27%2324242424%27%20stroke-width=%274%27%20stroke-dasharray=%278%2c18%27%20stroke-linecap=%27square%27/%3e%3c/svg%3e")',
        "dashed-border-dark":
          'url("data:image/svg+xml,%3csvg%20width=%27100%25%27%20height=%27100%25%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3crect%20width=%27100%25%27%20height=%27100%25%27%20fill=%27none%27%20stroke=%27%23F3F3F424%27%20stroke-width=%274%27%20stroke-dasharray=%278%2c18%27%20stroke-linecap=%27square%27/%3e%3c/svg%3e")',
      },
    },
  },
  plugins: [],
};
