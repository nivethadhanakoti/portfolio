import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change the base to your GitHub repo name, e.g. '/nivetha-portfolio/'
// If using a custom domain or username.github.io, set base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/nivetha-portfolio/',
})
