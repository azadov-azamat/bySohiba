/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md2': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg2': '1100px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      comforts: ["Comfortaa"],
      shangoB: ["Shango-Bold"],
      shangoM: ["Shango-Medium"]
    },
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-line": "line 5s linear infinite"
      },
      keyframes: {
        line: {
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(-360deg)"}
        }
      },
      boxShadow: {
        nav: "0 4px 10px rgba(0, 0, 0, 0.4)",
        service: '0px 4px 60px rgba(204, 193, 142, 0.1)',
        serviceBg: '0px 4px 60px rgba(212, 226, 213, 0.5)',
        comments: '0px 4px 50px rgba(212, 226, 213, 0.2)',
        footer: '0px -1px 20px rgba(0, 0, 0, 0.5)'
      },
      dropShadow: {
        context: "0px 0px 12px rgba(255, 255, 255, 0.5)"
      }
    },
    colors: {
      primary_black: '#6C9392',
      primary_blackmd: '#7F7F7F',
      primary_checkbox: '#D4E2D5',
      primary_text_black: 'rgb(18,59,58)',
      primary_light: 'rgb(255 255 255)',
      primary_yellow: '#CCC18E',
      primary_form: 'rgba(196, 196, 196, 0.15)',
      primary_header: 'rgba(0, 0, 0, 0.6)',
      primary_page: 'rgba(120, 121, 106, 0.3)',
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
