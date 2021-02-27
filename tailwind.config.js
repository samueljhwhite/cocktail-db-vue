module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "system-ui"],
        body: ["Hind", "system-ui"],
      },
      colors: {
        theme: {
          blue: {
            darkest: "#12232E",
            dark: "#16171B",
            light: "#007CC7",
            lightest: "#4DA8DA",
          },
          white: "#D0D0D0",
          black: {
            dark: "#111111",
            light: "#333",
          },
          gray: "#7E7E7E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
