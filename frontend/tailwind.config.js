/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f26522',
        'primary-hover': '#e05a1a',
        'bg-light': '#f5f5f5',
        'border-light': '#e0e0e0',
        'ui-gray': '#cccccc',
        'heading': '#222222',
        'body': '#333333',
        'muted': '#888888',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Open Sans', 'Lato', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'button': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      spacing: {
        'navbar': '64px',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
} 