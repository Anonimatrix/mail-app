module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      keyframes: {
        bg: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        bg: "bg 1.3s ease-in-out infinite",
      },
      backgroundSize: {
        "to-animate": "200%",
      },
    },
  },
  plugins: [],
};
