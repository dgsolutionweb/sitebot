/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'whatsapp-green': 'var(--whatsapp-green)',
        'youtube-red': 'var(--youtube-red)',
        'premium-purple': 'var(--premium-purple)',
        'gold': 'var(--gold)',
        'dark-bg': 'var(--dark-bg)',
        'light-bg': 'var(--light-bg)',
        'light-text': 'var(--light-text)',
        'dark-text': 'var(--dark-text)',
        'gray-text-dark': 'var(--gray-text-dark)',
        'gray-text-light': 'var(--gray-text-light)',
      },
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      backgroundColor: {
        'glass-dark': 'rgba(0, 0, 0, 0.75)',
        'glass-light': 'rgba(255, 255, 255, 0.9)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 