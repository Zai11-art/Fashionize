/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    {
      transform: (content) => content.replace(/taos:/g, ''),
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  
}