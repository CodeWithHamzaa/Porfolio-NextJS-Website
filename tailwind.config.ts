import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NerkoOne : ["Nerko One", "cursive"],
      },
      keyframes: {
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(12px)' }, // Adjust distance here
        },
      },
      animation: {
        'bounce-horizontal': 'bounce-horizontal 1.5s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
