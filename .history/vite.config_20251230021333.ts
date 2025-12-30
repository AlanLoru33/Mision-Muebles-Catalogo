import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Debe coincidir EXACTAMENTE con el nombre de tu repositorio actual en GitHub
  base: '/Mision-Muebles-Catalogo/', 
});
