import { defineConfig } from 'weapp-vite/config'

export default defineConfig({
  weapp: {
    srcRoot: 'miniprogram',
  },
  build: {
    cssMinify: false,
    minify: false,
  },
})
