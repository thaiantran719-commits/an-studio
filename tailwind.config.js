/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#FAF9F4',
        'surface-dim': '#DBDAD5',
        'surface-bright': '#FFFFFF',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low': '#F5F4EF',
        'surface-container': '#EFEEE9',
        'surface-container-high': '#E9E8E3',
        'surface-container-highest': '#E3E3DE',
        'surface-variant': '#E3E3DE',
        'surface-tint': '#2D6A48',
        'on-surface': '#1B1C19',
        'on-surface-variant': '#404942',
        'inverse-surface': '#30312E',
        'inverse-on-surface': '#F2F1EC',

        primary: '#003820',
        'primary-container': '#0F5132',
        'primary-hover': '#0A3A24',
        'on-primary': '#FFFFFF',
        'on-primary-container': '#84C39B',
        'primary-fixed': '#B0F1C7',
        'primary-fixed-dim': '#95D4AC',

        secondary: '#476552',
        'secondary-container': '#C8EBD2',
        'on-secondary': '#FFFFFF',
        'on-secondary-container': '#4C6B58',
        'secondary-fixed': '#C8EBD2',
        'secondary-fixed-dim': '#ADCFB7',
        'on-secondary-fixed': '#022112',
        mint: '#B7D9C1',

        tertiary: '#313129',
        'tertiary-container': '#48473F',
        'tertiary-fixed': '#E6E2D7',
        'tertiary-fixed-dim': '#C9C6BC',

        outline: '#707971',
        'outline-variant': '#C0C9C0',
        error: '#BA1A1A',
        'error-container': '#FFDAD6',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'neumorph-raised':
          '6px 6px 16px rgba(180, 178, 170, 0.35), -6px -6px 16px rgba(255, 255, 255, 0.85)',
        'neumorph-raised-lg':
          '-10px -10px 24px rgba(255, 255, 255, 0.95), 12px 12px 30px rgba(186, 180, 166, 0.32)',
        'neumorph-raised-sm':
          '3px 3px 8px rgba(180, 178, 170, 0.3), -3px -3px 8px rgba(255, 255, 255, 0.8)',
        'neumorph-card-subtle':
          '-6px -6px 16px rgba(255, 255, 255, 0.9), 8px 8px 20px rgba(186, 180, 166, 0.22)',
        'neumorph-inset':
          'inset 4px 4px 8px rgba(180, 174, 160, 0.38), inset -3px -3px 7px rgba(255, 255, 255, 0.95)',
        'neumorph-inset-pill':
          'inset 3px 3px 6px rgba(180, 174, 160, 0.32), inset -3px -3px 6px rgba(255, 255, 255, 0.95)',
        'neumorph-btn-primary':
          '0 10px 20px -2px rgba(15, 81, 50, 0.38), 0 4px 8px -1px rgba(15, 81, 50, 0.2)',
        'neumorph-btn-tactile':
          '-4px -4px 10px #FFFFFF, 5px 5px 12px rgba(186, 180, 166, 0.35)',
        'neumorph-pill-active':
          '-3px -3px 8px rgba(255, 255, 255, 0.95), 4px 4px 12px rgba(15, 81, 50, 0.35)',
      },
      borderRadius: {
        '2.5xl': '1.375rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '2.75rem',
      },
    },
  },
  plugins: [],
};
