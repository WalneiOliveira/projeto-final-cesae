/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-500": "#00ADEF",
        "blue-600": "#2EC5FF",
        "blue-700": "#01B9FF",
        "blue-900": "#01B9FF",
        "cesae-blue": "#201544",
        "cesae-star": "#5A4896",
      },
    },
  },
  plugins: [],
}