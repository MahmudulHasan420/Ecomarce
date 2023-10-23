/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
      },
      fontSize: {
        '49': '49px',
        '39': '39px',
      },
      colors:{
        'offwhite' : '#F0F0F0',
        'ash' : '#F5F5F3',
        'blak' : '#6D6D6D',
        'lightBlack' : '#767676',
        'color1' : '#979797',
        'color2' : '#FF8686',
        'color3' : '#7ED321',
        'color4' : '#B6B6B6',
        'color5' : '#15CBA5',

      },
      maxWidth: {
        'container': '1604px',
        '643' : '643px'
      },
      width: {
        '48%': '48%',
        '23' : '27%',
        '14px' : '10px',
      },
      spacing: {
        '170px': '170px',
        '13': '52px',
        '19': '76px',
      },
    },
  },
  plugins: [],
}

