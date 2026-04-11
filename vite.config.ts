import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on LAN so phones/tablets on the same Wi‑Fi can open the dev server
    host: true,
  },
})
