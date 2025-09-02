import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // désactive les fichiers .css.map et autres sourcemaps en production
  }
})
