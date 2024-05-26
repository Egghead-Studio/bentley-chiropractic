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
        'primary-text': '#1E1E1E',
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
