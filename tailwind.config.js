/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        rubic: ["var(--font-rubic)"],
        archivo: ["Archivo", "sans-serif"],
      },
      colors: {
        "primary-orange": "#F8964F",
        "primary-brown": "#562E08",
        "secondary-brown": "#4D2D10",
        "btn-color": "#F89954",
        "color-rose": "#F6EDDB",
      },
    },
  },
  plugins: [],
};
