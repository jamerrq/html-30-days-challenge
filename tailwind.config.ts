import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}'],
  theme: {
    fontFamily: {
      fredericka: ['Fredericka the Great', 'system-ui'],
      firaMono: ['Fira Mono', 'monospace'],
    },
    debugScreens: {
      style: {
        backgroundColor: 'white',
        color: 'black',
        position: 'absolute',
        borderRadius: '5px',
        fontFamily: 'monospace',
        fontSize: '10px',
        fontWeight: 'bold',
        margin: '5px',
        boxSizing: 'borderBox'
      },
      position: ['bottom', 'right']
    },
    screens: {
      xs: '320px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    'prettier-plugin-tailwindcss',
    animations
  ]
}
