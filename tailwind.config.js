module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    screens: {
      'xs': '320px',    
      'sm': '480px',    
      'md': '768px',
      'ls': '800px',    
      'lg': '1024px',   
      'xl': '1280px',  
      '2xl': '1536px',  
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
