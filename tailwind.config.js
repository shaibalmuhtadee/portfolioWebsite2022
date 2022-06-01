module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark_primary: '#001429',
        dark_secondary: '#001E3D',
        light_primary: '#FAFAFF',
        light_secondary: '#6B7F82',
        highlight: '#F2F230',  //26C485 green, 247BA0 blue
      }
    },
  },
  plugins: [],
}
