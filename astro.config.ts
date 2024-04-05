import { defineConfig } from 'astro/config'

// Astro integration imports
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// PWA imports
import AstroPWA from '@vite-pwa/astro'

// Helper imports
import { manifest, seoConfig } from './utils/seoConfig'

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  integrations: [
    tailwind(),
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest,
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,woff2,ico}', '_astro/*.{webp,gif}'],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jxl|jpeg|svg|gif|webp|avif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60
              }
            }
          },
          {
            urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 30 * 24 * 60 * 60
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
