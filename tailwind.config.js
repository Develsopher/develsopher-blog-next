/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        primary: '#1A1A1A',
        light: '#ffffff',
        accent: '#7B00D3',
        accentDark: '#ffdb4d',
        gray: '#747474',
      },
      fontFamily: {
        ns: ['var(--font-ns)'],
        rb: ['var(--font-rb)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
