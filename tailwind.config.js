/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/index.css/"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        900: '#1a202c',
      },
    }
  }
}

module.exports = {
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
  }
}
