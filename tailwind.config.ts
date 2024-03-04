import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#008DDD',
        },
        green: {
          DEFAULT: '#4A9D2F',
        },
        purple: {
          DEFAULT: '#5B5BFF',
        },
        orange: {
          DEFAULT: '#EE8132',
        },
        yellow: {
          DEFAULT: '#CC9324',
        },
        grey: {
          DEFAULT: '#F5F8FA',
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
} satisfies Config

