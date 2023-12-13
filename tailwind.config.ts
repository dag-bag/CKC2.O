import type { Config } from "tailwindcss";

export const COLOR = {
  lightgreen: "#8cc63f",
  darkgreen: "#51933f",
  lightblue: "#00aeef",
  darkblue: "#0061b0",
  lightgold: "#f5e831",
  darkgold: "#f89d1f"
}


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLOR,
      fontFamily: {
        fun: ["Fredoka", "monospace"],
        game: ["Orbitron", "monospace"],
        sans: ["Quicksand", "monospace"],
        heading: ["Gabarito", "monospace"],
        josefin: ["Josefin Sans", "monospace"],
        one: ["Lilita One", "monospace"],
        amar: ["Amaranth", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;



