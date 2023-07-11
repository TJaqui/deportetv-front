/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leagues-pattern': "url('https://imageio.forbes.com/specials-images/imageserve/633b6c847b304297ba78b209/Paris-Saint-Germain-v-OGC-Nice---Ligue-1-Uber-Eats/0x0.jpg?format=jpg&crop=3059,2038,x130,y114,safe&height=2038&width=3059')"
    },
  },
  plugins: [],
  }
}