/** ============================================================
 *  VERDA Design System · tailwind.config.js · v1.0.0
 *  Gemappt auf tokens/design-tokens.json
 *  Nutzung: bg-forest-900, text-sand-600, rounded-xl,
 *           shadow-md, font-display, duration-fast …
 *  ============================================================ */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html,mdx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
      screens: { xl: '1240px' },
    },
    extend: {
      colors: {
        forest: {
          50: '#F3F7EE', 100: '#E5EED4', 200: '#CFE0B4', 300: '#AFC98D',
          400: '#86AA67', 500: '#64925C', 600: '#4B7345', 700: '#3A5936',
          800: '#29452A', 900: '#1D3A22', 950: '#132A17',
        },
        sun: {
          50: '#FFFFF0', 100: '#FFFFE0', 200: '#FEFDBE', 300: '#FDFB9C',
          400: '#FAF476', 500: '#F5EA4A', 600: '#EFDE0F', 700: '#C7B70A',
        },
        signal: {
          100: '#F2FEDC', 200: '#E5FCB9', 300: '#D7F98B',
          400: '#C3EF5F', 500: '#A8DB38',
        },
        sand: {
          0: '#FFFFFF', 25: '#FDFDFC', 50: '#F8F8F4', 100: '#EEEEE5',
          200: '#DCDCD2', 300: '#C6C7BC', 400: '#AEB0A6', 500: '#8B8E83',
          600: '#5F625A', 700: '#474A43', 800: '#33352F', 900: '#262821',
          950: '#171913',
        },
        sky: {
          50: '#EAF2F8', 100: '#D4E4EF', 300: '#8FB9D3',
          500: '#4181A6', 700: '#2B5771', 900: '#18303E',
        },
        carnelian: {
          50: '#FBEAE7', 100: '#FAD9D1', 500: '#A82D1F', 700: '#7E2117',
        },
        amber: {
          50: '#FDF3E3', 100: '#FAE4C2', 500: '#C77E1D', 700: '#8F5A12',
        },
      },

      fontFamily: {
        display: ['Schibsted Grotesk', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Hanken Grotesk', 'Helvetica Neue', 'Arial', 'sans-serif'],
        data: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        'display-xl': ['clamp(2.75rem, 1.5rem + 4.5vw, 4.5rem)', { lineHeight: '1.04', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-lg': ['clamp(2.25rem, 1.35rem + 3.5vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '500' }],
        h1: ['clamp(2rem, 1.4rem + 2.4vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '500' }],
        h2: ['clamp(1.625rem, 1.3rem + 1.4vw, 2.25rem)', { lineHeight: '1.16', letterSpacing: '-0.01em', fontWeight: '500' }],
        h3: ['1.375rem', { lineHeight: '1.3', fontWeight: '500' }],
        h4: ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
        data: ['0.8125rem', { lineHeight: '1.5' }],
      },

      borderRadius: {
        xs: '4px', sm: '8px', md: '12px', lg: '16px',
        xl: '24px', '2xl': '32px', pill: '999px',
      },

      boxShadow: {
        xs: '0 1px 2px rgba(23,25,19,0.06)',
        sm: '0 2px 8px rgba(23,25,19,0.06)',
        md: '0 8px 24px rgba(23,25,19,0.08)',
        lg: '0 16px 48px rgba(23,25,19,0.12)',
        hairline: 'inset 0 0 0 1px rgba(23,25,19,0.08)',
        focus: '0 0 0 3px rgba(75,115,69,0.30)',
      },

      spacing: {
        18: '4.5rem',   // 72px – Nav-Höhe
        30: '7.5rem',   // 120px
        'nav': '72px',
        'nav-m': '56px',
        'section': '96px',
        'section-m': '64px',
      },

      maxWidth: {
        container: '1240px',
        'col-1': '232px', 'col-2': '484px', 'col-3': '736px',
      },

      transitionDuration: {
        instant: '100ms', fast: '200ms', base: '300ms',
        slow: '500ms', reveal: '700ms',
      },

      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },

      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 500ms ease both',
        'scale-in': 'scale-in 300ms cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 30s linear infinite',
      },

      zIndex: {
        raised: '10', sticky: '100', overlay: '500',
        modal: '600', toast: '700',
      },
    },
  },
  plugins: [],
};
