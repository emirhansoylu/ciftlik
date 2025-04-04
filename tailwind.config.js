/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5E3B',
          light: '#A67B5B',
          dark: '#6B472D',
        },
        secondary: {
          DEFAULT: '#E8C078',
          light: '#F0D4A0',
          dark: '#D4A85C',
        },
        background: {
          DEFAULT: '#F5F5DC',
          dark: '#E5E5C8',
        },
        accent: {
          DEFAULT: '#4C7A44',
          light: '#5D8B55',
          dark: '#3B5A34',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
      },
    },
  },
  plugins: [],
} 