/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        crm: {
          green: '#22c55e',
          red: '#ef4444',
          midnight: '#060a12',
          navy: '#0c1222',
          slate: '#151d2e',
          accent: '#5b8def',
          glow: '#7dd3fc',
        },
      },
      borderRadius: {
        glass: '20px',
        'glass-lg': '28px',
        'glass-xl': '36px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-sm': '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
        premium: '0 24px 80px -20px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06)',
        'premium-glow': '0 32px 80px -24px rgba(0,0,0,0.7), 0 0 120px -40px rgba(91,141,239,0.22)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
