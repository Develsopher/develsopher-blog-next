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
        accent: '#34568B',
        accentDark: '#957DAD',
        gray: '#747474',
      },
      fontFamily: {
        ns: ['var(--font-ns)'],
        rb: ['var(--font-rb)'],
      },
      screens: {
        sxl: '1180px',
        // @media (min-width: 1180px) {...}
        cs: '480px',
        // @media (min-width: 480px) {...}
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
