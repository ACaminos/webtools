/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065',
          },
          surface: {
            DEFAULT: '#1f1f1f',
            light: '#2a2a2a',
            lighter: '#333333',
            dark: '#161616',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
          display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-out forwards',
          'slide-up': 'slideUp 0.6s ease-out forwards',
          'slide-down': 'slideDown 0.3s ease-out forwards',
          'float': 'float 6s ease-in-out infinite',
          'float-slow': 'float 8s ease-in-out infinite',
          'float-reverse': 'floatReverse 7s ease-in-out infinite',
          'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
          'gradient': 'gradient 8s ease infinite',
          'shimmer': 'shimmer 4s ease-in-out infinite',
          'drift': 'drift 20s linear infinite',
          'drift-slow': 'drift 30s linear infinite',
          'wave': 'wave 6s ease-in-out infinite',
          'bounce-soft': 'bounceSoft 3s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideDown: {
            '0%': { opacity: '0', transform: 'translateY(-10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          floatReverse: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(20px)' },
          },
          pulseGlow: {
            '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
            '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
          },
          gradient: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          shimmer: {
            '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
            '50%': { transform: 'translateX(100%) skewX(-15deg)' },
            '100%': { transform: 'translateX(200%) skewX(-15deg)' },
          },
          drift: {
            '0%': { transform: 'translateY(0) translateX(0)' },
            '25%': { transform: 'translateY(-30px) translateX(20px)' },
            '50%': { transform: 'translateY(-10px) translateX(-15px)' },
            '75%': { transform: 'translateY(-40px) translateX(10px)' },
            '100%': { transform: 'translateY(0) translateX(0)' },
          },
          wave: {
            '0%, 100%': { d: 'path("M0,128 C160,256 320,0 480,128 C640,256 800,0 960,128 L960,320 L0,320 Z")' },
            '50%': { d: 'path("M0,160 C160,32 320,256 480,96 C640,192 800,64 960,160 L960,320 L0,320 Z")' },
          },
          bounceSoft: {
            '0%, 100%': { transform: 'translateY(0) scale(1)' },
            '50%': { transform: 'translateY(-8px) scale(1.02)' },
          },
        },
        backgroundSize: {
          '300%': '300% 300%',
        },
      },
    },
    plugins: [],
  }
