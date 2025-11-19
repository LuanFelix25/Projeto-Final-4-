import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Use a relative base so built assets load correctly when served from
  // GitHub Pages (or any subpath). Relative base avoids absolute '/repo/'
  // paths that can 404 and produce a blank page.
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: { port: 24678 },
  },
})
