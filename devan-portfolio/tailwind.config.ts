import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkRed:  'rgb(221, 0, 4)'
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '100%',
          md: '95%',
          lg: '90%',
          xl: '85%',
          '2xl': '80%'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
