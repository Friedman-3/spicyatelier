/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Fuentes existentes
        'gowun': ['"Gowun Dodum"', 'sans-serif'],
        'windsong': ['"WindSong"', 'cursive'],
        'whisper': ['"Whisper"', 'cursive'],
        'zen-old': ['"Zen Old Mincho"', 'serif'],
        'cabin': ['"Cabin"', 'sans-serif'],
        
        // Nuevas fuentes agregadas
        'roboto': ['"Roboto"', 'sans-serif'],
        'helvetica': ['"Helvetica Neue"', '"Helvetica"', '"Arial"', 'sans-serif'],
        'ariata': ['"Arima"', 'cursive'], // Alternativa para Ariata Display
        'acumin': ['"Source Sans Pro"', 'sans-serif'], // Alternativa para Acumin Variable
      },
    },
  },
  plugins: [],
}