/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        white: "0 10px 10px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
