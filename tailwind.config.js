/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#DD3C65",
        "gradient-end": "#B40D38",
      },
    },
  },
  plugins: [],
};
