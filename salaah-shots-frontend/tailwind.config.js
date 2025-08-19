/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111827', // slate-900 vibe
          50: '#f6f7f9',
          100: '#e7e9ee',
          500: '#374151',
          600: '#1f2937',
          900: '#0b1220'
        },
        accent: {
          DEFAULT: '#22c55e'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
