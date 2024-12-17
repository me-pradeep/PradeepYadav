/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      screens: {
        s1:"1061px",
        s2:"900px",
        s3:"333px"
      },
    },
  },
  plugins: [],
};
