/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#374151',
        accent: '#4ade80',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
