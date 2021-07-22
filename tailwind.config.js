module.exports = {
  mode:'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'Zen': ['Zen Loop', 'ui-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'cloud': "url('assets/Nubes-de-Fondo.svg')",
        'bebe-hombre': "url('assets/bebe-hombre.svg')",
        'bebe-neutro': "url('assets/bebe-neutro.svg')",
        'bebe-mujer': "url('assets/bebe-mujer.svg')",
       })
    },
  },
  variants: {
    extend: {
      translate: ['active'],
      backgroundColor: ['active'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}