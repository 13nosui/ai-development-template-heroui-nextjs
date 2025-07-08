const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,svg}",
    "./src/styles/globals.css",
    "// 👈 このように globals.css を追加",
    "./node_modules/@heroui/theme/dist/components/(button|card|input|modal|navbar|ripple|spinner|form).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
