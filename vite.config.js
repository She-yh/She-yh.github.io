import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(), 
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base:"./",
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
    }
  },
  server:{
    proxy:[{
      context: ['/End-to-End-Multimodal-Recognition', '/music', '/crawler', '/julia','stm32'],
      target: 'https://she-yh.github.io/',
      changeOrigin:true,
    }]
  }
})
