import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        // Cấu hình thay đổi màu đen, foreground thành màu text để đổi màu svg 
        replaceAttrValues: {
          '#000': 'currentColor',
          '#000000': 'currentColor',
          '#020618': 'currentColor' 
        },
      },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
