/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        surface: "#0f1724",
        card: "#0b1220"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2,6,23,0.6)"
      }
    }
  },
  plugins: [],
};
