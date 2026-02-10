// https://nuxt.com/docs/api/configuration/nuxt-config
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
          // Load tracker from *your* domain (proxied by Nitro route below)
          { src: '/js/script.js', defer: true, 'data-domain': 'secretpdf.io', 'data-api': '/api/event' },

          // Initialize plausible with the custom endpoint (per Plausible proxy docs)
          {
            children:
              `window.plausible = window.plausible || function () {
    (plausible.q = plausible.q || []).push(arguments)
  },
  plausible.init = plausible.init || function (o) {
    plausible.o = o || {}
  };

  plausible.init({
    endpoint: "/api/event",
    outboundLinks: true,
    captureOnLocalhost: false,
    logging: true
  });`,
          },
        ],
    },
  },
    plugins: [
      '~/plugins/plausible.client.ts',
    ],
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
