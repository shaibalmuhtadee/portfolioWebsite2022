module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Rubik': ['Rubik'],
    },
    extend: {
      colors: {
        dark_primary: '#001429',
        dark_secondary: '#363C49',
        light_primary: '#F2F7F2',
        light_secondary: '#B8B8B8',
        dark_gray_custom: '#8E97A4',
        light_gray_custom: '#525A66',
        dark_highlight: '#F2F230',
        light_highlight: '#3185FC',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-5deg)'
          },
          '50%': {
            transform: 'rotate(5deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
