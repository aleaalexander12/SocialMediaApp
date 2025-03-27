/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Make sure it scans all your React files
    ],
    theme: {
      extend: {
        colors: {
          primary: "#7e22ce", // Soft purple for your brand (feel free to change)
          secondary: "#f3f4f6", // Light gray background
          accent: "#e879f9", // Accent pink
        },
        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui"],
        },
      },
    },
    plugins: [],
  };
  