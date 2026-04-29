import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // WARNING: 'test-file' MUST be the exact name of your GitHub Repository
  base: '/test-file/', 
  plugins: [tailwindcss()],
})