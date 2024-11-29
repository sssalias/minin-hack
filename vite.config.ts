import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    }
  },
  build: {
    target: 'ES2022',
    rollupOptions: {
      external: [
        '/^axios:.*/'
      ]
    }
  }
})