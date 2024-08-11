import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      base: "#1e1e2e",
      blue: "#89b4fa",
      text: "#cdd6f4",
      crust: "#11111b",
      surface2: "#585b70",
      t: "#00000000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
        zetta: ["var(--font-zetta)"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
