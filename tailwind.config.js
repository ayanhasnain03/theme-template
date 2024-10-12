/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom light mode colors
        lightBackground: "#f9f9f9",
        lightText: "#111827",

        // Custom dark mode colors
        darkBackground: "#28282B",
        darkText: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
