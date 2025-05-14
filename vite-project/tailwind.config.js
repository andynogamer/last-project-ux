export default {
  darkMode: 'class', // Fundamental para que funcione el cambio de tema por clase
  content: [
    "./index.html", // Asegúrate que la ruta a tu HTML principal sea correcta
    "./src/**/*.{js,ts,jsx,tsx}", // Esto le dice a Tailwind dónde buscar clases
  ],
  theme: {
    extend: {
      // Aquí puedes extender el tema de Tailwind si necesitas colores personalizados globales, etc.
      // Por ejemplo, tus colores UNAM podrían definirse aquí para un uso más fácil.
      colors: {
        'unam-azul': '#003366',
        'unam-oro': '#EBAF00',
      },
    },
  },
  plugins: [],
}
