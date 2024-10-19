/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "var(--soft-blue)",
        primaryCyan: "var(--cyan)",
        neutralBgBlue: "var(--main-bg-blue)",
        neutralCardBlue: "var(--card-bg-blue)",
        neutralLineBlue: "var(--line-blue)",
      },
      fontSize: {
        paragraphSize: "var(--fs-p)",
      },
      fontWeight: {
        fw300: "var(--fw-300)",
        fw400: "var(--fw-400)",
        fw600: "var(--fw-600)",
      },
      fontFamily: {
        customFontFamily: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
