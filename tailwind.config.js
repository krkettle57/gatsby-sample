const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base1: {
          DEFAULT: colors.blueGray[800],
        },
        base2: {
          DEFAULT: colors.coolGray[100],
        },
        primary: {
          DEFAULT: colors.teal[400],
        },
        accent: {
          DEFAULT: colors.rose[400],
        },
      },
      fontFamily: {
        sans: ["ヒラギノ角ゴシック", "メイリオ", "Arial"],
        serif: ["ヒラギノ明朝", "MS P明朝", "Times"],
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: "0",
            },
            h1: {
              padding: "0.25rem 0rem",
              margin: "0.25rem 0rem",
              fontWeight: "600",
            },
            h2: {
              padding: "0.25rem 0.5rem",
              color: "var(--color-base1)",
              background: "transparent",
              borderLeft: "solid 8px var(--color-primary)",
            },
            p: {
              margin: "0.25rem 0rem",
            },
            a: {
              textDecoration: "none",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
