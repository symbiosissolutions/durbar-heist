/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7F7E7",
        secondary: "#141414",
        accent: "#C8102E",
      },
      fontFamily: {
        sourceCode: ["SourceCode"],
        montserrat: ["Montserrat"],
        knightWarrior: ["KnightWarrior"],
      },
    },
  },
  plugins: [],
};
