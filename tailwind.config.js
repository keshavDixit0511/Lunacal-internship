/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        '22px': '22px',
      },
      boxShadow: {
        'custom-dark': '10px 10px 25px #0d0d0d, -10px -10px 25px #0d0d0d',
      },
      backgroundImage: {
        'custom-dark-gradient': 'linear-gradient(145deg, #363C43, #363C43)',
      },
    },
  },
  plugins: [],
};
