/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#9381FF",
        "light-violet": "#B8B8FF",
        white2: "#F8F7FF",
        cream: "#FFEEDD",
        apricot: "#FFD8BE",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
