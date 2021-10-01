module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
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
