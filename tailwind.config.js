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
        light_primary: '#F2F7F2',
        light_secondary: '#B8B8B8',
        highlight: '#F2F230',  //26C485 green, 247BA0 blue
      }
    },
  },
  plugins: [],
}
