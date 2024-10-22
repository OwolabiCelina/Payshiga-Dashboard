/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ojah: ["ojah", "sans-serif"], // add your custom font name here
      },
      colors: {
        border: "#F5F5F5",
        subText: "#99999C",
        primary: "#5540EB",
        placeholder: "#B4B4B4",
      },
    },
  },
  plugins: [],
};
