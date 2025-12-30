import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // El nombre de tu repositorio es Mision-Mueble-EMA
  base: '/Mision-Mueble-EMA/',
});