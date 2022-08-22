module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '640px',
      'tablet': '1024px',
      'laptop': '1280px',
    },
    colors: {
      green: {
        primary: '#186A3B', 
        secondary: '#A9DFBF',
        tertiary: '#EAFAF1'
      },
      white: {
        primary: '#FDFEFE',
        secondary: '#F2F4F4',
      },
      dark: {
        primary: '#000000',
      },
      facebook: {
        primary: '#3C5A99',
      },
      google: {
        primary: '#D54E21',
      }
      //...
    },
  },
  plugins: [],
}
