/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        primary: "#007BFF",
        secondary: "#28A745",
        tertiary: "#DC3545",
        background: "#F8F9FA",
        surface: "#FFFFFF",
        text: "#212529",
        border: "#DEE2E6",
        accent: "#FFC107",

        // Dark Mode Colors
        dark: {
          primary: "#0D6EFD",
          secondary: "#198754",
          tertiary: "#B02A37",
          background: "#121212",
          surface: "#1E1E1E",
          text: "#E1E1E1",
          border: "#343A40",
          accent: "#FFD54F",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
