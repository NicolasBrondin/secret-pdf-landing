// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:3000';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/style.css'],
  
  tailwindcss: {
    cssPath: '~/assets/css/style.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  app: {
    head: {
      title: 'The developer-friendly HTML to PDF API - Secret PDF',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' },
      ],
      script: [
        { src: 'https://plausible.io/js/pa-lUPIywEyKlhMbb153OOrC.js', async: true },

          {
            children:
              `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()`,
          },
        ],
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
