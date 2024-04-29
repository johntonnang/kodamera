import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        'main-white': '#fff',
        'main-black': '#000',
        'main-red': '#D92D20',
        'main-grey': '#667085',
        'dark-blue': '#101828',
      },
      fontSize: {
        60: '3.75rem',
        36: '2.25rem',
        24: '1.5rem',
        20: '1.25rem',
        18: '1.125rem',
        16: '1rem',
        14: '0.875rem',
      },
      lineHeight: {
        120: '120%',
      },
      letterSpacing: {
        tight: '-1.2px',
      },
    },
  },
  plugins: [],
};
export default config;
