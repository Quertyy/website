/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      blur: {
        xs: '1px',
      },
      borderColor: {
        'green': '#00ce43',
      },
      colors: {
        'green': '#00ce43',
        'gray': '#1e1e1e',
        'gray-t': '#d0d3d2',
        'bgblack': '#121212',
      }
    },
  },
  plugins: [],
}
