/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']

export const theme = {
  extend: {
    theme: {
      container: {
        padding: {
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      }
    }
  }
}
export const plugins = []
