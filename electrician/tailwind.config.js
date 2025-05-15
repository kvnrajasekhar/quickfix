/** @type {import('tailwindcss').Config} */
const patterns = require('tailwindcss-patterns');
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Accent Color (Electric Blue - Example 1)
        primary: {
          50: '#e0f2fe',
          100: '#b3d8fc',
          200: '#81c0fa',
          300: '#4fa8f8',
          400: '#298ef6',
          500: '#007bff', 
          600: '#0069d9',
          700: '#0056b3',
          800: '#00408c',
          900: '#002b66',
        },
        secondary: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#20c997', 
          600: '#1aa37f',
          700: '#147961',
          800: '#0d4f43',
          900: '#072525',
        },
        // Text Colors
        text: {
          primary: '#343A40', 
          secondary: '#6c757d', 
        },
        // Background Colors (Extending Tailwind's defaults if needed)
        background: {
          default: '#ffffff', 
          secondary: '#f8f9fa', // Very light grey for containers/subtle separation
        },
        // Status Colors (for complaint tracking)
        status: {
          pending: '#ffc107',   // Yellow (Warning)
          'in-progress': '#007bff', // Blue (Primary) 
          resolved: '#28a745',  // Green (Success)
          error: '#dc3545',     // Red (Danger) 
        },
        
      },
    },
  },
  plugins: [],
}