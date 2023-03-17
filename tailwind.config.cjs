/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'bgBright':"var(--color-bright-red)",
        'bgDarkBlue': "var(--color-very-dark-blue)",
        'bgLightGray': "var(--color-light-gray)",
        'bgPalered': 'var(--color-very-pale-red)'
      },
      colors:{
        'clGrayish': 'var(--color-dark-grayish)',
        'clDarkBlue': 'var(--color-dark-blue)',
        'clVdarkBlue': 'var(--color-very-dark-blue)',
        'clLightGray': 'var(--color-light-gray)'
      },
      backgroundImage:{
        'bgHero':"url('https://res.cloudinary.com/dnzidlufh/image/upload/v1678194578/bg-tablet-pattern_zuzcxm.svg')"
      },
    },
  },
  plugins: [],
}
