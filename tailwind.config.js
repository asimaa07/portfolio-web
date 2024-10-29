/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        1: "0px 1px 12px #221122",
        2: "0px -1px 12px #221122",
        'custom' : '0px 0px 24px 0px rgba(0, 0, 0, 0.08)',
        default: "0px 0px 24px 0px #00000014;",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
