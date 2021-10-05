module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        paper2: 'var(--paper2)',
        ink: 'var(--ink)',
        divider: 'var(--divider)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
