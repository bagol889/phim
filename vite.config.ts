import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Memberitahu Vite bahwa file ada di root, bukan di src
  build: {
    outDir: 'dist',
  },
});
