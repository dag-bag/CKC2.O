import type { Config } from "tailwindcss";
const config: Config = {
  content: [

    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "fun": ["Fredoka", "monospace"],
        "game": ['Orbitron', 'monospace'],
        "sans": ['Quicksand', 'monospace'],
        "heading": ['Gabarito', 'monospace'],
        "josefin": ["Josefin Sans", "monospace"],
        "one": ["Lilita One", "monospace"],
        "amar": ["Amaranth", "monospace"],


      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
export default config;
