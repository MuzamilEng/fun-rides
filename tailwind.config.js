/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom size for extra small screens
        sm: "640px", // Default small size
        md: "768px", // Default medium size
        tb: "820px", // Default tablet size
        lg: "1024px", // Default large size
        xl: "1280px", // Default extra large size
        "2xl": "1536px", // Default 2x extra large size
        "3xl": "1920px", // Custom size for 3x extra large screens
        "2sm": "611px", // Custom size for 4x extra large screens
        "3sm": "604px", // Custom size for 5x extra large screens
        "4sm": "584px", // Custom size for 6x extra large screens
        "5sm": "540px",
        "2md": "783px",
        "3md": "820px",
        "2tb": "810px",
        "3tb": "800px",
        "4md": "783px",
        "5md": "1023px",
      },
    },
  },
  plugins: [],
}