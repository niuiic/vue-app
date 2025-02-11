import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import removeComments from 'postcss-discard-comments'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    },
    postcss: {
      plugins: [autoprefixer(), removeComments({ removeAll: true })]
    }
  }
})
