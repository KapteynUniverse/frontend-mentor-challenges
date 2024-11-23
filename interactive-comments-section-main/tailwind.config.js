/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['"Rubik"', "sans-serif"],
      },
      colors: {
        "blue-dark": "hsl(212, 24%, 26%)",
        "blue-grayish": "hsl(211, 10%, 45%)",
        "gray-light": "hsl(223, 19%, 93%)",
        "gray-verylight": "hsl(228, 33%, 97%)",

        "blue-modarate": "hsl(238, 40%, 52%)",
        "blue-lightgrey": "hsl(239, 57%, 85%)",
        "red-soft": "hsl(358, 79%, 66%)",
        "red-pale": "hsl(357, 100%, 86%)",
      },
    },
  },
  plugins: [],
};
