/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "urban": ['Urbanist', 'sans-serif']
      },
      colors: {
        'grey8': '#141414',
        'grey10': '#1A1A1A',
        'grey15': '#262626',
        'grey20': '#333333',
        'grey30': '#4D4D4D',
        'grey40': '#666666',
        'purple60': '#FF7A00',
      }
    },

  },
  plugins: [],
}

