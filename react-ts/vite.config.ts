import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      '@components': path.resolve(__dirname, 'src/components'),
      '@muiDep': path.resolve(__dirname, 'src/muiDependencies'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@config': path.resolve(__dirname, 'src/config'),
    }
  }
})
