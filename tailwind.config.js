/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./app/**/*.{js,vue,ts}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
      },
      borderRadius: {
        'theme': 'var(--border-radius)',
      },
      fontFamily: {
        'theme': ['var(--font-family)'],
      },
    },
  },
  plugins: [],
}

