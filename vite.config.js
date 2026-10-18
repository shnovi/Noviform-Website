import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    target: 'esnext',
    cssMinify: true,
    // Manual chunks apply to the client bundle only; the SSR build (used to pre-render
    // the sector pages, see scripts/prerender.mjs) externalises react and must not split it.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              motion: ['framer-motion']
            }
          }
        },
    chunkSizeWarningLimit: 600
  }
}))
