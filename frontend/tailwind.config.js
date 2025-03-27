/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#7e22ce",
          secondary: "#f3f4f6",
          accent: "#e879f9",
        },
        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui"],
        },
      },
    },
    plugins: [],
  };
  