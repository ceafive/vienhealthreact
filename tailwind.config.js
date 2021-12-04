module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Cereal"],
      },
      colors: {
        brandDark: "#1A1A1A",
      },
      boxShadow: {
        progressCard: "0px 1px 3px rgba(0, 0, 0, 0.04)",
        card: "0px 2px 15px rgba(108, 126, 147, 0.1)",
        social: "0px 12px 30px rgba(0, 0, 0, 0.08)",
      },
      width: {
        "22%": "22%",
        "64%": "64%",
        "30%": "30%",
        "32%": "32%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
