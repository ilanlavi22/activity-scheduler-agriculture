/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/bg_agriculture.jpg')",
      },
      dropShadow: {
        boxShadow: '0px -1px 4px rgba(0, 0, 0, 0.2)',
      },
      gridTemplateColumns: {
        item: 'repeat(6, minmax(100px, 1fr))',
      },
    },
    // extend: {
    //   colors: {
    //     colorBody: '#e5dccd',
    //     colorBorder: '#F9F5F2',
    //     colorGreen: '#55A53F',
    //     colorYellow: '#ecc94b',
    //     colorRed: '#eb0d0d',
    //   },
    // },
  },
  plugins: [],
};
