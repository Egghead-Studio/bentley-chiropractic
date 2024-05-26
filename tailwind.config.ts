import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0E8E5',
        'background-light': '#F4F3F2',
        primary: '#0E258B',
        'primary-dark': '#0C1F74',
        secondary: '#D2D2E9',
        'secondary-dark': '#A2B1F6',
        'blackbeard': '#1E1E1E',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        sans: 'var(--font-body)',
        body: 'var(--font-body)',
        mono: 'var(--font-body)',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}
export default config
