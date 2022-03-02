module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      galRegular: ['galano-regular', 'sans-serif'],
      galSemibold: ['galano-semibold', 'sans-serif'],
      galMedium: ['galano-medium', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        banner: "url('https://mydukaan.io/images/download-app-banner.jpg')",
      },
      colors: {
        'dukaan-blue': '#146EB4',
        'black-12': '#1A181E',
        'black-30': '#4D4D4D',
        'dukan-blue-10': '#F3F8FB',
      },
    },
  },
  plugins: [],
}
