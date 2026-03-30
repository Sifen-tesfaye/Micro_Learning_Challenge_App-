export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // ✅ covers all your React files
  ],
  theme: {
    extend: {
      colors: {
        "surface-dark": "#060e20",
        "surface-dim": "#142449",
        "brand-indigo": "#4f46e5",
      },
    },
  },
  plugins: [],
}
