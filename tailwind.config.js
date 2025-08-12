/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#F3F30C',
        'brand-dark': '#0A0A0A',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['"Courier New"', 'monospace']
      },
      borderColor: {
        'brand-yellow': '#F3F30C',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      }
    }
  },
  plugins: [],
}
