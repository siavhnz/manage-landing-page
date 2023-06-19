/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "30em", // 480px
        "1.5lg": "69.375rem", //1110px
      },
      maxWidth: {
        "1.5lg": "69.375rem",
      },
      fontFamily: {
        "Be-Vietnam-Pro": ["'Be Vietnam Pro'", "sans-serif"],
      },
      colors: {
        "very-light-gray": "hsl(0, 0%, 98%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
      },
      backgroundImage: {
        "simplify-mobile-pattern":
          "url('./assets/images/bg-simplify-section-mobile.svg')",
        "simplify-desktop-pattern":
          "url('./assets/images/bg-simplify-section-desktop.svg')",
      },
    },
  },
  plugins: [],
};
