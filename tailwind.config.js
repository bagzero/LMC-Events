module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontSize: {
          // Map your Figma font sizes
          'h1': '60px',
          'h2': '32px',
          'h3': '24px',
          'body': '16px',
        },
        backgroundImage: {
          // Define your gradient
          'primary-gradient': 'linear-gradient(to right, #4F46E5, #9333EA)',
        },
        // Add any other design tokens from Figma
      },
    },
    plugins: [],
  }