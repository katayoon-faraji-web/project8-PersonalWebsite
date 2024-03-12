/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
 
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1600px',
    },
  extend: {
    fontFamily: {
      primary: "font1",
    },
    
    animation: {
      'NAME': 'NAME 1s linear 1 forwards',
      
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'orange': '#f7602b',
      'blue': '#ad96cc',
      'gray': '#a0aca2',
      'yellow': '#f8b600',
      'lightGray': '#ccc',
      'purple' :'#572376'


      
    },
    

  },
  },
  plugins: [
    require("tailwindcss-animation-delay","tw-elements/dist/plugin.cjs"),

  ],
 
  }





  