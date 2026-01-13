/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6d28d9', // Example vibrant purple
          DEFAULT: '#4c1d95',
          dark: '#2e1065',
        },
        accent: '#10b981', // Emerald for success/growth
      },
    },
  },
  plugins: [],
}
