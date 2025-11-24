/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#1e1e2e',
        },
        secondary: {
          light: '#f5f5f5',
          dark: '#181825',
        },
        accent: {
          light: '#3b82f6',
          dark: '#89b4fa',
        },
        text: {
          light: '#1f2937',
          dark: '#cdd6f4',
        },
      },
    },
  },
  plugins: [],
}
