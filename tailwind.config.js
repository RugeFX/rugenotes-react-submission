/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EFEC8C",
        background: "#282B47",
      },
    },
  },
  plugins: [],
};
