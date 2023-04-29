/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pizza-prev': "url('/icons/sliders/prev.svg')",
        'pizza-next': "url('/icons/sliders/next.svg')",
        "food-menu": "url('/images/food_menu_bg.jpg')",
        'hero-pattern': "url('/images/chef-bg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }),
      colors: {
        'orange-1': '#F7B035',
      },
      fontFamily: {
        'Delius': ['Delius Unicase', 'cursive'],
        'Rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
