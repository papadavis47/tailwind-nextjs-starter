module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  // The following is here because I am using the Comeau custom reset in globals
  // So I disable the standard tailwind reset

  corePlugins: {
    preFlight: false,
  },
}
