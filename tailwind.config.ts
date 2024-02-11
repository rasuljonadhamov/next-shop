import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayshade-300": "rgb(38,38,38)",
        "grayshade-200": "rgb(51,51,51)",
        "purpleshade-400": "rgb(112, 59, 247)",
      },
    },
  },
  plugins: [],
};
export default config;
