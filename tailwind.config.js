/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          10: "#1F314F",
          20: "#2C7DFA",
          30: "#3685FF",
        },
        gray: {
          10: "#F2F2F2",
          20: "#7D889E",
        },
      },
      fontSize: {
        "ft-14": ["15px", "22px"],
        "ft-21": ["21px", "30px"],
      },
    },
  },
  plugins: [],
};
