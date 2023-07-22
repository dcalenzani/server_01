/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        accent:{
          1: "var(--color-accent1) / <alpha-value>",
          2: "var(--color-accent2) / <alpha-value>",
        },
        bkg: "var(--color-background) / <alpha-value>",
        content: "var(--color-content) / <alpha-value>",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: 
  [
    require('@tailwindcss/typography'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
