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
      boxShadow: ['active'],

      backgroundImage: theme => ({
        'cloud': "url('assets/Nubes-de-Fondo.svg')",
        'bebe-hombre': "url('assets/bebe-hombre.svg')",
        'bebe-neutro': "url('assets/bebe-neutro.svg')",
        'bebe-mujer': "url('assets/bebe-mujer.svg')",
        'bebe-neutro': "url('assets/bebe-neutro.svg')",
        'peru': "url('assets/banderas/Peru.svg')",
        'francia': "url('assets/banderas/francia.svg')",
        'alemania': "url('assets/banderas/alemania.svg')",
        'nube-modal': "url('assets/nube-modal.svg')"
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