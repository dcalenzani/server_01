/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
        fontSize: {
      // other sizes...
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5.5rem',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.950'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            'h1, h2, h3': {
              color: theme('colors.zinc.950'),
              a: {
                color: theme('colors.zinc.950'),
                '&:hover': {
                  color: theme('colors.zinc.950'),
                },
              },
            },
            'li strong': {
              color: theme('colors.zinc.950'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.zinc.100'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            'h1, h2, h3': {
              color: theme('colors.zinc.100'),
            },
            'li strong': {
              color: theme('colors.zinc.100'),

            },
          },
        },
      }),
    },
  },
    boxShadow: {
    "fours" : "4px 4px 40px 10px rgba(60,60,60,0.5)",
  },
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

  plugins: 
  [
    require('@tailwindcss/typography'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
};