/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        teachingRobot: "url('src/assets/teaching-robot.jpg')",
        coderRobot: "url('src/assets/coder-robot.jpg')",
        humanoidRobot: "url('src/assets/robot3.jpg')",
      },
    },
  },
  plugins: [],
}

