/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  'node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    colors: {
      's-blue': '#000E5C',
      's-white': '#f6f8ff',
      's-green': '#04f38e',
      's-black': '#17181a',
      's-secondary': 'f7fffb',
      's-text': '#676767',
    },
  },
};
export const plugins = [require('flowbite/plugin')];
