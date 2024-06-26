// Type imports
import type { ManifestOptions } from 'vite-plugin-pwa'

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: 'https://html-30-days-challenge.vercel.app/',
  description: '30 retos de HTML por ManzDev',
  type: 'website',
  image: {
    url: 'https://html-30-days-challenge.vercel.app/app2.png',
    alt: 'Site preview',
    width: 960,
    height: 720
  },
  siteName: '30 días de HTML con ManzDev',
  twitter: {
    card: 'summary_large_image'
  }
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: '30 días de HTML', // Change this to your website's name.
  short_name: 'html-30-days', // Change this to your website's short name.
  description: '30 retos de HTML por ManzDev',
  theme_color: '#2D3250', // Change this to your primary color.
  background_color: '#2D3250', // Change this to your background color.
  display: 'fullscreen',
  icons: [
    {
      src: '/favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    },
    {
      src: '/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ]
}
