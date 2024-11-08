/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-tight': '1.15'
      },
      borderRadius: {
        'xlg': '2rem',
      }
    }
  },
  plugins: [],
}

