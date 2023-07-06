/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif']
      },
      colors: {
        netral: {
          black: '#263238',
          D_Grey: '#4D4D4D',
          grey: '#717171',
          L_Grey: '#89939E',
          Grey_blue: '#ABBED1',
          silver: '#F5F7FA',
          white: '#FFFFFF'
        },
        primary: '#4CAF4F',
        secondary: '#263238',
        info: '#2194F3',
        color_shade: {
          shade1: '#43A046',
          shade2: '#388E3B',
          shade3: '#237D31',
          shade4: '#1B5E1F',
          shade5: '#103E13',
        },
        color_tint: {
          tint1: '#66BB69',
          tint2: '#81C784',
          tint3: '#A5D6A7',
          tint4: '#C8E6C9',
          tint5: '#E8F5E9',
        },
        action: {
          warning: '#FBC02D',
          error: '#E53835',
          success: '#2E7D31',
        }
      },
      dropShadow: {
        '2px': '0px 2px 4px 0px rgba(171, 190, 209, 0.60)',
        '4px': '0px 4px 8px 0px rgba(171, 190, 209, 0.40)',
        '6px': '0px 6px 12px 0px rgba(171, 190, 209, 0.30)',
        '8px': '0px 8px 16px 0px rgba(171, 190, 209, 0.40)',
        '16px': '0px 16px 32px 0px rgba(171, 190, 209, 0.30)',
      },
      borderRadius: {
        logo: '18px 5px 10px 5px'
      }
    },
  },
  plugins: [],
}
