/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "30px",
      screens: {
        "2xl": "1400px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        neutral: {
          50: "#E8E9EA",
          100: "#B8BABE",
          200: "#96989E",
          300: "#666A72",
          400: "#484D56",
          500: "#1A202C",
          600: "#181D28",
          700: "#12171F",
          800: "#0E1218",
          900: "#0B0D12",
        },
        stone: {
          500: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
