/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors:{
        dark:"#1b1b1b"
      },
      animation:{
   'spin-slow':'spin 8s linear infinite'
      },
      backgroundImage:{
        circular:'repeating-radial-gradient(teal 2px, #2222 5px, #2222 100px);'
      }
    },
    screens:{
      "2xl":{max:"1535px"},
      xl:{max:"1279px"},
      lg:{max:"1023px"},
      md:{max:"767px"},
      sm:{max:"629px"},
      xs:{max:"479px"},
    },
   
  },
  plugins: [],
}
