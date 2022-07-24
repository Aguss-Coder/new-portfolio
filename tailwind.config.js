/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './main.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'robo': ['Roboto', 'sans-serif']
      }
    },
    colors: {
      'principal-50': '#e7ecfe',
      'principal-100': '#b6c6fc',
      'principal-200': '#85a0fa;',
      'principal-300': '#547af8',
      'principal': '#2354f6',
      'principal-400': '#093adc',
      'principal-500': '#072dab',
      'principal-600': '#05207a',
      'principal-700': '#031349',
      'principal-800': '#010618',
      'black': 'rgba(0, 0, 0, .7)',
      'gray': '#414141;',
      'ht': '#f1662a',
      'cs': '#1c88c7',
      'js': '#f4de18',
      'py': '#356f9e'
    }
  },
  plugins: [],
}
