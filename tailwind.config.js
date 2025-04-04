/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
          light: '#22c55e',
        },
        secondary: {
          DEFAULT: '#0f766e',
          dark: '#0e7490',
          light: '#0d9488',
        },
        background: {
          DEFAULT: '#f8fafc',
          dark: '#f1f5f9',
        },
        accent: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },
        text: {
          DEFAULT: '#1e293b',
          light: '#475569',
        },
      },
    },
  },
  plugins: [],
} 