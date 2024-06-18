import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/posting/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', 
      devOptions: {
        enabled: true
      }
    })
  ],
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/src/assets/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/src/assets/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
})
