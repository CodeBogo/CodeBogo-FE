import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 백엔드가 CORS 헤더를 내려주지 않아 로컬 개발은 프록시로 우회한다
      '/api': {
        target: 'https://codebogo.kang0131.shop',
        changeOrigin: true,
      },
    },
  },
})
