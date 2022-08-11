/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,php}"
  ],
  theme: {
    extend: {
      colors : {
        'background-color' : '#263238',
        'primary-color' : '#13B4DD',
        'secondary-color' : '#EDF6E5',
        'button-color' : '#F38BA0',
        'button-hover' : '#F56A86'
      },
      fontFamily : {
        'primary-font' : 'Poppins'
      },
      container: {
        padding: {
          'DEFAULT': '2rem',
          'sm': '2rem',
          'lg': '4rem',
          'xl': '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        'sm': '530px',
        'md': '801px',
        'xl': '1280px',
        
      },
    },
  },
  plugins: [],
}
