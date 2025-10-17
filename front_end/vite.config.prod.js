import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/food_delivery/', // 👈 this must match your GitHub repo name
  build: {
    outDir: 'dist',
  },
})
