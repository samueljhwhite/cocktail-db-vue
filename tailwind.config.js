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
            dark: "#203647",
            light: "#007CC7",
            lightest: "#4DA8DA",
          },
          white: "#EEFBFB",
          black: "#202020",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
