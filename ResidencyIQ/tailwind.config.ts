import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        obsidian: '#080808',
        gold: '#D4AF37',
        'gold-light': '#F4D27A',
        'gold-deep': '#9C7628',
        ivory: '#F8F5EF',
        graphite: '#B8B8B8',
        amber: '#E6B94D',
        risk: '#D96B6B',
        success: '#66D17A',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 24px 90px rgba(212, 175, 55, 0.13)',
        glass: '0 18px 80px rgba(0,0,0,0.42)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4D27A 0%, #D4AF37 48%, #9C7628 100%)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))',
      },
    },
  },
  plugins: [],
};

export default config;
