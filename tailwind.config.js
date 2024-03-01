/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": 'var(--primary-background)',
        "secondary": 'var(--secondary-background)'
      },
      textColor: {
        "primary": 'var(--primary-text)',
        "secondary": 'var(--secondary-text)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "primary": "var(--primary-font);",
        "secondary": "var(--secondary-font);"
      },
      borderRadius: {
        'special': '3px',
        
      }
    },
  },
  plugins: [],
};
