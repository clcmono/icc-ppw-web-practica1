/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Angular escanea todos los templates
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui') // activa DaisyUI
  ],
  daisyui: {
    themes: ["valentine"] // solo el tema Valentine
  }
}
