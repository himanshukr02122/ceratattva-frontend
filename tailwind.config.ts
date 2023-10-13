import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home-video': 'url("../public/home/hq720.jpg")',
      },
      colors: {
        'logo-color': '#db4328',
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
      screens: {
        'xs': '425px',
        '3xl': '1600px',
        '4xl': '2000px',
        '5xl': '2500px',
      },
      keyframes: {
        bannerTextTransformation: {
          '0% ': { transform: 'translateX(-40rem)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: "0" },
          '100%': { opacity: "100" },
        },
      },
      animation: {
        bannerTextTransformation: 'bannerTextTransformation 1s ease-in-out 1',
        fade: 'fadeOut 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
export default config
