import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  // github pagesの変な仕様（ルートが１つ上）に対応する
  base: '/20230726_JSPoC/',
  // assetsInclude: ["**/*.bin", "**/*.json"],
  plugins: [vue()],
  // plugins: [vue({ reactivityTransform: true })],
  build: {
    // minify: 'terser',
    // terserOptions: { format: { comments: false } },
    outDir: 'docs', // ビルド出力先を変更
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash][extname]',
        chunkFileNames: '[name]-[hash].js', // JSをルートに出力
        entryFileNames: '[name]-[hash].js', // JSをルートに出力
      },
    },
  },
})