/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'insove-blue': '#1CBCCF',
        'insove-blue-dark': '#19A9BA',
        'insove-blue-light': '#8DDDE7',
        'insove-soft-blue': '#E8F8FA',
        'insove-blog-meta': '#90C6CD'
      }
    },
  },
  plugins: [],
};
