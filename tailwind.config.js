/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
      }
    },
  },
  plugins: [],
}
