/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        mona: ["mona", "sans-serif"]
      },
    },
  },
  plugins: [],
}

