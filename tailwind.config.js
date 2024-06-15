/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      myColors: {
        50: "#fff0f0",
        100: "#ffdddd",
        200: "#ffc1c1",
        300: "#ff9696",
        400: "#ff5a5a",
        500: "#ff2727",
        600: "#fb0707",
        700: "#d40101",
        800: "#ae0606",
        900: "#900c0c",
        950: "#520000",
      },
    },
  },
  plugins: [],
};
