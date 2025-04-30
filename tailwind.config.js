/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1a202c', // Exemplo de cor personalizada
          accent: '#f0a500', // Outra cor
        },
      },
    },
    plugins: [],
  };
  