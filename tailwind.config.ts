import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        quickSand:  ['var(--font-quicksand)'],
      },
      colors:{
        'lightGreen': '#CFE087',
        'darkGreen': '#3F6C2E',
        'whiteBg': '#F7F7F7'
      }
    },
  },
  plugins: [],
};
export default config;
