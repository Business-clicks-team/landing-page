/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
