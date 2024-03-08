/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fill: {
        light: {
          'primary': '#000000',
        },
        dark: {
          'primary': "#ffffff",
        },
      },
      backgroundColor: {
        light: {
          "primary": '#ffffff',
          "secondary": '#000000',
          "base": "#000000",
          "heroBackground": "#00000030"
        },
        dark: {
          "primary": '#000000',
          "secondary": '#ffffff',
          "base": "#ffffff",
          "heroBackground": "#ffffff10"
        },
      },
      textColor: {
        light: {
          "primary": '#000000',
          "secondary": '#ffffff'
        },
        dark: {
          "primary": '#ffffff',
          "secondary": '#000000'
        }

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
      },
      borderColor: {
        light: {
          "primary": '#ffffff',
          "secondary": '#000000',
          "base": "#000000",
        },
        dark: {
          "primary": '#000000',
          "secondary": '#ffffff',
          "base": "#ffffff",
        },

      },
    },
  },
  plugins: [],
};
