module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base1: {
          DEFAULT: "var(--color-base1)",
        },
        base2: {
          DEFAULT: "var(--color-base2)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
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
