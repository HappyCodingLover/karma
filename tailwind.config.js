import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./assets"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kulim Park', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '768px',
        md: '1024px',
        lg: '1910px',
        xl: '3400px',
      },
      backgroundImage: {
        'bgImg1': "url('../src/assets/imgs/background1.png')",
        'bgImg2': "url('../src/assets/imgs/background2.png')",
        'bgImg3': "url('../src/assets/imgs/background3.png')"
      }
    },
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
}