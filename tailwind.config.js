/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6f5f0',   // page background (off-white)
        paper: '#fbfaf6',   // cards / surfaces
        ink: '#1b1a17',     // primary text (warm near-black)
        muted: '#6b675f',   // secondary text
        line: '#e4e1d8',    // hairline borders
        accent: '#b4532a',  // muted terracotta accent
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
